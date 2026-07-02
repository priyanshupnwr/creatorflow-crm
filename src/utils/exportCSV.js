export function exportLeadsToCSV(leads) {
  const headers = ["Name", "Company", "Status", "Created At"];

  const rows = leads.map((lead) => [
    lead.name,
    lead.company,
    lead.status,
    new Date(lead.createdAt).toLocaleDateString(),
  ]);

  const csvContent = [
    headers.join(","),
    ...rows.map((row) => row.join(",")),
  ].join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "creatorflow_leads.csv";

  link.click();

  URL.revokeObjectURL(url);
}