const aboutData = {
    "full_name": "Alexey Veprev",
    "avatar": "/images/avatar.png",
    "position": "Middle JavaScript Engineer",
    "company": "Lohika",
    "location": "Odessa, Ukraine",
    "about_page": "<h3>My name is Alexey and I'm Front-End developer!</h3> <p>I'm living in Odessa. I am a perfectionist, I love harmony in the small details. I like challenges and looking for optimal solutions for them. I like to learn new technologies and I'm not afraid to work with them. I like to learn and think. I do not like lies. I love music and the sea.</p><p>I have a lot of experience in developing SPA applications, using AngularJS and TypeScript. There are skills of building small applications using the ES6. There is experience with server programming on PHP (CodeIgniter) and MySQL. Also, it's easy enough for me to build application logic and separate methods. I know how to solve non-trivial programming tasks. I really like to think over the architecture of the application.</p><p>For me, it's interesting to develop not only as a frontend developer but also as a backend developer. I have a goal to become an excellent full-stack specialist. Of technology, I'm interested in React and Angular 2+ at the front and NodeJS as a back.</p><p>I'm delighted with what I do!</p>",
    "education": "From 2007 to 2013 I studied at the Mechnikov University with a speciality in Applied Mathematics. On the 5th course I switched to the specialty \"Computer systems and networks\", where I got acquainted with web development and fell in love with it. In 2013 I graduated from university with a degree in specialist.",
    "about_text": "<p>5+ years IT professional in Front-End development in a field of web-oriented applications for small and large enterprises. I have solid understanding and knowledge of AngularJS, ES5, ES6, HTML, CSS, PHP, Codeigniter, jQuery, MySQL and WordPress. Experienced in development client and server parts of applications. Have experience with Grunt, Gulp, Webpack, Ionic.<p>",
    "languages": [
        {
            "title": "Ukrainian",
            "level": 10
        },
        {
            "title": "Russian",
            "level": 10
        },
        {
            "title": "English",
            "level": 6
        }
    ],
    "skills": [
        {
            "title": "AngularJS",
            "level": 9
        },
        {
            "title": "TypeScript",
            "level": 7
        },
        {
            "title": "ES5",
            "level": 9
        },
        {
            "title": "ES6",
            "level": 8
        },
        {
            "title": "HTML",
            "level": 10
        },
        {
            "title": "CSS",
            "level": 10
        },
        {
            "title": "SCSS",
            "level": 9
        },
        {
            "title": "LESS",
            "level": 8
        },
        {
            "title": "Photoshop",
            "level": 9
        },
        {
            "title": "PHP",
            "level": 7
        },
        {
            "title": "WordPress",
            "level": 8
        },
        {
            "title": "Git",
            "level": 8
        },
        {
            "title": "Grunt",
            "level": 6
        },
        {
            "title": "Gulp",
            "level": 7
        },
        {
            "title": "Codeigniter",
            "level": 6
        },
        {
            "title": "Apiary",
            "level": 8
        },
        {
            "title": "MySQL",
            "level": 5
        }
    ],
    "social_links": [
        {
            "ico": "<i class=\"fab fa-linkedin-in\"></i>",
            "url": "https://www.linkedin.com/in/veprevalexey/",
            "show": true
        },
        {
            "ico": "<i class=\"fab fa-facebook-f\"></i>",
            "url": "https://www.facebook.com/1an.lo.ve",
            "show": true
        },
        {
            "ico": "<i class=\"fab fa-github\"></i>",
            "url": "https://github.com/Jigalag",
            "show": true
        },
        {
            "ico": "<i class=\"fab fa-instagram\"></i>",
            "url": "https://www.instagram.com/1an.lo.ve/",
            "show": true
        }
    ]
};

export default function (state = aboutData, action) {
    switch (action.type) {
        default: break;
    }
    return state;
}