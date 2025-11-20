"use client";
export default function Page() {
  const handleSubmit = async () => {
    const response = await fetch("api/feed", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "Code Evolution", type: "API Demo" }),
    });
    const data = await response.json();

    alert(JSON.stringify(data.data.name));
  };

  return (
    <div>
      <button
        onClick={handleSubmit}
        style={{
          marginBottom: "20px",
          padding: "10px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Submit
      </button>
      <h2>API Demo Page</h2>
      <p>This is the API Demo page content.</p>
    </div>
  );
}
