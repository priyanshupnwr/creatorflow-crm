function LeadCard({ lead, onDelete, onEdit }) {
  return (
    <div>
      <h3>{lead.name}</h3>
      <p>{lead.company}</p>
      <p>{lead.status}</p>

      <button onClick={() => onEdit(lead)}>
        Edit
      </button>

      <button onClick={() => onDelete(lead.id)}>
        Delete
      </button>
    </div>
  );
}

export default LeadCard;