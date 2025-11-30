import { useQuery } from "@tanstack/react-query";
import DictWordInfo from "./DictWordInfo";
import UrbanDictWord from "./UrbanDictWord";

const WordFetch = ({ wordInput, setWordInput, variant }) => {
  const getAPIUrl = (variant) => {
    switch (variant) {
      case "normal":
        return `https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`;
      case "urban":
        return `https://unofficialurbandictionaryapi.com/api/search?term=${wordInput}&strict=true`;
      default:
        return "";
    }
  };

  const onSearch = (word) => {
    window.scrollTo(0, 0);
    setWordInput(word);
  };

  const {
    isPending,
    error,
    data: wordInfo,
  } = useQuery({
    queryKey: ["wordData", wordInput],
    queryFn: async () => {
      if (wordInput === "") {
        if (variant === "normal") {
          throw new Error(
            "How can you even think of any response without any input?"
          );
        } else return "";
      }

      const response = await fetch(getAPIUrl(variant));
      if (response.ok) {
        return response.json();
      } else {
        if (response.status === 404) throw new Error("Sorry, word not found.");
        throw new Error("Fetching failed");
      }
    },
  });

  return (
    <div className="word-body">
      {isPending && <div className="word-info">Loading...</div>}

      {error && <div className="word-info">{error.message}</div>}

      {variant === "normal" && (
        <DictWordInfo wordInfo={wordInfo} onSearch={onSearch} />
      )}

      {variant === "urban" &&
        (wordInput === "" ? (
          <div className="word-info">
            Welcome to Urban Dictionary! 😏 Served fresh from
            urbandictionary.com, this has solutions for almost all urban terms
            used today.
          </div>
        ) : (
          <UrbanDictWord wordInfo={wordInfo} />
        ))}
    </div>
  );
};

export default WordFetch;
