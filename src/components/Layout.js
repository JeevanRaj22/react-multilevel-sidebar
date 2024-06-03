import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faBarChart,
  faBarsStaggered,
  faChartColumn,
  faChartLine,
  faCircleNodes,
  faComment,
  faFaceGrin,
  faFilter,
  faIdCard,
  faPoll,
  faTrophy,
  faUniversalAccess,
  faUser,
  faUserGear,
  faUsers,
  faPeopleGroup,
  faTools,
  faChartBar
} from "@fortawesome/free-solid-svg-icons";
const sidebarItems = [
  {
      "label": "Feed",
      "path": "/home",
      "icon": <FontAwesomeIcon icon={faBarsStaggered} />
  },
  {
      "label": "Vote",
      "path": "/vote",
      "icon": <FontAwesomeIcon icon={faComment} />
  },
  {
      "label": "Reports",
      "icon": <FontAwesomeIcon icon={faChartBar} />,
      "children": [
          {
              "label": "Consistency",
              "icon": "",
              "children": [
                  {
                      "label": "Attendance",
                      "path": "/participation",
                      "icon": <FontAwesomeIcon icon={faPeopleGroup} />
                  },
                  {
                      "label": "Feedback Consistency",
                      "path": "/consistency",
                      "icon": <FontAwesomeIcon icon={faFilter} />
                  },
                  {
                      "label": "Team Streak",
                      "path": "/teamstreak",
                      "icon": <FontAwesomeIcon icon={faUsers} />
                  }
              ]
          },
          {
              "label": "Capabilities",
              "icon": <FontAwesomeIcon icon={faTools} />,
              "children": [
                  {
                      "label": "Leaderboard",
                      "path": "/leaderboard",
                      "icon": <FontAwesomeIcon icon={faTrophy} />
                  },
                  {
                      "label": "Vicinity",
                      "path": "/vicinity",
                      "icon": <FontAwesomeIcon icon={faCircleNodes} />
                  },
                  {
                      "label": "Team Skill Graph",
                      "path": "/skillgraph",
                      "icon": <FontAwesomeIcon icon={faChartColumn} />
                  },
                  {
                      "label": "Filter Skills of Employees",
                      "path": "/kfilter",
                      "icon": <FontAwesomeIcon icon={faFilter} />
                  }
              ]
          }
      ]
  },
  {
      "label": "Settings",
      "icon": <FontAwesomeIcon icon={faUserGear} />,
      "children": [
          {
              "label": "Customize Attributes",
              "path": "/customize",
              "icon": <FontAwesomeIcon icon={faBarChart} />
          },
          {
              "label": "User Management",
              "icon": <FontAwesomeIcon icon={faUsers} />,
              "children": [
                  {
                      "label": "Users",
                      "path": "/control/user/users",
                      "icon": <FontAwesomeIcon icon={faUser} />
                  },
                  {
                      "label": "Teams",
                      "path": "/control/user/teams",
                      "icon": <FontAwesomeIcon icon={faUsers} />
                  }
              ]
          },
          {
              "label": "Access Management",
              "icon": <FontAwesomeIcon icon={faUniversalAccess} />,
              "children": [
                  {
                      "label": "Profiles",
                      "path": "/profile",
                      "icon": <FontAwesomeIcon icon={faFaceGrin} />
                  },
                  {
                      "label": "Labels",
                      "path": "/labels",
                      "icon": <FontAwesomeIcon icon={faFaceGrin} />
                  },
                  {
                      "label": "Limit Votes",
                      "path": "/limit-vote",
                      "icon": <FontAwesomeIcon icon={faFaceGrin} />
                  }
              ]
          },
          {
              "label": "Licence",
              "path": "/control/license/licenses",
              "icon": <FontAwesomeIcon icon={faIdCard} />
          }
      ]
  }
];
const Layout = ({ children }) => {
    return (
        <>
            <div className='flex flex-auto h-screen'>
                <Sidebar  Menu = {sidebarItems}/>
            </div>
        </>
    )
}

export default Layout
