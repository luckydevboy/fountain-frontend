import { Categories, Collections, Hero, MiniHero } from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <MiniHero
        title="Level up your desk"
        description="Make your desk beautiful and organized. Post a picture to social media
          and watch it get more likes than life-changing announcements. Reflect
          on the shallow nature of existence. At least you have a really nice
          desk setup."
        imgSrc="/images/home-page-01-feature-section-01.jpeg"
        buttonTitle="Shop Workspace"
      />
      <Collections />
      <MiniHero
        title="Simple productivity"
        description="Endless tasks, limited hours, a single piece of paper. Not really a
            haiku, but we&#39;re doing our best here. No kanban boards, burndown
            charts, or tangled flowcharts with our Focus system. Just the
            undeniable urge to fill empty circles."
        imgSrc="/images/home-page-01-feature-section-02.jpeg"
        buttonTitle="Shop focus"
      />
    </main>
  );
}
