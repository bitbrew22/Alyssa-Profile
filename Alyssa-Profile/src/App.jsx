import './App.css'; // Keep your global styles import
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Instagram, Twitter } from 'lucide-react'; // Your icons
import profilePic from './assets/IMG_0617.JPG'; // Your profile picture

// --- IMPORT YOUR PROJECT IMAGES HERE ---
// TODO: Replace 'project1.jpg', 'project2.jpg', 'project3.jpg' with your actual filenames!
// Make sure they are in the src/assets folder or update the path.
import projectImage1 from './assets/projectcard3.jpg';
import projectImage2 from './assets/maxresdefault.jpg';
import projectImage3 from './assets/projectcard1.jpg';
// --- END OF IMAGE IMPORTS ---

function App() {

  return (
    <>
      {/* Main container */}
      <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">

        {/* Header/Navbar */}
        <header id="header" className="p-4 border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-10">
          <nav className="container mx-auto flex justify-between items-center">
            <span className="text-xl font-bold font-serif">Alyssa's Portfolio</span>
          </nav>
        </header>

        {/* Main Content Area */}
        <main className="flex-grow container mx-auto p-4 md:p-8">

          {/* --- Hero Section --- */}
          <section className="text-center py-16 md:py-24">
            <Avatar className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 text-lg border-2 border-primary/20 shadow-md">
              <AvatarImage src={profilePic} alt="Alyssa Breland" className="object-cover" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 font-serif">
              Alyssa Breland
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-serif italic">
              Quiet Observer | Creative Thinker | Rain Enthusiast | Mind on the Edge of Tomorrow | Vibe Coder
            </p>
            <p className="max-w-xl mx-auto text-foreground/90 mb-8">
             Welcome to my corner of the digital world. Here, curiosity leads, creativity follows, and nothing is ever just what it seems.
            </p>
            {/* Hero Buttons Div */}
            <div className="flex justify-center gap-4">
              <a href="#contact-footer">
                <Button size="lg">Contact Me</Button>
              </a>
              <a href="https://github.com/bitbrew22" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary">View GitHub</Button>
              </a>
            </div>
          </section>

          {/* --- About Me Section --- */}
          <section id="about" className="py-16 md:py-20 bg-card/50 dark:bg-card/70 rounded-lg shadow-md shadow-inner mb-16 backdrop-blur-sm px-6">
             <h2 className="text-3xl font-bold text-center mb-10 font-serif">About Me</h2>
             <p className="max-w-2xl mx-auto text-center text-card-foreground/90 leading-relaxed">
              I’m Alyssa Breland—a quiet storm of curiosity and creativity. I spend my time exploring the human heart (literally and figuratively), arranging bells in motion, and asking the kind of questions that don’t always have answers.
              <br/><br/>
              My passions live in contrast: I love anatomy and ethereal music, dark forests and elegant logic, stillness and sound. I'm part of a handbell ensemble, where I specialize in dancing between the high-octave bells—timing, intuition, and a whole lot of colorful highlights. I’m drawn to moody weather, forgotten towns, and anything that feels like a story waiting to be told. I’m not a fan of loud distractions, forced cheerfulness, or the idea that everything needs to be understood right away.
              <br/><br/>
              I don’t speak the loudest, but I speak with intention. And if you’ve made it this far, maybe you do too.
             </p>
          </section>

          {/* --- Projects Section --- */}
          <section id="projects" className="py-16 md:py-20">
            <h2 className="text-3xl font-bold text-center mb-12 font-serif">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Project Card 1 */}
              <Card className="flex flex-col shadow-sm shadow-inner hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="font-serif">Personal Portfolio Website</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                   {/* --- Replaced div with img --- */}
                   <img
                     src={projectImage1} // Use imported image variable
                     alt="Personal Portfolio Website project preview" // Descriptive alt text
                     className="w-full aspect-video object-cover rounded mb-4 border border-border/20" // Styling: full width, 16:9 ratio, cover, rounded, margin, border
                   />
                  <CardDescription>My first React project! Built with Vite, Tailwind CSS v4, and shadcn/ui to learn modern web development techniques and showcase my journey.</CardDescription>
                </CardContent>
                 {/* --- REPLACEMENT CODE for First CardFooter --- */}
     <CardFooter>
        <a href="https://github.com/bitbrew22" target="_blank" rel="noopener noreferrer"> {/* Your Repo URL */}
           <Button variant="outline" size="sm">View Repo</Button> {/* Changed text */}
        </a>
     </CardFooter>
              </Card>

              {/* Project Card 2 */}
              <Card className="flex flex-col shadow-sm shadow-inner hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="font-serif">Doughnut Project Revival?</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                   {/* --- Replaced div with img --- */}
                   <img
                     src={projectImage2} // Use imported image variable
                     alt="Doughnut Project preview" // Descriptive alt text
                     className="w-full aspect-video object-cover rounded mb-4 border border-border/20" // Styling
                   />
                  <CardDescription>A Blender journey that began with a doughnut... and might return as something even sweeter. (Currently in philosophical limbo.)</CardDescription>
                </CardContent>
                {/* --- MODIFIED CODE for Second CardFooter --- */}
     <CardFooter>
        <Button variant="outline" size="sm" disabled>View Details</Button> {/* Added disabled */}
     </CardFooter>
              </Card>

              {/* Project Card 3 */}
              <Card className="flex flex-col shadow-sm shadow-inner hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="font-serif">More Projects Coming Soon!</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                   {/* --- Replaced div with img --- */}
                   <img
                     src={projectImage3} // Use imported image variable
                     alt="Placeholder for future projects" // Descriptive alt text
                     className="w-full aspect-video object-cover rounded mb-4 border border-border/20" // Styling
                   />
                  <CardDescription>Excited to continue learning and building. Check back later to see new projects I've created!</CardDescription>
                </CardContent>
                {/* --- MODIFIED CODE for Second CardFooter --- */}
     <CardFooter>
        <Button variant="outline" size="sm" disabled>View Details</Button> {/* Added disabled */}
     </CardFooter>
              </Card>

            </div> {/* End of grid */}
          </section>
          {/* --- End of Projects Section --- */}

        </main>

        {/* Footer */}
        <footer id="contact-footer" className="p-6 border-t border-border mt-16 bg-background/50">
          <div className="container mx-auto text-center text-muted-foreground">
            {/* Social Icon Links */}
            <div className="flex justify-center gap-6 mb-4">
              <a href="https://github.com/bitbrew22" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/acbreland/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://x.com/brelanda13" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            {/* Copyright */}
            <p className="text-sm">&copy; 2025 Alyssa Breland. All rights reserved.</p>
          </div>
        </footer>

      </div> {/* End of main container */}
    </>
  );
}

export default App; // Make sure this is at the end!