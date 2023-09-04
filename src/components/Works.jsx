import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, 
  tags, image, source_code_link, live_server_link }) => {
    return (
      <motion.div variants={fadeIn("up", "spring",
      index *.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
          <div
             
              className="cursor-pointer w-full h-full object-fit rounded-2xl">
              <img
                
                src={image}
                alt={name}
                className="w-full h-full object-fit rounded-2xl"
              />
            </div>
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div 
              onClick={() => window.open
              (source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex 
              justify-center items-center cursor-pointer"
              >
                <img 
                src={github}
                alt="github"
                className="w-1/2 h=1/2
                object-contain"
              />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px] cursor-pointer"
              onClick={() => window.open
              (live_server_link, "_blank")}
            >{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}

          </div>
        </Tilt>
      </motion.div>
    )
  }
const Works = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >My projects </p>
        <h2 className={styles.sectionHeadText}
        >Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-seondary text-[17px]
          max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills
          I have learned from my Codego bootcamp experience.
          Each projects is briefly described with links
          to code repositories and live demos in it.
          It reflects my coding ability for making websites
          that have done working solo and also as a team.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
          
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");