import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Code, Database, Cpu, Filter, Search, Star, BookOpen, Zap } from "lucide-react";

// Search Bar Component
function SearchBar({ value, onChange, onFocus, onBlur, isFocused }) {
  return (
    <div className={`relative flex-1 transition-all ${isFocused ? 'ring-2 ring-blue-500 ring-offset-2' : ''} rounded-lg`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className={`h-5 w-5 ${isFocused ? 'text-blue-500' : 'text-gray-400'}`} />
      </div>
      <input
        type="text"
        className="block w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm shadow-sm transition-all placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        placeholder="Search courses..."
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
}

// Category Filter Button Component
function CategoryFilter({ category, isActive, onClick }) {
  const activeClasses = isActive 
    ? `${category.bgColor} text-white border-transparent`
    : "bg-white text-gray-700 border-gray-200 hover:border-gray-300";

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium shadow-sm transition-all ${activeClasses}`}
    >
      <span className={isActive ? 'text-white' : category.color}>
        {category.icon}
      </span>
      {category.name}
    </button>
  );
}

const categories = [
  {
    id: "all",
    name: "All Courses",
    tagline: "Browse all available courses",
    color: "text-gray-700",
    bgColor: "bg-gray-700",
    lightBgColor: "bg-gray-100",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    id: "rpa",
    name: "RPA Developer",
    tagline: "Robots work, so humans can innovate",
    color: "text-blue-600",
    bgColor: "bg-blue-600",
    lightBgColor: "bg-blue-100",
    icon: <Cpu className="h-4 w-4" />,
  },
  {
    id: "web-dev",
    name: "Web Development",
    tagline: "Build modern and beautiful websites",
    color: "text-emerald-600",
    bgColor: "bg-emerald-600",
    lightBgColor: "bg-emerald-100",
    icon: <Code className="h-4 w-4" />,
  },
  {
    id: "data",
    name: "Data Analyst",
    tagline: "Make data-driven decisions",
    color: "text-purple-600",
    bgColor: "bg-purple-600",
    lightBgColor: "bg-purple-100",
    icon: <Database className="h-4 w-4" />,
  },
];

const allCourses = [
  {
    id: "8",
    title: "UiPath",
    category: "rpa",
    image: "https://i.pinimg.com/736x/9d/be/b9/9dbeb934c483f4f5234df9f643681df8.jpg",
    popular: true,
    new: false,
  },
  {
    id: "9",
    title: "Automation Anywhere",
    category: "rpa",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    popular: false,
    new: true,
  },
  {
    id: "10",
    title: "Blue Prism",
    category: "rpa",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    popular: false,
    new: false,
  },
  {
    id: "11",
    title: "Web Design Basics",
    category: "web-dev",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    popular: false,
    new: true,
  },
  {
    id: "12",
    title: "React JS",
    category: "web-dev",
    image: "https://i.pinimg.com/736x/f4/8b/3c/f48b3c6e87b2077be4ccdb38bb017de6.jpg",
    popular: true,
    new: false,
  },
  {
    id: "13",
    title: "Next.js & Tailwind CSS",
    category: "web-dev",
    image: "https://i.pinimg.com/736x/ff/53/b9/ff53b9536227d518d5165a5fb44b9a37.jpg",
    popular: false,
    new: true,
  },
  {
    id: "14",
    title: "Data Analysis with Excel",
    category: "data",
    image: "https://i.pinimg.com/736x/4f/1d/74/4f1d74484cd8156e90585c60a458df4c.jpg",
    popular: false,
    new: false,
  },
  {
    id: "15",
    title: "SQL for Beginners",
    category: "data",
    image: "https://i.pinimg.com/736x/3d/f7/64/3df76478dd44e57257119ee101e8ccdc.jpg",
    popular: false,
    new: true,
  },
  {
    id: "16",
    title: "Power BI",
    category: "data",
    image: "https://i.pinimg.com/736x/36/90/0d/36900de65093b2f25aa4cba461dfb756.jpg",
    popular: true,
    new: false,
  },
];

export default function CourseCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [visibleCourses, setVisibleCourses] = useState(allCourses);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    filterCourses();
  }, [selectedCategory, searchQuery]);

  const filterCourses = () => {
    let filtered = [...allCourses];

    if (selectedCategory !== "all") {
      filtered = filtered.filter((course) => course.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(query) ||
          categories.find((cat) => cat.id === course.category)?.name.toLowerCase().includes(query)
      );
    }

    setVisibleCourses(filtered);
  };

  return (
    <div className="relative space-y-6 px-4 sm:px-6 md:px-8 lg:px-12 max-w-screen-xl mx-auto py-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Discover a wide range of courses</h1>
        <p className="text-gray-600">
          Designed to help you master in-demand skills and advance your career.
        </p>
      </div>

      {/* Search and filters */}
      <div className="flex flex-col gap-4">
        <div className="relative flex items-center gap-2">
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            isFocused={isSearchFocused}
          />
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 bg-white p-2 shadow-sm sm:hidden"
          >
            <Filter className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Mobile filters */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden sm:hidden"
            >
              <div className="flex flex-wrap gap-2 py-2">
                {categories.map((category) => (
                  <CategoryFilter
                    key={category.id}
                    category={category}
                    isActive={selectedCategory === category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setIsFilterOpen(false);
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop filters */}
        <div className="hidden flex-wrap gap-2 sm:flex">
          {categories.map((category) => (
            <CategoryFilter
              key={category.id}
              category={category}
              isActive={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
            />
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="text-sm text-gray-500">
        Showing {visibleCourses.length} {visibleCourses.length === 1 ? "course" : "courses"}
        {selectedCategory !== "all" && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
        {searchQuery && ` matching "${searchQuery}"`}
      </div>

      {/* Course cards grid */}
      {visibleCourses.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleCourses.map((course) => {
            const category = categories.find((cat) => cat.id === course.category);
            return (
              <motion.div
                key={course.id}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                  <div className="absolute left-2 top-2 flex gap-2">
                    {course.popular && (
                      <div className="flex items-center gap-1 rounded-full bg-yellow-500/90 px-2 py-1 text-xs font-medium text-white">
                        <Star className="h-3 w-3 fill-current" />
                        <span>Popular</span>
                      </div>
                    )}
                    {course.new && (
                      <div className="flex items-center gap-1 rounded-full bg-green-500/90 px-2 py-1 text-xs font-medium text-white">
                        <Zap className="h-3 w-3 fill-current" />
                        <span>New</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <div className={`inline-flex items-center gap-1 rounded-full ${category?.lightBgColor} px-3 py-1 text-xs font-medium ${category?.color}`}>
                      {category?.icon}
                      {category?.name}
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold leading-tight text-gray-900">{course.title}</h3>
                  <p className="mb-4 text-sm text-gray-500">{category?.tagline}</p>
                  <div className="mt-auto flex items-center text-sm font-medium text-blue-600 transition-colors group-hover:text-blue-500">
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 p-12 text-center">
          <Search className="h-10 w-10 text-gray-400" />
          <h3 className="mt-4 text-lg font-medium text-gray-900">No courses found</h3>
          <p className="mt-2 text-sm text-gray-500">
            Try adjusting your search or filter to find what you're looking for.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="mt-4 rounded-lg px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}