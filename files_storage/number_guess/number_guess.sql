--
-- PostgreSQL database dump
--

-- Dumped from database version 12.17 (Ubuntu 12.17-1.pgdg22.04+1)
-- Dumped by pg_dump version 12.17 (Ubuntu 12.17-1.pgdg22.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE number_guess;
--
-- Name: number_guess; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE number_guess WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE number_guess OWNER TO freecodecamp;

\connect number_guess

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: users; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    username character varying(22) NOT NULL,
    games_played integer DEFAULT 0 NOT NULL,
    best_game integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.users OWNER TO freecodecamp;

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_id_seq OWNER TO freecodecamp;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.users VALUES (26, 'user_1738517547192', 2, 54);
INSERT INTO public.users VALUES (2, 'user_1738516252111', 2, 86);
INSERT INTO public.users VALUES (25, 'user_1738517547193', 5, 12);
INSERT INTO public.users VALUES (1, 'user_1738516252112', 5, 106);
INSERT INTO public.users VALUES (4, 'user_1738516471941', 2, 621);
INSERT INTO public.users VALUES (3, 'user_1738516471942', 5, 208);
INSERT INTO public.users VALUES (28, 'user_1738517667963', 2, 173);
INSERT INTO public.users VALUES (6, 'user_1738516832021', 2, 494);
INSERT INTO public.users VALUES (27, 'user_1738517667964', 5, 14);
INSERT INTO public.users VALUES (5, 'user_1738516832022', 5, 211);
INSERT INTO public.users VALUES (8, 'user_1738516915009', 2, 406);
INSERT INTO public.users VALUES (30, 'user_1738517760188', 2, 343);
INSERT INTO public.users VALUES (7, 'user_1738516915010', 5, 34);
INSERT INTO public.users VALUES (29, 'user_1738517760189', 5, 402);
INSERT INTO public.users VALUES (10, 'user_1738516948059', 2, 323);
INSERT INTO public.users VALUES (9, 'user_1738516948060', 5, 43);
INSERT INTO public.users VALUES (11, 'user_1738517088181', 0, 0);
INSERT INTO public.users VALUES (12, 'user_1738517088180', 0, 0);
INSERT INTO public.users VALUES (13, 'user_1738517131575', 0, 0);
INSERT INTO public.users VALUES (14, 'user_1738517131574', 0, 0);
INSERT INTO public.users VALUES (15, 'user_1738517199727', 0, 0);
INSERT INTO public.users VALUES (16, 'user_1738517199726', 0, 0);
INSERT INTO public.users VALUES (17, 'user_1738517215265', 0, 0);
INSERT INTO public.users VALUES (18, 'user_1738517215264', 0, 0);
INSERT INTO public.users VALUES (19, 'user_1738517332415', 0, 0);
INSERT INTO public.users VALUES (20, 'user_1738517332414', 0, 0);
INSERT INTO public.users VALUES (22, 'user_1738517492740', 2, 648);
INSERT INTO public.users VALUES (32, 'user_1738517763712', 2, 208);
INSERT INTO public.users VALUES (21, 'user_1738517492741', 5, 279);
INSERT INTO public.users VALUES (31, 'user_1738517763713', 5, 385);
INSERT INTO public.users VALUES (24, 'user_1738517511945', 2, 344);
INSERT INTO public.users VALUES (23, 'user_1738517511946', 5, 50);
INSERT INTO public.users VALUES (34, 'user_1738517940565', 2, 775);
INSERT INTO public.users VALUES (33, 'user_1738517940566', 5, 213);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.users_user_id_seq', 34, true);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- PostgreSQL database dump complete
--

