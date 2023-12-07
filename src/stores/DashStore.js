import { defineStore } from "pinia";

export const useDashStore = defineStore('DashStore', {
    state: () => ({
        // add links in sideBar
        links: [{
            linkName: 'Dashboard',
            iconName: 'fa-regular fa-chart-bar fa-fw'
        },
        {
            linkName: 'Settings',
            iconName: 'fa-solid fa-gear fa-fw'
        },
        {
            linkName: 'profile',
            iconName: 'fa-regular fa-user fa-fw'
        },
        {
            linkName: 'projects',
            iconName: 'fa-solid fa-diagram-project fa-fw'
        },
        {
            linkName: 'Courses',
            iconName: 'fa-solid fa-graduation-cap fa-fw'
        },
        {
            linkName: 'Friends',
            iconName: 'fa-regular fa-circle-user fa-fw'
        },
        {
            linkName: 'Files',
            iconName: 'fa-regular fa-file fa-fw'
        },
        {
            linkName: 'Plans',
            iconName: 'fa-regular fa-credit-card fa-fw'
        }
        ],
        // add News in dashboad page
        News: [{
            imgurl: 'news-01.png',
            title: 'Created Sass Section',
            pargraph: 'New SASS Examples & Tutorials',
            num: 3
        },
        {
            imgurl: 'news-02.png',
            title: 'Changed The Design',
            pargraph: 'A Brand New Website Design',
            num: 5
        },
        {
            imgurl: 'news-03.png',
            title: 'Team Increased',
            pargraph: '3 Developers Joined The Team',
            num: 7
        },
        {
            imgurl: 'news-04.png',
            title: 'Added Payment Gateway',
            pargraph: 'Many New Payment Gateways Added',
            num: 9
        }
        ],
        // = add tasks in dashboard page
        tasks: [{
            title: 'Record One New Video',
            pargraph: 'New SASS Examples & Tutorials',
            del: 'fa-regular fa-trash-can',
            done: false
        },
        {
            title: 'Write Article',
            pargraph: 'Write Low Level vs High Level Languages',
            del: 'fa-regular fa-trash-can',
            done: false
        },
        {
            title: 'Finish Project',
            pargraph: 'Publish Academy Programming Project',
            del: 'fa-regular fa-trash-can',
            done: false
        },
        {
            title: 'Attend The Meeting',
            pargraph: 'Attend The Project Business Analysis Meeting',
            del: 'fa-regular fa-trash-can',
            done: false
        },
        {
            title: 'Finish Lesson',
            pargraph: 'Finish Teaching Flex Box',
            del: 'fa-regular fa-trash-can',
            done: false
        }

        ],
        // add items in dashboard page
        items: [{
            item: 'Programming',
            count: 220
        },
        {
            item: 'JavaScrapit',
            count: 180
        },
        {
            item: 'PHP',
            count: 160
        },
        {
            item: 'Code',
            count: 145
        },
        {
            item: 'Design',
            count: 110
        },
        {
            item: 'Logic',
            count: 95
        }
        ],
        // add uploads in dashboard page
        uploads: [{
            name: 'My-file.pdf',
            describe: 'ELjohar',
            size: 2.9,
            img: 'pdf.svg'
        },
        {
            name: 'My-Video-File.avi',
            describe: 'Admin',
            size: 4.9,
            img: 'avi.svg'
        },
        {
            name: 'My-Psd-File.pdf',
            describe: 'Mostafa',
            size: 4.5,
            img: 'psd.svg'
        },
        {
            name: 'My-Zip-file.pdf',
            describe: 'User',
            size: 8.9,
            img: 'zip.svg'
        },
        {
            name: 'My-DLL-File.pdf',
            describe: 'Admin',
            size: 2.9,
            img: 'dll.svg'
        },
        {
            name: 'My-Eps-File.pdf',
            describe: 'Designer',
            size: 2.9,
            img: 'eps.svg'
        }
        ],
        // add last project in dashboard page
        lasts: [
            {
                name: 'Got The project'
            },
            {
                name: 'Started The Project'

            },
            {
                name: 'The Project About To Finish'
            },
            {
                name: 'Test The Project'

            },
            {
                name: 'Finish The Project & Get Money',
            }
        ],
        // add Reminders in dashboard page
        reminds: [{
            pargraph: 'Check My Tasks List',
            date: '28/09/2022 - 12.00 a.m',
            color: '#0075ff'
        },
        {
            pargraph: 'Check My Projects',
            date: '28/09/2022 - 12.00 a.m',
            color: '#22c55e'
        },
        {
            pargraph: 'Call All My Clients',
            date: '28/09/2022 - 12.00 a.m',
            color: '#f59e0b'
        },
        {
            pargraph: 'Finish The Development Workshop',
            date: '28/09/2022 - 12.00 a.m',
            color: '#dc3545'
        }

        ],
        // add Social in dashboard page
        socials: [
            {
                pargraph: '90K Followers',
                btn: 'follow',
                i: 'fa-brands fa-twitter fa-2xl',
                name: 'twitter',
                bg: 'rgb(29,161,242)',
                bgL: 'rgb(29 161 242 / 34%)'
            },
            {
                pargraph: '2M Like',
                btn: 'Like',
                i: 'fa-brands fa-facebook fa-2xl',
                name: 'facebook',
                bg: 'rgb(24,119,242)',
                bgL: 'rgb(24 119 242 / 32%)'
            },
            {
                pargraph: '1M Subs',
                btn: 'Subscribe',
                i: 'fa-brands fa-youtube fa-2xl',
                name: 'youtube',
                bg: 'rgb(255,0,0)',
                bgL: 'rgb(255 0 0 / 32%)'
            },
            {
                pargraph: '70K Followers',
                btn: 'follow',
                i: 'fa-brands fa-linkedin fa-2xl',
                name: 'linkedin',
                bg: 'rgb(0,119,181)',
                bgL: 'rgb(0 119 181 / 29%)'
            },
        ],
        // add projects in dashboard page
        tables: [{
            name: 'Ministry Wikipedia',
            fDate: '10 May 2022',
            client: 'Ministry',
            price: '$5300',
            team: ['team1.png', 'team2.png', 'team3.png'],
            status: 'Pending',
            color: '#f59e0b'

        },
        {
            name: 'Eljohar Shop',
            fDate: '12 Oct 2021',
            client: 'Eljohar Company',
            price: '$5300',
            team: ['team1.png', 'team3.png'],
            status: 'In Progress',
            color: '#0075ff'

        },
        {
            name: 'Ministry Wikipedia',
            fDate: '13 May 2022',
            client: 'Ministry',
            price: '$3300',
            team: ['team2.png', 'team3.png'],
            status: 'Completed',
            color: '#22c55e'

        },
        {
            name: 'Ministry Wikipedia',
            fDate: '16 May 2022',
            client: 'Ministry',
            price: '$6300',
            team: ['team3.png', 'team4.png'],
            status: 'Completed',
            color: '#22c55e'

        },
        {
            name: 'Ministry Wikipedia',
            fDate: '10 Sep 2022',
            client: 'Ministry',
            price: '$1300',
            team: ['team1.png', 'team2.png', 'team3.png', 'team4.png'],
            status: 'Rejected',
            color: '#dc3545'

        },
        {
            name: 'Ministry Wikipedia',
            fDate: '10 Mar 2022',
            client: 'Ministry',
            price: '$300',
            team: ['team1.png', 'team4.png'],
            status: 'Completed',
            color: '#22c55e'

        }
        ],
        // add projects in projects page
        projects: [
            {
                title: 'Elzero Dashboard',
                date: '15/10/2021',
                pargraph: 'Elzero Dashboard Project Design And Programming And Hosting',
                imgs: ['team1.png', 'team2.png', 'team3.png', 'team4.png', 'team1.png'],
                skills: ['Programming', 'Design', 'Hosting', 'Marketing'],
                salary: 2500,
                style: {
                    'background-color': '#dc3545',
                    width: '60%'
                }

            },
            {
                title: 'Academy Portal',
                date: '15/10/2022',
                pargraph: 'Academy Portal Project Design And Programming',
                imgs: ['team1.png', 'team2.png', 'team3.png', 'team4.png', 'team1.png'],
                skills: ['Programming', 'Design', 'Hosting', 'Marketing'],
                salary: 1800,
                style: {
                    'background-color': '#22c55e',
                    width: '70%'
                }

            },
            {
                title: 'Chatting Application',
                date: '15/10/2021',
                pargraph: 'Chatting Application Project Design',
                imgs: ['team1.png', 'team2.png', 'team3.png'],
                skills: ['Programming', 'Marketing'],
                salary: 950,
                style: {
                    'background-color': '#0075ff',
                    width: '80%'
                }

            },
            {
                title: 'Ahmed Dashboard',
                date: '15/10/2022',
                pargraph: 'Ahmed Dashboard Project Design And Programming And Hosting',
                imgs: ['team1.png', 'team3.png'],
                skills: ['Programming', 'Marketing', 'Hosting'],
                salary: 1700,
                style: {
                    'background-color': '#22c55e',
                    width: '55%'
                }

            },
            {
                title: 'Ahmed Portal',
                date: '15/10/2021',
                pargraph: 'Ahmed Portal Project Design And Programming',
                imgs: ['team1.png', 'team2.png', 'team3.png'],
                skills: ['Programming', 'Hosting', 'Marketing'],
                salary: 850,
                style: {
                    'background-color': '#22c55e',
                    width: '60%',
                }

            },
            {
                title: 'Mohamed Application',
                date: '15/10/2021',
                pargraph: 'Mohamed Application Project Design',
                imgs: ['team1.png', 'team2.png', 'team3.png'],
                skills: ['Programming', 'Hosting', 'Marketing'],
                salary: 950,
                style: {
                    'background-color': '#dc3545',
                    width: '60%'
                }

            },
            {
                title: 'Mostafa Dashboard',
                date: '15/10/2021',
                pargraph: 'Mohamed Dashboard Project Design And Programming And Hosting',
                imgs: ['team1.png', 'team2.png', 'team3.png'],
                skills: ['Programming', 'Marketing'],
                salary: 1950,
                style: {
                    'background-color': '#22c55e',
                    width: '85%'
                }

            },
            {
                title: 'Mohamed Portal',
                date: '15/10/2021',
                pargraph: 'Mohamed Portal Project Design And Programming',
                imgs: ['team3.png', 'team4.png', 'team1.png'],
                skills: ['Programming', 'Hosting'],
                salary: 1650,
                style: {
                    'background-color': '#22c55e',
                    width: '60%'
                }

            },
            {
                title: 'Mohamed Application',
                date: '15/10/2021',
                pargraph: 'Mohamed Application Project Design',
                imgs: ['team1.png', 'team2.png', 'team3.png'],
                skills: ['Programming', 'Hosting'],
                salary: 950,
                style: {
                    'background-color': '#dc3545',
                    width: '60%'
                }

            },
            {
                title: 'Mostafa Dashboard',
                date: '15/10/2021',
                pargraph: 'Mohamed Dashboard Project Design And Programming And Hosting',
                imgs: ['team1.png', 'team2.png', 'team3.png'],
                skills: ['Hosting', 'Marketing'],
                salary: 1950,
                style: {
                    'background-color': '#22c55e',
                    width: '60%'
                }


            },
        ],
        // add courses in Courses page
        courses: [
            {
                mainImg: 'course-01.jpg',
                imgTeam: 'team1.png',
                name: 'Mastering Web Design',
                pargraph: 'Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture',
                views: 950,
                salary: 165

            },
            {
                mainImg: 'course-02.jpg',
                imgTeam: 'team2.png',
                name: 'Data Structure And Algorithms',
                pargraph: 'Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture',
                views: 950,
                salary: 165

            },
            {
                mainImg: 'course-03.jpg',
                imgTeam: 'team3.png',
                name: 'Responsive Web Design',
                pargraph: 'Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture',
                views: 950,
                salary: 165

            },
            {
                mainImg: 'course-04.jpg',
                imgTeam: 'team2.png',
                name: 'Mastering Python',
                pargraph: 'Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture',
                views: 950,
                salary: 165

            },
            {
                mainImg: 'course-05.jpg',
                imgTeam: 'team3.png',
                name: 'PHP Examples',
                pargraph: 'Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture',
                views: 950,
                salary: 165

            },
            {
                mainImg: 'course-04.jpg',
                imgTeam: 'team4.png',
                name: 'Mastering Web Design',
                pargraph: 'Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture',
                views: 950,
                salary: 165

            },
            {
                mainImg: 'course-05.jpg',
                imgTeam: 'team3.png',
                name: 'Data Structure And Algorithms',
                pargraph: 'Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture',
                views: 950,
                salary: 165

            },
            {
                mainImg: 'course-01.jpg',
                imgTeam: 'team3.png',
                name: 'PHP Examples',
                pargraph: 'Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture',
                views: 950,
                salary: 165

            },
            {
                mainImg: 'course-02.jpg',
                imgTeam: 'team3.png',
                name: 'Mastering Web Design',
                pargraph: 'Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture',
                views: 950,
                salary: 165

            }

        ],
        // add friends in Friends page
        friends: [
            {
                name: 'Ahmed Nasser',
                job: 'JavaScript Developer',
                fcount: 99,
                pcount: 15,
                Acount: 25,
                date: '02/10/2021',
                img: 'friend-01.jpg',

            },
            {
                name: 'Omar Fathy',
                job: 'Cloud Developer',
                fcount: 99,
                pcount: 15,
                Acount: 25,
                date: '02/10/2021',
                img: 'friend-02.jpg',

            },
            {
                name: 'Omar Ahmed',
                job: 'Mobile Developer',
                fcount: 99,
                pcount: 15,
                Acount: 25,
                date: '02/10/2021',
                img: 'friend-03.jpg',

            },
            {
                name: 'Shady Nabil',
                job: 'Back-End Developer',
                fcount: 99,
                pcount: 15,
                Acount: 25,
                date: '02/10/2021',
                img: 'friend-04.jpg'
            },
            {
                name: 'Amr Hendawy',
                job: 'Back-End Developer',
                fcount: 99,
                pcount: 15,
                Acount: 25,
                date: '02/10/2021',
                img: 'friend-05.jpg'
            },
            {
                name: 'Mohamed Ibrahim',
                job: 'Algorithm Developer',
                fcount: 99,
                pcount: 15,
                Acount: 25,
                date: '02/10/2021',
                img: 'friend-01.jpg'
            },
            {
                name: 'Ahmed Abuzaid',
                job: 'Content Creator',
                fcount: 99,
                pcount: 15,
                Acount: 25,
                date: '02/10/2021',
                img: 'friend-02.jpg'
            },
            {
                name: 'Gareeb Elshiekh',
                job: 'JavaScript Developer',
                fcount: 99,
                pcount: 15,
                Acount: 25,
                date: '02/10/2021',
                img: 'friend-04.jpg'
            },
            {
                name: 'Ali',
                job: 'Front-End Developer',
                fcount: 99,
                pcount: 15,
                Acount: 25,
                date: '02/10/2021',
                img: 'friend-03.jpg'
            }
        ],
        // add File in Files page
        statistic: [{
            icons: ['fa-regular fa-file-pdf ', 'fa-regular fa-images ', 'fa-regular fa-file-word', 'fa-solid fa-file-csv'],
            name: 'PDF Files',
            count: 130,
            memory: 2.7,
            style: {
                color: '#0075ff',
                'background-color': 'rgb(0 117 255 / 20%)'
            }

        },
        {
            icons: ['fa-regular fa-file-pdf ', 'fa-regular fa-images ', 'fa-regular fa-file-word', 'fa-solid fa-file-csv'],
            name: 'Images',
            count: 113,
            memory: 3.5,
            style: {
                color: '#22c55e',
                'background-color': 'rgb(34 197 94 / 20%)'
            }
        },
        {
            icons: ['fa-regular fa-file-pdf ', 'fa-regular fa-images ', 'fa-regular fa-file-word', 'fa-solid fa-file-csv'],
            name: 'Word Files',
            count: 110,
            memory: 7.5,
            style: {
                color: '#f44336',
                'background-color': 'rgb(244 67 54 / 20%)'
            }

        },
        {
            icons: ['fa-regular fa-file-pdf ', 'fa-regular fa-images ', 'fa-regular fa-file-word', 'fa-solid fa-file-csv'],
            name: 'CSV Files',
            count: 111,
            memory: 6.5,
            style: {
                color: '#f59e0b',
                'background-color': 'rgb(245 158 11 / 20%)'
            }
        },
        ],
        // add File in Files page
        files: [
            {
                name: 'my-file.pdf',
                imgFile: 'pdf.svg',
                job: 'ELjohar',
                date: '20/06/2020',
                memory: 5.5
            },
            {
                name: 'my-file.avi',
                imgFile: 'avi.svg',
                job: 'Admin',
                date: '16/5/2021',
                memory: 2.5
            },
            {
                name: 'my-file.eps',
                imgFile: 'eps.svg',
                job: 'Uploader',
                date: '16/5/2021',
                memory: 3.2
            },
            {
                name: 'my-file.psd',
                imgFile: 'pdf.svg',
                job: 'Mostfa',
                date: '20/06/2020',
                memory: 4.5
            },
            {
                name: 'my-file.dll',
                imgFile: 'dll.svg',
                job: 'Coder',
                date: '16/5/2021',
                memory: 1.5
            },
            {
                name: 'my-file.png',
                imgFile: 'png.svg',
                job: 'Designer',
                date: '16/5/2021',
                memory: 6.7
            },
            {
                name: 'my-file.psd',
                imgFile: 'psd.svg',
                job: 'ELjohar',
                date: '20/06/2020',
                memory: 3.5
            },
            {
                name: 'my-file.avi',
                imgFile: 'avi.svg',
                job: 'Admin',
                date: '16/5/2021',
                memory: 6.5
            },
            {
                name: 'my-file.eps',
                imgFile: 'eps.svg',
                job: 'Uploader',
                date: '16/5/2021',
                memory: 5.5
            },
            {
                name: 'my-file.pdf',
                imgFile: 'pdf.svg',
                job: 'ELjohar',
                date: '20/06/2020',
                memory: 5.5
            },
            {
                name: 'my-file.avi',
                imgFile: 'avi.svg',
                job: 'Admin',
                date: '16/5/2021',
                memory: 5.5
            },
            {
                name: 'my-file.eps',
                imgFile: 'eps.svg',
                job: 'Uploader',
                date: '16/5/2021',
                memory: 5.5
            },
            {
                name: 'my-file.pdf',
                imgFile: 'pdf.svg',
                job: 'ELjohar',
                date: '20/06/2020',
                memory: 5.5
            },
            {
                name: 'my-file.avi',
                imgFile: 'avi.svg',
                job: 'Admin',
                date: '16/5/2021',
                memory: 5.5
            },
            {
                name: 'my-file.eps',
                imgFile: 'eps.svg',
                job: 'Coder',
                date: '16/5/2021',
                memory: 5.5
            },
            {
                name: 'my-file.png',
                imgFile: 'png.svg',
                job: 'Designer',
                date: '20/06/2020',
                memory: 5.5
            },
            {
                name: 'my-file.avi',
                imgFile: 'avi.svg',
                job: 'Admin',
                date: '16/5/2021',
                memory: 5.5
            },
            {
                name: 'my-file.avi',
                imgFile: 'avi.svg',
                job: 'Admin',
                date: '16/5/2021',
                memory: 5.5
            },
            {
                name: 'my-file.eps',
                imgFile: 'eps.svg',
                job: 'Coder',
                date: '16/5/2021',
                memory: 5.5
            },
            {
                name: 'my-file.png',
                imgFile: 'png.svg',
                job: 'Designer',
                date: '20/06/2020',
                memory: 5.5
            },
            {
                name: 'my-file.eps',
                imgFile: 'eps.svg',
                job: 'Uploader',
                date: '16/5/2021',
                memory: 5.5
            },
            {
                name: 'my-file.pdf',
                imgFile: 'pdf.svg',
                job: 'ELjohar',
                date: '20/06/2020',
                memory: 5.5
            },
            {
                name: 'my-file.avi',
                imgFile: 'avi.svg',
                job: 'Admin',
                date: '16/5/2021',
                memory: 5.5
            },
            {
                name: 'my-file.eps',
                imgFile: 'eps.svg',
                job: 'Uploader',
                date: '16/5/2021',
                memory: 5.5
            }
        ],
        // add Plans in Plans page
        plans: [
            {
                colour: '#22c55e',
                name: 'Free',
                salary: 0.00,
                icons: [
                    'fa-solid fa-check fa-fw yes',
                    'fa-solid fa-check fa-fw yes',
                    'fa-solid fa-check fa-fw yes',
                    'fa-solid fa-xmark fa-fw no',
                    'fa-solid fa-xmark fa-fw no',
                    'fa-solid fa-xmark fa-fw no',
                    'fa-solid fa-xmark fa-fw no',
                    'fa-solid fa-xmark fa-fw no',
                    'fa-solid fa-xmark fa-fw no'
                ],

                li: [
                    'Access All Text Lessons',
                    'Access All Videos Lessons',
                    'Appear On Leaderboard',
                    'Browse Content Without Ads',
                    'Access All Assignments',
                    'Get Daily Prizes',
                    'Earn Certificate',
                    '1 GB Space For Hosting Files',
                    'Access Badge System'
                ]




            },
            {
                colour: '#0075ff',
                name: 'Basic',
                salary: 7.99,
                icons: [
                    'fa-solid fa-check fa-fw yes',
                    'fa-solid fa-check fa-fw yes',
                    'fa-solid fa-check fa-fw yes',
                    'fa-solid fa-xmark fa-fw no',
                    'fa-solid fa-xmark fa-fw no',
                    'fa-solid fa-xmark fa-fw no',
                    'fa-solid fa-xmark fa-fw no',
                    'fa-solid fa-xmark fa-fw no',
                    'fa-solid fa-xmark fa-fw no'
                ],

                li: [
                    'Access All Text Lessons',
                    'Access All Videos Lessons',
                    'Appear On Leaderboard',
                    'Browse Content Without Ads',
                    'Access All Assignments',
                    'Get Daily Prizes',
                    'Earn Certificate',
                    '1 GB Space For Hosting Files',
                    'Access Badge System'
                ]




            },
            {
                colour: '#f59e0b',
                name: 'Premium',
                salary: 19.99,
                icons: [
                    'fa-solid fa-check fa-fw yes',
                    'fa-solid fa-check fa-fw yes',
                    'fa-solid fa-check fa-fw yes',
                    'fa-solid fa-xmark fa-fw no',
                    'fa-solid fa-xmark fa-fw no',
                    'fa-solid fa-xmark fa-fw no',
                    'fa-solid fa-xmark fa-fw no',
                    'fa-solid fa-xmark fa-fw no',
                    'fa-solid fa-xmark fa-fw no'
                ],

                li: [
                    'Access All Text Lessons',
                    'Access All Videos Lessons',
                    'Appear On Leaderboard',
                    'Browse Content Without Ads',
                    'Access All Assignments',
                    'Get Daily Prizes',
                    'Earn Certificate',
                    '1 GB Space For Hosting Files',
                    'Access Badge System'
                ]




            }

        ]




    })

})
