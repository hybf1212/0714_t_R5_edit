import React from 'react'


const Contents = () => {
    return(
        <>
            <section id='contents' className='container'>
                <div className='mainimg'>
                    <img src="./img/R5-mainimg.png" alt="" />
                </div>
                <div>
                    {/* content-1 */}
                    <div className='con-title text-center'>
                        <div className='mb-4'>
                            <h2>올인원 타워</h2>
                            <p>손 대지 않아도 알아서 척척<br></br>먼지통 속 먼지 처리와 충전 모두 자동으로</p>
                        </div>
                        <div>
                            <img src="./img/contentsimg/allinone.gif" alt="올인원타워" />
                        </div>
                        <div className='con-comp d-flex justify-content-center align-items-center'>
                            <div>
                                <img src="./img/contentsimg/dust-uvc.gif" alt="먼지필터" />
                            </div>
                            <div className='con-comp-text'>
                                <h3>청소한 먼지까지 깔끔하게</h3>
                                <p>고성능 미세먼지 차단 시스템과<br></br>UVC LED로<br></br>먼지 봉투 내부의 먼지까지<br></br>위생적으로 관리합니다.</p>
                            </div>
                        </div>
                    </div>
                    {/* content-2 */}
                    <div className='con-title text-center'>
                        <div className='mb-4'>
                            <h2>라이다 센서</h2>
                            <p>자율주행 자동차에 사용되는<br></br>라이다 센서 탑재로<br></br>더욱 정밀하고 꼼꼼한 청소</p>
                        </div>
                        <div>
                            <img src="./img/contentsimg/lidar-sensor.png" alt="라이다센서" />
                        </div>
                        <div className='con-comp row justify-content-center align-items-center'>
                            <div className='col-5 cliff-sensor'>
                                <img src="./img/contentsimg/cliff-sensor.gif" alt="낭떠러지센서" />
                            </div>
                            <div className='con-comp-text-2 col-5'>
                                <h3>망설임 없는 주행</h3>
                                <p>범퍼 센서, 라이다 눌림 센서,<br></br>낭떠러지 센서가 경로의 장애물을 인식하고<br></br>사이드 브러시가 구석구석 남김없이 청소하여<br></br>빠르고 완벽한 청소를 수행합니다.</p>
                            </div>
                            <div className='col-5 mt-5'>
                                <img src="./img/contentsimg/bumper-sensor1.png" alt="범퍼센서1" />
                            </div>
                            <div className='col-5 mt-5'>
                                <img src="./img/contentsimg/bumper-sensor2.png" alt="범퍼센서2" />
                            </div>
                        </div>
                    </div>
                    {/* content-3 */}
                    <div className='con-title text-center'>
                        <div className='mb-4'>
                            <h2>물걸레, 먼지 동시 청소</h2>
                            <p>시간과 청결 모두 잡은 기술력<br></br>물걸레와 먼지 청소를 한번에</p>
                        </div>
                        <div>
                            <img src="./img/contentsimg/water-clean.png" alt="물걸레" />
                        </div>
                        <div className='con-comp row justify-content-center align-items-center'>
                            <div className='col-5 cliff-sensor'>
                                <img src="./img/contentsimg/4step-power.gif" alt="4단계흡입" />
                            </div>
                            <div className='con-comp-text-2 col-5'>
                                <h3>더욱 더 섬세하게</h3>
                                <p>4단계 흡입 세기 조절로<br></br>어떠한 상황에서도 섬세한 청소가 가능하며<br></br>스마트 터보 기능으로 환경에 따라<br></br>흡입 세기를 조절하여<br></br>청소가 어려운 표면 위에서도<br></br>손쉬운 청소가 가능합니다.</p>
                            </div>
                            <div className='con-comp-text-2 col-5'>
                                <h3>자동 물 공급 시스템</h3>
                                <p>펌프가 물을 자동으로 물걸레에<br></br>공급해주어 더욱 편리한 청소가 가능합니다.<br></br>또한 4단계로 조절이 가능하며<br></br>280ml의 대용량 물통으로<br></br>넓은 공간까지 무리없이 청소합니다.</p>
                            </div>
                            <div className='col-5 mt-5'>
                                <img src="./img/contentsimg/auto-water.png" alt="자동물충전" />
                            </div>
                        </div>
                    </div>
                    {/* content-4 */}
                    <div className='con-title text-center'>
                        <div className='mb-4'>
                            <h2>LG ThinQ</h2>
                            <p>LG ThinQ 어플을 통해<br></br>기본적인 조작은 물론, 금지구역을 설정하거나<br></br>원하는 구역만 청소하도록 설정할 수 있습니다.</p>
                        </div>
                        <div>
                            <img src="./img/contentsimg/LG-ThinQ.png" alt="LGThinQ" />
                        </div>
                        <div className='con-comp d-flex justify-content-center align-items-center'>
                            <div>
                                <img src="./img/contentsimg/LG-ThinQ-voice.png" alt="음성인식" />
                            </div>
                            <div className='con-comp-text'>
                                <h3>음성인식으로 더욱 편하게</h3>
                                <p>음성인식 스피커 Google home, Alexa,<br></br>네이버 클로바와 연동이 가능합니다.<br></br>청소 시작부터 종료까지<br></br>음성으로 편하게 사용하세요.</p>
                            </div>
                        </div>
                    </div>
                    {/* detail-spec */}
        
                </div>
                
            </section>
        
            
        </>
    )
}

export default Contents