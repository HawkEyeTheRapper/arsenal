import { NextPageContext } from 'next';
import React from 'react';

type ErrorProps = {
  statusCode?: number;
};

function Error({ statusCode }: ErrorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white font-mono px-4">
      <div className="text-center border border-gray-700 bg-zinc-900 rounded-lg p-8 shadow-lg max-w-xl">
        <h1 className="text-5xl font-bold text-red-500 mb-4">☠️ ERROR</h1>
        <p className="text-lg text-gray-300 mb-4">
          {statusCode
            ? `A ${statusCode} error occurred on the server.`
            : 'An unexpected client-side error occurred.'}
        </p>
        <p className="text-sm text-gray-500">
          Please check your network or return to the <a href="/" className="text-blue-400 hover:underline">home page</a>.
        </p>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode || err?.statusCode || 404;
  return { statusCode };
};

export default Error;
