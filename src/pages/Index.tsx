import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const name = "АЛЕКСАНДР";
  const portfolioItems = [
    {
      id: 1,
      title: "Brand Animation",
      description: "Динамичная анимация логотипа для стартапа",
      image: "/img/5737bbac-765c-439f-b9ad-201c23d95224.jpg",
      category: "Branding",
    },
    {
      id: 2,
      title: "UI Motion",
      description: "Микро-анимации для мобильного приложения",
      image: "/img/edb1a573-a355-4f48-b938-07cbcecc2517.jpg",
      category: "UI/UX",
    },
    {
      id: 3,
      title: "Explainer Video",
      description: "Рекламный ролик с кинетической типографикой",
      image: "/img/6d2f75b6-e3f0-4843-b106-c88bfcef47b4.jpg",
      category: "Commercial",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Custom Cursor with Echo & Liquid Glass Effect */}
      <div
        className="fixed w-8 h-8 pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: cursorPosition.x - 16,
          top: cursorPosition.y - 16,
          transform: isHovering ? "scale(2)" : "scale(1)",
        }}
      >
        {/* Echo Trail */}
        <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-20 animate-ping" />
        <div
          className="absolute inset-0 rounded-full bg-cyan-400 opacity-30"
          style={{
            animation: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
            animationDelay: "0.2s",
          }}
        />

        {/* Liquid Glass Core */}
        <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400/80 to-cyan-600/80 backdrop-blur-sm border border-cyan-400/30 shadow-lg shadow-cyan-400/25" />
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/20 to-transparent" />

        {/* Inner Glow */}
        <div className="absolute inset-2 rounded-full bg-cyan-400/60 blur-[2px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 py-20 text-center">
        <div className="flex justify-center items-center space-x-1 mb-8">
          {name.split("").map((letter, index) => (
            <span
              key={index}
              className="text-6xl md:text-8xl font-bold transition-all duration-500 hover:text-cyan-400 hover:scale-110 hover:-rotate-12 hover:translate-y-2 cursor-pointer"
              style={{
                fontFamily: letter === "А" ? "serif" : "sans-serif",
                transitionDelay: `${index * 50}ms`,
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {letter}
            </span>
          ))}
        </div>

        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Создаю{" "}
            <span className="text-cyan-400 font-semibold">живые истории</span>{" "}
            через движение. Превращаю идеи в динамичные визуальные решения для
            брендов и продуктов.
          </p>
        </div>
      </header>

      {/* Asymmetric Design Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-900 to-transparent opacity-30" />

      {/* Portfolio Section */}
      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Избранные <span className="text-cyan-400">работы</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card
                key={item.id}
                className={`bg-gray-900 border-gray-800 hover:border-cyan-400 transition-all duration-500 overflow-hidden group cursor-pointer ${
                  index % 2 === 1 ? "mt-12" : ""
                }`}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Icon name="Play" size={48} className="text-cyan-400" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <Button
                    variant="outline"
                    className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                  >
                    Смотреть проект
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-32 bg-gradient-to-b from-cyan-400 to-transparent opacity-30" />
      <div className="absolute bottom-1/4 right-20 w-16 h-16 border-2 border-cyan-400 rotate-45 opacity-20" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-gray-800 rounded-full opacity-10" />
    </div>
  );
};

export default Index;
