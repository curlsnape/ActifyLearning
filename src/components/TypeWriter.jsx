// import { motion } from "framer-motion";

// export const sentenceVariants = {
//   hidden: {},
//   visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
// };

// export const letterVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
// };

// export const Typewriter = ({ text, ...rest }) => (
//   <motion.p
//     key={text}
//     className="text-center syne-font text-black lg:text-6xl md:text-5xl text-3xl resize font-bold max-w-[100%] lg:max-w-[70%]"
//     variants={sentenceVariants}
//     initial="hidden"
//     animate="visible"
//     {...rest}
//   >
//     {text.split("").map((char, i) => (
//       <motion.span key={`${char}-${i}`} variants={letterVariants} dangerouslySetInnerHTML={{__html:char}} >
//         {/* {char} */}
//       </motion.span>
//     ))}
//   </motion.p>
// );


import { motion } from "framer-motion";

// Define the sentence animation
export const sentenceVariants = {
  hidden: {},
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

// Define the letter animation
export const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 1.5 } } },
};

export const Typewriter = ({ text, ...rest }) => {
  // List of words to apply different colors to
  const coloredWords = ['learning', 'innovation'];
  
  return (
    <motion.p
      key={text}
      className="text-center syne-font text-black lg:text-6xl md:text-5xl text-3xl resize font-bold max-w-[100%] lg:max-w-[70%]"
      variants={sentenceVariants}
      initial="hidden"
      animate="visible"
      {...rest}
    >
      {text.split(" ").map((word, i) => {
        const isColoredWord = coloredWords.includes(word.toLowerCase());
        return (
          <motion.span key={`${word}-${i}`} variants={letterVariants}>
            <span
              style={{
                color: isColoredWord
                  ? word.toLowerCase() === "learning"
                    ? "red" // Color for "learning"
                    : "darkblue" // Color for "innovation"
                  : "black", // Default color
              }}
            >
              {word.split("").map((char, j) => (
                <motion.span key={`${char}-${j}`} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </span>{" "}
          </motion.span>
        );
      })}
    </motion.p>
  );
};

// Example usage:
<Typewriter text="Empowering Growth Through Learning And Innovation" />
