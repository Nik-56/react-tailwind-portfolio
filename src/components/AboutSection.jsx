import { Code, User, Briefcase } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About<span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Software developer</h3>

                        <p className="text-muted-foreground">
                            I am a Backend Developer currently learning Node.js and focused on building scalable, efficient systems. With a strong grasp of C, C++, JavaScript, and Python, I enjoy turning ideas into functional and reliable backend logic.
                        </p>

                        <p className="text-muted-foreground">
                            I'm also exploring Machine Learning and AI to solve real-world problems through intelligent solutions. I thrive on writing clean, maintainable code and continuously improving my skills through hands-on project work.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get in Touch
                            </a>

                            <a href="NikhilResume.pdf" download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download Resume
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Backend Development
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Learning to build scalable and efficient server-side systems using Node.js, MongoDB, and JavaScript.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        AI & Machine Learning
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Exploring intelligent systems and applying ML/AI techniques to solve real-world challenges.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Project Experience
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Working on real-world projects, applying backend and ML skills to build functional and meaningful applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </section>
    );
};