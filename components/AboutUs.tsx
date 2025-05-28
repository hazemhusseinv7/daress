import Video from "next-video";
import aboutUs from "@/videos/about-us.mp4";

const AboutUs = () => {
  return (
    <section id="about-us" className="mt-32">
      <div className="max-w-[40rem] mx-auto text-center px-8">
        <div className="flex justify-center items-center">
          <h2 className="font-bold text-5xl md:text-8xl mb-4 text-main-color-1">
            من نحن
          </h2>
        </div>

        <div className="flex flex-col gap-1 font-light text-main-color-3">
          <span>
            مركز بحثيُّ له مجموعة من الإصدارات المعرفية والتاريخية المتعلقة
            بتراجم الأعلام يطمح للريادة في الصناعة المعرفية المبتكرة.
          </span>
          <span>
            متخصص بتقديم كل الخدمات المتعلقة بالأبحاث والكتب والرسائل الجامعية.
          </span>
          <span>
            يسعى لبناء المهارات والإثراء المعرفي محلقا إلى آفاق بعيدة.
          </span>
          <span>
            يسعى إلى بناء مجتمع بحثي عبر تنمية المهارات البحثية وصقل الشخصيات
            العلمية.
          </span>
          <span>
            نجمع الصدق مع الإجادة، وضوح الهدف مع خيالٍ يتدفقُ في كل اتجاه.
          </span>
        </div>
      </div>
      <div dir="ltr">
        <Video
          src={aboutUs}
          className="max-w-4/5 md:max-w-2/3 mx-auto mt-20"
          style={{
            "--media-primary-color": "var(--main-color-2)",
            "--media-secondary-color": "var(--main-color-3)",
            "--media-accent-color": "var(--main-color-1)",
          }}
        />
      </div>
    </section>
  );
};

export default AboutUs;
