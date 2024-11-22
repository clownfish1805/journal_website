import React from "react";
import "./Authorguide.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Authorguide = () => {
  return (
    <>
      <Header />
      <div className="full-screen-bg">
        <div className="text-class" style={{ fontSize: "3rem" }}>
          Author
          <span style={{ color: "blue" }}> Guidelines</span>
        </div>
      </div>

      <div className="author-content">
        <div>
          Thank you for choosing to submit your paper to The International
          Journal of English for Academic Excellence (IJEAE). Following these
          guidelines will ensure a smooth peer review, production, and
          publication process. Please read and follow them closely to ensure
          your paper aligns with the journal's standards.
        </div>

        <div>
          <h2>Submission of Manuscript</h2>
          <p>
            Submit your manuscript as an MS Word file via email. The
            International Journal of English for Academic Excellence (IJEAE)
            <br></br>
            <span style={{ fontWeight: "bold" }}>Email: </span>
            <a href="mailto:attraitdovinfedrick333@gmail.com">
              attraitdovinfedrick333@gmail.com
            </a>
          </p>

          <p>
            Submissions will be initially assessed by an editor for relevance
            and alignment with the journal's scope. Manuscripts that meet the
            criteria will proceed to a double-blind peer review. Incomplete
            submissions will be deleted without notice.
          </p>

          <p>Before submission, ensure you:</p>

          <ul>
            <li>
              Obtain permissions for all included materials (e.g., images,
              datasets).
            </li>
            <li>
              Confirm that all listed authors have consented to authorship.
            </li>
            <li>
              Acquire ethical clearance where applicable, according to the
              study's country regulations.
            </li>
          </ul>

          <p>
            Editors may desk reject manuscripts that do not meet quality
            standards. For the best chance of acceptance, ensure a
            well-structured study design and clear argumentation. Titles should
            be concise, and abstracts must be self-contained summaries of the
            work. Use the checklist below to finalize your submission.
          </p>
        </div>

        <div>
          <h2>Preparing Your Paper</h2>
          <p>Manuscripts should include the following sections in order:</p>
          <ul>
            <li>Title Page</li>
            <li>Abstract</li>
            <li>Keywords</li>
            <li>
              Main Text:
              <ul>
                <li>Introduction</li>
                <li>Materials and Methods</li>
                <li>Results</li>
                <li>Discussion</li>
              </ul>
            </li>
            <li>Acknowledgments</li>
            <li>Declaration of Interest Statement</li>
            <li>References</li>
            <li>Appendices (if applicable)</li>
            <li>
              Tables and Figures:
              <ul>
                <li>
                  Tables with captions on individual pages; figure captions
                  listed separately
                </li>
              </ul>
            </li>
            <li>
              Word Count: Manuscripts should be between 1,000 and 8,000 words,
              including tables, references, captions, footnotes, and endnotes.
            </li>
          </ul>
        </div>

        <div>
          <h2>Research paper structure</h2>
          <ol>
            <li>
              Front Page: Title of the Manuscript and Author/s details
              (*Corresponding author)
            </li>
            <li>
              Abstract: Provide a concise abstract (250–300 words) summarizing
              the manuscript’s key themes.
            </li>
            <li>
              Introduction: Clearly state the research question, its
              significance, and the knowledge gap the study addresses.
            </li>
            <li>
              Literature Review: Offer a critical review of existing literature,
              highlighting the relevance and importance of the research
              question.
            </li>
            <li>
              Methodology: Detail the research design, data collection, and
              analysis techniques.
            </li>
            <li>
              Results: Present findings with supporting tables, figures, or
              graphs as needed.
            </li>
            <li>
              Discussion: Interpret the results, relating them to the research
              question and relevant literature.
            </li>
            <li>
              Conclusion: Summarize key findings, implications, and
              recommendations for further research or policy.
            </li>
            <li>References: Use APA format.</li>
          </ol>
        </div>

        <div>
          <h2>
            Following these steps will increase the likelihood of acceptance.
          </h2>
          <div className="boxes-author">
            <div className="box-author">
              <h3>Submission Process</h3>
              <ul>
                <li>
                  Submit manuscripts via the editor’s email, including all
                  required details (author names, affiliations, contact info).
                </li>
                <li>
                  Authors will receive a confirmation email upon submission.
                </li>
                <li>
                  The manuscript will undergo peer review, with regular
                  communication on its status.
                </li>
              </ul>
            </div>
            <div className="box-author">
              <h3>Peer Review</h3>
              <ul>
                <li>
                  IJEAE uses a double-blind peer review process to ensure
                  impartiality.
                </li>
                <li>
                  Reviewers assess manuscripts based on originality, relevance,
                  rigor, clarity, and contribution to the field.
                </li>
                <li>
                  Authors will receive reviewer feedback, with possible revision
                  requests.
                </li>
              </ul>
            </div>
            <div className="box-author">
              <h3>Copyright and Open Access</h3>
              <ul>
                <li>
                  Authors retain copyright to their work but grant IJEAE first
                  publication rights.
                </li>
                <li>
                  Articles are published under a Creative Commons license,
                  enabling broad dissemination and reuse with proper
                  attribution.
                </li>
              </ul>
            </div>
            <div className="box-author">
              <h3>Ethical Considerations</h3>
              <ul>
                <li>
                  Adherence to ethical research standards is required, including
                  avoiding plagiarism, data falsification, and fabrication.
                </li>
                <li>Disclose any conflicts of interest upon submission.</li>
                <li>
                  Ensure compliance with ethical regulations, including
                  permissions and consent for human subject research where
                  applicable.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Authorguide;
