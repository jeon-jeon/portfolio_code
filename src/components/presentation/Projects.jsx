import ProjectCard from "../common/card/ProjectCard";
import SkillBadge from "../common/text/SkillBadge";
import TitleText from "../common/text/TitleText";

const Projects = () => {
  const groundplaceSkills = ["React", "Javascript", "Swiper", "Gsap"];
  const wavveSkills = ["Next.js", "Javascript", "TailwindCSS", "Swiper"];
  const louvreSkills = ["HTML/CSS", "Gsap"];
  const todolistSkills = ["React", "JavaScript"];
  const airbnbSkills = ["React", "Typescript"];

  return (
    <article
      style={{
        width: "100%",
        maxWidth: "1024px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      <TitleText title={"Projects"} />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <ProjectCard
          className={"pj_card1"}
          title={"GroundPlace"}
          skills={groundplaceSkills.map((v) => (
            <SkillBadge skill={v} />
          ))}
          content={"제주 풀빌라 웹사이트"}
          desc={
            "Swiper, Gsap을 활용하여 제주 풀빌라 웹사이트를 구현하였습니다."
          }
          link={"https://jeon-jeon.github.io/groundplace/"}
        />
        <ProjectCard
          className={"pj_card2"}
          justifyContent={"flex-end"}
          skills={wavveSkills.map((v) => (
            <SkillBadge skill={v} />
          ))}
          content={"Movie API(TMDB) 활용한 영화 웹사이트"}
          desc={
            "Movie API를 활용하여 Wavve 웹사이트를 참고하며 영화 웹사이트를 제작하였습니다. \nSwiper를 활용하여 인기있는 영화 리스트를 메인 페이지로 구현하였습니다. \n영화 페이지는 현재상영중인 영화와 개봉예정인 영화 리스트를 카드 형태로 슬라이드 될 수 있도록 구현하였습니다. \n현재상영작과 개봉예정작 페이지에서는 각 리스트를 조회할 수 있고 장르를 선택하여 영화 리스트를 조회할 수 있습니다. \n메인페이지의 자세히보기 또는 각 페이지에서 영화 포스터를 클릭하면 영화의 상세페이지로 이동합니다."
          }
          link={"https://pfwavve-jeonjiyeons-projects.vercel.app/"}
        />
        <ProjectCard
          className={"pj_card3"}
          title={"Louvre"}
          skills={louvreSkills.map((v) => (
            <SkillBadge skill={v} />
          ))}
          content={"다양한 애니메이션 효과를 구현한 웹사이트"}
          desc={
            "GSAP을 활용하여 다양한 애니메이션을 구현하기 위해 루브르박물관 홈페이지를 리뉴얼한 사이트를 제작하였습니다. \npin 효과를 주어 루브르 소개 페이지를 슬라이드로 구현하였고, scoll 할 마다 텍스트와 이미지들이 표현되도록 구현하였습니다."
          }
          link={"https://jeon-jeon.github.io/louvre/"}
        />
        <ProjectCard
          className={"pj_card4"}
          justifyContent={"flex-end"}
          title={"ToDoList"}
          skills={todolistSkills.map((v) => (
            <SkillBadge skill={v} />
          ))}
          content={"다양한 위젯을 한 화면에 구현한 웹사이트"}
          desc={
            "사용자 이름 입력하는 위젯, 사진 슬라이드 위젯, 달력 위젯, To Do List 위젯, 현재 시간 위젯으로 구성하였습니다. \n사용자가 이름 입력하고 엔터 키를 누르면 '사용자의 daliy board' 타이틀로 변경됩니다. \n새로고침 할 때마다 사진이 변경됩니다. \n사용자가 물을 섭취할 마다 물 아이콘을 클릭하면 이모티콘이 슬라이드되고 물 아이콘을 모두 클릭하면 이모티콘이 바뀝니다.\n라이브러리를 활용하여 달력 위젯을 구현하였습니다. \n사용자가 할 일을 입력하면 리스트에 추가되고 완료한 일을 클릭하면 노란색 아이콘으로 변경되며 삭제도 할 수 있습니다."
          }
          link={"https://jeon-jeon.github.io/todolist_ver2/"}
        />
        <ProjectCard
          className={"pj_card5"}
          title={"airbnb"}
          skills={airbnbSkills.map((v) => (
            <SkillBadge skill={v} />
          ))}
          content={"airbnb 웹사이트 클론코딩"}
          link={"https://jeon-jeon.github.io/airbnb/"}
        />
        <ProjectCard
          className={"pj_card6"}
          justifyContent={"flex-end"}
          title={"PARIS BAGUTTE"}
          skills={<SkillBadge skill={"HTML/CSS"} />}
          content={"PARIS BAGUTTE 웹사이트 클론코딩"}
          link={"https://jeon-jeon.github.io/paris/"}
        />
      </div>
    </article>
  );
};

export default Projects;
