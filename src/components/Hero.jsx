import React from "react";
import { logo } from "../assets";

const Hero = () => {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <img src={logo} alt="sumlogo" className="w-40 object-contain" />
                <button
                    type="button"
                    onClick={() => window.open("https://github.com/sanskrutihere/SummaRise", "_blank")}
                    className="black_btn"
                >
                    GitHub
                </button>
            </nav>
            <h1 className="head_text">
                Unlock Insights:<br />
                Summarize Articles with <br className="max-md:hidden" />
                <span className="orange_gradient">OpenAI GPT-4</span>
            </h1>
            <h2 className="desc">
                Condense Articles for Quick Insights with <strong>SummaRise</strong>,
                <br />
                an AI-Powered Open Source Article Summarizer ✨
                <br />
                Say Goodbye to lengthy articles and Hello to Concise, easy-to-read summaries.{" "}
                <strong>Try it now!</strong>
            </h2>
        </header>
    );
};

export default Hero;
