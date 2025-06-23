'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { jsPDF } from 'jspdf';

const PngToPdfConverter = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'image/png') {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    if (!image) return;
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(image);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(image, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('converted.pdf');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100 text-center p-4">
      <motion.h1 
        className="text-2xl font-bold text-purple-600"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        🎉 PNG to PDF Converter
      </motion.h1>

      <input
        type="file"
        accept="image/png"
        onChange={handleFileChange}
        className="p-2 border border-dashed border-purple-400 rounded cursor-pointer"
      />

      {image && (
        <motion.img 
          src={image} 
          alt="Preview" 
          className="max-w-xs rounded shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        />
      )}

      {image && (
        <motion.button
          onClick={handleDownload}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
          whileTap={{ scale: 0.9 }}
        >
          📥 Download PDF
        </motion.button>
      )}
    </div>
  );
};

export default PngToPdfConverter;
