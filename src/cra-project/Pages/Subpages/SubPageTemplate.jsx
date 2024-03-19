import { StlViewer } from "react-stl-viewer";
import './SubPageTemplate.css';

export default function SubPage({ title, description, cards }) {
  return (
    <div className="subpage page">
      <div className="subpage-title">
        <div className="title">{title}</div>
      </div>
      <div className="subpage-description">
        <div className="subtext-2">{description}</div>
      </div>
      <div className="subpage-cards">
        {cards.map((card, i) => <SubPageCard index={i} key={i} card={card} />)}
      </div>
    </div>
  )
}


function SubPageCard({ index, card }) {
  let content;
  if (card.type === 'model') {
    content = (
      <StlViewer
        className="subpage-card-content-inner"
        orbitControls
        shadows
        url={card.content}
      />
    );
  }
  return (
    <div className="subpage-card">
      <div className="subpage-card-content">
        {content}
      </div>
      <div className="subpage-card-text">
        <div className="subpage-card-title">{card.title}</div>
        <div className="subpage-card-description">{card.description}</div>
      </div>
    </div>
  );
}
