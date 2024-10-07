import React, { useState } from "react";
import styled from "styled-components";
import { Hourglass } from "react-loader-spinner";
import { colors } from "../assets/styles/constants";
import { FcIdea } from "react-icons/fc";
import { SlActionRedo } from "react-icons/sl";

export function LinkInput() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!originalUrl) {
      setError("Por favor, insira uma URL válida");
      return;
    }

    setLoading(true);
    setCopied(false);

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

  const handleCopy = () => {
    navigator.clipboard.writeText(shortenedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setOriginalUrl("");
    setShortenedUrl("");
    setError("");
    setCopied(false);
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
        <Hourglass
          height="60"
          width="60"
          color={colors.lightBlue}
          ariaLabel="hourglass-loading"
        />
      )}

      {shortenedUrl && !loading && (
        <>
          <ResultArea>
            <p>
              <FcIdea /> URL curta:
            </p>
            <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
              {shortenedUrl}
            </a>
            <CopyButton onClick={handleCopy}>
              {copied ? "Copiado!" : "Copiar link"}
            </CopyButton>

            <QRCodeWrapper>
              <p>Ou acesse o QR Code:</p>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
                  shortenedUrl
                )}`}
                alt="QR Code"
              />
            </QRCodeWrapper>
          </ResultArea>

          <NewUrlButton onClick={handleReset}>
            <SlActionRedo />
            <p>Gerar nova URL</p>
          </NewUrlButton>
        </>
      )}
    </InputArea>
  );
}

const InputArea = styled.div`
  margin: 0 auto;
  margin-bottom: 50px;
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
      width: 300px;
      height: 50px;
      padding: 20px;
      border: 0px;
      border-radius: 10px;
      background-color: ${colors.lightBlue};
      margin-right: 18px;
      font-size: 16px;

      @media (max-width: 510px) {
        width: 230px;
        margin-right: 12px;
      }
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

const ResultArea = styled.div`
  width: 415px;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  border: 1px dashed #cccccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 500;
  }

  a {
    color: ${colors.mediumBlue};
    font-weight: bold;
  }

  @media (max-width: 600px) {
    width: 90%;
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

const CopyButton = styled.button`
  margin-top: 20px;
  padding: 5px 10px;
  border-radius: 20px;
  border: 1px solid ${colors.darkBlue};
  color: ${colors.darkBlue};
  font-size: 15px;
`;

const NewUrlButton = styled.button`
  margin-top: 30px;
  padding: 10px 15px;
  border-radius: 20px;
  background-color: ${colors.darkBlue};
  color: white;
  font-size: 15px;

  p {
    margin-left: 10px;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-top: 15px;
`;
