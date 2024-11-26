import React, { useState } from 'react';
import '../Styles/Student Platform/StudentPlatform.css';

import MainPageContainer from '../Components/Main/MainPageContainer';
import ContentCard from '../Components/Main/ContentCard';

import fadedlogo from '../Images/FadedLogo.png';
import show from '../Images/show.svg';
import hide from '../Images/hide.svg';
import teams from '../Images/teams.svg';
import office365 from '../Images/office365.svg';
import pdfIcon from '../Images/pdf.svg';
import liveIcon from '../Images/live.svg';
import recordedIcon from '../Images/recorded.svg';
import supportImage from '../Images/support.svg';

function StudentPlatform() {

  const [password, setPassword] = useState('1234566'); // Example password
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [selectedLectureType, setSelectedLectureType] = useState('المحاضرات المسجلة');

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const renderPassword = isPasswordVisible ? password : '-'.repeat(password.length);

  const lectures = {
    'المحاضرات المسجلة': [
      {
        order: 'المحاضرة الخامسة',
        type: 'recorded',
        courseName: 'تصميم تجربة المستخدم',
      },
      {
        order: 'المحاضرة الخامسة',
        type: 'recorded',
        courseName: 'تصميم واجهات المستخدم',
      },
      {
        order: 'المحاضرة الخامسة',
        type: 'recorded',
        courseName: 'إدارة الأعمال',
      },
      {
        order: 'المحاضرة الخامسة',
        type: 'recorded',
        courseName: 'تحليل البيانات',
      },
      {
        order: 'المحاضرة الخامسة',
        type: 'recorded',
        courseName: 'تحليل البيانات',
      },{
        order: 'المحاضرة الخامسة',
        type: 'recorded',
        courseName: 'تحليل البيانات',
      },{
        order: 'المحاضرة الخامسة',
        type: 'recorded',
        courseName: 'تحليل البيانات',
      },{
        order: 'المحاضرة الخامسة',
        type: 'recorded',
        courseName: 'تحليل البيانات',
      },
    ],
    'المحاضرات المباشرة': [
      {
        order: 'المحاضرة الخامسة',
        type: 'live',
        courseName: 'تصميم الجرافيك',
      },
      {
        order: 'المحاضرة الخامسة',
        type: 'live',
        courseName: 'تحليل البيانات',
      },
    ]
  };


  return (
    <>
      <MainPageContainer>
        <div className='student-platform-container'>
          <div className='student-right-container'>
            {/* Student Card */}
            <ContentCard>
              <div className='student-info-card'>
                <img src={fadedlogo} alt='fadedlogo' className='fadedlogo'/>
                <div className='student-info'> 
                  <h1 className='name'>أهلاً عائشة محمد </h1>
                  <h3 className='course-name'>برنامج الدبلوم المتوسط في التصميم المرئي</h3>
                  <p className='student-details-title'>البيانات الأكاديمية :</p>
                  <ul className='details-list'>
                    <li className='details-item'>رقم الطالب : 000000</li>
                    <li className='details-item'><span> البريد اللأكاديمى: </span><span>aaaa@anansacademy.uk</span></li>
                    <li className='details-item'>
                      <span>كلمة المرور : </span>
                      <span>{renderPassword}</span>
                      <span className="eye" onClick={togglePasswordVisibility}>
                        {isPasswordVisible ?  <img src={hide} alt='hide' className='eye'/> :   <img src={show} alt='show' className='eye'/> }
                      </span>                    
                    </li>
                  </ul>
                </div>
              </div>
            </ContentCard>
            <div className='student-right-bottom-container'>
              <div className='general-info'>
                <div className='apps'>
                  {/* Teams */}
                <ContentCard>
                  <div className='app-card'>
                    <img src={teams} alt='teams' className='app-icon'/>
                    <span className='app-name'>Microsoft teams</span>
                    <span className='app-desc'>منصة الحضور لجميع المحاضرات</span>
                    <button className='app-button'>تنزيل التطبيق</button>
                  </div>
                </ContentCard>
                {/* Office365 */}
                <ContentCard>
                  <div className='app-card'>
                    <img src={office365} alt='office365' className='app-icon'/>
                    <span className='app-name'>Microsoft office365</span>
                    <span className='app-desc'> الوصول لجميع برامج الأوفيس الخاصة بك</span>
                    <button className='app-button'>تسجيل الدخول</button>
                  </div>
                </ContentCard>
                </div>
                {/* Pdfs */}
                <ContentCard>
                  <div className='pdfs-card'>
                    <span className='pdf-card-title'>ملفات مهمة :</span>
                    <ul className='pdfs-list'>
                      <li className='pdf-item'><img src={pdfIcon} alt='pdfIcon' className='pdf-icon'/><span className='pdf-name'> دليل استخدام مايكروسفت تيمز </span></li>
                      <li className='pdf-item'><img src={pdfIcon} alt='pdfIcon' className='pdf-icon'/><span className='pdf-name'>Download Microsoft Teams-EN </span></li>
                      <li className='pdf-item'><img src={pdfIcon} alt='pdfIcon' className='pdf-icon'/><span className='pdf-name'>دليل برنامج أوتلوك Outlook </span></li>
                      <li className='pdf-item'><img src={pdfIcon} alt='pdfIcon' className='pdf-icon'/><span className='pdf-name'> Outlook Guidance-EN </span></li>
                      <li className='pdf-item'><img src={pdfIcon} alt='pdfIcon' className='pdf-icon'/><span className='pdf-name'> دليل استخدام ون درايف One Drive</span></li>
                      <li className='pdf-item'><img src={pdfIcon} alt='pdfIcon' className='pdf-icon'/><span className='pdf-name'> One Drive Guidance-EN </span></li>
                    </ul>
                  </div>
                </ContentCard>
              </div>
              {/* Calendar */}
              <ContentCard>
                <div className='calendar-card'>
                  vdfv
                </div>
              </ContentCard>
            </div>
          </div>
          <div className='student-left-container'>
            {/* Schedule */}
            <ContentCard>
              <div className='schedule-card'>
                <p className='schedule-title'>الجدول الأسبوعي</p>
                <div className='lecture-types'>
                  {/* Lecture Type Tabs */}
                  {Object.keys(lectures).map((type) => (
                    <p
                      key={type}
                      className={`lecture-type ${type === selectedLectureType ? 'active' : ''}`}
                      onClick={() => setSelectedLectureType(type)}
                    >
                      {type}
                    </p>
                  ))}
                </div>
                {/* Lecture List */}
                <div className='lecture-list-container'>
                  <ul className='lecture-list'>
                  {lectures[selectedLectureType].map((lecture, index) => (
                    <li key={index} className='lecture-item'>
                      <div className='lecture-info'>
                        <img
                          src={lecture.type === 'live' ? liveIcon : recordedIcon}
                          alt={lecture.type}
                          className='lecture-icon'
                        />
                        <div className='lecture-details'>
                          <span className='lecture-order'>{`${lecture.order}`}</span>
                          <span className='lecture-course'>{`${lecture.courseName}`}</span>
                        </div>
                      </div>
                      <span className='course-name'>{lecture.course}</span>
                      <button className='lecture-button'>الذهاب للمحاضرة</button>
                    </li>
                  ))}
                  </ul>
                </div> 
              </div>
            </ContentCard>
            {/* Support */}
            <ContentCard>
              <div className='support-card'>
                  <img src={supportImage} alt='supportImage' className='support-image' />
                  <div className='support-details'>
                    <span className='support-title'>واجهتك  مشكلة في المنصة ؟ </span>
                    <span className='support-desc'>لا تتردد بالتواصل معنا وفريقينا جاهز لمساعدتك بأي شي تحتاجه</span>
                    <div className='support-buttons-container'>
                      <button className='support-button'>تقديم طلب جديد</button>
                      <button className='support-button'>متابعة طلب سابق</button>
                    </div>
                  </div>
              </div>
            </ContentCard>
          </div>
        </div>
      </MainPageContainer>
    </>
  );
}

export default StudentPlatform;