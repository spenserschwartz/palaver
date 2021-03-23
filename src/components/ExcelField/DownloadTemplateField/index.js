import PalaverDatabase from '../../../assets/PalaverDatabase.xlsx';

const DownloadTemplateField = () => {
  const download = () => {
    // Clicks the <a> which holds the download of the template
    document.getElementById('excelTemplateDownloadLink').click();
  };

  return (
    <div className="downloadTemplateField">
      <h4>Download Template Field</h4>

      <button className="button" onClick={() => download()}>
        Download Excel Template
      </button>
      <a
        id="excelTemplateDownloadLink"
        href={PalaverDatabase}
        download="PalaverDatabase"
        hidden
      >
        Anchor is hidden as download link for button
      </a>
    </div>
  );
};

export default DownloadTemplateField;
