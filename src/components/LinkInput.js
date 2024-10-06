import React, { useState } from "react";
import styled from "styled-components";
import { Hourglass } from "react-loader-spinner";
import { colors } from "../assets/styles/constants";
import { FcIdea } from "react-icons/fc";

export function LinkInput() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!originalUrl) {
      setError("Por favor, insira uma URL válida");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://is.gd/create.php?format=json&url=${encodeURIComponent(
          originalUrl
        )}`
      );

      if (response.ok) {
        const data = await response.json();
        setShortenedUrl(data.shorturl);
        setError("");
      } else {
        setError("Erro ao encurtar a URL");
      }
    } catch (err) {
      console.error(err);
      setError("Erro ao se conectar com a API");
    } finally {
      setLoading(false);
    }
  };

  return (
    <InputArea>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Insira seu link"
          type="url"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          required
        />
        <button type="submit">Encurtar</button>
      </form>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {loading && (
        <LoaderWrapper>
          <Hourglass
            height="60"
            width="60"
            color={colors.lightBlue}
            ariaLabel="hourglass-loading"
          />
        </LoaderWrapper>
      )}

      {shortenedUrl && !loading && (
        <ResultArea>
          <p>
            <FcIdea /> URL curta:
          </p>
          <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
            {shortenedUrl}
          </a>

          <QRCodeWrapper>
            <p>Ou acesse pelo QR Code:</p>
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
                shortenedUrl
              )}`}
              alt="QR Code"
            />
          </QRCodeWrapper>
        </ResultArea>
      )}
    </InputArea>
  );
}

const InputArea = styled.div`
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    input,
    textarea {
      width: 40%;
      min-width: 300px;
      height: 50px;
      padding: 20px;
      border: 0px;
      border-radius: 10px;
      background-color: ${colors.lightBlue};
      margin-right: 18px;
      font-size: 16px;
    }

    button {
      width: 100px;
      height: 50px;
      padding: 20px;
      border-radius: 10px;
      background-color: ${colors.mediumBlue};
      font-weight: 700;
      color: white;
      font-size: 16px;
    }
  }
`;

const LoaderWrapper = styled.div`
  margin-top: 20px;
`;

const ResultArea = styled.div`
  width: 85%;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  border: 1px dashed #cccccc;

  p {
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 500;
  }

  a {
    color: ${colors.mediumBlue};
    font-weight: bold;
  }
`;

const QRCodeWrapper = styled.div`
  margin-top: 30px;

  img {
    margin-top: 10px;
  }

  p {
    font-size: 16px;
    font-weight: 500;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-top: 10px;
`;
