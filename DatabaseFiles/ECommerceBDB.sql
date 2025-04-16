--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

-- Started on 2025-04-16 11:53:59

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
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
-- TOC entry 220 (class 1259 OID 16469)
-- Name: ItemListings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ItemListings" (
    "ListingID" integer NOT NULL,
    "OwnerUserID" integer,
    "ItemWanted" integer,
    "ItemWantedAmount" integer,
    "ItemToGive" integer,
    "ItemToGiveAmount" integer,
    "InTransaction" boolean,
    "PartnerUserID" integer
);


ALTER TABLE public."ItemListings" OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16468)
-- Name: Item Listings_ListingID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."ItemListings" ALTER COLUMN "ListingID" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public."Item Listings_ListingID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 222 (class 1259 OID 16487)
-- Name: Items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Items" (
    "ItemID" integer NOT NULL,
    "Name" character varying(100),
    "Description" character varying(200)
);


ALTER TABLE public."Items" OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16486)
-- Name: Items_ItemID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Items" ALTER COLUMN "ItemID" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public."Items_ItemID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 224 (class 1259 OID 16503)
-- Name: Transactions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Transactions" (
    "TransactionID" integer NOT NULL,
    "Item1" integer,
    "Item2" integer,
    "Party1" integer,
    "Party2" integer,
    "Started" boolean,
    "Ended" boolean,
    "HashKey" character varying(50),
    "CollectedFunds" integer,
    "Party1Partner" integer,
    "Party2Partner" integer
);


ALTER TABLE public."Transactions" OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16502)
-- Name: Transactions_TransactionID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Transactions" ALTER COLUMN "TransactionID" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Transactions_TransactionID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 217 (class 1259 OID 16437)
-- Name: users_userid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_userid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_userid_seq OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16462)
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    "UserID" integer DEFAULT nextval('public.users_userid_seq'::regclass) NOT NULL,
    "UserName" character varying(100),
    "Password" character varying(100),
    "PhoneNumber" character varying(12),
    "Address" character varying(100),
    "Email" character varying(100),
    "AdminPermission" boolean
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- TOC entry 4924 (class 0 OID 16469)
-- Dependencies: 220
-- Data for Name: ItemListings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ItemListings" ("ListingID", "OwnerUserID", "ItemWanted", "ItemWantedAmount", "ItemToGive", "ItemToGiveAmount", "InTransaction", "PartnerUserID") FROM stdin;
\.


--
-- TOC entry 4926 (class 0 OID 16487)
-- Dependencies: 222
-- Data for Name: Items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Items" ("ItemID", "Name", "Description") FROM stdin;
\.


--
-- TOC entry 4928 (class 0 OID 16503)
-- Dependencies: 224
-- Data for Name: Transactions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Transactions" ("TransactionID", "Item1", "Item2", "Party1", "Party2", "Started", "Ended", "HashKey", "CollectedFunds", "Party1Partner", "Party2Partner") FROM stdin;
\.


--
-- TOC entry 4922 (class 0 OID 16462)
-- Dependencies: 218
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" ("UserID", "UserName", "Password", "PhoneNumber", "Address", "Email", "AdminPermission") FROM stdin;
1	string	AQAAAAIAAYagAAAAEL6xFBkbUZUDqYjQTlL97VGbUL2h+VD/apGDm5T2BC1pNTBY4Yz3A6Efzf+SHZ6GNw==	string	string	string	t
\.


--
-- TOC entry 4934 (class 0 OID 0)
-- Dependencies: 219
-- Name: Item Listings_ListingID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Item Listings_ListingID_seq"', 2, true);


--
-- TOC entry 4935 (class 0 OID 0)
-- Dependencies: 221
-- Name: Items_ItemID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Items_ItemID_seq"', 1, false);


--
-- TOC entry 4936 (class 0 OID 0)
-- Dependencies: 223
-- Name: Transactions_TransactionID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Transactions_TransactionID_seq"', 1, false);


--
-- TOC entry 4937 (class 0 OID 0)
-- Dependencies: 217
-- Name: users_userid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_userid_seq', 1, true);


--
-- TOC entry 4761 (class 2606 OID 16473)
-- Name: ItemListings Item Listings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ItemListings"
    ADD CONSTRAINT "Item Listings_pkey" PRIMARY KEY ("ListingID");


--
-- TOC entry 4763 (class 2606 OID 16491)
-- Name: Items Items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Items"
    ADD CONSTRAINT "Items_pkey" PRIMARY KEY ("ItemID");


--
-- TOC entry 4765 (class 2606 OID 16507)
-- Name: Transactions Transactions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Transactions"
    ADD CONSTRAINT "Transactions_pkey" PRIMARY KEY ("TransactionID");


--
-- TOC entry 4759 (class 2606 OID 16476)
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("UserID");


--
-- TOC entry 4770 (class 2606 OID 16508)
-- Name: Transactions Item1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Transactions"
    ADD CONSTRAINT "Item1" FOREIGN KEY ("Item1") REFERENCES public."Items"("ItemID");


--
-- TOC entry 4771 (class 2606 OID 16513)
-- Name: Transactions Item2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Transactions"
    ADD CONSTRAINT "Item2" FOREIGN KEY ("Item2") REFERENCES public."Items"("ItemID");


--
-- TOC entry 4766 (class 2606 OID 16497)
-- Name: ItemListings ItemToGive; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ItemListings"
    ADD CONSTRAINT "ItemToGive" FOREIGN KEY ("ItemToGive") REFERENCES public."Items"("ItemID") NOT VALID;


--
-- TOC entry 4767 (class 2606 OID 16492)
-- Name: ItemListings ItemWanted; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ItemListings"
    ADD CONSTRAINT "ItemWanted" FOREIGN KEY ("ItemWanted") REFERENCES public."Items"("ItemID") NOT VALID;


--
-- TOC entry 4768 (class 2606 OID 16481)
-- Name: ItemListings OwnerUserID; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ItemListings"
    ADD CONSTRAINT "OwnerUserID" FOREIGN KEY ("OwnerUserID") REFERENCES public."Users"("UserID") NOT VALID;


--
-- TOC entry 4769 (class 2606 OID 16528)
-- Name: ItemListings PartnerUserID; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ItemListings"
    ADD CONSTRAINT "PartnerUserID" FOREIGN KEY ("PartnerUserID") REFERENCES public."Users"("UserID") NOT VALID;


--
-- TOC entry 4772 (class 2606 OID 16518)
-- Name: Transactions Party1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Transactions"
    ADD CONSTRAINT "Party1" FOREIGN KEY ("Party1") REFERENCES public."Users"("UserID");


--
-- TOC entry 4773 (class 2606 OID 16533)
-- Name: Transactions Party1Partner; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Transactions"
    ADD CONSTRAINT "Party1Partner" FOREIGN KEY ("Party1Partner") REFERENCES public."Users"("UserID") NOT VALID;


--
-- TOC entry 4774 (class 2606 OID 16523)
-- Name: Transactions Party2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Transactions"
    ADD CONSTRAINT "Party2" FOREIGN KEY ("Party2") REFERENCES public."Users"("UserID");


--
-- TOC entry 4775 (class 2606 OID 16538)
-- Name: Transactions Party2Partner; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Transactions"
    ADD CONSTRAINT "Party2Partner" FOREIGN KEY ("Party2Partner") REFERENCES public."Users"("UserID") NOT VALID;


-- Completed on 2025-04-16 11:53:59

--
-- PostgreSQL database dump complete
--

