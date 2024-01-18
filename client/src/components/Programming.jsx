import "../style/Programming.css"
import MernCard from "../components/MernCard"
import Python from "../assets/python2.png"
import SQL from "../assets/sql.png"
import Django from "../assets/django.png"
import MySQL from "../assets/MySQL-Logo.jpg"
import ProgrammingGroup from "../assets/programming-group.png"

export default function Additional(){
    return (
        <>
        <div className="programming-container">
            <div className="programming-header">
                <h1>Data + Programming Capabilities</h1>
            </div>

            <div className="programming-summary">
                <p>Leveraging an in-depth understanding of Python and SQL, I architect and implement comprehensive database systems that ensure robust security and high performance. My approach integrates the Django framework and MySQL, enabling me to devise program logic and data solutions that are both scalable and meticulously safeguarded.</p>
            </div>

            <div className="programming-group">
                <img src={ProgrammingGroup}></img>
            </div>

            <div className="programming-body">
               <MernCard 
               title="Python"
               logo={Python}
               description="I have a strong grasp of Python fundamentals, including data structures, control flow, and essential libraries."
        
               />
               <MernCard 
               title="SQL"
               logo={SQL}
               description="I am skilled in SQL database management, capable of writing queries, building and optimizing databases, and ensuring data integrity across relational databases."
               />
               <MernCard 
               title="Django"
               logo={Django}
               description="I leverage the Django framework for scalable web applications, efficient database interactions, and robust security for application protection."
             
               />
               <MernCard 
               title="MySQL"
               logo={MySQL}
               description="I am adept at leveraging MySQL to craft efficient queries, optimize database performance, and uphold data integrity within relational database systems."
               />
            </div>
        </div>
        </>
    )
}