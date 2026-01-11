export default function GuestUploadForm() {
  async function handleUpload() {}
  return (
    <>
      <form>
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
        <label htmlFor="guest-upload">
          {" "}
          Photo Upload:
          <input id="guest-upload" type="file" name="upload" required />
        </label>
        <button type="submit"> Upload Photo</button>
      </form>
    </>
  );
}
