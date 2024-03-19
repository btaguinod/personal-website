
export default function CourseCard(props) {
    let projects;

    if (props.card.projects.length !== 0) {
        projects = props.card.projects.map(projectInfo => {
            let [name, url] = projectInfo;
            let project = name;
            if (url) {
                project = (
                    <a href={url} key={name} className="highlight">
                        {name}
                    </a>
                );
            }
            return project;
        });
        projects = projects.reduce((acc, curr) => [acc, ', ', curr]);
        projects = (
            <div className="course-projects">
                Projects: {projects}
            </div>
        );
    }


    let skills;
    if (props.card.skills.length !== 0) {
        skills = (
            <div className="course-skills">
                Skills: {props.card.skills.join(', ')}
            </div>
        );
    }

    let website;
    if (props.card.url) {
        website = (
            <a href={props.card.url} className="highlight course-website">
                Course Website
            </a>
        )
    }


    return (
        <div className="course-card">
            <div className="course-title-name">
                <div className="course-title">{props.card.title}</div>
                <div className="course-name">{props.card.name}</div>
            </div>
            {skills}
            {projects}
            {website}
            <div className="course-school-time">
                <div className="course-school">{props.card.school}</div>
                <div className="course-time">{props.card.time}</div>
            </div>
        </div>
    );
};
