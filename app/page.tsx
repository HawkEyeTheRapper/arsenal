import ReactMarkdown from 'react-markdown';

const markdownContent = `
# Relentless – Decrypting Track 4 of *Shadow Banned*

*(Insert your full markdown content here or import it from a file)*
`;

export default function Home() {
  return (
    <div className="prose container mx-auto px-4 py-10">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
}