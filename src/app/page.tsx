import s from './page.module.scss';
import imagePath from "@/helper/imagePath";
import cn from "clsx";
import PageLayout from "@/components/PageLayout";
import UiButton from "@/components/ui/UiButton/UiButton";
import Cards from "@/components/container/Cards/Cards";
import Header from "@/components/container/Header/Header";

export default function Home() {
  return (
    <PageLayout header={<Header />}>
        <div className={s.hero}>
            <picture>
                <source srcSet={imagePath('a-mobile.jpg')} media={'(max-width: 767px)'} />
                <source srcSet={imagePath('a-tablet.jpg')} media={'(max-width: 1023px)'} />
                <img className={s.hero__bg} src={imagePath('a1.jpg')} alt=""/>
            </picture>
            <div className={cn(s.hero__contain, 'container')}>
                <div className={s.hero__content}>
                    <h1 className={s.hero__mainTitle}>
                        Сериал Ведьмак
                    </h1>
                    <p>
                        Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации, идет навстречу своей судьбе в неспокойном мире, где люди часто оказываются куда коварнее чудовищ.
                    </p>
                </div>
                <UiButton color={'red'} link={true} href={'#'}>
                    Смотреть сериал
                </UiButton>
            </div>
        </div>
        <Cards />
    </PageLayout>
  );
}
