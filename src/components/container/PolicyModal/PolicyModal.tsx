import React from 'react';
import UiModal from "@/components/ui/UiModal/UiModal";
import s from './PolicyModal.module.scss';

interface Props {
    isShow: boolean,
    setClose: () => void;
}

const PolicyModal: React.FC<Props> = ({ isShow, setClose }) => {
    return (
        <UiModal
            isShow={isShow}
            setClose={setClose}
            title={'Обработка данных'}
            classNames={s.modal}
            content={<>
                <ul>
                    <li className={'mb-6'}>
                        <h3 className={'mb-4'}><b>1. Что регулирует настоящая политика конфиденциальности</b></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque eligendi eos esse fugiat impedit laborum maiores quae reiciendis vero. Ab, ad assumenda at blanditiis consequuntur corporis cum, cumque cupiditate debitis delectus distinctio dolore dolorum ducimus error et iusto laudantium libero minus molestias neque nostrum, nulla numquam odio omnis pariatur placeat quas quibusdam quidem rem veritatis. Accusantium ad aliquid architecto asperiores assumenda dignissimos dolores eos error, et eveniet excepturi fuga fugit illo impedit laboriosam magni mollitia nobis possimus praesentium quam quibusdam repellendus tempora tempore totam ullam vel voluptas voluptate. A adipisci aliquid aperiam atque consequatur dignissimos doloremque eos ex iste, iure maiores nostrum perferendis placeat quas quasi repellat sed soluta. Animi commodi consequuntur facere impedit nihil, nisi, numquam provident quisquam rerum, similique tempore ullam veniam? Ab alias aspernatur consequuntur corporis dignissimos, est hic, iure minus nemo nesciunt odit repellendus repudiandae similique, sit unde vel velit. Architecto at autem consequuntur corporis, delectus, fuga molestiae numquam, odit rem reprehenderit unde ut? Asperiores assumenda, blanditiis commodi delectus ducimus explicabo incidunt inventore ipsa iusto nulla ullam voluptate. Aliquid aperiam architecto delectus doloribus in maxime numquam provident soluta. Aspernatur consequatur cumque dignissimos est et, facere incidunt inventore maiores maxime molestias porro qui sapiente similique vel?</p>
                    </li>
                    <li className={'mb-6'}>
                        <h3 className={'mb-4'}><b>2. Кто обрабатывает информацию</b></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi autem beatae deserunt dolores ducimus eaque eligendi ex fugit harum hic labore, magnam quasi quia, quidem quod rem rerum sint sunt tempora ullam vitae, voluptatibus. At deserunt earum excepturi, harum, id in ipsam itaque labore laboriosam magnam nam odit, officia repellendus rerum sit? Esse magni obcaecati sunt! Asperiores, impedit, ut! Aliquid, amet at aut, autem corporis, cupiditate deserunt eius eligendi eos fugiat fugit harum illum impedit iste iure labore magni nam odio optio provident quasi quia repellendus rerum sapiente sed sunt tempore! Cum deleniti ducimus expedita nihil odio, officia veritatis.</p>
                    </li>
                    <li className={'mb-6'}>
                        <h3 className={'mb-4'}><b>3. Какова цель данной Политики</b></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aliquid aut consequatur consequuntur cupiditate deserunt dicta doloribus eveniet exercitationem harum incidunt ipsam natus necessitatibus nobis quo sed sint sunt, unde vitae. Asperiores culpa cum fugit ipsum pariatur reiciendis vitae. Consequuntur earum impedit iste odio quibusdam. Fuga labore ut voluptate.</p>
                    </li>
                </ul>
            </>}
        />
    );
};

export default PolicyModal;
