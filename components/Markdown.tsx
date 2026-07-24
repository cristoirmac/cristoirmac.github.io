import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

/** Renders a markdown string with the site's editorial prose styles. */
export default function Markdown({ children, className = '' }: { children: string; className?: string }) {
  return (
    <div className={`prose-editorial ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => {
            const external = !!href && /^https?:\/\//.test(href);
            return (
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {children}
              </a>
            );
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
