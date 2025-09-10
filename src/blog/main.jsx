import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BlogPost from './BlogPost.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BlogPost />
    </StrictMode>,
)
