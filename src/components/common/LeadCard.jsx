function LeadCard({ lead }) {
  return (
    <div>
      <h3>{lead.name}</h3>
      <p>{lead.company}</p>
      <p>{lead.status}</p>
    </div>
  );
}

export default LeadCard;