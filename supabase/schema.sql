-- Supabase SQL schema for FlowLearn (users, profiles, subjects, chapters, quizzes, attempts)
create table profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users (id),
  full_name text,
  class smallint,
  board text,
  created_at timestamptz default now()
);

create table subjects (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  class smallint not null,
  board text not null,
  created_at timestamptz default now()
);

create table chapters (
  id uuid primary key default gen_random_uuid(),
  subject_id uuid references subjects(id),
  title text not null,
  order_no int default 0,
  ncert_link text,
  created_at timestamptz default now()
);

create table quizzes (
  id uuid primary key default gen_random_uuid(),
  chapter_id uuid references chapters(id),
  title text,
  difficulty text,
  metadata jsonb,
  created_at timestamptz default now()
);

create table questions (
  id uuid primary key default gen_random_uuid(),
  quiz_id uuid references quizzes(id),
  question_text text,
  options jsonb,
  correct_index int,
  explanation text
);

create table attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id),
  quiz_id uuid references quizzes(id),
  score numeric,
  time_taken int,
  created_at timestamptz default now()
);
