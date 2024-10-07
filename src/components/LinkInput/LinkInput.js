import React, { useState } from "react";
import { Hourglass } from "react-loader-spinner";
import { FcIdea } from "react-icons/fc";
import { SlActionRedo } from "react-icons/sl";
import { colors } from "../../assets/styles/constants";
import {
  InputArea,
  FormUrl,
  ResultArea,
  QRCodeWrapper,
  CopyButton,
  NewUrlButton,
  ErrorMessage,
} from "./style";

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
      <FormUrl onSubmit={handleSubmit}>
        <input
          placeholder="Insira seu link"
          type="url"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          required
        />
        <button type="submit">Encurtar</button>
      </FormUrl>

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
