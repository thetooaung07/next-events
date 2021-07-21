import { useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback/index";

function FeedBackPage(props) {
  const [feedbackData, setFeedbackData] = useState();

  function loadFeedbackHandler(id) {
    fetch(`/api/feedback/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      });
  }

  return (
    <>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.feedback}
            <button
              //  onClick={() => loadFeedbackHandler(id)} use this or
              onClick={loadFeedbackHandler.bind(null, item.id)}
              //  .bind() method is to pre-configure things like parameters and not immediately execute function
            >
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  // you should not use fetch api or http request to your own server in here (getStaticProps)
  // just import them directly and don't added up unnecessary http request

  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedBackPage;
