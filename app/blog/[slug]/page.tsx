type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return [
    { slug: "post-1" },
    { slug: "post-2" },
    { slug: "hello-world" },
  ];
}

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return <><h1>Slug: {params.slug}</h1>
  <p>Hole Tex</p>
  <p>Welcome to HCM</p>
  </>
}
