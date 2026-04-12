import MinimalImageTemplate from './templates/MinimalImageTemplate'

const CardPreview = ({ data, accentColor, classes = '' }) => {
  return (
    <div className='w-full bg-gray-100 flex text-center items-center justify-center rounded'>
      <div id='idCard-preview' className={'border border-gray-200 print:shadow-none print:border-none rounded' + classes}
        style={{
          width: "3in",
          height: "5in"
        }}>
        <MinimalImageTemplate data={data} accentColor={accentColor} />
      </div>

      <style>
        {`
        @page {
          size: 2in 3.5in;
          margin: 0;
        }

        @media print {
          body * {
            visibility: hidden;
            print-color-adjust: exact;
          }

          #idCard-preview,
          #idCard-preview * {
            visibility: visible;
          }

          #idCard-preview {
            position: absolute;
            left: 0;
            top: 0;
            width: 2in;
            height: 3.5in;
            box-shadow: none !important;
            border: none !important;
          }
        }
        `}
      </style>
    </div>
  );
};

export default CardPreview