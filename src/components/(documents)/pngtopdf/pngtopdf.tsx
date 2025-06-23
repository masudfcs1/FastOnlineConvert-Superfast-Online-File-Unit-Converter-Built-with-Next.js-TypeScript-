'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { jsPDF } from 'jspdf';

const PngToPdfConverter = () => {
  const [image, setImage] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type === 'image/png') {
      readImage(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'image/png') {
      readImage(file);
    }
  };

  const readImage = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setProgress(30);
      setTimeout(() => {
        setImage(reader.result as string);
        setProgress(100);
      }, 800);
    };
    reader.readAsDataURL(file);
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex flex-col items-center justify-center p-6">
      <motion.h1 
        className="text-3xl font-bold text-purple-700 mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🖼️ PNG to PDF Converter
      </motion.h1>

      <motion.div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="w-full max-w-md border-4 border-dashed border-purple-400 bg-white p-6 rounded-xl text-center cursor-pointer"
        whileHover={{ scale: 1.03 }}
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/png"
          onChange={handleFileChange}
          className="hidden"
        />
        <p className="text-purple-500 font-medium">
          Drag & Drop or Click to Upload PNG 🖱️
        </p>
        <p className="text-xs text-gray-400 mt-1">Only .png files supported</p>
      </motion.div>

      {progress > 0 && progress < 100 && (
        <div className="w-full max-w-md mt-4">
          <div className="h-3 w-full bg-purple-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-purple-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-center text-sm text-purple-600 mt-1">{progress}%</p>
        </div>
      )}

      {image && (
        <>
          <motion.img
            src={image}
            alt="Preview"
            className="mt-6 max-w-xs rounded-lg shadow-md"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          />

          <motion.button
            onClick={handleDownload}
            className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-purple-700 transition"
            whileTap={{ scale: 0.95 }}
          >
            📥 Download PDF
          </motion.button>
        </>
      )}
    </div>
  );
};

export default PngToPdfConverter;
