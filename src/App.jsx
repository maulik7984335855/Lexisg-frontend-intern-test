import React, { useState } from "react";
import './App.css'
const App = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    
    setTimeout(() => {
      const response = {
        answer:
          "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54-55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased's annual income should be added as future prospects.",
        citations: [
          {
            text:
              "as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.",
            source: "Dani_Devi_v_Pritam_Singh.pdf",
            link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
          },
        ],
      };
      setResponse(response);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Lexi Legal Assistant</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-xl">
        <textarea
          className="w-full p-4 rounded border border-gray-300"
          placeholder="Ask a legal question..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          rows={4}
          required
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>

      {response && (
        <div className="mt-6 w-full max-w-xl">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-800 whitespace-pre-line">{response.answer}</p>
            <div className="mt-4">
              <h4 className="font-semibold">Citation:</h4>
              <p className="text-sm text-gray-600">{response.citations[0].text}</p>
              <a
                href={response.citations[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                View Source ({response.citations[0].source})
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
