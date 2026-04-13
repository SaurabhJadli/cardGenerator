import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

const DemoP = () => {
    const contentRef = useRef(null);

    const reactToPrintFn = useReactToPrint({
        contentRef: contentRef, // ✅ NEW API
        documentTitle: "Demo Print121",
        onAfterPrint: () => alert("Print success!"),
        onPrintError: (error) => alert("Print failed: " + error.message),
    });

    return (
        <div>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
                onClick={reactToPrintFn}>Print</button>

            <div ref={contentRef} className="p-4 border border-gray-300 size-a4">
                <h1 className="font-semibold bg-green-100">Content to print</h1>
                <p>This is the content that will be printed.</p>
            </div>
        </div>
    );
};

export default DemoP;