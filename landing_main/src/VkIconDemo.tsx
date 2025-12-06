import React from 'react';
import ReactDOM from 'react-dom/client';
import { SlSocialVkontakte } from "react-icons/sl"; // Using Simple Line Icons for a cleaner look, or FaVk? 
// User asked for Solution 3 which was "react-icons/fa" in the prompt example: "import { FaVk } from 'react-icons/fa';"
// BUT, the user also mentioned Solution 1 was "Create SVG VK Icon" to match Lucide.
// Let's implement what I promised: Solution 3 (react-icons).
// I will check which icon in react-icons looks closest to the desired "native" look (thin lines).
// FaVk is usually solid.
// SlSocialVkontakte is outlined but might not be perfect.
// TiSocialVk?
// Let's try FaVk first as referenced in the "Solution 3" text from the prompt, 
// BUT wait, the prompt said: "Solution 3: Use ready SVG library... import { FaVk } from 'react-icons/fa'".
// The user chose "Show me how Solution 3 looks".
// However, standard FaVk is filled. Lucide icons are strokes. 
// If I use FaVk it will look like the filled version. 
// Maybe I should provide a few options from react-icons to be helpful?
// Let's stick to the requested "Solution 3" which implies `react-icons`.
// I'll import a few variants to compare.

import { FaVk } from 'react-icons/fa';
import { SlSocialVkontakte } from "react-icons/sl";
import { TiSocialVk } from "react-icons/ti";
import { Send, Youtube, Instagram } from 'lucide-react';

import './index.css'; // Reuse existing styles

const VkIconDemo = () => {
    return (
        <div className="min-h-screen bg-stone-50 p-8 font-sans text-stone-800 flex flex-col items-center">
            <h1 className="text-3xl font-serif font-bold mb-8 text-stone-900">VK Icon Comparison</h1>

            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Current PNG Solution */}
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100 flex flex-col items-center gap-6">
                    <h2 className="text-xl font-bold text-stone-600 uppercase tracking-widest">Current (PNG)</h2>
                    <div className="p-4 bg-stone-50 rounded-xl">
                        {/* Simulate the current header link */}
                        <a href="#" className="flex items-center justify-center w-12 h-12 bg-nature-50 text-nature-600 rounded-xl hover:bg-nature-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-sm">
                            <img src="/vk-logo.png" alt="VK" className="w-6 h-6 object-contain" />
                        </a>
                    </div>
                    <p className="text-center text-stone-500 text-sm">
                        Image based.<br />
                        Doesn't change color on hover.<br />
                        Pixelated on high-res screens.
                    </p>
                </div>

                {/* New React Icons Solution (FaVk) */}
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100 flex flex-col items-center gap-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-nature-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">Solution 3</div>
                    <h2 className="text-xl font-bold text-nature-700 uppercase tracking-widest">React Icons (FaVk)</h2>
                    <div className="p-4 bg-stone-50 rounded-xl">
                        <a href="#" className="flex items-center justify-center w-12 h-12 bg-nature-50 text-nature-600 rounded-xl hover:bg-nature-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-sm group">
                            <FaVk className="w-6 h-6" />
                        </a>
                    </div>
                    <p className="text-center text-stone-500 text-sm">
                        SVG Component.<br />
                        <b>Solid fill style.</b><br />
                        Changes color on hover.<br />
                        Scales perfectly.
                    </p>
                </div>

                {/* Alternative React Icons (SlSocialVkontakte - Outline) */}
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100 flex flex-col items-center gap-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-nature-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">Alternative (Outline)</div>
                    <h2 className="text-xl font-bold text-nature-700 uppercase tracking-widest">React Icons (SlSocialVkontakte)</h2>
                    <div className="p-4 bg-stone-50 rounded-xl">
                        <a href="#" className="flex items-center justify-center w-12 h-12 bg-nature-50 text-nature-600 rounded-xl hover:bg-nature-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-sm group">
                            <SlSocialVkontakte className="w-6 h-6" />
                        </a>
                    </div>
                    <p className="text-center text-stone-500 text-sm">
                        SVG Component.<br />
                        <b>Outline style (closer to Lucide?).</b><br />
                        Changes color on hover.<br />
                        Scales perfectly.
                    </p>
                </div>

                {/* Existing Lucide Icons for Context */}
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100 flex flex-col items-center gap-6">
                    <h2 className="text-xl font-bold text-stone-400 uppercase tracking-widest">Context (Lucide)</h2>
                    <div className="flex gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-nature-50 text-nature-600 rounded-xl">
                            <Send className="w-6 h-6" />
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 bg-nature-50 text-nature-600 rounded-xl">
                            <Youtube className="w-6 h-6" />
                        </div>
                    </div>
                    <p className="text-center text-stone-500 text-sm">
                        Current Line Icons<br />
                        (Stroke width: 2px)
                    </p>
                </div>

            </div>

            <div className="mt-12 max-w-2xl text-center text-stone-500">
                <p className="mb-4">
                    <b>Note:</b> The `FaVk` icon from `react-icons/fa` is a <b>filled</b> icon, whereas your other icons (Lucide) are <b>stroked</b> (outline) icons.
                </p>
                <p>
                    To match the style perfectly, you might prefer a custom SVG component (Solution 1) or finding a specific outline icon package.
                </p>
            </div>
        </div>
    );
};

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <VkIconDemo />
        </React.StrictMode>
    );
}
