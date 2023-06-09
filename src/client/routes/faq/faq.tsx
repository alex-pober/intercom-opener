import "./faq.css"
import React, {useState} from 'react'

const FAQPage: React.FC = () => {

  const [expandedQuestion, setExpandedQuestion] = useState<string>('');

  const toggleAnswer = (question: string, event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (expandedQuestion === question) {
      setExpandedQuestion('');
    } else {
      setExpandedQuestion(question);
    }
  };

  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>

      <div className="faq">
        <div
          className={`question ${expandedQuestion === 'question1' ? 'expanded' : ''}`}
          onClick={(e) => toggleAnswer('question1', e)}
        >
          What is FastEntry?
        </div>
        {expandedQuestion === 'question1' && (
          <div className="answer">
            FastEntry is a service that provides a dedicated phone number for your front door intercom system. By connecting your intercom to the FastEntry number, you can ensure that the door is opened instantly whenever someone calls the FastEntry number.
          </div>
        )}
      </div>

      <div className="faq">
        <div
          className={`question ${expandedQuestion === 'question2' ? 'expanded' : ''}`}
          onClick={(e) => toggleAnswer('question2', e)}
        >
          How does FastEntry work?
        </div>
        {expandedQuestion === 'question2' && (
          <div className="answer">
            FastEntry works by assigning you a unique phone number that you connect to your front door intercom. When someone arrives at your door and presses the intercom, the call is automatically routed to the FastEntry number. FastEntry then opens the door remotely, allowing the visitor to enter.
          </div>
        )}
      </div>

      <div className="faq">
        <div
          className={`question ${expandedQuestion === 'question3' ? 'expanded' : ''}`}
          onClick={(e) => toggleAnswer('question3', e)}
        >
          Can I use FastEntry with any intercom system?
        </div>
        {expandedQuestion === 'question3' && (
          <div className="answer">
            FastEntry is compatible with any intercom that dials a specific number when your directory is dialed at the door. If you live in apartment or complex, you can ask your manager or HOA to change your existing number to FastEntry number.
          </div>
        )}
      </div>

      <div className="faq">
        <div
          className={`question ${expandedQuestion === 'question4' ? 'expanded' : ''}`}
          onClick={(e) => toggleAnswer('question4', e)}
        >
          Why is this monthly service?
        </div>
        {expandedQuestion === 'question4' && (
          <div className="answer">
            Dedicated phone numbers arent cheap. Every single number we provide, we have to pay monthly to keep it running and integrated with our servers. We try to keep the price as low as possible.
          </div>
        )}
      </div>
    </div>
  )
}

export default FAQPage;
