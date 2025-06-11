import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    { name: "Machine Learning", level: 80, category: "Technologies" },
    { name: "Deep Learning", level: 75, category: "Technologies" },
    { name: "Natural Language Processing", level: 60, category: "Technologies" },
    { name: "LLM", level: 45, category: "Technologies" },
    { name: "Generative AI", level: 45, category: "Technologies" },
    { name: "MySQL", level: 80, category: "Technologies" },
    { name: "MongoDB", level: 60, category: "Technologies" },
    { name: "Git", level: 85, category: "Developer Tools" },
    { name: "GitHub", level: 85, category: "Developer Tools" },
    { name: "Docker", level: 70, category: "Developer Tools" },
    { name: "Kubernetes", level: 60, category: "Developer Tools" },
    { name: "CI/CD", level: 55, category: "Developer Tools" },
    { name: "Linux", level: 50, category: "Developer Tools" },
    { name: "AWS", level: 40, category: "Developer Tools" },
    { name: "MERN stack", level: 40, category: "Development" },
];

const categories= ["all", "Technologies", "Developer Tools", "Development"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filterSkills = skills.filter
        ((skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return(
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) =>(
                        <button 
                            key={key} 
                            onClick={() => setActiveCategory(category)}
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filterSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full h-2 rounded-full bg-gray-700 relative overflow-hidden">

                            <div className="w-full h-2 rounded-full bg-gray-300 relative overflow-hidden">
                            <div
                                className="absolute top-0 left-0 h-full bg-primary rounded-full animate-[grow_1.5s_ease-out]"
                                style={{ width: skill.level + "%" }}
                            />
                            </div>
                            </div>


                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
