export default function GuestUploadForm({ eventId }) {
  async function handleUpload(uploadEvent) {
    uploadEvent.preventDefault();
    if (!eventId) {
      console.error("Missing eventId");
      return;
    }
    const formData = new FormData(uploadEvent.target);
    try {
      const response = await fetch(`/api/events/${eventId}/upload`, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Photo upload failed");
      }
      console.log("Upload request sent successfully");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <form onSubmit={handleUpload}>
        <label htmlFor="guest-images">
          {" "}
          Photo Upload:
          <input
            id="guest-images"
            type="file"
            name="images"
            accept="image/*"
            multiple
            required
          />
        </label>
        <label htmlFor="guest-name">
          Name:
          <input
            id="guest-name"
            type="text"
            name="name"
            maxLength="30"
            placeholder="Enter your name"
          />
        </label>
        <label htmlFor="guest-caption">
          {" "}
          Photo Caption:
          <input
            id="guest-caption"
            type="text"
            name="caption"
            maxLength="30"
            placeholder="Enter photo caption"
          />
        </label>
        <button type="submit"> Upload Photo</button>
      </form>
    </>
  );
}
