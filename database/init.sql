-- Insert roles in the roles table. The ids are manually set.
INSERT INTO admin.roles (role_id, name)
VALUES (1, 'admin'), (2, 'user');

-- Insert a set of users into the database
INSERT INTO users.users(email, password)
VALUES
('amyhaynes@gmail.com', '$2b$10$22cQRgA6kdaoSWHAIaKFC.VLaF0joQQTOLikvOnBhHsYrrVBUTGry'),
('asherman@yahoo.com', '$2b$10$6F2kGdOeE2iTaU0fpwAUtuW3GcNs8NgFBjN123pRKbXKTPsQBnHNW'),
('olsonrichard@gmail.com', '$2b$10$CyaUfzOe61i1EABOTNrWuuV7iLj9lRh1dtRfJSmnhMNPOWwFFQ7jG'),
('thompsonmelody@yahoo.com', '$2b$10$TNiTbAz7bBxq6.NnGeQi../TRF9SkJ193AEatcL8WYY1IROCdtWo6'),
('david42@yahoo.com', '$2b$10$hB9dh2rohQZrT1xsKfn01.bAmymr3I.1vbW7dHUF8dbKUctk6thUS'),
('james40@yahoo.com', '$2b$10$ArFxQJRPiDiQ4pYa4Ragb.dzfceGAingKKnWDh4/6i8zQ9CVYF6IS'),
('tburnett@yahoo.com', '$2b$10$FG6dRz5fYwcFIlaMVGSq0OTeZjXmfAlihbE/QB9kOa4S7v50R4QSy'),
('wellsjonathan@gmail.com', '$2b$10$ClEnOC8769k7X1.9xqib4udWgnhjvrZ0lXpRUfqomGB.AVmuyTOAi'),
('dunnsandy@yahoo.com', '$2b$10$lF7xuDvhJMr11xODRc3wF.uA3qjxTd5tyAoNYN/5FxJw8AkWgVEsO'),
('brandon25@hotmail.com', '$2b$10$aEXyQ/wOoF2nMvegYr13X./mEStollNMv82lm4IniCz8GbIjmzp0O'),
('carolyn99@yahoo.com', '$2b$10$AC4kmdUklVsT4l5ChroWjO3vMl6md6iO7EkR9zpjvrCLn4P7bJxpy'),
('leslie19@gmail.com', '$2b$10$prAuVerVrdlSKSFwbMX9beAqKg5EmbV3c0tn4fGLrxCTFNs6E/LD6'),
('john07@gmail.com', '$2b$10$HrUcNNMYxkWqfXZzOPgSg.o2XFedD8vSFN3eMTN/pmSuD0T8q5/PO'),
('bobbygonzalez@yahoo.com', '$2b$10$.qsCqVE6bCxifEavt9lQcOY7pErIEL8im/3vrQP/qNSY2gAJFg67.'),
('rhodeselizabeth@yahoo.com', '$2b$10$yNE6jxaIFvmEhvFa3KJkIuGqwmHOBR5qtNhut77zurU/2optvph.G'),
('lori04@yahoo.com', '$2b$10$ejgXKwjrkuOp6OZtVqmP.OmfVABW4JLMYs9GWb2hM5ZgaRcpjS5WS'),
('matthewssarah@gmail.com', '$2b$10$Swq876zblJrrzwrgGt4wMe5gE7wqJ2hdWaoBi6aJ1Jf.31kpiuo9K'),
('ecoffey@yahoo.com', '$2b$10$iXdMk4tb5uk3tFH1vMshDuz4SjU2w5ce8uPyNeuH5fVezEgPiytn6'),
('taylorgardner@hotmail.com', '$2b$10$QAUZDdh4IFAaauuHg18T7uFUzN52m2ZEKHoZWpQUHlhsdu7ASxnM.'),
('nguyenrachel@gmail.com', '$2b$10$4UMp89LvTtslHhjtVON.P.AqPtjTAbJFjfFv6HMombJF5i02.XlMa'),
('santiagomichael@yahoo.com', '$2b$10$WmCdZa352LoJUSmekp1VKOejNfR9EqHGmrfRvP7nXQh.ftPyu89Va'),
('hunterkennedy@gmail.com', '$2b$10$Rwtqm3mZAz7zr3aVWEFvhOtQPvKsxYUa.CwozErJMMvruDoKyTGS.'),
('ybarker@hotmail.com', '$2b$10$7YnbSKFvghCkEkQ2du5DEOLLB2oIhVcr.KL4Sx00WQcCAT.GmuU7e'),
('comptonheather@gmail.com', '$2b$10$2k42TTcmHZj1xHadOhlES.ZEZME7h4QE9wY7n2bHevDnhR4ruIeHG'),
('elizabeth08@yahoo.com', '$2b$10$98/KAiTuZWLoVmH9jQJv4ug7TpuY3XfKmpM5huUJU5Rc932KaowB2'),
('lisa47@gmail.com', '$2b$10$9RGTt0YgqPaqvEhRrIc1PeWY9JWCjFiMIsK5AJgAx0Sm8LrqWhoUe'),
('lford@gmail.com', '$2b$10$ecWNJmqO.SxCCfdPCghiauLP2N3/AMWHA.L0nGFi/ZfFsBZg8ORdK'),
('jacquelinebenson@yahoo.com', '$2b$10$Pv66fQ79Eir4vPqQTgeHZOgz0DFQFE6x0XBTd7booTDr87idx2bum'),
('yatesrobert@yahoo.com', '$2b$10$m77bqykqv4uZn5ZRKho43uFPpk2bPa2WfiObKij98ezyqhIostDU6'),
('ehendrix@yahoo.com', '$2b$10$GOuZieJ.qIb45c8y0sB//eVqfwRqrusyv/M4W9L0XjBmcCQ.qKdRO'),
('urobinson@yahoo.com', '$2b$10$ocuX7MeOyP/oTb0gesB31ui63ASGntUvLrmztvLYoailpvUd0eIyO'),
('jessica92@gmail.com', '$2b$10$WGk/W/lEQWPo824C0MrExO76MZY5vKwn2lMO70WBdV5360ODj06A2'),
('mendezbarbara@gmail.com', '$2b$10$VG0kbdN7O5f0cGZ.dQIbJeAH8.q1MM65Kg7qkdUdESA4sWA63cXfy'),
('michaelsuarez@yahoo.com', '$2b$10$L0OrWH8PzOOLWZGs3cRqy.hiwlqA0CMtcVujjaaoaOW9SQiN6a8gi'),
('jonesmary@gmail.com', '$2b$10$SlIN2JGQqPx71/7lcwPzN.LjS7Urnd.yh8oGW5Ewu4pnoBlom5YNm'),
('xgomez@hotmail.com', '$2b$10$n94D06Mh9lNK0IJBlHg1q.J0oPENsGMfYsRldDQJyITpnLc7vUbdy'),
('sherrywells@gmail.com', '$2b$10$PXnmBbi2oZNFLtd3d7aiaeQ.66fHuv428NQvwnVedsBY/vhvOZNia'),
('petersonbreanna@hotmail.com', '$2b$10$zwq8VEEfle48QXbw/..reOd7/.MM5s0O.ROqSddSQgH10RcsnNZw2'),
('karencarr@yahoo.com', '$2b$10$3qcE3w6DWI07ls7kmdwDBe2yML28JNqIZvjbWCQ29bEjO/fRxR4jm'),
('hmccoy@gmail.com', '$2b$10$h7Dl3OyPjB2kpsgAhlQeq.hSwhQPbU2.FR6KhNY/at57Ay5HrKZuq'),
('noah50@hotmail.com', '$2b$10$C2lMQ2KxFmWQO0ObcdyE0.pWFjdBybEEztvL4soyj90h6EXa3PIM2'),
('kscott@yahoo.com', '$2b$10$YJ/6pDPDwb2KxOGVm8Rwb.oswBHwAMn97CBOFZUNXBaZnbAx9Uy92'),
('jacqueline55@gmail.com', '$2b$10$EyWabGfCwhYVVhgUGVGP.OBgTsVkpj10dVJTgZ4UqvAJCmlugfIce'),
('jacobsanders@hotmail.com', '$2b$10$8T8FSwh8.PG9O55p85WDc.2/NWc1vc0TFtU19h.0ITJaICD8Y6A9S'),
('laura87@yahoo.com', '$2b$10$hUoXHPTD5VSZmH4NyJGGoO6x3p1nqq.u.6J8ijDybCMEqDKskLQoe'),
('lisachambers@yahoo.com', '$2b$10$7ixPtLYla7HKFMkeSpE9du0O2bFFQAF6/OgioombV3DvQL8GMt7.2'),
('katiestanley@yahoo.com', '$2b$10$iB1ScBvvQVp.vaLWxZp/b.41.GgoRkWwqMih5ORIy7Mblr6NVbava'),
('billygarcia@hotmail.com', '$2b$10$CFOkDxQxRrv2KG4mNljlj.WHtXrLjSY4C1Eh0v6QzzRxeLvcCXUH6'),
('utorres@yahoo.com', '$2b$10$6UOSJG/5Og3RkwrroOctcOYJpsy9YfmAP84CSdAszN8FAAxVYw/3u'),
('jason69@hotmail.com', '$2b$10$6PsXZDzvr5NKzdy.erLYge/S3BDoLouHEWzc/IHMoiSTrdfDhT6Am'),
('tammy43@yahoo.com', '$2b$10$JSrmA4UKk7UeI8a6ZE1BtOKLfswQZlQp/ymRO3wAkFl7r9WycfSmi'),
('robert04@yahoo.com', '$2b$10$uhlYEkVJwWhla1xRUBY.kOzCB71Yqza4gN/gY0WT0oXY19kFq2z1O'),
('jarvisvanessa@yahoo.com', '$2b$10$Mhq9WalmHdeiiuongA6vKO1l0XF4jf1XfLJEuQKqhtDo43WsPQnAy'),
('hamiltongeorge@gmail.com', '$2b$10$JT4kygqDjXCyiK6RkyQqTel9H.hUu728mmp3LiO6gJp9024qlvGjK'),
('ntyler@yahoo.com', '$2b$10$GkRLqcpyyb88yNMcmpHbVebKEfDZtt6ujLwAjHE5PNSROHLCIfLg2'),
('candace34@hotmail.com', '$2b$10$ukz/qdJFfXUm3aHClIrMLOTOTfxeYRs9gIi0khbXax6VtvLcBl5P2'),
('barbarahernandez@hotmail.com', '$2b$10$1OpW.z9GAw7nUWCZz2xHy..wQOh1CG1us2Ob/zY6KLRwhtMX6ftQ6'),
('luis23@yahoo.com', '$2b$10$lZ5PUWhSiLS/GLClGQHRuuQhJFH/3blK43C53wTBMhm7So/IK3nV6'),
('jeremy76@yahoo.com', '$2b$10$iWwQw3ERjH9Vb1hPReXg3O/ifQVbtlFdHyf5WYX7morkIIpa1rAgu'),
('brian22@gmail.com', '$2b$10$2m9yeJHigvzdbk/KSQmEtugBhwZVS2I9tEf8tn7.g3D7343yNktky'),
('nguyendawn@hotmail.com', '$2b$10$3zrCLx5Ni2GjoVMr9fYI..gNNZLH9OJbCGehOqo2Eb1/IjdyHFSNq'),
('sherry12@hotmail.com', '$2b$10$8pXhaf9An6IG9GUEyKmK4eDFLqT4BAnOM35ZRga..ptCZNQlTAjg6'),
('mwest@hotmail.com', '$2b$10$rDGggWDpEDskXiZCPGwM3.p3RJAwHG1yqkR7uIkp5aQtRb4fy90vC'),
('cantrelljoshua@yahoo.com', '$2b$10$RRN7.OVWcFcpzI/TD9t9o.GNzLpAfbLA2F1mRNrQgmQjRI7aouxxS'),
('jmoore@yahoo.com', '$2b$10$bR4ozF3ynNOJV8bVf7W1VO.5Fw94yLetLE2AEznD/VU3d9mfWCbMC'),
('elizabeth30@hotmail.com', '$2b$10$0Upddg7yxHz4q1kuFjcd1uerqDMUniq5xOzdZzZLKeEuSJaTwB.Ly'),
('weaverjessica@hotmail.com', '$2b$10$eDnaBL6yIiYhj1Icx2TnUubsgWShOXZ7joRMAIDv2SQZv5Z2dYzz.'),
('beckerdiane@yahoo.com', '$2b$10$F0I1IzQHqxT4C568KGMLyObe5HTBCOnSZtJsFLhSl5pHwbPBHinxa'),
('wboyer@gmail.com', '$2b$10$WD/2StihiUMVKBzIV87emedUOHjIyPcASj4tgg/umuV9dwc7/dAlq'),
('jrodriguez@hotmail.com', '$2b$10$rk9INtY/HuB4bpYQ6UpBaeRooXXsRaAzHq.CDlg9YSsalAUlWYptK'),
('btaylor@hotmail.com', '$2b$10$VucNF2nBtkdxInkrbZc3ruI.kDKz9PWIPtycRSuVC/2BEiAtF5sim'),
('albertturner@gmail.com', '$2b$10$iQ6xOAgyo.89n3WLgMO8geEsVU.UD2azSI2dmrsUbiJD5K4eDYZhe'),
('bradley83@gmail.com', '$2b$10$ZgZ8JGcrmaFeclbJytCC0.uBJVEwywXe/H3q2tuAMmoW4MXX.o5nG'),
('imeyer@yahoo.com', '$2b$10$5mbfhy8Rod.Ku2TipQB/QueIGLwd1c/WEnVQxdOZnPZOMGc3sF2h2'),
('jcohen@yahoo.com', '$2b$10$yY73RATZNeyfQTXbpN/8lOPGnURtwAvqsYfeNZhwB7Yb2bZTRAeaK'),
('terriellis@yahoo.com', '$2b$10$M/IF31dv84wWjuOt.62AROwkjRNmyTGktT8hWoYRE31ajzio1glt.'),
('combsgregory@hotmail.com', '$2b$10$8fsAvp4YPt5CAt2pvUxIxuCQtJZJ4r7egYrxHXlBb1HM/qbGGGz1O'),
('matthewgarcia@gmail.com', '$2b$10$y9.a01d6NXdyTRv/ymPiXuOoLQ0r1GbHwRJ/U1.8Ltwyvp.vau15a'),
('zcarr@yahoo.com', '$2b$10$N5kN8J/hFC4VB7/BeA98yeE.rzq.07F3UZ6nGAClt8SqkZecE0t5O'),
('bmartin@yahoo.com', '$2b$10$5ruSA5XJ1CYJFWLcZmofVerQMGbX5qdkbi/4ywnZw13OyI2fvfnnO'),
('karen25@hotmail.com', '$2b$10$DDBZgra7zuChOzOPuzvZjeO4LcsvJamSEx5U4WpCF7CQLyErLIoga'),
('idaugherty@yahoo.com', '$2b$10$cM7No5kRHYnZq5jk.KAJ/u.wDQk/F.SOD0lrpiRmFWYB7ZQIvfhQ2'),
('chelseawilliams@gmail.com', '$2b$10$TFifVsNaoWdwJRg308HmhusxzgMz1C8/GgagkWZsusB2QhnOou2xi'),
('davidmerritt@hotmail.com', '$2b$10$QJdRU5OOK1A23ujTiGOYKO6a9lKteWEkttcr.oRtZjYuZBlLo0r5.'),
('derek39@gmail.com', '$2b$10$0h/DhgDMGo1JmzKtfILcGONj3UIS7ngPCJ6XF53AH6XgM6.Jahcr6'),
('ulowe@hotmail.com', '$2b$10$ucnc/uGfjFQWyuayA9SjmOzkFU.OSc2oWBy/pnDaASB3iiPoz2MY2'),
('hannah08@yahoo.com', '$2b$10$fuTdAUhwuVWrBNzaQHYXXOYE0kiAwH0Uf0oveJJvXXCSfLO7HsPD6'),
('kaylaperez@hotmail.com', '$2b$10$Fh3aAFeojFzdmadMdB8.ledJ1o1UQr4ZJQw9ELkh3kooD36OmsfCy'),
('leslie15@yahoo.com', '$2b$10$Ob9wRhkWzboVcDFJ7DC/1e0Wngrfpfi2Rl5qC5n3ZgbCuc7hBg6HK'),
('robyn75@yahoo.com', '$2b$10$WuV8TTfpmzA20hpq1aiTm.TaOqr8Lwxue6SIBDOxosEsQYchINgdi'),
('eaguilar@hotmail.com', '$2b$10$WvBiRJ60q1nI/qHARaNGUecoQbVWywfNU2S4407kJ5wlmmGLYGtVa'),
('melissa53@hotmail.com', '$2b$10$Tlqtce3a8ZK185atFFlPg.6x0uUoej9T.Bh5zloP3mdNUFWhfBdLm'),
('kimberlychung@hotmail.com', '$2b$10$IDkr0h3bNZyGr1PPPHZaNu2aCzFK8mON.Avq2XaZdI6IokQZ4OMZy'),
('heatherwoods@gmail.com', '$2b$10$i8hyKVpzCeNb9HQR5XjAi.WLrL.vk1JQHvYxLxLejzhiSOS84WlAe'),
('kmitchell@yahoo.com', '$2b$10$Hdt6nXKsa3IpCcY9hJzR8.nwJ1Z7ar3DthmHLhQn1XA6vNDUnY6TG'),
('adamserin@yahoo.com', '$2b$10$QwEA2Cxp.3zFRppRP11EOuEs0QL2NRULfHcY5OykXttjCr0SzkkSi'),
('bonnielyons@gmail.com', '$2b$10$1TQcM46l3x/BsllCwFECrOKH56vZS3z81suh7FqUnVcbXnvlZpAcm'),
('sanchezanthony@gmail.com', '$2b$10$3JRwVQ7n9lkIfoyVsc.0v.0cak5GhF/SXSjveRh13FzsxeVHWKeam'),
('myoung@yahoo.com', '$2b$10$xlI0wIRKadntGY5i.Xr/se9YwZ1STx1lpOT5gvuatik9axvp7fKZq'),
('daveallen@yahoo.com', '$2b$10$CSuAJfWnbA5VFjnJJuK9VO.lgFVVMD5yiUCmG.2cJf.x3lmr1xGrK')
;

-- Insert a set of posts into the database
INSERT INTO posts.posts(title, message, image_url, creation_date, writer_id)
VALUES
(
    'Do you know?',
    'What Are The Periods Of Play Called In A Game Of Polo? \n\n\n\n\nChukkas',
    NULL,
    '2020-07-07 00:03:12.201'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'drowzee',
    'Pokemon  psychic',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png',
    '2020-07-23 01:12:56.441'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Donald Trump',
    'But I believe in fair trade, and I will tell you, I have many, many friends heading up corporations, and people that do just business in China, they say it''s virtually impossible. It''s very, very hard to come into China. And yet, we welcome them with open arms.',
    NULL,
    '2019-12-14 12:12:07.516'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'The Meaning Of Life',
    'What is more holy than good, more evil than the devil, what poor people have, and rich people don''t?\n\n\n\n\nNothing!',
    'https://picsum.photos/352/112',
    '2022-02-03 22:01:27.865'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'JFK always said, ''Ask not what your country can do for you, ask what Chuck Norris can fit his schlong into''.',
    NULL,
    '2022-06-07 11:39:33.951'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Lucille Ball',
    'Once in his life, every man is entitled to fall madly in love with a gorgeous redhead.',
    NULL,
    '2023-10-28 12:39:52.986'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'onix',
    'Pokemon  rock ground',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png',
    '2020-05-11 00:22:43.467'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'President richard m nixon called what songstress an "ambassador of love"\n\n\n\n\nPearl Baily',
    NULL,
    '2021-03-04 21:24:17.125'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Vincent McNabb',
    'Hope is some extraordinary spiritual grace that God gives us to control our fears, not to oust them.',
    NULL,
    '2020-11-09 05:08:25.966'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Jan Schakowsky',
    'Community health centers do a great deal with limited resources. They provide critical medical care services to many who would otherwise have no other place to go or would end up in an emergency room.',
    'https://picsum.photos/242/103',
    '2020-04-27 21:07:53.036'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'The study of inland water is known as\n\n\n\n\nHydrology',
    NULL,
    '2020-09-19 12:23:08.339'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Sea King Dragon',
    'Normal Monster card\n\nSea Serpent\nATK 2000 / DEF 1700\nLevel 6\n\nProtected by a tough shell, this master of the sea attacks its enemies with toxic bubbles.',
    'https://images.ygoprodeck.com/images/cards/23659124.jpg',
    '2020-12-30 17:07:31.828'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'When Chuck Norris strikes, it is literally like lightning. Count in seconds after a flash before you hear the thunder. that''s how far away he is.',
    NULL,
    '2023-03-23 08:11:59.116'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Enim eu turpis egestas pretium aenean. Ipsum a arc',
    'Cras semper auctor neque vitae tempus quam pellentesque nec. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Eu augue ut lectus arcu. Purus sit amet volutpat consequat mauris. Amet facilisis magna etiam tempor orci eu lobortis. Diam donec adipiscing tristique risus nec feugiat in fermentum. Consequat nisl vel pretium lectus quam id. Vivamus at augue eget arcu dictum varius duis at. Rutrum quisque non tellus orci. Felis eget velit aliquet sagittis id consectetur. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Massa sed elementum tempus egestas sed sed risus pretium. Tristique senectus et netus et malesuada fames. Leo vel fringilla est ullamcorper eget nulla facilisi. Mauris in aliquam sem fringilla ut morbi. Nibh tellus molestie nunc non blandit. Egestas sed tempus urna et pharetra pharetra massa massa. Malesuada nunc vel risus commodo viverra maecenas. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis.\nRisus sed vulputate odio ut enim blandit volutpat. Faucibus turpis in eu mi bibendum neque. Morbi tristique senectus et netus et malesuada fames ac. Lacinia quis vel eros donec. Est velit egestas dui id ornare arcu. Commodo viverra maecenas accumsan lacus. Turpis in eu mi bibendum neque egestas congue. Fermentum posuere urna nec tincidunt. Sit amet nisl purus in mollis. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Justo eget magna fermentum iaculis eu non diam. Proin nibh nisl condimentum id venenatis. Viverra maecenas accumsan lacus vel facilisis volutpat est. Rhoncus dolor purus non enim praesent elementum facilisis leo. Urna id volutpat lacus laoreet non curabitur gravida. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fermentum leo vel orci porta.\n',
    'https://picsum.photos/391/661',
    '2023-07-30 05:30:09.292'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Son Of My Father Is Credited As Being The First Song Ever To Feature Which Instument\n\n\n\n\na Synthesizer',
    NULL,
    '2021-10-07 07:32:32.155'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What beer is represented by a goat\n\n\n\n\nBocks Beer',
    NULL,
    '2020-06-03 19:55:35.263'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Blackwing - Simoon the Poison Wind',
    'Effect Monster card\n\nWinged Beast\nATK 1600 / DEF 2000\nLevel 6\n\nIf you control no monsters and have this card in your hand: You can banish 1 other "Blackwing" monster from your hand; place 1 "Black Whirlwind" from your Deck face-up in your Spell & Trap Zone, then, either send this card to the GY, or immediately after this effect resolves, Normal Summon it without Tributing. You cannot Special Summon monsters from the Extra Deck for the rest of this turn, except DARK monsters. You can only use this effect of "Blackwing - Simoon the Poison Wind" once per turn. During the End Phase, send the "Black Whirlwind" placed by this effect to the GY, and if you do, take 1000 damage.',
    'https://images.ygoprodeck.com/images/cards/81470373.jpg',
    '2020-02-12 05:28:14.163'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What do you call a cow with a twitch? Beef Jerky.',
    'https://picsum.photos/421/528',
    '2021-02-04 23:20:55.027'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris attacks people from the age of 1-120 and people from A-z',
    NULL,
    '2020-11-08 09:31:36.449'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'E---e',
    'What starts in e and ends in e and has only 1 letter???\n\n\n\n\nEnvalope!!',
    'https://picsum.photos/463/380',
    '2021-11-12 06:02:05.846'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Did you heard about the giant that threw up? It''s all over town!',
    NULL,
    '2020-10-27 21:48:26.988'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ZigZagged',
    'Bee (in) are (in) a zigzagged S, myself, L (eye) Could you spell me? (parenthesis, don''t count)\n\n\n\n\nBrazil',
    'https://picsum.photos/183/440',
    '2022-01-26 17:21:17.868'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris gets a happy ending when strangling mountain lions.',
    NULL,
    '2023-07-08 04:05:44.617'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'This graveyard looks overcrowded. People must be dying to get in there.',
    'https://picsum.photos/223/546',
    '2020-09-03 06:51:49.668'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'poliwhirl',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png',
    '2022-12-09 09:54:43.613'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Leo vel orci porta non pulvinar neque. Porta nibh ',
    'Cras semper auctor neque vitae tempus quam pellentesque nec. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Eu augue ut lectus arcu. Purus sit amet volutpat consequat mauris. Amet facilisis magna etiam tempor orci eu lobortis. Diam donec adipiscing tristique risus nec feugiat in fermentum. Consequat nisl vel pretium lectus quam id. Vivamus at augue eget arcu dictum varius duis at. Rutrum quisque non tellus orci. Felis eget velit aliquet sagittis id consectetur. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Massa sed elementum tempus egestas sed sed risus pretium. Tristique senectus et netus et malesuada fames. Leo vel fringilla est ullamcorper eget nulla facilisi. Mauris in aliquam sem fringilla ut morbi. Nibh tellus molestie nunc non blandit. Egestas sed tempus urna et pharetra pharetra massa massa. Malesuada nunc vel risus commodo viverra maecenas. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis.\nEget sit amet tellus cras adipiscing enim eu. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Purus in massa tempor nec feugiat nisl pretium fusce. Eu feugiat pretium nibh ipsum consequat nisl. Purus in mollis nunc sed. Turpis massa sed elementum tempus egestas sed. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Est lorem ipsum dolor sit amet. Fringilla phasellus faucibus scelerisque eleifend donec. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.\nRisus sed vulputate odio ut enim blandit volutpat. Faucibus turpis in eu mi bibendum neque. Morbi tristique senectus et netus et malesuada fames ac. Lacinia quis vel eros donec. Est velit egestas dui id ornare arcu. Commodo viverra maecenas accumsan lacus. Turpis in eu mi bibendum neque egestas congue. Fermentum posuere urna nec tincidunt. Sit amet nisl purus in mollis. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Justo eget magna fermentum iaculis eu non diam. Proin nibh nisl condimentum id venenatis. Viverra maecenas accumsan lacus vel facilisis volutpat est. Rhoncus dolor purus non enim praesent elementum facilisis leo. Urna id volutpat lacus laoreet non curabitur gravida. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fermentum leo vel orci porta.\nLectus urna duis convallis convallis tellus id interdum. Porttitor leo a diam sollicitudin tempor id eu. Sit amet aliquam id diam maecenas. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Fermentum odio eu feugiat pretium nibh ipsum consequat. Purus semper eget duis at tellus at. Arcu bibendum at varius vel pharetra vel turpis. Suscipit tellus mauris a diam maecenas sed enim. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Faucibus interdum posuere lorem ipsum. Turpis massa tincidunt dui ut ornare lectus sit amet est. Egestas maecenas pharetra convallis posuere morbi leo. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Amet venenatis urna cursus eget nunc scelerisque. Hac habitasse platea dictumst quisque sagittis purus sit. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Non blandit massa enim nec dui. Mus mauris vitae ultricies leo integer malesuada. Sed felis eget velit aliquet sagittis id consectetur.\n',
    NULL,
    '2022-01-22 03:30:55.956'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Anti-Spell',
    'Trap Card card\n\n\nRemove 2 Spell Counters on your side of the field to negate the activation of a Spell Card and destroy it.',
    'https://images.ygoprodeck.com/images/cards/53112492.jpg',
    '2023-11-16 13:05:42.035'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Tutan Mask',
    'Trap Card card\n\n\nWhen a Spell/Trap Card is activated that targets exactly 1 Zombie monster on the field (and no other cards): Negate the activation, and if you do, destroy it.',
    'https://images.ygoprodeck.com/images/cards/3149764.jpg',
    '2020-01-09 22:22:06.018'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'When Chuck Norris was a kid they used to call him "Chucky the devil''s doll"',
    'https://picsum.photos/655/147',
    '2020-02-28 16:31:22.685'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Elder Entity N''tss',
    'Fusion Monster card\n\nFairy\nATK 2500 / DEF 1200\nLevel 4\n\n1 Synchro Monster + 1 Xyz Monster\nMust be Special Summoned (from your Extra Deck) by sending the above cards you control to the GY. (You do not use "Polymerization".) Once per turn: You can Special Summon 1 Level 4 monster from your hand. If this card is sent to the GY: You can target 1 card on the field; destroy it. You can only Special Summon "Elder Entity N''tss(s)" once per turn.',
    'https://images.ygoprodeck.com/images/cards/80532587.jpg',
    '2022-04-19 13:30:52.103'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Tincidunt vitae semper quis lectus. Consectetur ad',
    'Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Tristique senectus et netus et malesuada fames ac. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut. Eros in cursus turpis massa tincidunt. Purus viverra accumsan in nisl nisi scelerisque eu. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Nam aliquam sem et tortor. Sit amet purus gravida quis blandit turpis. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Amet massa vitae tortor condimentum.\n',
    NULL,
    '2022-08-03 07:08:18.652'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'How is the stockmarket collapse of the 24th October 1929 better known ?\n\n\n\n\nBlack Thursday',
    NULL,
    '2020-04-08 05:06:50.377'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Joel A. Barker',
    'Vision without action is merely a dream. Action without vision just passes the time. Vision with action can change the world.',
    'https://picsum.photos/336/452',
    '2020-02-11 06:13:14.469'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Jack Lallane gave birth to Chuck Norris, who in turn, gave birth to Jack Lallane. Vin Diesel was the afterbirth.',
    NULL,
    '2020-12-24 09:32:54.870'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris won Gold in the Olympic Fencing Competition while riding a horse, wearing body armor & brandishing jousting lance.',
    NULL,
    '2023-09-02 20:23:57.304'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Did you hear about the guy that evaporated? He''ll be mist.',
    'https://picsum.photos/608/148',
    '2022-03-04 10:31:31.932'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why can’t you trust an atom? Because they make up everything.',
    NULL,
    '2022-06-26 02:22:59.187'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Ac auctor augue mauris augue neque gravida in ferm',
    'Tincidunt vitae semper quis lectus. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Convallis aenean et tortor at risus viverra adipiscing at in. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Massa eget egestas purus viverra accumsan in nisl nisi. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Posuere sollicitudin aliquam ultrices sagittis. Dolor purus non enim praesent elementum. Diam in arcu cursus euismod quis viverra nibh. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Dolor sed viverra ipsum nunc aliquet bibendum. Integer quis auctor elit sed vulputate mi. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Dui sapien eget mi proin sed libero enim sed. Neque sodales ut etiam sit amet nisl purus in.\nMi eget mauris pharetra et ultrices neque. Nunc non blandit massa enim nec. Velit scelerisque in dictum non consectetur a. Enim sed faucibus turpis in eu mi bibendum neque. In egestas erat imperdiet sed. Ac auctor augue mauris augue neque gravida in fermentum. Vitae congue eu consequat ac felis donec. Feugiat sed lectus vestibulum mattis. Nibh venenatis cras sed felis eget velit aliquet. Mauris sit amet massa vitae tortor condimentum lacinia quis. Orci sagittis eu volutpat odio facilisis mauris sit amet. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Purus viverra accumsan in nisl. Consequat semper viverra nam libero justo laoreet sit amet. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Nec dui nunc mattis enim ut tellus elementum. Quis auctor elit sed vulputate mi sit. Feugiat nibh sed pulvinar proin gravida.\nRisus sed vulputate odio ut enim blandit volutpat. Faucibus turpis in eu mi bibendum neque. Morbi tristique senectus et netus et malesuada fames ac. Lacinia quis vel eros donec. Est velit egestas dui id ornare arcu. Commodo viverra maecenas accumsan lacus. Turpis in eu mi bibendum neque egestas congue. Fermentum posuere urna nec tincidunt. Sit amet nisl purus in mollis. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Justo eget magna fermentum iaculis eu non diam. Proin nibh nisl condimentum id venenatis. Viverra maecenas accumsan lacus vel facilisis volutpat est. Rhoncus dolor purus non enim praesent elementum facilisis leo. Urna id volutpat lacus laoreet non curabitur gravida. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fermentum leo vel orci porta.\n',
    NULL,
    '2022-05-31 07:00:09.093'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Theinen the Great Sphinx',
    'Effect Monster card\n\nBeast\nATK 3500 / DEF 3000\nLevel 10\n\nThis card cannot be Normal Summoned or Set. This card cannot be Special Summoned except by paying 500 Life Points when both "Andro Sphinx" and "Sphinx Teleia" on your side of the field are destroyed at the same time; then you can Special Summon this monster from your hand or Deck. When this card is Special Summoned, by paying 500 Life Points, increase the ATK of this card by 3000 points until the end of the End Phase.',
    'https://images.ygoprodeck.com/images/cards/87997872.jpg',
    '2022-07-18 15:21:33.818'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Hello',
    'whats the beginning of end, the end of time and space and the beginning of eternity?\n\n\n\n\nthe letter e',
    NULL,
    '2020-07-14 22:55:23.698'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    '“What’s your name, son?” The principal asked his student. The kid replied, “D-d-d-dav-dav-david, sir.” “Do you have a stutter?” the principal asked. The student answered, “No sir, my dad has a stutter but the guy who registered my name was a real jerk.”',
    NULL,
    '2021-04-02 21:04:29.666'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Charlie Sheen is Chuck Norris'' lovechild.',
    NULL,
    '2021-08-04 01:23:27.945'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'raichu',
    'Pokemon  electric',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
    '2023-03-31 22:24:42.831'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Julius Caesar',
    'It is easier to find men who will volunteer to die, than to find those who are willing to endure pain with patience.',
    'https://picsum.photos/191/150',
    '2020-06-04 01:57:54.423'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Snow Dragon',
    'Effect Monster card\n\nDragon\nATK 1400 / DEF 900\nLevel 4\n\nWhen this card is destroyed by battle or by a card effect and sent to the Graveyard: Place 1 Ice Counter on each face-up monster on the field.',
    'https://images.ygoprodeck.com/images/cards/3070049.jpg',
    '2023-07-20 13:50:35.312'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Sound',
    'You hear it speak, for it has a hard tongue. But it cannot breathe, for it has not a lung. What is it?\n\n\n\n\na bell',
    'https://picsum.photos/343/343',
    '2022-11-19 00:57:16.036'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Mi eget mauris pharetra et ultrices neque. Nunc no',
    'Praesent semper feugiat nibh sed pulvinar proin. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Urna molestie at elementum eu facilisis sed odio morbi quis. Adipiscing commodo elit at imperdiet dui accumsan. Ac felis donec et odio pellentesque diam. Sapien pellentesque habitant morbi tristique senectus et netus et. Interdum velit euismod in pellentesque massa placerat. Id diam maecenas ultricies mi eget mauris pharetra et. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Ultricies tristique nulla aliquet enim tortor. Non curabitur gravida arcu ac. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus.\nSed sed risus pretium quam vulputate dignissim suspendisse. Id leo in vitae turpis massa. Eget mauris pharetra et ultrices. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Nisl condimentum id venenatis a. Dui id ornare arcu odio. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Viverra maecenas accumsan lacus vel facilisis volutpat est. Platea dictumst vestibulum rhoncus est pellentesque elit. Hac habitasse platea dictumst quisque.\nUt eu sem integer vitae justo eget magna. Praesent tristique magna sit amet purus. Quis auctor elit sed vulputate mi. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Aenean euismod elementum nisi quis eleifend quam. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Nec nam aliquam sem et. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Tellus in metus vulputate eu.\nNisl pretium fusce id velit ut tortor pretium viverra. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Volutpat diam ut venenatis tellus in metus. Commodo viverra maecenas accumsan lacus. Elit at imperdiet dui accumsan sit amet nulla facilisi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Eu scelerisque felis imperdiet proin. Arcu bibendum at varius vel pharetra vel turpis nunc. Orci a scelerisque purus semper eget. Elementum sagittis vitae et leo duis ut diam.\n',
    NULL,
    '2021-04-23 09:34:50.171'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Runs With Four Eyes',
    'What has four eyes and runs south?\n\n\n\n\nThe Mississippi River',
    NULL,
    '2022-01-10 07:21:16.135'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Movies',
    'What is a turkies favorite movie?\n\n\n\n\nThe Gizzard Of OZ',
    NULL,
    '2022-09-27 06:42:51.941'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'dodrio',
    'Pokemon  normal flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png',
    '2023-08-28 07:01:58.933'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'The Big Comfy Couch was made for Chuck Norris',
    'https://picsum.photos/590/633',
    '2021-12-24 10:45:27.607'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'On Day Zero, Chuck Norris created God.',
    'https://picsum.photos/150/330',
    '2022-01-14 02:12:31.293'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Try This One Who Am I?',
    'Some people like me; some people don''t. I can be good; but bad sometimes, too. Who am I?\n\n\n\n\nMe!!!',
    NULL,
    '2020-04-10 15:01:59.772'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dragunity Couse',
    'Tuner Monster card\n\nDragon\nATK 1000 / DEF 200\nLevel 2\n\nCannot be used as Synchro Material, except for the Synchro Summon of a "Dragunity" monster. This card on the field can be treated as a Level 4 monster when used for a Synchro Summon. If this card is currently equipped to a monster: You can Special Summon this equipped card.',
    'https://images.ygoprodeck.com/images/cards/29253591.jpg',
    '2022-10-06 14:24:36.120'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I went to a really emotional wedding last week, even the cake was in tiers!',
    NULL,
    '2023-08-14 18:31:05.648'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What time did the man go to the dentist? Tooth hurt-y!',
    NULL,
    '2021-09-15 11:27:31.636'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'In what country is Lahore?\n\n\n\n\nPakistan',
    'https://picsum.photos/667/547',
    '2021-07-14 01:31:02.217'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'My House',
    'I built my house with 32 white pillars. Then I painted the floor red.What kind of house is it?\n\n\n\n\nThe mouth.',
    NULL,
    '2022-01-14 15:17:05.366'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Tony Snow',
    'To have faith is to believe in truth, believe that truth confers special power on those lucky enough to get a little insight, and to know in our hearts that all these things come from God, which is why we should never get too cocky about our successes.',
    NULL,
    '2022-11-12 03:34:37.338'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'The most common hat in the world is made out of what\n\n\n\n\nBamboo',
    NULL,
    '2022-08-22 02:23:07.229'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Ut ornare lectus sit amet est placerat. Eget nulla',
    'Viverra aliquet eget sit amet tellus. Adipiscing at in tellus integer feugiat scelerisque. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Mauris ultrices eros in cursus. Dolor purus non enim praesent. Quam viverra orci sagittis eu volutpat. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Lobortis feugiat vivamus at augue. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Sed sed risus pretium quam. Integer malesuada nunc vel risus. Egestas congue quisque egestas diam in arcu. Elementum nibh tellus molestie nunc non blandit massa enim nec.\nSem viverra aliquet eget sit amet tellus cras. Proin nibh nisl condimentum id venenatis a. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Viverra vitae congue eu consequat ac felis donec et odio. Ultrices vitae auctor eu augue ut. Leo integer malesuada nunc vel risus. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus et malesuada fames ac. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Diam vel quam elementum pulvinar. Faucibus nisl tincidunt eget nullam. Lacus viverra vitae congue eu consequat. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Diam sit amet nisl suscipit. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.\nVel turpis nunc eget lorem dolor sed viverra ipsum nunc. Lacinia at quis risus sed. Velit egestas dui id ornare arcu odio ut sem nulla. Lacus vestibulum sed arcu non odio euismod lacinia. Imperdiet nulla malesuada pellentesque elit. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt. Adipiscing bibendum est ultricies integer quis auctor elit.\nVitae auctor eu augue ut lectus arcu bibendum at varius. Massa tincidunt dui ut ornare lectus sit amet est. Donec ac odio tempor orci dapibus ultrices in. Semper quis lectus nulla at volutpat. Est sit amet facilisis magna etiam tempor. Lacus sed viverra tellus in hac habitasse platea. Ultrices neque ornare aenean euismod elementum nisi. Elit scelerisque mauris pellentesque pulvinar pellentesque. Elit sed vulputate mi sit. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Feugiat in ante metus dictum at tempor commodo ullamcorper. Condimentum lacinia quis vel eros donec ac odio tempor.\n',
    NULL,
    '2020-11-29 17:37:35.583'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chaos Necromancer',
    'Effect Monster card\n\n\nThe ATK of this card is the number of Monster Cards in your Graveyard x 300.',
    'https://images.ygoprodeck.com/images/cards/1434352.jpg',
    '2023-03-16 06:07:20.996'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Jeff Sessions',
    'I certainly believe that improving our intelligence is of important national interest.',
    NULL,
    '2021-09-13 02:57:57.723'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    '“Did you hear that I’m reading a book about anti-gravity? It’s impossible to put down.”',
    NULL,
    '2023-02-10 13:31:36.268'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris doesn''t bend light.... he breaks it.',
    'https://picsum.photos/460/538',
    '2023-04-30 20:36:32.204'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris''s OSI network model has only one layer - Physical.',
    NULL,
    '2020-02-14 11:22:57.567'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'A "gyre" is another term for what shape?\n\n\n\n\nCoil',
    'https://picsum.photos/269/307',
    '2020-06-09 00:38:22.330'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Lectus magna fringilla urna porttitor rhoncus dolo',
    'Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Sit amet nulla facilisi morbi tempus. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Sodales neque sodales ut etiam sit amet nisl purus. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Nisi lacus sed viverra tellus in hac habitasse. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Tincidunt eget nullam non nisi. Cursus risus at ultrices mi. Volutpat est velit egestas dui id ornare. Sagittis nisl rhoncus mattis rhoncus. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Fermentum leo vel orci porta non pulvinar neque. Quisque sagittis purus sit amet volutpat. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Porttitor massa id neque aliquam vestibulum morbi blandit. At quis risus sed vulputate odio. Nisi vitae suscipit tellus mauris a diam maecenas sed enim.\nAliquam sem fringilla ut morbi tincidunt augue interdum velit. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Tristique senectus et netus et malesuada fames ac. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut. Eros in cursus turpis massa tincidunt. Purus viverra accumsan in nisl nisi scelerisque eu. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Nam aliquam sem et tortor. Sit amet purus gravida quis blandit turpis. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Amet massa vitae tortor condimentum.\n',
    NULL,
    '2020-09-12 12:54:58.915'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Sed sed risus pretium quam vulputate dignissim sus',
    'Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Sagittis id consectetur purus ut faucibus pulvinar elementum. Accumsan tortor posuere ac ut. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Purus in massa tempor nec feugiat nisl. Felis eget nunc lobortis mattis. Amet massa vitae tortor condimentum lacinia quis vel. Sed cras ornare arcu dui vivamus arcu. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Integer vitae justo eget magna fermentum iaculis eu. Lorem mollis aliquam ut porttitor. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Vulputate dignissim suspendisse in est ante. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Nulla facilisi nullam vehicula ipsum a arcu cursus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum.\nLectus urna duis convallis convallis tellus id interdum. Porttitor leo a diam sollicitudin tempor id eu. Sit amet aliquam id diam maecenas. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Fermentum odio eu feugiat pretium nibh ipsum consequat. Purus semper eget duis at tellus at. Arcu bibendum at varius vel pharetra vel turpis. Suscipit tellus mauris a diam maecenas sed enim. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Faucibus interdum posuere lorem ipsum. Turpis massa tincidunt dui ut ornare lectus sit amet est. Egestas maecenas pharetra convallis posuere morbi leo. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Amet venenatis urna cursus eget nunc scelerisque. Hac habitasse platea dictumst quisque sagittis purus sit. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Non blandit massa enim nec dui. Mus mauris vitae ultricies leo integer malesuada. Sed felis eget velit aliquet sagittis id consectetur.\nAc auctor augue mauris augue neque gravida in fermentum et. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Molestie at elementum eu facilisis sed odio morbi quis. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Cursus mattis molestie a iaculis. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Ultrices neque ornare aenean euismod elementum. Eu facilisis sed odio morbi. Arcu dui vivamus arcu felis. Aliquam etiam erat velit scelerisque in dictum. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Pellentesque nec nam aliquam sem. Amet volutpat consequat mauris nunc congue. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean sed adipiscing diam donec adipiscing tristique. Tellus pellentesque eu tincidunt tortor aliquam. Sem nulla pharetra diam sit amet nisl suscipit.\n',
    'https://picsum.photos/101/444',
    '2023-08-08 23:02:43.014'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Purus semper eget duis at tellus at urna condiment',
    'Ut eu sem integer vitae justo eget magna. Praesent tristique magna sit amet purus. Quis auctor elit sed vulputate mi. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Aenean euismod elementum nisi quis eleifend quam. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Nec nam aliquam sem et. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Tellus in metus vulputate eu.\n',
    'https://picsum.photos/591/409',
    '2020-11-21 01:39:27.531'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Balameuniere de Nouvelles',
    'Ritual Effect Monster card\n\nBeast-Warrior\nATK 2000 / DEF 1850\nLevel 5\n\nYou can Ritual Summon this card with a "Recipe" card. If this card is Special Summoned: You can add 1 "Nouvelles" or "Recipe" card from your Deck to your hand. You can target 1 Attack Position monster your opponent controls; Tribute it, and if you do, Special Summon 1 Level 6 "Nouvelles" Ritual Monster from your hand or Deck. This is a Quick Effect if this card was Special Summoned by the effect of a "Nouvelles" monster. You can only use each effect of "Balameuniere de Nouvelles" once per turn.',
    'https://images.ygoprodeck.com/images/cards/52495649.jpg',
    '2020-10-15 09:59:05.338'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris talked to himself in his mother''s womb.',
    'https://picsum.photos/595/286',
    '2021-07-05 09:06:20.826'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Once in olden times, Chuck Norris roundhouse kicked the ancient King of Canniptia in the face. Then, the remaining old world Canniptions threw a fit. Thank goodness the neighboring ruler of Hissyopia was not also kicked in the face or there would have also been a Hisssy fit to deal with!',
    'https://picsum.photos/508/579',
    '2020-12-23 21:22:11.227'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Consectetur a erat nam at lectus. Amet justo donec',
    'Volutpat consequat mauris nunc congue. Sollicitudin ac orci phasellus egestas tellus. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Massa tempor nec feugiat nisl pretium fusce id. Amet purus gravida quis blandit turpis cursus in hac. Neque ornare aenean euismod elementum nisi quis eleifend. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Elit at imperdiet dui accumsan sit amet. Etiam erat velit scelerisque in dictum non consectetur a erat. Lacus vestibulum sed arcu non odio euismod lacinia. Ultrices eros in cursus turpis. Nibh nisl condimentum id venenatis a condimentum. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus.\n',
    NULL,
    '2021-03-27 21:45:56.338'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Lectus magna fringilla urna porttitor rhoncus dolo',
    'Tincidunt vitae semper quis lectus. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Convallis aenean et tortor at risus viverra adipiscing at in. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Massa eget egestas purus viverra accumsan in nisl nisi. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Posuere sollicitudin aliquam ultrices sagittis. Dolor purus non enim praesent elementum. Diam in arcu cursus euismod quis viverra nibh. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Dolor sed viverra ipsum nunc aliquet bibendum. Integer quis auctor elit sed vulputate mi. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Dui sapien eget mi proin sed libero enim sed. Neque sodales ut etiam sit amet nisl purus in.\nNisl pretium fusce id velit ut tortor pretium viverra. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Volutpat diam ut venenatis tellus in metus. Commodo viverra maecenas accumsan lacus. Elit at imperdiet dui accumsan sit amet nulla facilisi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Eu scelerisque felis imperdiet proin. Arcu bibendum at varius vel pharetra vel turpis nunc. Orci a scelerisque purus semper eget. Elementum sagittis vitae et leo duis ut diam.\n',
    'https://picsum.photos/603/288',
    '2019-12-05 20:07:00.536'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What job did Ernest Hemmingway do in WW1\n\n\n\n\nAmbulance Driver',
    NULL,
    '2020-04-14 01:08:30.164'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from James Madison',
    'The loss of liberty at home is to be charged to the provisions against danger, real or imagined, from abroad.',
    NULL,
    '2021-09-12 03:46:13.691'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'rhydon',
    'Pokemon  ground rock',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png',
    '2023-07-11 08:57:05.148'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    '"The words ""Myrrh is mine, its bitter perfume breathes of life, of gathering gloom___"" come from which Christmas carol?" \n\n\n\n\nWe Three Kings Of Orient Are',
    NULL,
    '2021-02-15 13:11:50.375'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Beth Ditto',
    'I just like food too much, and I don''t want to change. I spent so much of childhood trying to change, and I just got sick of it... I don''t want to look like Britney Spears, I just don''t want to. She''s hideous.',
    NULL,
    '2020-08-31 02:12:41.800'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Richard Baker',
    'To get rich never risk your health. For it is the truth that health is the wealth of wealth.',
    'https://picsum.photos/331/565',
    '2023-06-21 09:14:54.894'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Emily Mortimer',
    'I''m still shy - I''m no good at my children''s parent-teacher conferences, and I''m slowly learning how to ask for what I want. But I now know that I have a reserve of courage to draw upon when I really need it. There''s nothing that I''m too scared to have a go at.',
    NULL,
    '2021-01-05 21:33:29.458'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris doesn''t have school because hes too smart. That happened in 2nd grade.',
    NULL,
    '2022-04-29 05:39:02.408'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Knight of the Red Lotus',
    'Effect Monster card\n\nWarrior\nATK 2100 / DEF 1800\nLevel 6\n\nIf you have exactly 3 Normal Monsters in your Graveyard, you can Special Summon this card from your hand by removing from play 2 Normal Monsters from your Graveyard. Once per turn, you can select and Special Summon 1 Level 4 or lower Normal Monster from your Graveyard.',
    'https://images.ygoprodeck.com/images/cards/46237548.jpg',
    '2020-04-19 05:17:13.660'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'They say that 3/2 people are bad at fractions.',
    NULL,
    '2022-06-08 12:18:27.658'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'The A-Team originally was to have only 1 member: Chuck Norris. But when NBC couldn''t meet Chuck''s salary demands, they had to replace him with the quartet of B.A., Face, Hannibal and Murdock.',
    NULL,
    '2021-11-09 04:22:20.228'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Though it sounds like it is for a children''s game,which of these websites belongs to a major U.S. book publisher?\n\n\n\n\nSimonsays.com',
    NULL,
    '2022-09-21 04:28:28.212'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'After an unsuccessful harvest, why did the farmer decide to try a career in music? Because he had a ton of sick beets.',
    NULL,
    '2021-02-11 03:01:00.881'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Dad, did you get a haircut? No, I got all of them cut.',
    NULL,
    '2023-10-04 20:24:39.381'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'There was once life on Mars. Except they made fun of Chuck Norris. What happened next was a mass extinction.',
    'https://picsum.photos/593/271',
    '2020-07-05 15:54:57.747'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Once a cow challenged Chuck Norris that he could not eat grass. Chuck Norris grazed 1/5 of the African continent in a day, which resulted in the formation of the Sahara desert. Then he proceeded to roundhouse kick and eat the cow at the same time. Moral of the story: Do not challenge Chuck Norris.',
    NULL,
    '2023-01-13 07:58:22.395'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'kabutops',
    'Pokemon  rock water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png',
    '2023-09-29 06:44:25.715'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What is the third part of the ''Lord Of The Rings'' trilogy\n\n\n\n\nReturn Of The King',
    NULL,
    '2023-04-13 03:07:22.785'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris pee''s napalm and craps C4',
    NULL,
    '2022-06-26 07:50:37.613'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What is a Sam Browne\n\n\n\n\nMilitary Belt',
    NULL,
    '2022-11-09 11:02:25.056'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What do dogs and phones have in common? Both have collar ID.',
    NULL,
    '2023-08-25 02:35:58.742'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'when Chuck Norris was on the electric chair and was asked his last words he said "hit the switch and start praying"',
    NULL,
    '2021-08-04 19:32:28.137'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What’s the difference between a wizard who raises the undead and a sexy vampire? One is a necromancer and the other is a neck romancer.',
    NULL,
    '2022-01-21 18:02:25.890'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Cipher Interference',
    'Spell Card card\n\n\nDuring damage calculation, if your "Cipher" monster battles, while another monster with its same name is on the field: You can double the ATK of your battling "Cipher" monster until the end of the Battle Phase. You can only use this effect of "Cipher Interference" once per turn.',
    'https://images.ygoprodeck.com/images/cards/55496220.jpg',
    '2021-05-29 06:14:42.014'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nibh nisl condimentum id venenatis a condimentum v',
    'Purus in mollis nunc sed id semper. Suspendisse faucibus interdum posuere lorem ipsum. Dictum non consectetur a erat. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. In nibh mauris cursus mattis molestie a iaculis at erat. Velit aliquet sagittis id consectetur purus ut faucibus. Lorem dolor sed viverra ipsum. Facilisis gravida neque convallis a cras. Adipiscing vitae proin sagittis nisl rhoncus. Odio eu feugiat pretium nibh ipsum. Sit amet nulla facilisi morbi. Viverra mauris in aliquam sem. Vitae justo eget magna fermentum. Ultrices dui sapien eget mi proin sed libero. Convallis a cras semper auctor neque vitae tempus quam. Netus et malesuada fames ac turpis egestas. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Suspendisse potenti nullam ac tortor vitae.\n',
    NULL,
    '2021-04-30 04:08:33.260'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Just finished cleaning my grill. It was grate.',
    'https://picsum.photos/519/150',
    '2023-03-23 06:28:51.754'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Gradius',
    'Normal Monster card\n\nMachine\nATK 1200 / DEF 800\nLevel 4\n\nA high-performance jet fighter with power capsules for variable attack capabilities.',
    'https://images.ygoprodeck.com/images/cards/10992251.jpg',
    '2020-02-08 00:52:21.993'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Brandy Norwood',
    'Mom would kill me if I showed my navel.',
    'https://picsum.photos/671/563',
    '2022-11-16 02:20:05.910'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Number 18: Heraldry Patriarch',
    'XYZ Monster card\n\nPsychic\nATK 2200 / DEF 2200\nLevel 4\n\n2 Level 4 monsters\nOnce per Chain, during either player''s turn, if 2 or more monsters with the same name are on the field: You can detach 1 Xyz Material from this card; choose 1 monster among those with the same name, and destroy all other monsters with that name. While this card remains face-up on the field, your opponent cannot Summon monsters with the same name as any of the monster(s) chosen for this card''s effect. If this card is sent to the Graveyard: You can send 2 "Heraldic Beast" monsters from your Deck to the Graveyard.',
    'https://images.ygoprodeck.com/images/cards/23649496.jpg',
    '2021-09-23 08:32:43.374'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'What are you thinking about right now? Chuck Norris says you''re thinking about a teddy bear riding a unicycle. If you aren''t, your last and shortly upcoming sight will be a GRIZZLY bear riding a MOTORcycle, which is one of the weaker pets of Chuck Norris.',
    NULL,
    '2021-10-27 08:46:21.991'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Black As Pitch',
    'While driving home after work, I ran into this problem. A whole village had been painted black; the roads, pavement, buildings, shrubs, and everything that didn''t move had been painted pitch black. On top of that, my car''s headlights weren''t working, no moon could be seen, and power was out in the area, so there were no street or house lights at all. At that very moment, I entered a curve where a solid black dog (dumb as a rock, so not smart enough to dodge the approaching car) was sitting in the road. He had his back to me, so there was not even a glimmer in his eyes, yet I was able to swerve round him easily and without any danger. How was this possible?\n\n\n\n\nIt was 2:00 in the afternoon!',
    NULL,
    '2023-01-02 07:13:06.836'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'At his wedding, Chuck Norris'' first dance number was to ''Lord Of This World'' by Black Sabbath.',
    NULL,
    '2021-01-20 01:39:49.356'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What single word connects the Spanish Armada, and the two TV programmes, Danger Man and The Worker\n\n\n\n\nDrake',
    NULL,
    '2021-07-26 02:33:22.998'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'When written CORRECTly,which of these terms should not contain an apostrophe?\n\n\n\n\nGrand''ma',
    NULL,
    '2019-12-18 22:45:20.123'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    '3 Light Bulbs',
    'a man lives in a house with no pets or family. He has 3 switches downstairs which lead to 3 bulbs upstairs. He needs to know which switch leads to which buld and he can only go up the stairs once. How will he find out which bulbs leeds to which switch?\n\n\n\n\nHe turns one switch on for half an hour then he turns it off then he turns another switch on and goes upstairs. Then he checks which bulb is hot and which bulb is on.',
    NULL,
    '2021-01-06 14:57:48.655'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'mothernature asks Chuck Norris if its ok to make it rain',
    'https://picsum.photos/371/161',
    '2021-01-15 08:14:59.116'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'hitmonlee',
    'Pokemon  fighting',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png',
    '2022-07-11 20:27:27.123'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from John Mica',
    'We''re not trying to harass the average American. We need to convert this now to a risk-based system, with TSA concentrating and focusing on intelligence, on security, setting up again the parameters of which we do this.',
    'https://picsum.photos/190/694',
    '2020-03-24 22:59:34.796'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Which crosby, stills, and nash''s debut album included a song about a girl and the colour of her eyes\n\n\n\n\nSweet Judy Blue Eyes',
    NULL,
    '2021-03-18 07:36:24.021'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'The Dude Called Oscar',
    'There is a town with a street with a corner. The corner has four stores one is a bookstore, a drug store, a candy shop, and a furniture store. In front of the candy store stands a man who people call Oscar. Why do they call him Oscar?\n\n\n\n\nHis parents named him Oscar.',
    NULL,
    '2021-03-07 23:52:04.048'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Toho film studios produced most of which series of films\n\n\n\n\nGodzilla',
    NULL,
    '2020-01-27 08:37:01.798'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Cockadoodle Doo!!!',
    'A rooster was standing on a pointed roof, If the rooster layed an egg Which side of the roof will it fall?\n\n\n\n\nROOSTERS DON''T LAY EGGS!!',
    'https://picsum.photos/147/143',
    '2023-10-22 11:13:21.438'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nisl pretium fusce id velit ut tortor pretium vive',
    'Purus in mollis nunc sed id semper. Suspendisse faucibus interdum posuere lorem ipsum. Dictum non consectetur a erat. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. In nibh mauris cursus mattis molestie a iaculis at erat. Velit aliquet sagittis id consectetur purus ut faucibus. Lorem dolor sed viverra ipsum. Facilisis gravida neque convallis a cras. Adipiscing vitae proin sagittis nisl rhoncus. Odio eu feugiat pretium nibh ipsum. Sit amet nulla facilisi morbi. Viverra mauris in aliquam sem. Vitae justo eget magna fermentum. Ultrices dui sapien eget mi proin sed libero. Convallis a cras semper auctor neque vitae tempus quam. Netus et malesuada fames ac turpis egestas. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Suspendisse potenti nullam ac tortor vitae.\n',
    NULL,
    '2022-11-28 06:02:49.959'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What do you give a scientist with bad breath? Experi-mints.',
    'https://picsum.photos/677/351',
    '2023-11-18 00:14:09.326'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Valkyrie''s Embrace',
    'Spell Card card\n\n\nIf all monsters you control are "Valkyrie" monsters: Target 1 Attack Position "Valkyrie" monster you control and 1 face-up monster your opponent controls; change your monster to Defense Position, and if you do, banish that opponent''s monster. You cannot Special Summon monsters the turn you activate this card, except "Valkyrie" monsters. You can only activate 1 "Valkyrie''s Embrace" per turn.',
    'https://images.ygoprodeck.com/images/cards/45584727.jpg',
    '2020-03-18 00:42:27.771'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'tentacool',
    'Pokemon  water poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png',
    '2022-09-29 23:51:21.455'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'cloyster',
    'Pokemon  water ice',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png',
    '2022-08-09 20:38:15.911'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What does a house wear? Address! (A dress)',
    NULL,
    '2022-09-14 03:22:03.324'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'What Could IT Be?',
    'IT is greater than God. IT is more evil than the devil. the poor have IT. the rich need IT. if you eat IT you will die. what is IT?\n\n\n\n\nnothing',
    NULL,
    '2023-08-30 17:21:08.065'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'arbok',
    'Pokemon  poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png',
    '2023-07-16 22:45:05.103'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris graduated Summa Cum Laude at Harvard after only 1 class.',
    'https://picsum.photos/385/282',
    '2022-08-19 11:01:20.703'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris is the name of happiness. When you Go to bed at night. Think about how much Chuck Norris would be alive if he was dead.',
    NULL,
    '2023-06-29 18:29:34.727'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Before it became politically incorrect, guys used to participate in the sport of "dwarf tossing". Chuck Norris invented and enjoys the sport of gorilla tossing.',
    NULL,
    '2022-06-27 09:17:56.758'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Louis Farrakhan',
    'We are all gifted, but we have to discover the gift, uncover the gift, nurture and develop the gift and use it for the Glory of God and for the liberation struggle of our people.',
    NULL,
    '2021-10-04 11:07:38.156'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Ice Cube Trays',
    'Grandma has an old-fashioned refrigerator with a very small freezer compartment which can hold up to seven ice cube trays stacked, but there are no shelves to separate the trays. You have fifteen trays, each of which can make a dozen cubes, but if you stand one tray on top of another before it''s frozen, it will sink into the lower tray and you won''t get full cubes from the lower tray. Without using anything but water and the ice cube trays, what is the fastest way to make full ice cubes in seven trays?\n\n\n\n\nThis can be accomplished by using frozen cubes as spacers to hold the trays apart. In the time it takes to freeze two trays, seven trays of ice can be frozen. Fill one tray, freeze it and remove the cubes. Place two cubes in the opposite corners of six trays, and fill the rest with water. Freeze all six trays, plus the seventh tray which is on top.',
    NULL,
    '2021-05-10 02:45:38.340'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Some people install alarm systems. Others install Chuck Norris door mats. No one has the balls to walk on Chuck Norris',
    'https://picsum.photos/607/642',
    '2020-02-23 16:33:18.166'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Ut ornare lectus sit amet est placerat. Eget nulla',
    'Sem viverra aliquet eget sit amet tellus cras. Proin nibh nisl condimentum id venenatis a. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Viverra vitae congue eu consequat ac felis donec et odio. Ultrices vitae auctor eu augue ut. Leo integer malesuada nunc vel risus. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus et malesuada fames ac. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Diam vel quam elementum pulvinar. Faucibus nisl tincidunt eget nullam. Lacus viverra vitae congue eu consequat. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Diam sit amet nisl suscipit. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.\nEu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Sagittis id consectetur purus ut faucibus pulvinar elementum. Accumsan tortor posuere ac ut. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Purus in massa tempor nec feugiat nisl. Felis eget nunc lobortis mattis. Amet massa vitae tortor condimentum lacinia quis vel. Sed cras ornare arcu dui vivamus arcu. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Integer vitae justo eget magna fermentum iaculis eu. Lorem mollis aliquam ut porttitor. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Vulputate dignissim suspendisse in est ante. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Nulla facilisi nullam vehicula ipsum a arcu cursus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum.\nCommodo elit at imperdiet dui accumsan. Bibendum ut tristique et egestas. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Diam vulputate ut pharetra sit amet aliquam id diam. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Facilisi morbi tempus iaculis urna id. Imperdiet sed euismod nisi porta lorem. Diam maecenas sed enim ut sem viverra aliquet eget. Varius duis at consectetur lorem donec massa. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Massa ultricies mi quis hendrerit. Semper auctor neque vitae tempus quam pellentesque nec nam. Feugiat in ante metus dictum. Gravida neque convallis a cras semper auctor neque.\n',
    NULL,
    '2019-12-13 12:21:32.284'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'kabuto',
    'Pokemon  rock water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png',
    '2023-07-27 15:20:28.763'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Rainbow Path',
    'Trap Card card\n\n\nWhen an opponent''s monster declares an attack: Send 1 "Crystal Beast" card from your Spell & Trap Card Zone to the Graveyard to target the attacking monster; negate the attack, then you can add 1 "Rainbow Dragon" or "Rainbow Dark Dragon" from your Deck to your hand.',
    'https://images.ygoprodeck.com/images/cards/7617253.jpg',
    '2021-08-03 18:09:55.476'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris can drown a fish',
    NULL,
    '2022-11-11 07:21:03.508'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ekans',
    'Pokemon  poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png',
    '2022-03-21 08:05:13.521'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Sem viverra aliquet eget sit amet tellus cras. Pro',
    'A iaculis at erat pellentesque adipiscing commodo elit. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Mattis nunc sed blandit libero. Eu lobortis elementum nibh tellus molestie nunc non blandit. Eget duis at tellus at urna condimentum. Sagittis aliquam malesuada bibendum arcu vitae elementum. Felis imperdiet proin fermentum leo vel orci. Sed sed risus pretium quam vulputate. Sed risus pretium quam vulputate dignissim suspendisse in. Fames ac turpis egestas maecenas pharetra convallis posuere. Lobortis scelerisque fermentum dui faucibus in ornare quam. Aenean pharetra magna ac placerat vestibulum lectus mauris. Aliquet sagittis id consectetur purus. Netus et malesuada fames ac. Habitant morbi tristique senectus et. Habitasse platea dictumst vestibulum rhoncus. Egestas sed sed risus pretium quam vulputate. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus.\nMi eget mauris pharetra et ultrices neque. Nunc non blandit massa enim nec. Velit scelerisque in dictum non consectetur a. Enim sed faucibus turpis in eu mi bibendum neque. In egestas erat imperdiet sed. Ac auctor augue mauris augue neque gravida in fermentum. Vitae congue eu consequat ac felis donec. Feugiat sed lectus vestibulum mattis. Nibh venenatis cras sed felis eget velit aliquet. Mauris sit amet massa vitae tortor condimentum lacinia quis. Orci sagittis eu volutpat odio facilisis mauris sit amet. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Purus viverra accumsan in nisl. Consequat semper viverra nam libero justo laoreet sit amet. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Nec dui nunc mattis enim ut tellus elementum. Quis auctor elit sed vulputate mi sit. Feugiat nibh sed pulvinar proin gravida.\n',
    NULL,
    '2022-06-13 00:23:36.814'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Phoenix is the capital city of which U.S. state\n\n\n\n\nArizona',
    NULL,
    '2020-07-27 07:35:23.586'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Whos Opperating',
    'A boy and his father are a car the car crashes and the farther is fine but the young man is in a bad way and needs to be opperated on, but the opperator said i can not apperate on him evryone asks why and the opperator said hes my son? who is the opporator\n\n\n\n\nhis mother is the opperator',
    'https://picsum.photos/681/144',
    '2020-03-02 10:26:20.157'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Whaat Is Paddy Ashdown First Name \n\n\n\n\nJeremy',
    'https://picsum.photos/390/348',
    '2023-08-22 02:02:25.140'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris strikes fear into zombies.',
    NULL,
    '2020-12-02 04:11:05.298'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I have a great joke about nepotism. But I’ll only tell it to my kids.',
    NULL,
    '2022-02-21 15:29:18.326'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Maximum Six',
    'Effect Monster card\n\nWarrior\nATK 1900 / DEF 1600\nLevel 6\n\nWhen this card is Tribute Summoned: Roll a six-sided die, and this card gains ATK equal to the result x 200.',
    'https://images.ygoprodeck.com/images/cards/30707994.jpg',
    '2022-09-02 18:51:46.915'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'squirtle',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    '2022-11-22 20:04:54.872'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'My boss told me to have a good day, so I went home!',
    NULL,
    '2021-04-06 20:12:31.121'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Lyndon B. Johnson',
    'You aren''t learning anything when you''re talking.',
    NULL,
    '2022-05-14 20:51:12.148'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'hypno',
    'Pokemon  psychic',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png',
    '2020-06-14 00:01:31.390'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Consectetur a erat nam at lectus. Amet justo donec',
    'Vitae auctor eu augue ut lectus arcu bibendum at varius. Massa tincidunt dui ut ornare lectus sit amet est. Donec ac odio tempor orci dapibus ultrices in. Semper quis lectus nulla at volutpat. Est sit amet facilisis magna etiam tempor. Lacus sed viverra tellus in hac habitasse platea. Ultrices neque ornare aenean euismod elementum nisi. Elit scelerisque mauris pellentesque pulvinar pellentesque. Elit sed vulputate mi sit. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Feugiat in ante metus dictum at tempor commodo ullamcorper. Condimentum lacinia quis vel eros donec ac odio tempor.\nPurus in mollis nunc sed id semper. Suspendisse faucibus interdum posuere lorem ipsum. Dictum non consectetur a erat. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. In nibh mauris cursus mattis molestie a iaculis at erat. Velit aliquet sagittis id consectetur purus ut faucibus. Lorem dolor sed viverra ipsum. Facilisis gravida neque convallis a cras. Adipiscing vitae proin sagittis nisl rhoncus. Odio eu feugiat pretium nibh ipsum. Sit amet nulla facilisi morbi. Viverra mauris in aliquam sem. Vitae justo eget magna fermentum. Ultrices dui sapien eget mi proin sed libero. Convallis a cras semper auctor neque vitae tempus quam. Netus et malesuada fames ac turpis egestas. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Suspendisse potenti nullam ac tortor vitae.\n',
    'https://picsum.photos/415/275',
    '2022-01-09 13:41:45.624'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Random',
    'Where do people like to have fun?\n\n\n\n\nThe bathroom. They wanted to potty!!! ( party )',
    'https://picsum.photos/357/120',
    '2023-11-06 21:25:25.620'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'meowth',
    'Pokemon  normal',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
    '2022-10-09 04:46:45.814'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'How do astronomers organize a party? They planet.',
    NULL,
    '2021-10-20 19:00:40.625'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris has a hippieskin rug in his living room.',
    NULL,
    '2019-12-02 04:34:54.948'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Sed lectus vestibulum mattis ullamcorper velit sed',
    'Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Consequat semper viverra nam libero justo laoreet sit amet cursus. Morbi quis commodo odio aenean. Ut sem nulla pharetra diam. Gravida cum sociis natoque penatibus et magnis. Eu sem integer vitae justo. Amet dictum sit amet justo donec enim diam vulputate ut. Eu consequat ac felis donec et. Sed vulputate odio ut enim. Vitae aliquet nec ullamcorper sit amet risus nullam.\nSem viverra aliquet eget sit amet tellus cras. Proin nibh nisl condimentum id venenatis a. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Viverra vitae congue eu consequat ac felis donec et odio. Ultrices vitae auctor eu augue ut. Leo integer malesuada nunc vel risus. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus et malesuada fames ac. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Diam vel quam elementum pulvinar. Faucibus nisl tincidunt eget nullam. Lacus viverra vitae congue eu consequat. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Diam sit amet nisl suscipit. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.\nBlandit volutpat maecenas volutpat blandit. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Aliquet enim tortor at auctor urna nunc id cursus metus. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Enim ut tellus elementum sagittis vitae et leo. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Elementum integer enim neque volutpat ac tincidunt vitae. Id leo in vitae turpis massa sed elementum. Volutpat sed cras ornare arcu dui vivamus arcu felis. Suspendisse in est ante in. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Elit eget gravida cum sociis natoque. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Purus faucibus ornare suspendisse sed. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Ac turpis egestas integer eget aliquet.\nAliquam sem fringilla ut morbi tincidunt augue interdum velit. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Tristique senectus et netus et malesuada fames ac. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut. Eros in cursus turpis massa tincidunt. Purus viverra accumsan in nisl nisi scelerisque eu. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Nam aliquam sem et tortor. Sit amet purus gravida quis blandit turpis. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Amet massa vitae tortor condimentum.\n',
    NULL,
    '2022-09-16 01:06:53.469'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'A sandwich walks into a bar. The barman says: ''sorry we don''t serve food here''',
    NULL,
    '2020-08-11 22:27:54.317'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I have a joke about statistics, but it’s not significant.',
    NULL,
    '2021-01-16 20:28:31.329'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Yogurt is the most high class dairy product to buy. It’s so cultured.',
    'https://picsum.photos/693/227',
    '2023-10-20 08:13:01.715'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Skills',
    'Who can type an email without a keyboard?\n\n\n\n\nChuck Norris',
    NULL,
    '2021-03-20 18:21:35.197'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I asked my dog what’s two minus two. He said nothing.',
    'https://picsum.photos/386/503',
    '2020-12-04 15:50:49.166'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What is the abbreviation for trinitrotoluene?\n\n\n\n\nTnt',
    NULL,
    '2022-07-12 10:07:30.255'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris frequently gets challenged to compare penis sizes with smartasses. Chuck always simply pulls out enough to win.',
    NULL,
    '2021-08-18 16:42:09.404'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    '',
    'What room can no one enter?\n\n\n\n\na mushroom',
    'https://picsum.photos/491/323',
    '2021-07-10 02:36:46.034'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What is the atomic number of sulphur?\n\n\n\n\n16',
    NULL,
    '2020-09-05 16:48:51.215'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why did the scarecrow win an award? It was outstanding in its field.',
    NULL,
    '2021-10-25 00:27:54.584'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why do melons have weddings? Because they cantaloupe.',
    'https://picsum.photos/438/327',
    '2022-10-18 00:21:49.864'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Eu turpis egestas pretium aenean pharetra magna ac',
    'Nec feugiat nisl pretium fusce id velit. Aliquam ut porttitor leo a diam sollicitudin tempor. Elementum eu facilisis sed odio morbi quis. Aliquet nec ullamcorper sit amet risus nullam. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Diam volutpat commodo sed egestas. Et leo duis ut diam quam nulla porttitor massa id. Justo laoreet sit amet cursus sit. Id aliquet lectus proin nibh. Pretium fusce id velit ut tortor pretium viverra. Enim lobortis scelerisque fermentum dui. Id diam vel quam elementum. Ultrices sagittis orci a scelerisque purus semper eget duis. Pretium viverra suspendisse potenti nullam. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Vel quam elementum pulvinar etiam non quam lacus suspendisse.\nCommodo elit at imperdiet dui accumsan. Bibendum ut tristique et egestas. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Diam vulputate ut pharetra sit amet aliquam id diam. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Facilisi morbi tempus iaculis urna id. Imperdiet sed euismod nisi porta lorem. Diam maecenas sed enim ut sem viverra aliquet eget. Varius duis at consectetur lorem donec massa. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Massa ultricies mi quis hendrerit. Semper auctor neque vitae tempus quam pellentesque nec nam. Feugiat in ante metus dictum. Gravida neque convallis a cras semper auctor neque.\nVolutpat consequat mauris nunc congue. Sollicitudin ac orci phasellus egestas tellus. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Massa tempor nec feugiat nisl pretium fusce id. Amet purus gravida quis blandit turpis cursus in hac. Neque ornare aenean euismod elementum nisi quis eleifend. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Elit at imperdiet dui accumsan sit amet. Etiam erat velit scelerisque in dictum non consectetur a erat. Lacus vestibulum sed arcu non odio euismod lacinia. Ultrices eros in cursus turpis. Nibh nisl condimentum id venenatis a condimentum. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus.\nMi tempus imperdiet nulla malesuada pellentesque. Ut sem nulla pharetra diam sit amet. Eu consequat ac felis donec et. Ac felis donec et odio pellentesque diam volutpat. Vulputate sapien nec sagittis aliquam malesuada bibendum. Commodo viverra maecenas accumsan lacus vel. Ut sem viverra aliquet eget sit. Semper quis lectus nulla at volutpat diam ut. Ultricies integer quis auctor elit sed. Nulla facilisi morbi tempus iaculis urna. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Diam ut venenatis tellus in metus vulputate eu. Ut consequat semper viverra nam libero justo. Facilisi morbi tempus iaculis urna id. Tortor vitae purus faucibus ornare suspendisse.\n',
    NULL,
    '2020-03-03 05:09:45.779'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Black And White',
    'What is black and white and read all over?\n\n\n\n\nthe newspaper!!!!',
    'https://picsum.photos/375/384',
    '2023-09-23 16:18:47.609'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris skinned Waldo and put it on, waiting for new prey to find him.',
    'https://picsum.photos/676/421',
    '2023-08-13 09:31:32.996'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Starring Sarah Michelle Gellar,the teen flick "Cruel Intentions" is based on the same novel as what more grown-up film?\n\n\n\n\nDangerous Liasons',
    'https://picsum.photos/262/278',
    '2021-07-16 22:45:48.427'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'upChuck is a term now used to describe how far in the air you fly when Chuck Norris kicks your ass.',
    NULL,
    '2022-05-05 20:34:55.542'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris once roundhouse kicked a black person so hard he turned white',
    'https://picsum.photos/478/346',
    '2020-11-06 10:44:05.336'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from John F. Kennedy',
    'Forgive your enemies, but never forget their names.',
    NULL,
    '2023-10-09 07:20:43.141'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What key is used to open bananas? A mon-key.',
    'https://picsum.photos/637/254',
    '2023-04-20 11:23:15.197'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'How Many Fingers',
    'How many fingers do 20 people have?\n\n\n\n\nNo thumbs There are 160 fingers on 20 people. Thumbs Don''t count',
    NULL,
    '2021-12-25 22:10:29.140'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'when Chuck Norris went on to Catch a Predator Chis Hansen was arrested.',
    NULL,
    '2021-06-12 18:12:18.327'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Spirit of the Breeze',
    'Effect Monster card\n\n\nAs long as this card remains in face-up Attack Position on your side of the field, increase your Life Points by 1000 points during each of your Standby Phases.',
    'https://images.ygoprodeck.com/images/cards/53530069.jpg',
    '2023-07-09 20:17:06.946'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Dave Barry',
    'It is a scientific fact that your body will not absorb cholesterol if you take it from another person''s plate.',
    NULL,
    '2021-03-23 06:11:20.041'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'alakazam',
    'Pokemon  psychic',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png',
    '2020-10-07 06:09:26.963'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from R. Kelly',
    'They say marriage will change you but it didn''t change me. Being in love changed me.',
    NULL,
    '2020-10-12 09:15:16.098'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Fairy Box',
    'Trap Card card\n\n\nWhen your opponent''s monster declares an attack: Toss a coin and call it. If you call it right, the attacking monster''s ATK becomes 0 until the end of the Battle Phase. During each of your Standby Phases, pay 500 Life Points or destroy this card.',
    'https://images.ygoprodeck.com/images/cards/21598948.jpg',
    '2021-12-07 04:37:38.427'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Margaret Mead',
    'Instead of being presented with stereotypes by age, sex, color, class, or religion, children must have the opportunity to learn that within each range, some people are loathsome and some are delightful.',
    NULL,
    '2020-01-20 02:04:00.530'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'The phrase "the real McCoy" is thought to come from "the real Mackay," which in Scotland has long referred to a type of what?\n\n\n\n\nWhiskey',
    NULL,
    '2023-06-29 11:43:54.704'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'poliwag',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png',
    '2023-09-10 13:17:55.262'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What do you call cheese that isn''t yours? Nacho Cheese.',
    'https://picsum.photos/316/225',
    '2022-12-05 02:47:53.322'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Who sang the song "Pretty Woman?"\n\n\n\n\nRoy Orbison',
    'https://picsum.photos/577/192',
    '2021-07-22 06:16:22.552'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Leafplace Plaice',
    'Effect Monster card\n\n\nGains 200 ATK/DEF for each card in your opponent''s GY. During your Standby Phase, if this card is in your hand or GY and your opponent has more cards in their GY than you: You can Special Summon this card. You can only use this effect of "Leafplace Plaice" once per turn.',
    'https://images.ygoprodeck.com/images/cards/50599453.jpg',
    '2019-12-25 21:08:04.514'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Yesterday',
    'Here on earth it is true, yesterday is always before today; but there is a place where yesterday always follows today. Where?\n\n\n\n\nIn a dictionary!',
    NULL,
    '2020-03-09 04:37:39.776'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Whitefish Salvage',
    'Spell Card card\n\n\nYou can target 1 Fish monster in your GY; add it to your hand. You can only use this effect of "Whitefish Salvage" once per turn. If this card in your possession is destroyed by an opponent''s card effect and sent to your GY: Take 1 Fish monster from your Deck, and either add it to your hand or Special Summon it.',
    'https://images.ygoprodeck.com/images/cards/63509474.jpg',
    '2021-11-08 00:36:53.315'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Have Any Change?',
    'I am something, yet I am nothing. I may be with you, but I may be not. If you put something into me I disappear. Those are your three hints. Answer the riddle if you can.\n\n\n\n\nA hole!',
    'https://picsum.photos/626/484',
    '2021-11-12 17:49:20.017'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Oft I Must Strive',
    'oft i must strive with wind and rain, battle them both when under the sea. I feel out the bottom, a foreign land. In lying still I am strong in the strife;if I fail in that, they are stronger then I, and wrenching me loose, soon put me to rout. they wish to capture what i must keep. I can master them both if my grip holds out, if the rocks bring succor and lend support, strenght in the struggle. ask me my name!\n\n\n\n\na anchor!!!!',
    'https://picsum.photos/687/450',
    '2023-06-09 10:56:40.384'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris once put a forest fire out by spitting on it.',
    NULL,
    '2023-02-01 19:56:57.697'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Buster Blader, the Destruction Swordmaster',
    'Effect Monster card\n\nWarrior\nATK 2600 / DEF 2300\nLevel 7\n\nThis card''s name becomes "Buster Blader" while it is on the field or in the Graveyard. If a monster(s) your opponent controls is destroyed by battle or card effect and sent to the Graveyard: You can target 1 of those destroyed monsters; equip it to this card. Once per turn: You can send 1 Monster Card you control that is equipped to this card to the Graveyard; destroy all monsters your opponent controls with the same Type as that monster sent to the Graveyard.',
    'https://images.ygoprodeck.com/images/cards/3428069.jpg',
    '2023-08-01 20:20:23.671'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'The Rooster',
    'if a rooster was on top of a roof and layed a egg and the wind blew which side would the egg land the left or the right\n\n\n\n\ndosent madder roosters dont lay eggs',
    NULL,
    '2022-11-20 17:44:33.856'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    '''Original Sin'' actually refers to the first time anyone ever tried to fight Chuck Norris.',
    'https://picsum.photos/659/161',
    '2020-06-07 21:10:48.956'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nisl pretium fusce id velit ut tortor pretium vive',
    'A iaculis at erat pellentesque adipiscing commodo elit. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Mattis nunc sed blandit libero. Eu lobortis elementum nibh tellus molestie nunc non blandit. Eget duis at tellus at urna condimentum. Sagittis aliquam malesuada bibendum arcu vitae elementum. Felis imperdiet proin fermentum leo vel orci. Sed sed risus pretium quam vulputate. Sed risus pretium quam vulputate dignissim suspendisse in. Fames ac turpis egestas maecenas pharetra convallis posuere. Lobortis scelerisque fermentum dui faucibus in ornare quam. Aenean pharetra magna ac placerat vestibulum lectus mauris. Aliquet sagittis id consectetur purus. Netus et malesuada fames ac. Habitant morbi tristique senectus et. Habitasse platea dictumst vestibulum rhoncus. Egestas sed sed risus pretium quam vulputate. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus.\nDignissim convallis aenean et tortor at risus viverra adipiscing at. Lacinia quis vel eros donec ac odio tempor orci. Id porta nibh venenatis cras. Nunc sed augue lacus viverra vitae congue eu consequat. Nisi porta lorem mollis aliquam. Pellentesque habitant morbi tristique senectus. Bibendum est ultricies integer quis auctor elit sed. Posuere urna nec tincidunt praesent semper. Id donec ultrices tincidunt arcu non sodales. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Nibh mauris cursus mattis molestie a iaculis at. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Ut porttitor leo a diam. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Magna fringilla urna porttitor rhoncus dolor purus non enim. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed.\nEu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Sagittis id consectetur purus ut faucibus pulvinar elementum. Accumsan tortor posuere ac ut. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Purus in massa tempor nec feugiat nisl. Felis eget nunc lobortis mattis. Amet massa vitae tortor condimentum lacinia quis vel. Sed cras ornare arcu dui vivamus arcu. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Integer vitae justo eget magna fermentum iaculis eu. Lorem mollis aliquam ut porttitor. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Vulputate dignissim suspendisse in est ante. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Nulla facilisi nullam vehicula ipsum a arcu cursus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum.\nEget sit amet tellus cras adipiscing enim eu turpis. Amet facilisis magna etiam tempor. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Purus viverra accumsan in nisl nisi. Vitae elementum curabitur vitae nunc sed velit. Sed lectus vestibulum mattis ullamcorper velit. Consequat interdum varius sit amet mattis. Amet justo donec enim diam. Sed vulputate odio ut enim blandit volutpat maecenas. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Habitant morbi tristique senectus et netus et malesuada. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Congue mauris rhoncus aenean vel elit scelerisque. Id neque aliquam vestibulum morbi blandit cursus. Nunc sed augue lacus viverra vitae congue eu consequat ac. Leo vel orci porta non pulvinar neque. Consequat interdum varius sit amet mattis.\n',
    NULL,
    '2021-07-13 18:48:29.749'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'A power drill just wouldn''t be... unless it had a CHUCK Norris KEY.',
    NULL,
    '2021-08-07 05:44:41.252'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Blandit volutpat maecenas volutpat blandit. Nulla ',
    'Lectus urna duis convallis convallis tellus id interdum. Porttitor leo a diam sollicitudin tempor id eu. Sit amet aliquam id diam maecenas. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Fermentum odio eu feugiat pretium nibh ipsum consequat. Purus semper eget duis at tellus at. Arcu bibendum at varius vel pharetra vel turpis. Suscipit tellus mauris a diam maecenas sed enim. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Faucibus interdum posuere lorem ipsum. Turpis massa tincidunt dui ut ornare lectus sit amet est. Egestas maecenas pharetra convallis posuere morbi leo. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Amet venenatis urna cursus eget nunc scelerisque. Hac habitasse platea dictumst quisque sagittis purus sit. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Non blandit massa enim nec dui. Mus mauris vitae ultricies leo integer malesuada. Sed felis eget velit aliquet sagittis id consectetur.\nSed elementum tempus egestas sed sed risus pretium quam. Interdum varius sit amet mattis vulputate enim nulla. Orci porta non pulvinar neque laoreet suspendisse. Urna porttitor rhoncus dolor purus non enim praesent. Elit sed vulputate mi sit amet mauris commodo. Sit amet dictum sit amet. Elementum integer enim neque volutpat ac tincidunt. A erat nam at lectus urna duis convallis. Convallis aenean et tortor at risus viverra adipiscing at in. Mattis vulputate enim nulla aliquet porttitor lacus. Sagittis nisl rhoncus mattis rhoncus urna. Sit amet massa vitae tortor. Phasellus vestibulum lorem sed risus ultricies. Habitant morbi tristique senectus et netus et. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Mi eget mauris pharetra et ultrices neque. Sodales ut eu sem integer.\n',
    NULL,
    '2023-05-01 20:24:37.852'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'In which novel of 1874 does Sergeant Troy appear\n\n\n\n\nFar From The Madding Crowd',
    NULL,
    '2022-08-01 00:48:52.262'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Eget felis eget nunc lobortis mattis aliquam fauci',
    'Nibh nisl condimentum id venenatis a condimentum vitae sapien. Laoreet sit amet cursus sit. Commodo ullamcorper a lacus vestibulum sed arcu. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Pharetra convallis posuere morbi leo urna. Id volutpat lacus laoreet non curabitur gravida arcu ac. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Lorem mollis aliquam ut porttitor. A arcu cursus vitae congue. Nisl purus in mollis nunc sed id semper. Convallis a cras semper auctor neque. Lectus arcu bibendum at varius. Facilisis sed odio morbi quis commodo odio aenean sed. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Vel orci porta non pulvinar neque laoreet suspendisse. Feugiat nisl pretium fusce id. Adipiscing bibendum est ultricies integer quis auctor.\nAliquam sem fringilla ut morbi tincidunt augue interdum velit. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Tristique senectus et netus et malesuada fames ac. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut. Eros in cursus turpis massa tincidunt. Purus viverra accumsan in nisl nisi scelerisque eu. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Nam aliquam sem et tortor. Sit amet purus gravida quis blandit turpis. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Amet massa vitae tortor condimentum.\n',
    NULL,
    '2022-01-11 02:41:09.093'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I wonder what my parents did to fight boredom before the internet. I asked my eighteen brothers and sisters but they didn’t have any idea either.',
    NULL,
    '2021-11-04 18:48:44.527'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris ONLY drinks orange juice after brushing his teeth.',
    NULL,
    '2023-01-09 13:37:02.686'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'flareon',
    'Pokemon  fire',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png',
    '2023-08-13 15:29:01.203'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nec feugiat nisl pretium fusce id velit. Aliquam u',
    'Consectetur a erat nam at lectus. Amet justo donec enim diam vulputate ut pharetra. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Porttitor rhoncus dolor purus non enim. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Augue ut lectus arcu bibendum. Lectus proin nibh nisl condimentum id.\nNisl pretium fusce id velit ut tortor pretium viverra. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Volutpat diam ut venenatis tellus in metus. Commodo viverra maecenas accumsan lacus. Elit at imperdiet dui accumsan sit amet nulla facilisi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Eu scelerisque felis imperdiet proin. Arcu bibendum at varius vel pharetra vel turpis nunc. Orci a scelerisque purus semper eget. Elementum sagittis vitae et leo duis ut diam.\n',
    'https://picsum.photos/532/139',
    '2022-05-09 13:31:40.510'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Faces And Hands',
    'what has a face but doesnt see hear or talk? what has hands but cant touch grab or hold?\n\n\n\n\na clock',
    NULL,
    '2021-06-05 15:54:52.496'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dolor sit amet, consectetur adipiscing elit, sed d',
    'Ut ornare lectus sit amet est placerat. Eget nulla facilisi etiam dignissim diam quis enim. Penatibus et magnis dis parturient montes. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Odio pellentesque diam volutpat commodo. Duis ut diam quam nulla porttitor massa id. Diam donec adipiscing tristique risus. Sed blandit libero volutpat sed cras ornare. Tincidunt lobortis feugiat vivamus at augue eget arcu. Arcu dui vivamus arcu felis bibendum ut tristique. Dapibus ultrices in iaculis nunc sed augue lacus. Risus nullam eget felis eget nunc lobortis.\n',
    NULL,
    '2023-08-13 02:39:39.107'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dinomist Brachion',
    'Pendulum Effect Monster card\n\nMachine\nATK 2000 / DEF 800\nLevel 5\n\n[ Pendulum Effect ] \nOnce, while this card is in your Pendulum Zone, you can negate an activated card effect that targets another "Dinomist" card(s) you control, then destroy this card.\n[ Monster Effect ] \nIf you do not control "Dinomist Brachion" in your Monster Zone and your opponent controls a monster that has the highest ATK on the field (even if it''s tied), you can Special Summon this card (from your hand).',
    'https://images.ygoprodeck.com/images/cards/368382.jpg',
    '2021-08-21 15:41:49.012'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Sawdust',
    'If only he saw the sawdust.\n\n\n\n\nHe is the smallest midget in the world and he is blind, he has a cane. He works at the circus in the freak show, and another midgit is jealous of him so he saws off peices of his cane to make him feel taller. The smallest midgit in the world shoots himself in the head because he no longer is the smallest in the world.',
    'https://picsum.photos/106/685',
    '2023-06-19 19:54:33.313'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'From Which Country Did Saint Nicholas Originate \n\n\n\n\nTurkey',
    NULL,
    '2020-09-29 23:43:57.418'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Whose last words were "It''s unbelievable"\n\n\n\n\nMata Hari',
    'https://picsum.photos/455/521',
    '2022-12-19 07:43:28.447'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Pat''s Who?',
    'Pat Smith gives someone a dollar. Pat is this person''s brother, but the person is not Pat''s brother. How can that be?\n\n\n\n\nIt''s Pat''s sister.',
    'https://picsum.photos/226/383',
    '2023-06-17 00:31:25.423'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Why',
    'Why did the fox cross the road?\n\n\n\n\nBecause he wanted to prove that he wasn''t a chicken.',
    NULL,
    '2020-03-29 08:01:31.461'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Purus in mollis nunc sed id semper. Suspendisse fa',
    'Nisl pretium fusce id velit ut tortor pretium viverra. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Volutpat diam ut venenatis tellus in metus. Commodo viverra maecenas accumsan lacus. Elit at imperdiet dui accumsan sit amet nulla facilisi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Eu scelerisque felis imperdiet proin. Arcu bibendum at varius vel pharetra vel turpis nunc. Orci a scelerisque purus semper eget. Elementum sagittis vitae et leo duis ut diam.\nEnim eu turpis egestas pretium aenean. Ipsum a arcu cursus vitae. Massa massa ultricies mi quis hendrerit dolor. Rhoncus dolor purus non enim praesent elementum. Tristique magna sit amet purus. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Egestas diam in arcu cursus. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. In mollis nunc sed id semper risus in hendrerit gravida. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Volutpat consequat mauris nunc congue nisi vitae.\nNibh sit amet commodo nulla. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Gravida neque convallis a cras. Id nibh tortor id aliquet lectus proin nibh. At tempor commodo ullamcorper a lacus vestibulum sed. Purus sit amet luctus venenatis lectus magna fringilla. Neque convallis a cras semper auctor. Auctor urna nunc id cursus metus. Purus in massa tempor nec feugiat nisl. Eget dolor morbi non arcu risus quis varius quam quisque. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Dui vivamus arcu felis bibendum ut tristique.',
    NULL,
    '2023-03-03 18:02:27.533'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Id eu nisl nunc mi ipsum faucibus vitae aliquet ne',
    'Risus sed vulputate odio ut enim blandit volutpat. Faucibus turpis in eu mi bibendum neque. Morbi tristique senectus et netus et malesuada fames ac. Lacinia quis vel eros donec. Est velit egestas dui id ornare arcu. Commodo viverra maecenas accumsan lacus. Turpis in eu mi bibendum neque egestas congue. Fermentum posuere urna nec tincidunt. Sit amet nisl purus in mollis. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Justo eget magna fermentum iaculis eu non diam. Proin nibh nisl condimentum id venenatis. Viverra maecenas accumsan lacus vel facilisis volutpat est. Rhoncus dolor purus non enim praesent elementum facilisis leo. Urna id volutpat lacus laoreet non curabitur gravida. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fermentum leo vel orci porta.\nEget sit amet tellus cras adipiscing enim eu. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Purus in massa tempor nec feugiat nisl pretium fusce. Eu feugiat pretium nibh ipsum consequat nisl. Purus in mollis nunc sed. Turpis massa sed elementum tempus egestas sed. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Est lorem ipsum dolor sit amet. Fringilla phasellus faucibus scelerisque eleifend donec. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.\n',
    NULL,
    '2021-12-28 13:49:48.206'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'exeggutor',
    'Pokemon  grass psychic',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png',
    '2020-11-01 19:16:06.304'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'The Bus Driver',
    'Your driving a bus and stop at a bus stop 10 miles from Aberdovey and pick up 10 passengers, you then drive onto then next bus stop which is 5 miles from the last stop and pick up 6 passenger and drop of 8. You then come to the next stop which is 20 miles from the last one and pick up 20 and drop of another 8. Now it''s the end of the day and have droped off all the passengers. What was the drivers name?\n\n\n\n\nIt is YOUR name because YOU were driving the bus!',
    NULL,
    '2021-04-05 13:20:33.581'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris never ''visits'' a foreign land... he invades it',
    NULL,
    '2022-06-25 15:32:59.117'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Cybersal Cyclone',
    'Spell Card card\n\n\nTarget 1 Link Monster your opponent controls; banish 1 monster from your GY that has the same Link Rating as that monster, and if you do, destroy that monster, then, if the original Type of the monster you banished was Cyberse, you can destroy 1 face-up card in your opponent''s Spell & Trap Zone.',
    'https://images.ygoprodeck.com/images/cards/37007105.jpg',
    '2022-09-28 06:30:45.677'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Travels Around The World',
    'what goes aroung the world but always stays in a corner?\n\n\n\n\na stamp',
    NULL,
    '2022-05-23 18:32:42.679'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What cartoon character was born April 1st 1980\n\n\n\n\nBart Simpson',
    NULL,
    '2020-05-15 02:23:42.656'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Robert Shea',
    'Ultimately we may still ask, why can''t humans design a perfect society?',
    NULL,
    '2022-04-02 23:00:01.253'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'When does a joke become a dad joke? When it becomes apparent.',
    'https://picsum.photos/676/256',
    '2023-01-01 23:42:40.457'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What''s brown and sticky? A stick.',
    NULL,
    '2021-02-25 22:57:35.345'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Sed lectus vestibulum mattis ullamcorper velit sed',
    'Mi eget mauris pharetra et ultrices neque. Nunc non blandit massa enim nec. Velit scelerisque in dictum non consectetur a. Enim sed faucibus turpis in eu mi bibendum neque. In egestas erat imperdiet sed. Ac auctor augue mauris augue neque gravida in fermentum. Vitae congue eu consequat ac felis donec. Feugiat sed lectus vestibulum mattis. Nibh venenatis cras sed felis eget velit aliquet. Mauris sit amet massa vitae tortor condimentum lacinia quis. Orci sagittis eu volutpat odio facilisis mauris sit amet. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Purus viverra accumsan in nisl. Consequat semper viverra nam libero justo laoreet sit amet. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Nec dui nunc mattis enim ut tellus elementum. Quis auctor elit sed vulputate mi sit. Feugiat nibh sed pulvinar proin gravida.\n',
    NULL,
    '2021-05-25 12:37:01.196'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Lectus magna fringilla urna porttitor rhoncus dolo',
    'Lorem sed risus ultricies tristique nulla aliquet enim. Curabitur vitae nunc sed velit. Vel elit scelerisque mauris pellentesque pulvinar. Viverra nibh cras pulvinar mattis nunc sed blandit. Pellentesque pulvinar pellentesque habitant morbi. Elementum sagittis vitae et leo. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Senectus et netus et malesuada. Varius vel pharetra vel turpis nunc. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Quam elementum pulvinar etiam non quam.\nDignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Sit amet nulla facilisi morbi tempus. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Sodales neque sodales ut etiam sit amet nisl purus. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Nisi lacus sed viverra tellus in hac habitasse. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Tincidunt eget nullam non nisi. Cursus risus at ultrices mi. Volutpat est velit egestas dui id ornare. Sagittis nisl rhoncus mattis rhoncus. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Fermentum leo vel orci porta non pulvinar neque. Quisque sagittis purus sit amet volutpat. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Porttitor massa id neque aliquam vestibulum morbi blandit. At quis risus sed vulputate odio. Nisi vitae suscipit tellus mauris a diam maecenas sed enim.\n',
    NULL,
    '2020-03-10 05:22:45.080'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Sem viverra aliquet eget sit amet tellus cras. Pro',
    'Sed elementum tempus egestas sed sed risus pretium quam. Interdum varius sit amet mattis vulputate enim nulla. Orci porta non pulvinar neque laoreet suspendisse. Urna porttitor rhoncus dolor purus non enim praesent. Elit sed vulputate mi sit amet mauris commodo. Sit amet dictum sit amet. Elementum integer enim neque volutpat ac tincidunt. A erat nam at lectus urna duis convallis. Convallis aenean et tortor at risus viverra adipiscing at in. Mattis vulputate enim nulla aliquet porttitor lacus. Sagittis nisl rhoncus mattis rhoncus urna. Sit amet massa vitae tortor. Phasellus vestibulum lorem sed risus ultricies. Habitant morbi tristique senectus et netus et. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Mi eget mauris pharetra et ultrices neque. Sodales ut eu sem integer.\nNunc sed velit dignissim sodales ut eu sem integer. Aliquam sem et tortor consequat id porta nibh venenatis cras. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. In aliquam sem fringilla ut morbi tincidunt. Feugiat nisl pretium fusce id velit ut tortor. Eu feugiat pretium nibh ipsum consequat nisl vel. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Libero id faucibus nisl tincidunt eget nullam. Urna cursus eget nunc scelerisque. Convallis tellus id interdum velit laoreet id. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Amet consectetur adipiscing elit pellentesque habitant. Orci ac auctor augue mauris augue neque gravida in. Risus quis varius quam quisque id diam vel quam. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Amet porttitor eget dolor morbi non. Convallis convallis tellus id interdum.\n',
    NULL,
    '2020-04-26 14:41:38.572'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'seadra',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png',
    '2021-05-04 07:14:15.439'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Jimmy Connors',
    'No, like I said, my dad was never really part of the tennis. His involvement around what I did with the tennis and with my mom and my grandparents was really not a part of my life.',
    'https://picsum.photos/386/327',
    '2020-08-16 15:43:03.570'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Thomas B. Macaulay',
    'Many politicians are in the habit of laying it down as a self-evident proposition that no people ought to be free till they are fit to use their freedom. The maxim is worthy of the fool in the old story who resolved not to go into the water till he had learned to swim.',
    NULL,
    '2022-07-08 16:28:19.771'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Semper auctor neque vitae tempus quam pellentesque',
    'Dignissim convallis aenean et tortor at risus viverra adipiscing at. Lacinia quis vel eros donec ac odio tempor orci. Id porta nibh venenatis cras. Nunc sed augue lacus viverra vitae congue eu consequat. Nisi porta lorem mollis aliquam. Pellentesque habitant morbi tristique senectus. Bibendum est ultricies integer quis auctor elit sed. Posuere urna nec tincidunt praesent semper. Id donec ultrices tincidunt arcu non sodales. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Nibh mauris cursus mattis molestie a iaculis at. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Ut porttitor leo a diam. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Magna fringilla urna porttitor rhoncus dolor purus non enim. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed.\n',
    'https://picsum.photos/243/451',
    '2021-06-04 06:15:19.897'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'How do you make 7 even? You take away the s.',
    'https://picsum.photos/145/498',
    '2022-01-07 04:59:50.618'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris can make a Snooker 147 maximum break with a single shot.',
    'https://picsum.photos/300/617',
    '2022-11-30 13:17:42.171'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'How did Darth Vader know what Luke got him for Christmas? He felt his presents!',
    NULL,
    '2020-11-11 01:24:50.493'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What''s orange and sounds like a parrot? A carrot!',
    NULL,
    '2022-12-25 01:05:51.874'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris'' beard is sexier than lmfao',
    NULL,
    '2022-01-05 06:45:51.028'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why don’t seagulls fly over the bay? Because then they’d be bagels (bay gulls).',
    NULL,
    '2021-11-05 00:28:38.592'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Alexander Pope',
    'A God without dominion, providence, and final causes, is nothing else but fate and nature.',
    NULL,
    '2020-02-03 08:51:54.164'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'For which film did James Cagney win an oscar\n\n\n\n\nYankee Doodle Dandy',
    NULL,
    '2023-04-14 05:27:06.117'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Noble Knight Gwalchavad',
    'Effect Monster card\n\nWarrior\nATK 1500 / DEF 1800\nLevel 4\n\nThis card is treated as a Normal Monster while face-up on the field. While equipped with a "Noble Arms" Equip Spell Card, this card becomes an Effect Monster with this effect.\n● You can target 1 "Noble Knight" monster in your Graveyard; add it to your hand, and if you do, destroy 1 "Noble Arms" Equip Spell Card you control. You can only use this effect of "Noble Knight Gwalchavad" once per turn.',
    'https://images.ygoprodeck.com/images/cards/13391185.jpg',
    '2020-08-17 16:34:06.780'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Erykah Badu',
    'No one chooses to raise children alone.',
    'https://picsum.photos/121/589',
    '2021-11-06 17:54:25.612'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'onix',
    'Pokemon  rock ground',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png',
    '2023-06-26 20:23:35.237'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What product was originally called drybak\n\n\n\n\nDuct Tape',
    NULL,
    '2021-08-10 11:15:51.638'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What is a group of swans in flight\n\n\n\n\nWedge',
    NULL,
    '2023-08-21 17:27:33.506'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'dragonair',
    'Pokemon  dragon',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png',
    '2022-03-30 19:26:24.584'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris is the greatest matador who ever lived.',
    NULL,
    '2023-07-20 21:45:52.634'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Wave-Motion Cannon',
    'Spell Card card\n\n\nDuring your Main Phase: You can send this face-up card to the GY; inflict 1000 damage to your opponent for each of your Standby Phases that have passed since this card was activated.',
    'https://images.ygoprodeck.com/images/cards/38992735.jpg',
    '2023-05-23 10:52:17.872'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'clefable',
    'Pokemon  fairy',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png',
    '2023-04-21 13:00:09.567'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'If April showers bring May flowers, what do May flowers bring? Pilgrims.',
    'https://picsum.photos/165/608',
    '2022-06-03 14:43:06.476'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Solar System',
    'What am I? I may look small but weigh a lot tons In some of the cases I''am bigger than the sun In the darkness of night I''am above your head I make people sleep when they count my friends and me in bed I''am not small but I''am far I''am the bright little things stuck in tar\n\n\n\n\nThe answer to this riddle is "Star"',
    NULL,
    '2023-04-22 12:58:35.693'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    '',
    'They seem so long but theres only 24 Close to death is when you want more.\n\n\n\n\nAn Hour',
    'https://picsum.photos/129/289',
    '2023-08-31 22:52:40.613'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Lectus urna duis convallis convallis tellus id int',
    'Vitae auctor eu augue ut lectus arcu bibendum at varius. Massa tincidunt dui ut ornare lectus sit amet est. Donec ac odio tempor orci dapibus ultrices in. Semper quis lectus nulla at volutpat. Est sit amet facilisis magna etiam tempor. Lacus sed viverra tellus in hac habitasse platea. Ultrices neque ornare aenean euismod elementum nisi. Elit scelerisque mauris pellentesque pulvinar pellentesque. Elit sed vulputate mi sit. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Feugiat in ante metus dictum at tempor commodo ullamcorper. Condimentum lacinia quis vel eros donec ac odio tempor.\nPurus in mollis nunc sed id semper. Suspendisse faucibus interdum posuere lorem ipsum. Dictum non consectetur a erat. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. In nibh mauris cursus mattis molestie a iaculis at erat. Velit aliquet sagittis id consectetur purus ut faucibus. Lorem dolor sed viverra ipsum. Facilisis gravida neque convallis a cras. Adipiscing vitae proin sagittis nisl rhoncus. Odio eu feugiat pretium nibh ipsum. Sit amet nulla facilisi morbi. Viverra mauris in aliquam sem. Vitae justo eget magna fermentum. Ultrices dui sapien eget mi proin sed libero. Convallis a cras semper auctor neque vitae tempus quam. Netus et malesuada fames ac turpis egestas. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Suspendisse potenti nullam ac tortor vitae.\nEt pharetra pharetra massa massa ultricies mi quis hendrerit. Non odio euismod lacinia at quis risus sed vulputate. Vulputate sapien nec sagittis aliquam. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Tristique et egestas quis ipsum. Dui ut ornare lectus sit amet. Ac feugiat sed lectus vestibulum mattis. Enim tortor at auctor urna nunc. Feugiat sed lectus vestibulum mattis ullamcorper. Eget mauris pharetra et ultrices neque. Euismod elementum nisi quis eleifend quam. Volutpat odio facilisis mauris sit amet massa. Ultricies lacus sed turpis tincidunt id aliquet risus. Egestas diam in arcu cursus euismod quis.\nEget sit amet tellus cras adipiscing enim eu. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Purus in massa tempor nec feugiat nisl pretium fusce. Eu feugiat pretium nibh ipsum consequat nisl. Purus in mollis nunc sed. Turpis massa sed elementum tempus egestas sed. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Est lorem ipsum dolor sit amet. Fringilla phasellus faucibus scelerisque eleifend donec. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.\n',
    NULL,
    '2020-09-05 17:19:28.076'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Sdfggsdfgdf',
    'rewtwerrerw\n\n\n\n\nferwtretrwetgwer',
    NULL,
    '2023-11-11 18:31:16.006'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'The ONLY Chuck Norris regret.... inventing Al Gore.',
    'https://picsum.photos/571/210',
    '2021-07-05 20:38:47.955'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Blandit volutpat maecenas volutpat blandit. Nulla ',
    'Nec feugiat nisl pretium fusce id velit. Aliquam ut porttitor leo a diam sollicitudin tempor. Elementum eu facilisis sed odio morbi quis. Aliquet nec ullamcorper sit amet risus nullam. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Diam volutpat commodo sed egestas. Et leo duis ut diam quam nulla porttitor massa id. Justo laoreet sit amet cursus sit. Id aliquet lectus proin nibh. Pretium fusce id velit ut tortor pretium viverra. Enim lobortis scelerisque fermentum dui. Id diam vel quam elementum. Ultrices sagittis orci a scelerisque purus semper eget duis. Pretium viverra suspendisse potenti nullam. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Vel quam elementum pulvinar etiam non quam lacus suspendisse.\nEget sit amet tellus cras adipiscing enim eu. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Purus in massa tempor nec feugiat nisl pretium fusce. Eu feugiat pretium nibh ipsum consequat nisl. Purus in mollis nunc sed. Turpis massa sed elementum tempus egestas sed. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Est lorem ipsum dolor sit amet. Fringilla phasellus faucibus scelerisque eleifend donec. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.\nCras semper auctor neque vitae tempus quam pellentesque nec. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Eu augue ut lectus arcu. Purus sit amet volutpat consequat mauris. Amet facilisis magna etiam tempor orci eu lobortis. Diam donec adipiscing tristique risus nec feugiat in fermentum. Consequat nisl vel pretium lectus quam id. Vivamus at augue eget arcu dictum varius duis at. Rutrum quisque non tellus orci. Felis eget velit aliquet sagittis id consectetur. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Massa sed elementum tempus egestas sed sed risus pretium. Tristique senectus et netus et malesuada fames. Leo vel fringilla est ullamcorper eget nulla facilisi. Mauris in aliquam sem fringilla ut morbi. Nibh tellus molestie nunc non blandit. Egestas sed tempus urna et pharetra pharetra massa massa. Malesuada nunc vel risus commodo viverra maecenas. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis.\nAliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Quis vel eros donec ac odio tempor orci. Augue eget arcu dictum varius duis at consectetur lorem donec. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Duis at tellus at urna condimentum mattis pellentesque id nibh. Sed nisi lacus sed viverra tellus. Tortor aliquam nulla facilisi cras fermentum odio eu. Vulputate mi sit amet mauris commodo quis imperdiet massa. Vulputate enim nulla aliquet porttitor lacus luctus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Venenatis tellus in metus vulputate eu. Neque sodales ut etiam sit amet. Id interdum velit laoreet id donec ultrices tincidunt arcu. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Viverra vitae congue eu consequat ac. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Volutpat diam ut venenatis tellus in metus vulputate eu. Nibh tellus molestie nunc non.\n',
    'https://picsum.photos/488/374',
    '2020-04-19 00:25:48.118'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Pound for pound, Chuck Norris will pound the shit out of you.',
    NULL,
    '2020-01-16 04:58:26.717'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'How do you teach kids about taxes? Eat 38% of their ice cream.',
    'https://picsum.photos/119/288',
    '2022-05-20 15:57:15.549'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Vel turpis nunc eget lorem dolor sed viverra ipsum',
    'Purus semper eget duis at tellus at urna condimentum. Amet justo donec enim diam vulputate ut pharetra sit. Pretium lectus quam id leo in vitae turpis massa sed. Feugiat nibh sed pulvinar proin gravida. Eget velit aliquet sagittis id. Nisl pretium fusce id velit. Imperdiet proin fermentum leo vel orci porta non pulvinar. Proin gravida hendrerit lectus a. Nibh tortor id aliquet lectus. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Amet est placerat in egestas erat imperdiet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Eu tincidunt tortor aliquam nulla facilisi cras. Tellus at urna condimentum mattis pellentesque. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Eu sem integer vitae justo. Tempor orci eu lobortis elementum nibh tellus molestie nunc non.\nSemper auctor neque vitae tempus quam pellentesque nec nam. Turpis egestas maecenas pharetra convallis posuere morbi. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. In cursus turpis massa tincidunt dui. Gravida neque convallis a cras semper auctor neque vitae tempus. Dui faucibus in ornare quam viverra. Consequat nisl vel pretium lectus quam id leo in vitae. Eget est lorem ipsum dolor sit amet. Enim facilisis gravida neque convallis a cras semper auctor. Non arcu risus quis varius quam quisque id diam. Enim praesent elementum facilisis leo vel fringilla est. Elementum sagittis vitae et leo duis ut diam quam. Nisi lacus sed viverra tellus. Id aliquet lectus proin nibh nisl condimentum id. Egestas sed sed risus pretium quam vulputate dignissim.\nAliquam sem fringilla ut morbi tincidunt augue interdum velit. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Tristique senectus et netus et malesuada fames ac. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut. Eros in cursus turpis massa tincidunt. Purus viverra accumsan in nisl nisi scelerisque eu. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Nam aliquam sem et tortor. Sit amet purus gravida quis blandit turpis. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Amet massa vitae tortor condimentum.\n',
    NULL,
    '2023-04-17 07:20:17.946'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Ac auctor augue mauris augue neque gravida in ferm',
    'Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Arcu felis bibendum ut tristique et egestas. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Quisque sagittis purus sit amet volutpat consequat mauris. Mattis vulputate enim nulla aliquet porttitor. Sit amet facilisis magna etiam tempor orci eu lobortis. Erat nam at lectus urna duis convallis convallis. Sit amet est placerat in. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Amet justo donec enim diam vulputate ut. Adipiscing vitae proin sagittis nisl rhoncus mattis. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Felis imperdiet proin fermentum leo vel orci porta. Consequat ac felis donec et odio pellentesque.\n',
    NULL,
    '2023-02-12 01:44:16.761'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Hero Counterattack',
    'Trap Card card\n\n\nWhen an "Elemental HERO" monster you control is destroyed by battle: Your opponent chooses and reveals 1 random card from your hand, then, if it is an "Elemental HERO" monster, you destroy 1 monster your opponent controls and Special Summon the chosen monster.',
    'https://images.ygoprodeck.com/images/cards/19024706.jpg',
    '2020-06-07 21:01:01.111'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Ambrose Bierce',
    'Future. That period of time in which our affairs prosper, our friends are true and our happiness is assured.',
    NULL,
    '2019-12-26 22:39:41.912'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nisl pretium fusce id velit ut tortor pretium vive',
    'Sed elementum tempus egestas sed sed risus pretium quam. Interdum varius sit amet mattis vulputate enim nulla. Orci porta non pulvinar neque laoreet suspendisse. Urna porttitor rhoncus dolor purus non enim praesent. Elit sed vulputate mi sit amet mauris commodo. Sit amet dictum sit amet. Elementum integer enim neque volutpat ac tincidunt. A erat nam at lectus urna duis convallis. Convallis aenean et tortor at risus viverra adipiscing at in. Mattis vulputate enim nulla aliquet porttitor lacus. Sagittis nisl rhoncus mattis rhoncus urna. Sit amet massa vitae tortor. Phasellus vestibulum lorem sed risus ultricies. Habitant morbi tristique senectus et netus et. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Mi eget mauris pharetra et ultrices neque. Sodales ut eu sem integer.\n',
    NULL,
    '2021-02-23 12:39:51.530'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris prefers his Cobb Salad served with cocklebur croutons.',
    NULL,
    '2021-12-11 20:50:20.212'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Frances Rodman',
    'Courage is sometimes frail as hope is frail: a fragile shoot between two stones that grows brave toward the sun though warmth and brightness fail, striving and faith the only strength it knows.',
    NULL,
    '2022-04-09 23:19:32.890'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nec feugiat nisl pretium fusce id velit. Aliquam u',
    'Vitae auctor eu augue ut lectus arcu bibendum at varius. Massa tincidunt dui ut ornare lectus sit amet est. Donec ac odio tempor orci dapibus ultrices in. Semper quis lectus nulla at volutpat. Est sit amet facilisis magna etiam tempor. Lacus sed viverra tellus in hac habitasse platea. Ultrices neque ornare aenean euismod elementum nisi. Elit scelerisque mauris pellentesque pulvinar pellentesque. Elit sed vulputate mi sit. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Feugiat in ante metus dictum at tempor commodo ullamcorper. Condimentum lacinia quis vel eros donec ac odio tempor.\n',
    NULL,
    '2020-06-26 14:49:14.560'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'The Ark',
    'How many animals did moses take on board?\n\n\n\n\nNone it was Noahs ark!!',
    NULL,
    '2020-10-30 18:28:58.444'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Paul Tournier',
    'Nothing makes us so lonely as our secrets.',
    NULL,
    '2021-10-02 07:42:02.320'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Id eu nisl nunc mi ipsum faucibus vitae aliquet ne',
    'Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Quis hendrerit dolor magna eget est lorem ipsum dolor. In aliquam sem fringilla ut. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Facilisis leo vel fringilla est. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Volutpat lacus laoreet non curabitur. Cum sociis natoque penatibus et magnis dis. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Nunc lobortis mattis aliquam faucibus. Arcu felis bibendum ut tristique et. Amet purus gravida quis blandit turpis cursus in hac habitasse. In fermentum et sollicitudin ac orci phasellus. Malesuada fames ac turpis egestas integer eget.\n',
    NULL,
    '2022-03-26 19:51:13.264'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Ayn Rand',
    'Achievement of your happiness is the only moral purpose of your life, and that happiness, not pain or mindless self-indulgence, is the proof of your moral integrity, since it is the proof and the result of your loyalty to the achievement of your values.',
    NULL,
    '2021-12-21 22:45:08.404'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'dragonair',
    'Pokemon  dragon',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png',
    '2020-05-26 21:01:48.024'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'grimer',
    'Pokemon  poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png',
    '2020-03-05 11:40:42.296'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Fly',
    'I have four wings, but cannot fly. What am I?\n\n\n\n\nWindmill',
    NULL,
    '2022-06-17 08:36:41.491'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Beetrooper Armor Horn',
    'Link Monster card\n\nInsect\nATK 1000 / DEF undefined\nLevel undefined\n\n2 Insect monsters\nYou cannot Special Summon monsters, except Insect monsters. You can only use each of the following effects of "Beetrooper Armor Horn" once per turn. During your Main Phase, you can: Immediately after this effect resolves, Normal Summon 1 Insect monster. If this card is in your GY: You can banish 3 other Insect monsters from your GY; Special Summon this card, but banish it when it leaves the field.',
    'https://images.ygoprodeck.com/images/cards/2834264.jpg',
    '2022-01-22 17:24:37.470'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Campbell Scott',
    'Directing is: you''re overwhelmed the whole time. Your mind never stops. If you care about it. You wake up in the morning and you begin thinking about it and then you go to sleep at night and you''re still thinking about it.',
    NULL,
    '2019-12-24 20:54:09.413'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Elizabeth Taylor''s last words were - "I only ever loved Chuck Norris".',
    NULL,
    '2020-08-29 23:48:39.698'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Magnet Circle LV2',
    'Spell Card card\n\n\nSpecial Summon 1 Level 2 or lower Machine-Type monster from your hand.',
    'https://images.ygoprodeck.com/images/cards/94940436.jpg',
    '2021-02-18 03:25:46.227'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Elizabeth Cady Stanton',
    'I shall not grow conservative with age.',
    'https://picsum.photos/677/587',
    '2023-05-14 00:28:46.800'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I have a joke about chemistry, but I don’t think it’ll get a reaction.',
    NULL,
    '2022-10-14 15:05:49.035'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Apex Predation',
    'Trap Card card\n\n\nIf you control a Normal Summoned/Set monster: Destroy all Special Summoned monsters on the field. Until the end of your next turn after this card is activated, you cannot Normal Summon/Set. You can only activate 1 "Apex Predation" per turn.',
    'https://images.ygoprodeck.com/images/cards/25573115.jpg',
    '2020-05-04 20:44:09.757'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What did Benjamin Franklin say when he discovered electricity? Nothing. He was too shocked.',
    NULL,
    '2023-10-07 12:10:25.956'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'articuno',
    'Pokemon  ice flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png',
    '2023-11-04 00:26:13.906'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Abraham Lincoln',
    'When I do good, I feel good. When I do bad, I feel bad. That''s my religion.',
    NULL,
    '2022-11-14 01:25:54.985'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Solemn Wishes',
    'Trap Card card\n\n\nIncrease your Life Points by 500 points each time you draw a card (or cards).',
    'https://images.ygoprodeck.com/images/cards/35346968.jpg',
    '2023-05-17 08:50:22.468'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Who Was The Comic Partner Of The Man Born Arthur Jefferson?\n\n\n\n\nOliver Hardy',
    'https://picsum.photos/557/125',
    '2020-09-06 09:28:56.379'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Ally of Justice Reverse Break',
    'Effect Monster card\n\nMachine\nATK 1200 / DEF 1200\nLevel 4\n\nIf a face-up LIGHT monster is on the field, destroy this card. If this card attacks a face-down Defense Position monster, destroy that monster immediately with this card''s effect without flipping it face-up or applying damage calculation.',
    'https://images.ygoprodeck.com/images/cards/55982698.jpg',
    '2020-09-16 09:35:59.552'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Romeo & Juliet Prologue Riddle You''ll Get So Board With This (with Answer)',
    'Two households, both alike in dignity,  Equal in strength, where they''re besieged, Across many lands, they lay their scene, From ancient grude, of light and dark, To the rook and the nightingale for lark, With the monarchy at complete unrest, And infidels march to trap and test, Yet in each household, A pair star-cross''d lovers fight, Side by side, for husband and life, In death the conflict comes to an end, What eye shall miss, this toil shall stive to mend, And begin again,\n\n\n\n\nA chess set/chess pieces',
    NULL,
    '2021-10-14 04:12:25.250'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Where did the cat go after losing its tail? The retail store.',
    NULL,
    '2022-06-26 07:00:52.998'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'What happened to the crew of the Mary Celeste? Chuck Norris.',
    'https://picsum.photos/668/382',
    '2022-02-02 16:42:42.745'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Andre Maurois',
    'A marriage without conflicts is almost as inconceivable as a nation without crises.',
    NULL,
    '2022-06-22 08:58:10.447'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Taylor Dayne',
    'I''ve had enough boyfriends and enough issues. I''d seen enough train wrecks.',
    NULL,
    '2023-05-07 22:14:56.371'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'goldeen',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png',
    '2023-09-12 09:02:20.007'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Constellar Tempest',
    'Spell Card card\n\n\nDuring your End Phase: You can target 2 "Constellar" Xyz Monsters you control that have Xyz Material; detach all Xyz Materials from both Xyz Monsters, and if you do, halve your opponent''s LP. You can only use this effect of "Constellar Tempest" once per Duel. Once per turn, during your Standby Phase: You can target 1 "Constellar" Xyz Monster you control and 1 "Constellar" monster in your Graveyard; attach that monster from the Graveyard to that Xyz Monster as an Xyz Material.',
    'https://images.ygoprodeck.com/images/cards/4820694.jpg',
    '2021-04-02 07:00:01.183'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Powered Tuner',
    'Effect Monster card\n\nDragon\nATK 1400 / DEF 1000\nLevel 4\n\nThis card gains 500 ATK for each face-up Tuner monster on the field.',
    'https://images.ygoprodeck.com/images/cards/50621530.jpg',
    '2022-12-31 20:16:48.826'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Place (science)',
    'had been lond used for grazing herds, and the soils are fertilized\n\n\n\n\ngrasslands',
    NULL,
    '2021-11-20 01:57:05.781'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'When The Sun Is Not Out',
    'How many days are in the week when the sun is not out?\n\n\n\n\n6 becuase u dont count sunday becuase the sun is not out',
    NULL,
    '2023-11-04 15:27:55.540'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'What Is This?',
    'its around but not always around, it light some times it dark some times its both some times, so many want to walk on it but only a few have?\n\n\n\n\nthe moon',
    NULL,
    '2022-04-16 23:39:57.133'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'vaporeon',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png',
    '2023-08-23 23:26:49.168'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'kangaskhan',
    'Pokemon  normal',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png',
    '2021-10-02 14:27:23.846'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nibh nisl condimentum id venenatis a condimentum v',
    'Purus in mollis nunc sed id semper. Suspendisse faucibus interdum posuere lorem ipsum. Dictum non consectetur a erat. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. In nibh mauris cursus mattis molestie a iaculis at erat. Velit aliquet sagittis id consectetur purus ut faucibus. Lorem dolor sed viverra ipsum. Facilisis gravida neque convallis a cras. Adipiscing vitae proin sagittis nisl rhoncus. Odio eu feugiat pretium nibh ipsum. Sit amet nulla facilisi morbi. Viverra mauris in aliquam sem. Vitae justo eget magna fermentum. Ultrices dui sapien eget mi proin sed libero. Convallis a cras semper auctor neque vitae tempus quam. Netus et malesuada fames ac turpis egestas. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Suspendisse potenti nullam ac tortor vitae.\nAliquam sem fringilla ut morbi tincidunt augue interdum velit. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Tristique senectus et netus et malesuada fames ac. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut. Eros in cursus turpis massa tincidunt. Purus viverra accumsan in nisl nisi scelerisque eu. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Nam aliquam sem et tortor. Sit amet purus gravida quis blandit turpis. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Amet massa vitae tortor condimentum.\n',
    NULL,
    '2021-12-24 12:32:34.080'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dignissim diam quis enim lobortis scelerisque ferm',
    'Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Sit amet nulla facilisi morbi tempus. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Sodales neque sodales ut etiam sit amet nisl purus. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Nisi lacus sed viverra tellus in hac habitasse. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Tincidunt eget nullam non nisi. Cursus risus at ultrices mi. Volutpat est velit egestas dui id ornare. Sagittis nisl rhoncus mattis rhoncus. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Fermentum leo vel orci porta non pulvinar neque. Quisque sagittis purus sit amet volutpat. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Porttitor massa id neque aliquam vestibulum morbi blandit. At quis risus sed vulputate odio. Nisi vitae suscipit tellus mauris a diam maecenas sed enim.\nNibh nisl condimentum id venenatis a condimentum vitae sapien. Laoreet sit amet cursus sit. Commodo ullamcorper a lacus vestibulum sed arcu. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Pharetra convallis posuere morbi leo urna. Id volutpat lacus laoreet non curabitur gravida arcu ac. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Lorem mollis aliquam ut porttitor. A arcu cursus vitae congue. Nisl purus in mollis nunc sed id semper. Convallis a cras semper auctor neque. Lectus arcu bibendum at varius. Facilisis sed odio morbi quis commodo odio aenean sed. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Vel orci porta non pulvinar neque laoreet suspendisse. Feugiat nisl pretium fusce id. Adipiscing bibendum est ultricies integer quis auctor.\n',
    NULL,
    '2020-10-16 05:23:08.530'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Sivananda',
    'Every human being is the author of his own health or disease.',
    'https://picsum.photos/206/139',
    '2021-08-29 15:21:13.763'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Marcus Aurelius',
    'The art of living is more like wrestling than dancing.',
    'https://picsum.photos/600/401',
    '2023-11-08 22:34:06.703'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    '________ was the first feature length production which was created by Walt Disney feature Animation, Florida, which is located at Disney/MGM Studios at Walt Disney World.\n\n\n\n\nMulan',
    NULL,
    '2023-11-02 07:46:16.172'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Eu turpis egestas pretium aenean pharetra magna ac',
    'Eget felis eget nunc lobortis mattis aliquam faucibus purus. Ipsum dolor sit amet consectetur adipiscing elit. Purus in mollis nunc sed id semper. Imperdiet sed euismod nisi porta lorem mollis aliquam. Auctor neque vitae tempus quam. Vitae tempus quam pellentesque nec. Auctor augue mauris augue neque. Mattis aliquam faucibus purus in massa tempor nec feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Massa enim nec dui nunc mattis enim. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Elementum facilisis leo vel fringilla est ullamcorper eget nulla.\nMi eget mauris pharetra et ultrices neque. Nunc non blandit massa enim nec. Velit scelerisque in dictum non consectetur a. Enim sed faucibus turpis in eu mi bibendum neque. In egestas erat imperdiet sed. Ac auctor augue mauris augue neque gravida in fermentum. Vitae congue eu consequat ac felis donec. Feugiat sed lectus vestibulum mattis. Nibh venenatis cras sed felis eget velit aliquet. Mauris sit amet massa vitae tortor condimentum lacinia quis. Orci sagittis eu volutpat odio facilisis mauris sit amet. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Purus viverra accumsan in nisl. Consequat semper viverra nam libero justo laoreet sit amet. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Nec dui nunc mattis enim ut tellus elementum. Quis auctor elit sed vulputate mi sit. Feugiat nibh sed pulvinar proin gravida.\nNec feugiat nisl pretium fusce id velit. Aliquam ut porttitor leo a diam sollicitudin tempor. Elementum eu facilisis sed odio morbi quis. Aliquet nec ullamcorper sit amet risus nullam. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Diam volutpat commodo sed egestas. Et leo duis ut diam quam nulla porttitor massa id. Justo laoreet sit amet cursus sit. Id aliquet lectus proin nibh. Pretium fusce id velit ut tortor pretium viverra. Enim lobortis scelerisque fermentum dui. Id diam vel quam elementum. Ultrices sagittis orci a scelerisque purus semper eget duis. Pretium viverra suspendisse potenti nullam. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Vel quam elementum pulvinar etiam non quam lacus suspendisse.\n',
    NULL,
    '2021-07-27 06:54:22.756'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Terrorist once tried hijaking Chuck Norris''s privat jet. Instead what happened was the world record broken for farthest boot up somebody''s ass.',
    'https://picsum.photos/436/133',
    '2020-11-18 14:30:04.041'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Triamid Master',
    'Effect Monster card\n\nRock\nATK 1800 / DEF 700\nLevel 4\n\nOnce per turn: You can send 1 face-up "Triamid" card you control to the Graveyard, then target 1 Set Card on the field; destroy it. Once per turn, during your opponent''s turn: You can target 1 "Triamid" Field Spell Card in your Field Zone; send it to the Graveyard, and if you do, activate 1 "Triamid" Field Spell Card from your Deck with a different name (this is a Quick Effect).',
    'https://images.ygoprodeck.com/images/cards/32912040.jpg',
    '2023-04-16 15:13:26.937'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Pirate!',
    'There was a pirate he went on a island he saw a small monkey. He liked the monkey so he took it. Then the pirate went to sail again but they needed food and the monkey needed food aswell so the pirates helper said to send him away. the pirate took the monkey to the furthest island with only sand no trees only sand and the water was very very very deep. How did the monkey come off the island?\n\n\n\n\nHow will a small monkey know if you didn''t know.',
    NULL,
    '2020-04-17 08:33:29.947'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What is the name of the Star Fox Team''s cocky wingman?                                                                               \n\n\n\n\nFalco Lombardi',
    NULL,
    '2020-09-10 00:27:12.632'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Eget sit amet tellus cras adipiscing enim eu. Dui ',
    'A iaculis at erat pellentesque adipiscing commodo elit. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Mattis nunc sed blandit libero. Eu lobortis elementum nibh tellus molestie nunc non blandit. Eget duis at tellus at urna condimentum. Sagittis aliquam malesuada bibendum arcu vitae elementum. Felis imperdiet proin fermentum leo vel orci. Sed sed risus pretium quam vulputate. Sed risus pretium quam vulputate dignissim suspendisse in. Fames ac turpis egestas maecenas pharetra convallis posuere. Lobortis scelerisque fermentum dui faucibus in ornare quam. Aenean pharetra magna ac placerat vestibulum lectus mauris. Aliquet sagittis id consectetur purus. Netus et malesuada fames ac. Habitant morbi tristique senectus et. Habitasse platea dictumst vestibulum rhoncus. Egestas sed sed risus pretium quam vulputate. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus.\nSollicitudin nibh sit amet commodo. Purus sit amet luctus venenatis lectus. Dolor sit amet consectetur adipiscing elit ut aliquam purus. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Aliquet lectus proin nibh nisl condimentum. Laoreet non curabitur gravida arcu. Consectetur libero id faucibus nisl tincidunt eget nullam. Pretium viverra suspendisse potenti nullam ac tortor vitae. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Sed enim ut sem viverra aliquet. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Odio euismod lacinia at quis risus sed. Amet justo donec enim diam vulputate. Montes nascetur ridiculus mus mauris vitae ultricies leo integer.\n',
    NULL,
    '2022-02-11 22:37:30.826'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Divine Dragon Token',
    'Token card\n\nFish\nATK 3300 / DEF 3000\nLevel 10\n\nThis card can be used as a "Divine Dragon Token".\n\n*If used for another Token, apply that Token''s Type/Attribute/Level/ATK/DEF.',
    'https://images.ygoprodeck.com/images/cards/89907228.jpg',
    '2022-09-23 09:04:33.491'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Eget sit amet tellus cras adipiscing enim eu. Dui ',
    'Viverra aliquet eget sit amet tellus. Adipiscing at in tellus integer feugiat scelerisque. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Mauris ultrices eros in cursus. Dolor purus non enim praesent. Quam viverra orci sagittis eu volutpat. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Lobortis feugiat vivamus at augue. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Sed sed risus pretium quam. Integer malesuada nunc vel risus. Egestas congue quisque egestas diam in arcu. Elementum nibh tellus molestie nunc non blandit massa enim nec.\nTincidunt vitae semper quis lectus. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Convallis aenean et tortor at risus viverra adipiscing at in. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Massa eget egestas purus viverra accumsan in nisl nisi. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Posuere sollicitudin aliquam ultrices sagittis. Dolor purus non enim praesent elementum. Diam in arcu cursus euismod quis viverra nibh. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Dolor sed viverra ipsum nunc aliquet bibendum. Integer quis auctor elit sed vulputate mi. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Dui sapien eget mi proin sed libero enim sed. Neque sodales ut etiam sit amet nisl purus in.\n',
    NULL,
    '2022-03-07 19:40:51.781'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chewbacca was inspired by the time Chuck Norris attended a Hollywood party in the mid-70''s wearing only a bullet belt.',
    'https://picsum.photos/441/358',
    '2022-11-01 11:43:01.777'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What kind of music do chiropractors like? Hip pop.',
    NULL,
    '2023-03-15 05:48:28.036'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'From What Country Does The Singer Sandi Thom Come From\n\n\n\n\nScotland',
    NULL,
    '2022-08-13 12:21:31.438'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Aliquet sagittis id consectetur purus ut faucibus ',
    'Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Consequat id porta nibh venenatis cras sed felis eget velit. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Et tortor consequat id porta nibh. Ut etiam sit amet nisl purus. Leo vel fringilla est ullamcorper. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Vel facilisis volutpat est velit egestas dui id. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Nibh tellus molestie nunc non blandit. Nisi lacus sed viverra tellus in hac habitasse platea dictumst.\nFaucibus interdum posuere lorem ipsum dolor sit amet consectetur. Quis hendrerit dolor magna eget est lorem ipsum dolor. In aliquam sem fringilla ut. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Facilisis leo vel fringilla est. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Volutpat lacus laoreet non curabitur. Cum sociis natoque penatibus et magnis dis. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Nunc lobortis mattis aliquam faucibus. Arcu felis bibendum ut tristique et. Amet purus gravida quis blandit turpis cursus in hac habitasse. In fermentum et sollicitudin ac orci phasellus. Malesuada fames ac turpis egestas integer eget.\nLectus urna duis convallis convallis tellus id interdum. Porttitor leo a diam sollicitudin tempor id eu. Sit amet aliquam id diam maecenas. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Fermentum odio eu feugiat pretium nibh ipsum consequat. Purus semper eget duis at tellus at. Arcu bibendum at varius vel pharetra vel turpis. Suscipit tellus mauris a diam maecenas sed enim. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Faucibus interdum posuere lorem ipsum. Turpis massa tincidunt dui ut ornare lectus sit amet est. Egestas maecenas pharetra convallis posuere morbi leo. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Amet venenatis urna cursus eget nunc scelerisque. Hac habitasse platea dictumst quisque sagittis purus sit. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Non blandit massa enim nec dui. Mus mauris vitae ultricies leo integer malesuada. Sed felis eget velit aliquet sagittis id consectetur.\n',
    'https://picsum.photos/522/423',
    '2023-03-16 09:03:02.075'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'The Leak',
    'A man is hit by a massive amount of water. he looks up and finds he is under a bridge made 2 months ago. He then is nearly hit by a large piece of metal that fell from above him. The water flow then continues before he moves aside. What happened.\n\n\n\n\nThe bridge above him had a water pipe that leaked the first wave of water. Then it collapsed and the piece of metal fell. After that the pipe emptied itself.',
    NULL,
    '2020-04-01 00:49:28.590'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'BOXer',
    'Effect Monster card\n\nWarrior\nATK 1800 / DEF 1000\nLevel 4\n\nWhen this card destroys an opponent''s monster by battle and sends it to the Graveyard: You can place 1 counter on this card. You can send this card with 2 or more counters to the Graveyard; Special Summon 1 EARTH monster from your Deck. If this card would be destroyed by battle or card effect, you can remove 1 counter from this card instead.',
    'https://images.ygoprodeck.com/images/cards/61156777.jpg',
    '2021-07-08 19:30:39.401'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Kevyn Aucoin',
    'Today I choose life. Every morning when I wake up I can choose joy, happiness, negativity, pain... To feel the freedom that comes from being able to continue to make mistakes and choices - today I choose to feel life, not to deny my humanity but embrace it.',
    'https://picsum.photos/437/396',
    '2020-07-12 22:54:11.741'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Joseph Gordon-Levitt',
    'I mean, movies in general tend to sort of portray time, space and identity as these very solid things. Time moves forward. Space is what it is. You are you, and you''re always you.',
    NULL,
    '2020-03-12 00:51:17.148'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Caleb Carr',
    'I was a pretty angry kid, and I got into military history largely as a way to vent my own anger. As I got older it narrowed down to a more specific focus on individual violence. I''m just trying to understand where it came from.',
    NULL,
    '2022-07-15 11:19:46.785'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Hello Greetings',
    'what has sunday, saturday, monday, tuesday, wednesday, thursday, and friday??\n\n\n\n\na whole week',
    NULL,
    '2023-06-08 03:58:44.909'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Supreme King Dragon Clear Wing',
    'Synchro Monster card\n\nDragon\nATK 2500 / DEF 2000\nLevel 8\n\n1 Tuner + 1+ non-Tuner DARK Pendulum Monsters\nIf this card is Synchro Summoned: You can destroy all face-up monsters your opponent controls. Once per turn, before damage calculation, if this card battles an opponent''s monster: You can destroy that monster, and if you do, inflict damage to your opponent equal to the destroyed monster''s original ATK. If this card is in your GY: You can Tribute 2 "Supreme King Dragon" monsters; Special Summon this card.',
    'https://images.ygoprodeck.com/images/cards/70771599.jpg',
    '2021-11-09 08:49:00.290'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'vaporeon',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png',
    '2023-09-30 23:07:29.752'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'To the person who stole my bed: I won''t rest until I find you.',
    'https://picsum.photos/693/127',
    '2021-08-20 02:13:22.027'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Riddle Me This',
    'what do you sit in, sleep on and, brush your teeth with?\n\n\n\n\na chair a bed and a toothbrush!!',
    'https://picsum.photos/377/407',
    '2022-05-23 15:51:57.339'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'In Which Shakespeare Play Does A Ghost Not Appear\n\n\n\n\na Midsummer Nights Dream',
    'https://picsum.photos/215/212',
    '2020-02-12 11:47:14.256'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Crystron Citree',
    'Tuner Monster card\n\nMachine\nATK 500 / DEF 500\nLevel 2\n\nDuring your opponent''s Main Phase or Battle Phase: You can target 1 non-Tuner monster in your Graveyard; Special Summon it, but it has its effects negated (if any), and if you do, immediately after this effect resolves, Synchro Summon 1 Machine-Type Synchro Monster using only that monster and this card (this is a Quick Effect). These Synchro Materials are banished instead of being sent to the Graveyard. You can only use this effect of "Crystron Citree" once per turn.',
    'https://images.ygoprodeck.com/images/cards/20050865.jpg',
    '2023-09-08 21:57:18.809'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Michael Bloomberg',
    'Government is dysfunctional.',
    NULL,
    '2023-02-01 13:39:57.306'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'machoke',
    'Pokemon  fighting',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png',
    '2021-05-29 08:19:33.334'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Icejade Creation Kingfisher',
    'Effect Monster card\n\nAqua\nATK 2500 / DEF 2500\nLevel 9\n\nYou can target 1 WATER monster you control; equip this card from your hand or field to it. An "Icejade" monster equipped with this card can attack while in Defense Position. If it does, apply its DEF for damage calculation. While this card is equipped to a monster: You can target 1 monster your opponent controls with ATK less than or equal to the equipped monster''s DEF; Special Summon this card, and if you do, return that targeted monster to the hand. You can only use this effect of "Icejade Creation Kingfisher" once per turn.',
    'https://images.ygoprodeck.com/images/cards/66749546.jpg',
    '2022-06-24 20:46:13.746'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What is the white semicircle on a fingernail\n\n\n\n\nLunula',
    NULL,
    '2020-06-28 16:20:55.284'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'White Night Queen',
    'Effect Monster card\n\nFairy\nATK 2100 / DEF 800\nLevel 7\n\nCannot be Special Summoned. Once per turn: You can target 1 Set card; destroy that target.',
    'https://images.ygoprodeck.com/images/cards/20193924.jpg',
    '2020-05-21 14:51:06.868'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'War',
    'I am two letters yet I am used for killing\n\n\n\n\nak',
    'https://picsum.photos/465/296',
    '2021-02-12 02:56:32.049'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Inferno Hammer',
    'Effect Monster card\n\nFiend\nATK 2400 / DEF 0\nLevel 6\n\nWhen this card destroys your opponent''s monster and sends it to the Graveyard as a result of battle, you can select 1 face-up monster on your opponent''s side of the field and flip it into face-down Defense Position.',
    'https://images.ygoprodeck.com/images/cards/17185260.jpg',
    '2022-06-26 00:03:04.426'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why do you never see elephants hiding in trees? Because they''re so good at it.',
    NULL,
    '2019-12-16 08:39:09.146'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Forbidden Scripture',
    'Spell Card card\n\n\nIf a monster battles an opponent''s monster, during damage calculation: Negate all other card effects on the field until the end of the Damage Step, also damage calculation for this battle uses each monster''s original ATK and DEF.',
    'https://images.ygoprodeck.com/images/cards/54773234.jpg',
    '2023-06-24 17:41:17.559'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'lickitung',
    'Pokemon  normal',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png',
    '2020-10-05 04:25:32.457'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris is who taught Pai Mei from Kill Bill.',
    NULL,
    '2019-12-09 08:02:27.037'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Ted Nugent',
    'Without question, the Red Ryder BB gun is the most important gun in the history of American weaponry.',
    NULL,
    '2023-09-27 21:06:13.599'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'eevee',
    'Pokemon  normal',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
    '2023-02-24 12:19:04.375'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What do you get when you cross a Smurf and a cow? Blue cheese.',
    NULL,
    '2020-12-01 22:50:27.258'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'lapras',
    'Pokemon  water ice',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png',
    '2022-05-01 05:38:26.543'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Realm Elegy',
    'Spell Card card\n\n\nAdd 1 "Veda" monster from your Deck to your hand. If a face-up Tuner(s) you control is destroyed by battle or card effect while "Visas Starfrost" is on the field and this card is in your GY: You can banish this card, then target 1 of those destroyed monsters; add it to your hand. You can only use this effect of "Realm Elegy" once per turn.',
    'https://images.ygoprodeck.com/images/cards/17462320.jpg',
    '2020-02-22 01:40:00.518'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Jonathan Swift',
    'I never knew a man come to greatness or eminence who lay abed late in the morning.',
    NULL,
    '2023-01-29 13:45:59.316'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'To Switzerland',
    'During WWII, there was a bridge connecting Germany and Switzerland, and on the German side, there was a sentry tower with a guard in it. He would come out every three minutes to check on the bridge, and he had orders to turn back anyone who tried to get into Germany, and shoot anyone trying to escape without a pass. There was a woman who desperately needed to get into Switzerland, and she knew she didn''t have time to get a pass. It would take her at least six minutes to cross the bridge, but she managed to do it. How?\n\n\n\n\nWhen the sentry went into the tower, she would start to cross into Switzerland, and when he came out, she would start to walk back into Germany. When he saw her, he would tell her to turn back into Switzerland.',
    'https://picsum.photos/109/556',
    '2021-10-24 07:27:21.786'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'kabutops',
    'Pokemon  rock water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png',
    '2020-10-27 06:57:26.916'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'What Do You Find?',
    'What do you always find in the middle of a taxicab?\n\n\n\n\nThe letter i.',
    NULL,
    '2022-04-18 01:56:29.689'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What does a nosey pepper do? It gets jalapeno business!',
    NULL,
    '2022-05-25 17:28:49.109'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why did the phone wear glasses? Because it lost all its contacts.',
    NULL,
    '2022-08-27 16:25:03.319'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'When was the magnetic telegraph invented\n\n\n\n\n1837',
    NULL,
    '2020-06-19 01:17:25.241'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Ut eu sem integer vitae justo eget magna. Praesent',
    'Risus sed vulputate odio ut enim blandit volutpat. Faucibus turpis in eu mi bibendum neque. Morbi tristique senectus et netus et malesuada fames ac. Lacinia quis vel eros donec. Est velit egestas dui id ornare arcu. Commodo viverra maecenas accumsan lacus. Turpis in eu mi bibendum neque egestas congue. Fermentum posuere urna nec tincidunt. Sit amet nisl purus in mollis. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Justo eget magna fermentum iaculis eu non diam. Proin nibh nisl condimentum id venenatis. Viverra maecenas accumsan lacus vel facilisis volutpat est. Rhoncus dolor purus non enim praesent elementum facilisis leo. Urna id volutpat lacus laoreet non curabitur gravida. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fermentum leo vel orci porta.\n',
    NULL,
    '2020-08-07 22:08:19.711'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'charmeleon',
    'Pokemon  fire',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
    '2022-09-15 22:19:38.026'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'the Speaking Clock calls up Chuck Norris to make sure IT is correct',
    'https://picsum.photos/628/344',
    '2022-07-22 18:18:53.232'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'From 1971 What Was The Name Of Lobo''s Dog\n\n\n\n\nBoo (me & You And a Dog Named Boo)',
    'https://picsum.photos/300/243',
    '2020-12-03 03:41:47.107'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'There are no lines on Chuck Norris'' palms. He decides his own fate - and others''.',
    NULL,
    '2020-08-07 05:18:52.111'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dolor sit amet, consectetur adipiscing elit, sed d',
    'Consectetur a erat nam at lectus. Amet justo donec enim diam vulputate ut pharetra. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Porttitor rhoncus dolor purus non enim. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Augue ut lectus arcu bibendum. Lectus proin nibh nisl condimentum id.\nLeo vel orci porta non pulvinar neque. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Consectetur libero id faucibus nisl tincidunt eget. Morbi tristique senectus et netus. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Sit amet nulla facilisi morbi tempus iaculis urna. Suscipit tellus mauris a diam maecenas. In aliquam sem fringilla ut. Tortor at risus viverra adipiscing. Scelerisque eleifend donec pretium vulputate sapien nec. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Mi tempus imperdiet nulla malesuada pellentesque elit. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Nam at lectus urna duis convallis.\n',
    NULL,
    '2021-06-05 09:30:44.381'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Commodo elit at imperdiet dui accumsan. Bibendum u',
    'Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Consequat semper viverra nam libero justo laoreet sit amet cursus. Morbi quis commodo odio aenean. Ut sem nulla pharetra diam. Gravida cum sociis natoque penatibus et magnis. Eu sem integer vitae justo. Amet dictum sit amet justo donec enim diam vulputate ut. Eu consequat ac felis donec et. Sed vulputate odio ut enim. Vitae aliquet nec ullamcorper sit amet risus nullam.\nEget felis eget nunc lobortis mattis aliquam faucibus purus. Ipsum dolor sit amet consectetur adipiscing elit. Purus in mollis nunc sed id semper. Imperdiet sed euismod nisi porta lorem mollis aliquam. Auctor neque vitae tempus quam. Vitae tempus quam pellentesque nec. Auctor augue mauris augue neque. Mattis aliquam faucibus purus in massa tempor nec feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Massa enim nec dui nunc mattis enim. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Elementum facilisis leo vel fringilla est ullamcorper eget nulla.\nVitae auctor eu augue ut lectus arcu bibendum at varius. Massa tincidunt dui ut ornare lectus sit amet est. Donec ac odio tempor orci dapibus ultrices in. Semper quis lectus nulla at volutpat. Est sit amet facilisis magna etiam tempor. Lacus sed viverra tellus in hac habitasse platea. Ultrices neque ornare aenean euismod elementum nisi. Elit scelerisque mauris pellentesque pulvinar pellentesque. Elit sed vulputate mi sit. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Feugiat in ante metus dictum at tempor commodo ullamcorper. Condimentum lacinia quis vel eros donec ac odio tempor.\nAliquam sem fringilla ut morbi tincidunt augue interdum velit. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Tristique senectus et netus et malesuada fames ac. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut. Eros in cursus turpis massa tincidunt. Purus viverra accumsan in nisl nisi scelerisque eu. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Nam aliquam sem et tortor. Sit amet purus gravida quis blandit turpis. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Amet massa vitae tortor condimentum.\n',
    NULL,
    '2020-12-20 04:45:40.739'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What serves as the punchline in a popular Cheez-It commercial that asks, "What do you call a cheese that isn''t yours"?\n\n\n\n\nNacho Cheese',
    NULL,
    '2022-10-01 10:59:22.022'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Ac auctor augue mauris augue neque gravida in ferm',
    'Ac auctor augue mauris augue neque gravida in fermentum et. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Molestie at elementum eu facilisis sed odio morbi quis. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Cursus mattis molestie a iaculis. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Ultrices neque ornare aenean euismod elementum. Eu facilisis sed odio morbi. Arcu dui vivamus arcu felis. Aliquam etiam erat velit scelerisque in dictum. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Pellentesque nec nam aliquam sem. Amet volutpat consequat mauris nunc congue. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean sed adipiscing diam donec adipiscing tristique. Tellus pellentesque eu tincidunt tortor aliquam. Sem nulla pharetra diam sit amet nisl suscipit.\nViverra aliquet eget sit amet tellus. Adipiscing at in tellus integer feugiat scelerisque. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Mauris ultrices eros in cursus. Dolor purus non enim praesent. Quam viverra orci sagittis eu volutpat. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Lobortis feugiat vivamus at augue. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Sed sed risus pretium quam. Integer malesuada nunc vel risus. Egestas congue quisque egestas diam in arcu. Elementum nibh tellus molestie nunc non blandit massa enim nec.\n',
    NULL,
    '2022-04-02 03:27:47.808'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Alan Ginsberg is credited with inventing what 60s phrase\n\n\n\n\nFlower Power',
    NULL,
    '2021-02-27 19:58:29.201'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why is it so cheap to throw a party at a haunted house? Because the ghosts bring all the boos.',
    'https://picsum.photos/477/508',
    '2021-09-09 22:54:18.220'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'There are over 32000 known species of what in the world\n\n\n\n\nSpiders',
    'https://picsum.photos/686/530',
    '2022-01-16 16:31:39.337'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Keanu Reeves',
    'Falling in love and having a relationship are two different things.',
    NULL,
    '2022-11-13 18:54:04.298'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris has it his way, at McDonalds',
    'https://picsum.photos/611/463',
    '2022-08-06 04:27:34.826'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'mankey',
    'Pokemon  fighting',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png',
    '2020-05-25 21:18:39.949'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'For Chuck Norris...In the game Monopoly every space is free parking.',
    'https://picsum.photos/251/528',
    '2021-03-03 14:29:35.906'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'nidorina',
    'Pokemon  poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png',
    '2021-07-21 14:38:16.156'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Rank-Up-Magic Barian''s Force',
    'Spell Card card\n\n\nTarget 1 face-up Xyz Monster you control; Special Summon from your Extra Deck, 1 "Number C" or "CXyz" monster with the same Type as that monster you control but 1 Rank higher, by using it as the Xyz Material. (This Special Summon is treated as an Xyz Summon. Xyz Materials attached to it also become Xyz Materials on the Summoned monster.) Then, if possible, detach 1 Xyz Material from a monster your opponent controls and attach it to the Summoned monster as an Xyz Material.',
    'https://images.ygoprodeck.com/images/cards/47660516.jpg',
    '2020-12-21 23:25:26.771'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Which year did Jemima Goldsmith marry Imram Kahn\n\n\n\n\n1995',
    'https://picsum.photos/515/348',
    '2021-09-02 21:28:09.533'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nisl pretium fusce id velit ut tortor pretium vive',
    'Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Quis vel eros donec ac odio tempor orci. Augue eget arcu dictum varius duis at consectetur lorem donec. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Duis at tellus at urna condimentum mattis pellentesque id nibh. Sed nisi lacus sed viverra tellus. Tortor aliquam nulla facilisi cras fermentum odio eu. Vulputate mi sit amet mauris commodo quis imperdiet massa. Vulputate enim nulla aliquet porttitor lacus luctus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Venenatis tellus in metus vulputate eu. Neque sodales ut etiam sit amet. Id interdum velit laoreet id donec ultrices tincidunt arcu. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Viverra vitae congue eu consequat ac. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Volutpat diam ut venenatis tellus in metus vulputate eu. Nibh tellus molestie nunc non.\n',
    NULL,
    '2021-12-08 13:23:20.354'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Sollicitudin nibh sit amet commodo. Purus sit amet',
    'Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Consequat semper viverra nam libero justo laoreet sit amet cursus. Morbi quis commodo odio aenean. Ut sem nulla pharetra diam. Gravida cum sociis natoque penatibus et magnis. Eu sem integer vitae justo. Amet dictum sit amet justo donec enim diam vulputate ut. Eu consequat ac felis donec et. Sed vulputate odio ut enim. Vitae aliquet nec ullamcorper sit amet risus nullam.\nMauris commodo quis imperdiet massa tincidunt nunc pulvinar. Arcu felis bibendum ut tristique et egestas. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Quisque sagittis purus sit amet volutpat consequat mauris. Mattis vulputate enim nulla aliquet porttitor. Sit amet facilisis magna etiam tempor orci eu lobortis. Erat nam at lectus urna duis convallis convallis. Sit amet est placerat in. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Amet justo donec enim diam vulputate ut. Adipiscing vitae proin sagittis nisl rhoncus mattis. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Felis imperdiet proin fermentum leo vel orci porta. Consequat ac felis donec et odio pellentesque.\n',
    NULL,
    '2022-06-23 00:43:56.123'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'gengar',
    'Pokemon  ghost poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
    '2020-02-14 04:17:01.703'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Consectetur a erat nam at lectus. Amet justo donec',
    'Nec feugiat nisl pretium fusce id velit. Aliquam ut porttitor leo a diam sollicitudin tempor. Elementum eu facilisis sed odio morbi quis. Aliquet nec ullamcorper sit amet risus nullam. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Diam volutpat commodo sed egestas. Et leo duis ut diam quam nulla porttitor massa id. Justo laoreet sit amet cursus sit. Id aliquet lectus proin nibh. Pretium fusce id velit ut tortor pretium viverra. Enim lobortis scelerisque fermentum dui. Id diam vel quam elementum. Ultrices sagittis orci a scelerisque purus semper eget duis. Pretium viverra suspendisse potenti nullam. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Vel quam elementum pulvinar etiam non quam lacus suspendisse.\nConsectetur a erat nam at lectus. Amet justo donec enim diam vulputate ut pharetra. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Porttitor rhoncus dolor purus non enim. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Augue ut lectus arcu bibendum. Lectus proin nibh nisl condimentum id.\n',
    'https://picsum.photos/521/677',
    '2020-03-27 04:27:47.249'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Jean Piaget',
    'In other words, knowledge of the external world begins with an immediate utilisation of things, whereas knowledge of self is stopped by this purely practical and utilitarian contact.',
    NULL,
    '2020-09-22 04:02:39.524'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Orea, the Sylvan High Arbiter',
    'XYZ Monster card\n\nPlant\nATK 2800 / DEF 2500\nLevel 7\n\n2 Level 7 monsters\nOnce per turn: You can send 1 Plant-Type monster from your hand or face-up from your side of the field to the Graveyard; look at a number of cards from the top of your Deck equal to the Level that the sent monster had in the hand or on the field, then place them on the top of the Deck in any order. Once per turn: You can detach 1 Xyz Material from this card; choose a number from 1 to 3, then excavate that many cards from the top of your Deck, send any excavated Plant-Type monsters to the Graveyard, and if you do, return up to that many cards on the field to the hand (min.1), except this card. Also, place the other cards on the bottom of your Deck in any order.',
    'https://images.ygoprodeck.com/images/cards/95239444.jpg',
    '2021-10-31 16:10:06.882'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'During the Japan Tsunami a UFO was spotted flying out of the water.Recent news report Chuck Norris piloted the object. That object was his leg.',
    'https://picsum.photos/248/636',
    '2023-05-17 08:15:50.512'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'My kid is blaming me for ruining their birthday. That''s ridiculous, I didn''t even know it was today!',
    NULL,
    '2022-04-06 02:53:23.513'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Confucius',
    'He who exercises government by means of his virtue may be compared to the north polar star, which keeps its place and all the stars turn towards it.',
    'https://picsum.photos/327/512',
    '2022-10-05 08:25:20.042'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Minor Goblin Official',
    'Trap Card card\n\n\nYou can only activate this card when your opponent''s Life Points are 3000 or less. Inflict 500 points of damage to your opponent''s Life Points during each of his/her Standby Phases.',
    'https://images.ygoprodeck.com/images/cards/1918087.jpg',
    '2020-11-20 23:11:33.902'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris was surfing and had an unfortunate encounter with a Great White Shark. It was unfortunate for the shark, as Chuck punched its teeth out and gave it a wedgie with its dorsal fin.',
    'https://picsum.photos/274/638',
    '2023-11-15 20:52:26.226'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Comediennes:- Which Tv Series Gave Goldie Hawn Her First Big Break \n\n\n\n\nRowan & Martins Laugh In',
    NULL,
    '2023-05-12 03:16:27.934'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Sollicitudin nibh sit amet commodo. Purus sit amet',
    'Semper auctor neque vitae tempus quam pellentesque nec nam. Turpis egestas maecenas pharetra convallis posuere morbi. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. In cursus turpis massa tincidunt dui. Gravida neque convallis a cras semper auctor neque vitae tempus. Dui faucibus in ornare quam viverra. Consequat nisl vel pretium lectus quam id leo in vitae. Eget est lorem ipsum dolor sit amet. Enim facilisis gravida neque convallis a cras semper auctor. Non arcu risus quis varius quam quisque id diam. Enim praesent elementum facilisis leo vel fringilla est. Elementum sagittis vitae et leo duis ut diam quam. Nisi lacus sed viverra tellus. Id aliquet lectus proin nibh nisl condimentum id. Egestas sed sed risus pretium quam vulputate dignissim.\nAliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Quis vel eros donec ac odio tempor orci. Augue eget arcu dictum varius duis at consectetur lorem donec. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Duis at tellus at urna condimentum mattis pellentesque id nibh. Sed nisi lacus sed viverra tellus. Tortor aliquam nulla facilisi cras fermentum odio eu. Vulputate mi sit amet mauris commodo quis imperdiet massa. Vulputate enim nulla aliquet porttitor lacus luctus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Venenatis tellus in metus vulputate eu. Neque sodales ut etiam sit amet. Id interdum velit laoreet id donec ultrices tincidunt arcu. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Viverra vitae congue eu consequat ac. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Volutpat diam ut venenatis tellus in metus vulputate eu. Nibh tellus molestie nunc non.\nLeo vel orci porta non pulvinar neque. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Consectetur libero id faucibus nisl tincidunt eget. Morbi tristique senectus et netus. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Sit amet nulla facilisi morbi tempus iaculis urna. Suscipit tellus mauris a diam maecenas. In aliquam sem fringilla ut. Tortor at risus viverra adipiscing. Scelerisque eleifend donec pretium vulputate sapien nec. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Mi tempus imperdiet nulla malesuada pellentesque elit. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Nam at lectus urna duis convallis.\n',
    NULL,
    '2023-02-17 03:35:21.039'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'snorlax',
    'Pokemon  normal',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
    '2020-02-20 02:26:49.102'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris once rounded up every American who was a left-wing, tree-hugging, queer-lovin'', anti-gun-ownin'' Commie-Pacifist and banished them North. This is the story of how Canada was founded.',
    NULL,
    '2023-09-25 07:49:31.163'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'How do you organize a space party? You planet.',
    NULL,
    '2020-06-01 19:07:17.771'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Prominence Hand',
    'Effect Monster card\n\nPyro\nATK 600 / DEF 2000\nLevel 4\n\nIf you control a "Magic Hand", "Fire Hand", or "Ice Hand", you can Special Summon this card (from your hand).',
    'https://images.ygoprodeck.com/images/cards/21414674.jpg',
    '2021-03-15 04:37:22.286'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Cars',
    'There was a man and he jumped in front of a moving car but didnt get hurt. how did he do it?\n\n\n\n\nThe car was parked.',
    NULL,
    '2022-02-13 09:25:25.086'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'The White Stone of Ancients',
    'Tuner Monster card\n\nDragon\nATK 600 / DEF 500\nLevel 1\n\nOnce per turn, during the End Phase, if this card is in the GY because it was sent there this turn: You can Special Summon 1 "Blue-Eyes" monster from your Deck. You can banish this card from your GY, then target 1 "Blue-Eyes" monster in your GY; add it to your hand. You can only use this effect of "The White Stone of Ancients" once per turn.',
    'https://images.ygoprodeck.com/images/cards/71039903.jpg',
    '2021-10-17 15:28:16.644'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Injury Reserved',
    'A professional football player was playing football at a picnic on a Saturday. While playing he broke his ribs, broke his thighs, busted his lip, and busted his ears. Despite this, he started and played in his next professional football that next day. How is this possible?\n\n\n\n\nThe famous football player accidentally knocked over his plate while playing football at the picnic. He was eating ribs, pig lips, pig ears, and chicken thighs. After knocking his plate over, he busted his pig lips, busted his pig ears, broke his chicken thighs, and broke his ribs. He was still able to play because these injuries were not body injuries. They was just food on a plate that was knocked over',
    NULL,
    '2022-08-06 20:25:30.971'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'In late 1957, Buddy Holly''s solo release ''Peggy Sue'' challenged which song recorded with The Crickets?\n\n\n\n\nOh Boy',
    NULL,
    '2021-10-07 13:35:05.123'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris''s car is fitted with go faster brakes.',
    NULL,
    '2021-07-02 12:27:53.611'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'A Man And His Son',
    'A man and his son were on a tour of an atomic power plant. In the control room, the boy asked if he could see the controls for the reactor core. The head physicist said yes, and explained how the controls worked. After the boy left, the head physicist turned to an assistant and said, "That was my son." How could that be?\n\n\n\n\nThe head physicist was the boy''s mother.',
    NULL,
    '2020-09-27 08:52:00.942'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Marilyn Monroe',
    'The working men, I''ll go by and they''ll whistle. At first they whistle because they think, ''Oh, it''s a girl. She''s got blond hair and she''s not out of shape,'' and then they say, ''Gosh, it''s Marilyn Monroe!''',
    'https://picsum.photos/692/563',
    '2021-07-02 01:32:18.067'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris said 5 "Bloody Marys" and 3 "Candymans" Simultaneously in an abandoned warehouse mirror. He then saw both of them run away from him.',
    'https://picsum.photos/350/449',
    '2023-10-13 21:00:42.642'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I don''t trust stairs. They''re always up to something.',
    NULL,
    '2022-11-05 13:39:48.422'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Enim eu turpis egestas pretium aenean. Ipsum a arc',
    'Mi eget mauris pharetra et ultrices neque. Nunc non blandit massa enim nec. Velit scelerisque in dictum non consectetur a. Enim sed faucibus turpis in eu mi bibendum neque. In egestas erat imperdiet sed. Ac auctor augue mauris augue neque gravida in fermentum. Vitae congue eu consequat ac felis donec. Feugiat sed lectus vestibulum mattis. Nibh venenatis cras sed felis eget velit aliquet. Mauris sit amet massa vitae tortor condimentum lacinia quis. Orci sagittis eu volutpat odio facilisis mauris sit amet. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Purus viverra accumsan in nisl. Consequat semper viverra nam libero justo laoreet sit amet. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Nec dui nunc mattis enim ut tellus elementum. Quis auctor elit sed vulputate mi sit. Feugiat nibh sed pulvinar proin gravida.\nSed sed risus pretium quam vulputate dignissim suspendisse. Id leo in vitae turpis massa. Eget mauris pharetra et ultrices. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Nisl condimentum id venenatis a. Dui id ornare arcu odio. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Viverra maecenas accumsan lacus vel facilisis volutpat est. Platea dictumst vestibulum rhoncus est pellentesque elit. Hac habitasse platea dictumst quisque.\n',
    NULL,
    '2022-12-19 20:45:06.341'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'It’s raining cats and dogs, so be careful not to step in a poodle.',
    NULL,
    '2022-06-28 16:55:13.318'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'The lord giveth and Chuck Norris taketh away!',
    NULL,
    '2022-11-11 13:33:08.224'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'What Am I?',
    'Little Nacy Eppicoat, in a patty coat,  with a red nose. The longer she stands, the shorter she goes. What Am I?\n\n\n\n\nA candle.',
    NULL,
    '2021-06-13 19:32:48.117'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Funny Riddles',
    'WHO IS SILENT IN THE PARLIMENT\n\n\n\n\nTHE ALPHABET A',
    NULL,
    '2022-06-05 13:53:49.354'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Lou Gerstner',
    'I think that my leadership style is to get people to fear staying in place, to fear not changing.',
    NULL,
    '2022-03-26 09:46:33.098'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'In which battle was George A. Custer defeated?\n\n\n\n\nBattle Of Little Bighorn',
    NULL,
    '2022-02-25 10:51:21.028'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris turds are perfect cylanders',
    NULL,
    '2023-06-30 21:23:55.428'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Bill Rancic',
    'I''m a big fan of small business ownership. I think it''s the backbone of American innovation. But to be successful, you first have to have the courage to go for it.',
    'https://picsum.photos/427/530',
    '2022-04-14 03:24:35.994'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'An average person uses the bathroom how many times per day\n\n\n\n\nSix',
    'https://picsum.photos/233/603',
    '2022-03-15 13:00:13.654'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris is the reason chihuahuas always tremble.',
    'https://picsum.photos/448/536',
    '2021-03-03 07:11:37.314'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Gorgon, Empress of the Evil Eyed',
    'Link Monster card\n\nFiend\nATK 1900 / DEF undefined\nLevel undefined\n\n2 monsters including an "Evil Eye" monster\nGains 100 ATK for each "Evil Eye" card with different names in your GY. If this card is equipped with "Evil Eye of Selene" (Quick Effect): You can target 1 Effect Monster your opponent controls; negate its effects until the end of this turn. You can only use this effect of "Gorgon, Empress of the Evil Eyed" once per turn. Once per turn, during the next Standby Phase after this effect was activated: Destroy 1 monster this card points to.',
    'https://images.ygoprodeck.com/images/cards/29357687.jpg',
    '2021-04-15 13:57:57.147'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'My cat was just sick on the carpet. I don''t think he''s feline well.',
    NULL,
    '2021-05-29 01:43:48.160'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Frightfur Reborn',
    'Spell Card card\n\n\nTarget 1 "Frightfur" monster in your Graveyard; Special Summon it. During your Main Phase, except the turn this card was sent to the Graveyard: You can banish this card from your Graveyard, then target 1 of your banished "Fluffal" or "Frightfur" monsters; return it to the Graveyard.',
    'https://images.ygoprodeck.com/images/cards/28039390.jpg',
    '2020-08-03 00:10:27.518'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'doduo',
    'Pokemon  normal flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png',
    '2021-04-24 14:33:26.090'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What is the name of the heroine in the cartoon "Beauty and the Beast"\n\n\n\n\nBelle',
    'https://picsum.photos/691/120',
    '2022-04-10 00:26:49.375'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris is the best cop ever. Why? He can roundhouse-kick criminals straight to jail.',
    NULL,
    '2023-09-01 16:11:52.018'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Risus sed vulputate odio ut enim blandit volutpat.',
    'Purus semper eget duis at tellus at urna condimentum. Amet justo donec enim diam vulputate ut pharetra sit. Pretium lectus quam id leo in vitae turpis massa sed. Feugiat nibh sed pulvinar proin gravida. Eget velit aliquet sagittis id. Nisl pretium fusce id velit. Imperdiet proin fermentum leo vel orci porta non pulvinar. Proin gravida hendrerit lectus a. Nibh tortor id aliquet lectus. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Amet est placerat in egestas erat imperdiet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Eu tincidunt tortor aliquam nulla facilisi cras. Tellus at urna condimentum mattis pellentesque. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Eu sem integer vitae justo. Tempor orci eu lobortis elementum nibh tellus molestie nunc non.\nUt eu sem integer vitae justo eget magna. Praesent tristique magna sit amet purus. Quis auctor elit sed vulputate mi. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Aenean euismod elementum nisi quis eleifend quam. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Nec nam aliquam sem et. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Tellus in metus vulputate eu.\n',
    NULL,
    '2020-03-11 21:17:08.676'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'In the novel Goldfinger name the boss of The Cement Mixers\n\n\n\n\nPussy Galore',
    NULL,
    '2023-11-10 22:46:29.405'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Kuriboo',
    'Effect Monster card\n\nFiend\nATK 300 / DEF 200\nLevel 1\n\n(This card is always treated as a "Kuriboh" card.)\nWhen an opponent''s monster declares an attack: You can discard this card; add 1 "Kuriboh" monster from your Deck to your hand, except "Kuriboo". Once per turn (Quick Effect): You can discard 1 Trap, then target 1 face-up monster your opponent controls; it loses 1500 ATK until the end of this turn.',
    'https://images.ygoprodeck.com/images/cards/7021574.jpg',
    '2021-12-08 20:06:35.614'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Gunkan Sushipyard Seaside Supper Spot',
    'Spell Card card\n\n\nOnce per turn, if you Normal or Special Summon a "Gunkan" monster(s), even during the Damage Step: You can place 1 "Gunkan" card from your Deck on top of your Deck. Once per turn, if a face-up "Gunkan" monster(s) you control that was Special Summoned from the Extra Deck is sent to your GY by an opponent''s card: Activate this effect; your opponent pays LP exactly equal to that monster''s DEF in the GY, then you can apply this effect.\n● Special Summon 1 "Gunkan Suship Shari" from your hand, then Special Summon 1 "Gunkan" Xyz Monster from your Extra Deck, by using that card you control as material. (This is treated as an Xyz Summon.)',
    'https://images.ygoprodeck.com/images/cards/62200831.jpg',
    '2023-06-21 23:53:54.813'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Steven Soderbergh',
    'The ought to be a worldwide cultural taskforce that just stops you when you have ideas like combining The Red Desert with an armored car heist movie.',
    NULL,
    '2021-03-02 02:53:24.594'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Albert Pike',
    'Philosophy is a kind of journey, ever learning yet never arriving at the ideal perfection of truth.',
    'https://picsum.photos/196/141',
    '2022-10-20 09:16:19.780'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why are pediatricians always so angry? Because they have little patients.',
    'https://picsum.photos/461/280',
    '2022-10-12 03:11:17.205'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Two peanuts went walking down the street. One was assaulted.',
    NULL,
    '2023-03-18 08:54:01.173'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris unclogs his toilet with a backhoe.',
    NULL,
    '2022-05-09 16:27:03.563'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Betty White',
    'I think it''s your mental attitude. So many of us start dreading age in high school and that''s a waste of a lovely life. ''Oh... I''m 30, oh, I''m 40, oh, 50.'' Make the most of it.',
    NULL,
    '2021-07-09 02:29:44.004'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Vladivostok stands on what body of water\n\n\n\n\nSea Of Japan',
    'https://picsum.photos/232/415',
    '2021-10-07 21:24:55.795'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Eu turpis egestas pretium aenean pharetra magna ac',
    'Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Massa enim nec dui nunc. Netus et malesuada fames ac turpis egestas. Gravida rutrum quisque non tellus orci. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Amet aliquam id diam maecenas ultricies mi eget mauris. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Ultricies tristique nulla aliquet enim. Urna et pharetra pharetra massa. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit.\n',
    'https://picsum.photos/170/265',
    '2023-08-31 01:40:13.781'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'It''s easy to convince ladies not to eat Tide Pods, but harder to deter gents.',
    'https://picsum.photos/396/681',
    '2023-03-13 22:36:07.815'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Can I watch TV? Yes but don''t turn it on.',
    NULL,
    '2020-10-05 20:45:07.399'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Posuere ac ut consequat semper viverra. Viverra vi',
    'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Elit eget gravida cum sociis natoque penatibus et. Aliquet nibh praesent tristique magna sit amet purus gravida. Sodales ut eu sem integer vitae. Lectus arcu bibendum at varius vel. Eget mi proin sed libero. Turpis egestas sed tempus urna et pharetra. Ut tellus elementum sagittis vitae et leo. Odio ut enim blandit volutpat. Massa tincidunt dui ut ornare lectus sit amet est placerat. Cursus mattis molestie a iaculis. Arcu dictum varius duis at consectetur lorem donec. In massa tempor nec feugiat nisl pretium.\n',
    'https://picsum.photos/687/314',
    '2023-08-11 15:50:41.085'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'kingler',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png',
    '2023-03-11 16:07:13.275'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Barry Commoner',
    'By adopting the control strategy, the nation''s environmental program has created a built-in antagonism between environmental quality and economic growth.',
    NULL,
    '2020-01-29 19:28:43.982'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why can’t you trust an atom? Because they make up everything.',
    'https://picsum.photos/484/501',
    '2023-07-30 03:27:56.289'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Purus in mollis nunc sed id semper. Suspendisse fa',
    'Dignissim convallis aenean et tortor at risus viverra adipiscing at. Lacinia quis vel eros donec ac odio tempor orci. Id porta nibh venenatis cras. Nunc sed augue lacus viverra vitae congue eu consequat. Nisi porta lorem mollis aliquam. Pellentesque habitant morbi tristique senectus. Bibendum est ultricies integer quis auctor elit sed. Posuere urna nec tincidunt praesent semper. Id donec ultrices tincidunt arcu non sodales. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Nibh mauris cursus mattis molestie a iaculis at. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Ut porttitor leo a diam. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Magna fringilla urna porttitor rhoncus dolor purus non enim. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed.\nSed sed risus pretium quam vulputate dignissim suspendisse. Id leo in vitae turpis massa. Eget mauris pharetra et ultrices. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Nisl condimentum id venenatis a. Dui id ornare arcu odio. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Viverra maecenas accumsan lacus vel facilisis volutpat est. Platea dictumst vestibulum rhoncus est pellentesque elit. Hac habitasse platea dictumst quisque.\nCommodo elit at imperdiet dui accumsan. Bibendum ut tristique et egestas. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Diam vulputate ut pharetra sit amet aliquam id diam. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Facilisi morbi tempus iaculis urna id. Imperdiet sed euismod nisi porta lorem. Diam maecenas sed enim ut sem viverra aliquet eget. Varius duis at consectetur lorem donec massa. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Massa ultricies mi quis hendrerit. Semper auctor neque vitae tempus quam pellentesque nec nam. Feugiat in ante metus dictum. Gravida neque convallis a cras semper auctor neque.\nSollicitudin nibh sit amet commodo. Purus sit amet luctus venenatis lectus. Dolor sit amet consectetur adipiscing elit ut aliquam purus. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Aliquet lectus proin nibh nisl condimentum. Laoreet non curabitur gravida arcu. Consectetur libero id faucibus nisl tincidunt eget nullam. Pretium viverra suspendisse potenti nullam ac tortor vitae. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Sed enim ut sem viverra aliquet. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Odio euismod lacinia at quis risus sed. Amet justo donec enim diam vulputate. Montes nascetur ridiculus mus mauris vitae ultricies leo integer.\n',
    'https://picsum.photos/111/165',
    '2020-10-02 15:36:52.371'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'pidgey',
    'Pokemon  normal flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
    '2023-06-17 20:02:13.681'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Rice Krispies',
    'Nick''s father has three sons snap,crakle,and____?\n\n\n\n\nNick',
    NULL,
    '2020-08-11 04:20:27.418'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'A Bus',
    'you driven a bus and theirs 32 people on the bus. theirs five stops. 12 got off the first stop. and 6 got on. the second stop 13 people got off and 1 gets on. the third stop 6 people get off and 13 got on. and the fourth stop 3 people got off. and 5 people got on the fifth stop 13 got off and none got on.who is driven the bus?\n\n\n\n\nyou',
    NULL,
    '2020-09-06 05:59:31.564'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Consectetur a erat nam at lectus. Amet justo donec',
    'Et pharetra pharetra massa massa ultricies mi quis hendrerit. Non odio euismod lacinia at quis risus sed vulputate. Vulputate sapien nec sagittis aliquam. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Tristique et egestas quis ipsum. Dui ut ornare lectus sit amet. Ac feugiat sed lectus vestibulum mattis. Enim tortor at auctor urna nunc. Feugiat sed lectus vestibulum mattis ullamcorper. Eget mauris pharetra et ultrices neque. Euismod elementum nisi quis eleifend quam. Volutpat odio facilisis mauris sit amet massa. Ultricies lacus sed turpis tincidunt id aliquet risus. Egestas diam in arcu cursus euismod quis.\n',
    'https://picsum.photos/685/546',
    '2020-08-10 18:00:00.283'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'The Run',
    'They were two men bragging about who could run faster then the other. So they went on top of a 20 stories high. The first man dropped his watch and ran down the stairs and just in time to catch his watch. The second man dropped his watch and got into the elevator went to every floor and when he got to the lobby he bought a can of coke and drank it all taking his time then he walked out the door and caught his watch. How is this possible?\n\n\n\n\nHis watch was 15 minutes slow.',
    NULL,
    '2021-06-26 12:43:00.938'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Ut eu sem integer vitae justo eget magna. Praesent',
    'Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Consequat semper viverra nam libero justo laoreet sit amet cursus. Morbi quis commodo odio aenean. Ut sem nulla pharetra diam. Gravida cum sociis natoque penatibus et magnis. Eu sem integer vitae justo. Amet dictum sit amet justo donec enim diam vulputate ut. Eu consequat ac felis donec et. Sed vulputate odio ut enim. Vitae aliquet nec ullamcorper sit amet risus nullam.\nLectus magna fringilla urna porttitor rhoncus dolor purus non enim. Blandit massa enim nec dui nunc. Ultrices vitae auctor eu augue ut. Sagittis purus sit amet volutpat consequat mauris nunc congue. Viverra suspendisse potenti nullam ac tortor vitae purus. Aliquet enim tortor at auctor urna nunc id. Orci sagittis eu volutpat odio facilisis mauris sit amet. Sem integer vitae justo eget magna fermentum iaculis eu. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Nec ullamcorper sit amet risus nullam. Malesuada bibendum arcu vitae elementum. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Pretium quam vulputate dignissim suspendisse. Gravida quis blandit turpis cursus in hac habitasse. Odio tempor orci dapibus ultrices in iaculis nunc sed. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Leo urna molestie at elementum eu facilisis sed odio.\nEget sit amet tellus cras adipiscing enim eu. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Purus in massa tempor nec feugiat nisl pretium fusce. Eu feugiat pretium nibh ipsum consequat nisl. Purus in mollis nunc sed. Turpis massa sed elementum tempus egestas sed. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Est lorem ipsum dolor sit amet. Fringilla phasellus faucibus scelerisque eleifend donec. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.\nNec feugiat nisl pretium fusce id velit. Aliquam ut porttitor leo a diam sollicitudin tempor. Elementum eu facilisis sed odio morbi quis. Aliquet nec ullamcorper sit amet risus nullam. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Diam volutpat commodo sed egestas. Et leo duis ut diam quam nulla porttitor massa id. Justo laoreet sit amet cursus sit. Id aliquet lectus proin nibh. Pretium fusce id velit ut tortor pretium viverra. Enim lobortis scelerisque fermentum dui. Id diam vel quam elementum. Ultrices sagittis orci a scelerisque purus semper eget duis. Pretium viverra suspendisse potenti nullam. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Vel quam elementum pulvinar etiam non quam lacus suspendisse.\n',
    'https://picsum.photos/416/495',
    '2020-02-26 11:32:48.086'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    '2 Coins 30 Cents',
    'I have 2 coins that equal 30 cents and one of them is not a nickel\n\n\n\n\nA quarter and a nickel. as you remember ONE of them wasn''t a nickel, the other one is.',
    NULL,
    '2022-01-28 19:27:03.041'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'squirtle',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    '2020-12-20 19:49:53.316'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'What do you call a woman who hasn''t slept with Chuck Norris? A Lesbian.',
    NULL,
    '2023-02-15 22:23:50.376'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What Popstar With A 185 Inch Waistline & Standing 6"1 Topped The Charts In 1993\n\n\n\n\nMr Blobby',
    'https://picsum.photos/280/109',
    '2022-12-29 08:47:52.991'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What is the fear of dreams known as\n\n\n\n\nOneirophobia',
    'https://picsum.photos/545/556',
    '2021-06-20 14:20:08.589'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Where do dads store their dad jokes? In the dad-a-base.',
    'https://picsum.photos/700/522',
    '2023-01-19 09:54:38.919'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Who wrote the surreal novel Tarantula\n\n\n\n\nBob Dylan',
    NULL,
    '2019-12-15 08:01:36.967'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'The munchies get Chuck Norris.',
    NULL,
    '2023-05-03 14:54:24.082'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Collective nouns - A bale of what\n\n\n\n\nTurtles',
    NULL,
    '2021-07-25 11:46:27.502'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'articuno',
    'Pokemon  ice flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png',
    '2021-06-21 05:48:47.620'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Dax Shepard',
    'I''m an off-road racecar driver. And I think every woman in my life has told me that''s not a sensible hobby. But when I was growing, even more than I wanted to be funny, I wanted to be a racecar driver. That''s all I thought about. I worked for a race team when I was 15 and I traveled with them.',
    'https://picsum.photos/405/438',
    '2020-10-24 05:02:41.484'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What is the Capital of: Sweden\n\n\n\n\nStockholm',
    'https://picsum.photos/284/369',
    '2020-04-26 21:27:44.076'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Joel Osteen',
    'Do all you can to make your dreams come true.',
    'https://picsum.photos/312/681',
    '2021-04-29 02:48:08.622'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What do you call a shoe made out of a banana? A slipper.',
    'https://picsum.photos/119/144',
    '2021-11-24 01:46:57.244'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dragon''s Bind',
    'Trap Card card\n\n\nActivate this card by targeting 1 Dragon-Type monster you control with 2500 or less ATK and DEF; neither player can Special Summon monsters with ATK less than or equal to the original ATK of that monster. When that monster leaves the field, destroy this card.',
    'https://images.ygoprodeck.com/images/cards/16278116.jpg',
    '2020-06-01 15:19:29.075'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Spell Reproduction',
    'Spell Card card\n\n\nSend 2 Spells from your hand to the GY, then target 1 Spell in your GY; add it to your hand.',
    'https://images.ygoprodeck.com/images/cards/29228529.jpg',
    '2020-06-13 16:00:16.522'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'A cheese factory exploded in France. Da brie is everywhere!',
    NULL,
    '2022-01-02 09:39:51.270'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Twins In Crime',
    'There are two twins,twin 1 robbed a bank.Twin 2 tried to stop twin 1.They were sent to court,but the juge said that he couldn''t send twin 1 to jail.Why?\n\n\n\n\nThey''re conjoined, so the juge cant send twin 1 to jail without having twin 2 being sent to jail.',
    'https://picsum.photos/362/522',
    '2022-06-03 13:49:07.853'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'As a child, Chuck Norris played Hot Potato with live hand grenades.',
    'https://picsum.photos/354/156',
    '2021-12-30 13:10:49.901'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'omanyte',
    'Pokemon  rock water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png',
    '2021-10-13 10:13:58.872'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'bulbasaur',
    'Pokemon  grass poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    '2022-04-12 20:52:12.385'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'If God knows all, sees all, and hears all, then God must be Chuck Norris.',
    NULL,
    '2021-01-27 16:25:13.375'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'More Word Play',
    'I am a rock group that has 4 members, all of whom are dead, one of which was assasinated. What am I?\n\n\n\n\nMount Rushmore! Get it, rock group?',
    NULL,
    '2022-05-20 18:01:04.592'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'goldeen',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png',
    '2022-05-27 13:00:21.556'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'vileplume',
    'Pokemon  grass poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png',
    '2023-07-06 02:39:16.350'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'A liger is an animal that results from the crossbreeding of a tiger and a what?\n\n\n\n\nLion',
    'https://picsum.photos/241/413',
    '2021-01-28 09:23:00.693'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris requires both arms and legs to masturbate.',
    NULL,
    '2021-03-10 04:15:53.628'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Once a grizzly bear threatened to eat Chuck Norris. Chuck showed the bear his fist and the bear proceeded to eat himself, because it would be the less painful way to die.',
    NULL,
    '2022-05-06 04:19:17.604'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Atlantean Dragoons',
    'Effect Monster card\n\nSea Serpent\nATK 1800 / DEF 0\nLevel 4\n\nAll Level 3 or lower Sea Serpent-Type monsters you control can attack your opponent directly. When this card is sent to the Graveyard to activate a WATER monster''s effect: Add 1 Sea Serpent-Type monster from your Deck to your hand, except "Atlantean Dragoons".',
    'https://images.ygoprodeck.com/images/cards/74311226.jpg',
    '2021-05-06 13:00:52.705'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'What Now Is Black',
    'Tear me up, strike my head. What now is black once was red. What am I?\n\n\n\n\na match.',
    'https://picsum.photos/504/226',
    '2023-05-15 00:51:57.844'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Harlan Coben',
    'I can write pretty much anywhere if you give me time and some quiet. The home is not usually the best place because I have four children. It''s usually pandemonium around here!',
    'https://picsum.photos/359/416',
    '2019-11-27 23:43:00.394'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'A iaculis at erat pellentesque adipiscing commodo ',
    'Consectetur a erat nam at lectus. Amet justo donec enim diam vulputate ut pharetra. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Porttitor rhoncus dolor purus non enim. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Augue ut lectus arcu bibendum. Lectus proin nibh nisl condimentum id.\nDignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Sit amet nulla facilisi morbi tempus. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Sodales neque sodales ut etiam sit amet nisl purus. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Nisi lacus sed viverra tellus in hac habitasse. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Tincidunt eget nullam non nisi. Cursus risus at ultrices mi. Volutpat est velit egestas dui id ornare. Sagittis nisl rhoncus mattis rhoncus. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Fermentum leo vel orci porta non pulvinar neque. Quisque sagittis purus sit amet volutpat. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Porttitor massa id neque aliquam vestibulum morbi blandit. At quis risus sed vulputate odio. Nisi vitae suscipit tellus mauris a diam maecenas sed enim.\nAc auctor augue mauris augue neque gravida in fermentum et. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Molestie at elementum eu facilisis sed odio morbi quis. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Cursus mattis molestie a iaculis. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Ultrices neque ornare aenean euismod elementum. Eu facilisis sed odio morbi. Arcu dui vivamus arcu felis. Aliquam etiam erat velit scelerisque in dictum. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Pellentesque nec nam aliquam sem. Amet volutpat consequat mauris nunc congue. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean sed adipiscing diam donec adipiscing tristique. Tellus pellentesque eu tincidunt tortor aliquam. Sem nulla pharetra diam sit amet nisl suscipit.\n',
    'https://picsum.photos/236/536',
    '2022-02-03 11:31:19.842'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'She Was The Greatest Of All Blues Singers But Nobody Placed A Headstone On Her Grave Until Janis Joplin Helped Fund A Memorial Many Years After Her Death Who Was She\n\n\n\n\nBessie Smith',
    NULL,
    '2022-11-26 18:33:36.268'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why did the man get fired from the banana factory? He kept throwing away the bent ones.',
    NULL,
    '2021-09-06 11:59:05.128'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris eats chili peppers to cool down his mouth',
    NULL,
    '2023-09-19 11:51:33.141'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What is the main ingredient of faggots\n\n\n\n\nLiver',
    NULL,
    '2020-10-27 07:42:58.034'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'pinsir',
    'Pokemon  bug',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png',
    '2020-01-03 14:38:45.908'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Shouldn’t the “roof” of your mouth actually be called the ceiling?',
    'https://picsum.photos/162/351',
    '2020-05-13 20:45:16.007'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Which of these Toyota models shares its name with the 3rd largest city in the state of Washington?\n\n\n\n\nTacoma',
    'https://picsum.photos/304/350',
    '2022-12-30 21:02:38.129'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'When Chuck Norris action figures first came out they had a recall, because they were beating the shit out of little kids.',
    NULL,
    '2019-11-24 18:28:36.077'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Ut eu sem integer vitae justo eget magna. Praesent',
    'Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Consequat id porta nibh venenatis cras sed felis eget velit. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Et tortor consequat id porta nibh. Ut etiam sit amet nisl purus. Leo vel fringilla est ullamcorper. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Vel facilisis volutpat est velit egestas dui id. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Nibh tellus molestie nunc non blandit. Nisi lacus sed viverra tellus in hac habitasse platea dictumst.\nLorem sed risus ultricies tristique nulla aliquet enim. Curabitur vitae nunc sed velit. Vel elit scelerisque mauris pellentesque pulvinar. Viverra nibh cras pulvinar mattis nunc sed blandit. Pellentesque pulvinar pellentesque habitant morbi. Elementum sagittis vitae et leo. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Senectus et netus et malesuada. Varius vel pharetra vel turpis nunc. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Quam elementum pulvinar etiam non quam.\nNibh nisl condimentum id venenatis a condimentum vitae sapien. Laoreet sit amet cursus sit. Commodo ullamcorper a lacus vestibulum sed arcu. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Pharetra convallis posuere morbi leo urna. Id volutpat lacus laoreet non curabitur gravida arcu ac. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Lorem mollis aliquam ut porttitor. A arcu cursus vitae congue. Nisl purus in mollis nunc sed id semper. Convallis a cras semper auctor neque. Lectus arcu bibendum at varius. Facilisis sed odio morbi quis commodo odio aenean sed. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Vel orci porta non pulvinar neque laoreet suspendisse. Feugiat nisl pretium fusce id. Adipiscing bibendum est ultricies integer quis auctor.\nDolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Elit eget gravida cum sociis natoque penatibus et. Aliquet nibh praesent tristique magna sit amet purus gravida. Sodales ut eu sem integer vitae. Lectus arcu bibendum at varius vel. Eget mi proin sed libero. Turpis egestas sed tempus urna et pharetra. Ut tellus elementum sagittis vitae et leo. Odio ut enim blandit volutpat. Massa tincidunt dui ut ornare lectus sit amet est placerat. Cursus mattis molestie a iaculis. Arcu dictum varius duis at consectetur lorem donec. In massa tempor nec feugiat nisl pretium.\n',
    NULL,
    '2023-04-15 20:55:57.392'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'omastar',
    'Pokemon  rock water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png',
    '2021-12-17 00:51:14.436'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'sandslash',
    'Pokemon  ground',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png',
    '2023-04-22 00:00:31.157'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Who Was The 3rd Wife Of Henry Viii \n\n\n\n\nJane Seymour',
    'https://picsum.photos/433/644',
    '2023-11-11 17:53:16.168'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris'' Chihuahua, Pickles, had to be placed in quarantine after she chewed up Rocco, the neighbors Pit bull.',
    NULL,
    '2021-05-16 11:51:31.001'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Cemetary Bomb',
    'Trap Card card\n\n\nInflict 100 damage to your opponent for each card in their Graveyard.',
    'https://images.ygoprodeck.com/images/cards/51394546.jpg',
    '2020-02-18 16:59:26.236'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'What Kind Of Cheese Is Made Backwards?',
    'What kind of cheese is made backwards?\n\n\n\n\nEDAM cheese (made backwards is edam)',
    NULL,
    '2022-08-01 04:56:13.847'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris dosn''t dip oreos in milk, Chuck Norris dips glasses of milk in oreos.',
    NULL,
    '2020-08-04 09:48:01.147'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Which red jelly is a traditional accompaniment to lamb? \n\n\n\n\nRedcurrant',
    NULL,
    '2023-10-01 02:27:28.984'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Icejade Manifestation',
    'Spell Card card\n\n\nIf you control a WATER monster and your opponent has a monster on their field or GY: Take 1 "Icejade" monster from your Deck, and either send it to the GY or Special Summon it. If a face-up "Icejade" monster you control leaves the field by an opponent''s card, except by being destroyed (and except during the Damage Step): You can banish this card from your GY, then target 1 card your opponent controls; banish it. You can only use each effect of "Icejade Manifestation" once per turn.',
    'https://images.ygoprodeck.com/images/cards/72776252.jpg',
    '2020-12-08 19:32:22.661'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Marianne Williamson',
    'Joy is what happens to us when we allow ourselves to recognize how good things really are.',
    NULL,
    '2022-02-24 18:23:00.220'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Volutpat consequat mauris nunc congue. Sollicitudi',
    'Sed sed risus pretium quam vulputate dignissim suspendisse. Id leo in vitae turpis massa. Eget mauris pharetra et ultrices. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Nisl condimentum id venenatis a. Dui id ornare arcu odio. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Viverra maecenas accumsan lacus vel facilisis volutpat est. Platea dictumst vestibulum rhoncus est pellentesque elit. Hac habitasse platea dictumst quisque.\nSed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Massa enim nec dui nunc. Netus et malesuada fames ac turpis egestas. Gravida rutrum quisque non tellus orci. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Amet aliquam id diam maecenas ultricies mi eget mauris. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Ultricies tristique nulla aliquet enim. Urna et pharetra pharetra massa. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit.\n',
    NULL,
    '2020-03-31 11:50:16.432'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'seadra',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png',
    '2021-05-11 19:14:01.790'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Plato',
    'The learning and knowledge that we have, is, at the most, but little compared with that of which we are ignorant.',
    NULL,
    '2023-08-13 16:14:36.433'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Boat Ride',
    'there are two kids and two adults on one side of the river they all have to get over by boat, but the boat only hold 1 adult OR 2 kids how do they all get over with out swimming\n\n\n\n\nboth the kids go over one comes back, one adult goes over and sends the kid back,both kids go over one comes back the adult goes over sends the kid back and both the kids go over! they are all there!!!!',
    NULL,
    '2020-04-14 08:18:56.863'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Praesent semper feugiat nibh sed pulvinar proin. I',
    'A iaculis at erat pellentesque adipiscing commodo elit. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Mattis nunc sed blandit libero. Eu lobortis elementum nibh tellus molestie nunc non blandit. Eget duis at tellus at urna condimentum. Sagittis aliquam malesuada bibendum arcu vitae elementum. Felis imperdiet proin fermentum leo vel orci. Sed sed risus pretium quam vulputate. Sed risus pretium quam vulputate dignissim suspendisse in. Fames ac turpis egestas maecenas pharetra convallis posuere. Lobortis scelerisque fermentum dui faucibus in ornare quam. Aenean pharetra magna ac placerat vestibulum lectus mauris. Aliquet sagittis id consectetur purus. Netus et malesuada fames ac. Habitant morbi tristique senectus et. Habitasse platea dictumst vestibulum rhoncus. Egestas sed sed risus pretium quam vulputate. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus.\nEt pharetra pharetra massa massa ultricies mi quis hendrerit. Non odio euismod lacinia at quis risus sed vulputate. Vulputate sapien nec sagittis aliquam. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Tristique et egestas quis ipsum. Dui ut ornare lectus sit amet. Ac feugiat sed lectus vestibulum mattis. Enim tortor at auctor urna nunc. Feugiat sed lectus vestibulum mattis ullamcorper. Eget mauris pharetra et ultrices neque. Euismod elementum nisi quis eleifend quam. Volutpat odio facilisis mauris sit amet massa. Ultricies lacus sed turpis tincidunt id aliquet risus. Egestas diam in arcu cursus euismod quis.\nMauris commodo quis imperdiet massa tincidunt nunc pulvinar. Arcu felis bibendum ut tristique et egestas. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Quisque sagittis purus sit amet volutpat consequat mauris. Mattis vulputate enim nulla aliquet porttitor. Sit amet facilisis magna etiam tempor orci eu lobortis. Erat nam at lectus urna duis convallis convallis. Sit amet est placerat in. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Amet justo donec enim diam vulputate ut. Adipiscing vitae proin sagittis nisl rhoncus mattis. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Felis imperdiet proin fermentum leo vel orci porta. Consequat ac felis donec et odio pellentesque.\n',
    NULL,
    '2022-12-15 12:24:39.755'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Just A Riddle',
    'the begining of a story the end of lions the middle of jalsmin and the start of a snake. What Am I?\n\n\n\n\nThe letter "s". Come on if you didnt get this you disgust me!!!!!!',
    NULL,
    '2022-06-23 12:05:20.010'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Steven Brust',
    'All literature consists of whatever the writer thinks is cool. The reader will like the book to the degree that he agrees with the writer about what''s cool.',
    NULL,
    '2020-05-06 14:31:51.115'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'poliwhirl',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png',
    '2022-06-10 10:33:47.331'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dogoran, the Mad Flame Kaiju',
    'Effect Monster card\n\nDinosaur\nATK 3000 / DEF 1200\nLevel 8\n\nYou can Special Summon this card (from your hand) to your opponent''s field in Attack Position, by Tributing 1 monster they control. If your opponent controls a "Kaiju" monster, you can Special Summon this card (from your hand) in Attack Position. You can only control 1 "Kaiju" monster. Once per turn: You can remove 3 Kaiju Counters from anywhere on the field; destroy all monsters your opponent controls. This card cannot attack the turn this effect is activated.',
    'https://images.ygoprodeck.com/images/cards/93332803.jpg',
    '2019-11-21 09:31:58.679'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'During quarantine no one got my humor. I guess it was all the inside jokes.',
    NULL,
    '2023-04-06 02:55:29.323'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Throat, foxing, and platform are parts of a(n) ________.\n\n\n\n\nShoe',
    'https://picsum.photos/579/416',
    '2022-06-28 18:11:03.814'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What gets wetter the more it dries? A towel.',
    'https://picsum.photos/280/476',
    '2021-12-28 10:44:50.147'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Did you hear about the chameleon who couldn''t change color? He had a reptile dysfunction.',
    NULL,
    '2023-04-23 03:10:56.135'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Ac auctor augue mauris augue neque gravida in ferm',
    'Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Arcu felis bibendum ut tristique et egestas. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Quisque sagittis purus sit amet volutpat consequat mauris. Mattis vulputate enim nulla aliquet porttitor. Sit amet facilisis magna etiam tempor orci eu lobortis. Erat nam at lectus urna duis convallis convallis. Sit amet est placerat in. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Amet justo donec enim diam vulputate ut. Adipiscing vitae proin sagittis nisl rhoncus mattis. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Felis imperdiet proin fermentum leo vel orci porta. Consequat ac felis donec et odio pellentesque.\n',
    NULL,
    '2020-03-14 01:14:05.861'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Kozaky',
    'Normal Monster card\n\nFiend\nATK 400 / DEF 400\nLevel 1\n\nA workaholic fiend who devotes everything to his research into the languages of Dark World. His mind has collapsed because of working too hard.',
    'https://images.ygoprodeck.com/images/cards/99171160.jpg',
    '2023-05-13 22:50:02.208'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Blandit volutpat maecenas volutpat blandit. Nulla ',
    'Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Quis vel eros donec ac odio tempor orci. Augue eget arcu dictum varius duis at consectetur lorem donec. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Duis at tellus at urna condimentum mattis pellentesque id nibh. Sed nisi lacus sed viverra tellus. Tortor aliquam nulla facilisi cras fermentum odio eu. Vulputate mi sit amet mauris commodo quis imperdiet massa. Vulputate enim nulla aliquet porttitor lacus luctus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Venenatis tellus in metus vulputate eu. Neque sodales ut etiam sit amet. Id interdum velit laoreet id donec ultrices tincidunt arcu. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Viverra vitae congue eu consequat ac. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Volutpat diam ut venenatis tellus in metus vulputate eu. Nibh tellus molestie nunc non.\nA iaculis at erat pellentesque adipiscing commodo elit. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Mattis nunc sed blandit libero. Eu lobortis elementum nibh tellus molestie nunc non blandit. Eget duis at tellus at urna condimentum. Sagittis aliquam malesuada bibendum arcu vitae elementum. Felis imperdiet proin fermentum leo vel orci. Sed sed risus pretium quam vulputate. Sed risus pretium quam vulputate dignissim suspendisse in. Fames ac turpis egestas maecenas pharetra convallis posuere. Lobortis scelerisque fermentum dui faucibus in ornare quam. Aenean pharetra magna ac placerat vestibulum lectus mauris. Aliquet sagittis id consectetur purus. Netus et malesuada fames ac. Habitant morbi tristique senectus et. Habitasse platea dictumst vestibulum rhoncus. Egestas sed sed risus pretium quam vulputate. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus.\nSemper auctor neque vitae tempus quam pellentesque nec nam. Turpis egestas maecenas pharetra convallis posuere morbi. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. In cursus turpis massa tincidunt dui. Gravida neque convallis a cras semper auctor neque vitae tempus. Dui faucibus in ornare quam viverra. Consequat nisl vel pretium lectus quam id leo in vitae. Eget est lorem ipsum dolor sit amet. Enim facilisis gravida neque convallis a cras semper auctor. Non arcu risus quis varius quam quisque id diam. Enim praesent elementum facilisis leo vel fringilla est. Elementum sagittis vitae et leo duis ut diam quam. Nisi lacus sed viverra tellus. Id aliquet lectus proin nibh nisl condimentum id. Egestas sed sed risus pretium quam vulputate dignissim.\n',
    NULL,
    '2023-01-15 08:12:12.107'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from David Mamet',
    'In my family, in the days prior to television, we liked to while away the evenings by making ourselves miserable, solely based on our ability to speak the language viciously.',
    NULL,
    '2022-02-12 17:31:42.652'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Whose memoirs were called There and back again\n\n\n\n\nBilbo Baggins The Hobbit',
    'https://picsum.photos/240/163',
    '2021-05-21 23:38:58.360'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris once beat someone to death with water.',
    'https://picsum.photos/449/370',
    '2023-10-21 06:03:22.396'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why did the golfer bring two pairs of pants? In case he got a hole in one.',
    NULL,
    '2020-09-27 12:54:02.635'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    '“I can tolerate algebra, maybe even a little calculus, but geometry is where I draw the line.”',
    'https://picsum.photos/528/559',
    '2021-01-18 16:19:26.896'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Thomas Fuller',
    'Change of weather is the discourse of fools.',
    NULL,
    '2020-09-30 23:10:21.622'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'grimer',
    'Pokemon  poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png',
    '2022-07-16 11:04:30.765'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'primeape',
    'Pokemon  fighting',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png',
    '2022-01-14 14:52:20.788'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nibh nisl condimentum id venenatis a condimentum v',
    'Sollicitudin nibh sit amet commodo. Purus sit amet luctus venenatis lectus. Dolor sit amet consectetur adipiscing elit ut aliquam purus. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Aliquet lectus proin nibh nisl condimentum. Laoreet non curabitur gravida arcu. Consectetur libero id faucibus nisl tincidunt eget nullam. Pretium viverra suspendisse potenti nullam ac tortor vitae. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Sed enim ut sem viverra aliquet. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Odio euismod lacinia at quis risus sed. Amet justo donec enim diam vulputate. Montes nascetur ridiculus mus mauris vitae ultricies leo integer.\nId eu nisl nunc mi ipsum faucibus vitae aliquet nec. Consequat id porta nibh venenatis cras sed felis eget velit. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Et tortor consequat id porta nibh. Ut etiam sit amet nisl purus. Leo vel fringilla est ullamcorper. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Vel facilisis volutpat est velit egestas dui id. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Nibh tellus molestie nunc non blandit. Nisi lacus sed viverra tellus in hac habitasse platea dictumst.\nEnim eu turpis egestas pretium aenean. Ipsum a arcu cursus vitae. Massa massa ultricies mi quis hendrerit dolor. Rhoncus dolor purus non enim praesent elementum. Tristique magna sit amet purus. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Egestas diam in arcu cursus. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. In mollis nunc sed id semper risus in hendrerit gravida. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Volutpat consequat mauris nunc congue nisi vitae.\nFaucibus interdum posuere lorem ipsum dolor sit amet consectetur. Quis hendrerit dolor magna eget est lorem ipsum dolor. In aliquam sem fringilla ut. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Facilisis leo vel fringilla est. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Volutpat lacus laoreet non curabitur. Cum sociis natoque penatibus et magnis dis. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Nunc lobortis mattis aliquam faucibus. Arcu felis bibendum ut tristique et. Amet purus gravida quis blandit turpis cursus in hac habitasse. In fermentum et sollicitudin ac orci phasellus. Malesuada fames ac turpis egestas integer eget.\n',
    'https://picsum.photos/242/642',
    '2022-04-24 20:16:40.763'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'seel',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png',
    '2023-07-23 18:58:03.273'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'One time while hunting deer, Chuck Norris made a kill shot from 300 yards. No big deal u say? his weapon of choice was a squirt gun.',
    'https://picsum.photos/166/249',
    '2022-06-30 20:20:08.853'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Why Did They Die?',
    'a boy and a girl ate off a tree and died.why did they die?\n\n\n\n\nAdam and Eve frokm the Bible. They ate from the tree and God punished them for eating off the tree.',
    'https://picsum.photos/589/364',
    '2020-11-08 08:31:39.953'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    ' Male cockatoos can be taught to speak, but females can only chirp and __________\n\n\n\n\nSing',
    NULL,
    '2021-08-10 22:12:56.479'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'exeggutor',
    'Pokemon  grass psychic',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png',
    '2020-03-03 06:43:30.631'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dead Guy!',
    'A man lay dead on the ground with only a rock beside him What killed him?\n\n\n\n\nHe is Superman and the rock is kryptonite',
    NULL,
    '2021-06-12 00:38:17.138'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'What Happend ?',
    'okay.theres a man on a tree with a scubbadiving suit (by now he was dead) how did he get there?  hint:there had been a fire erlier that day ,he got on a helicopter but the people driving it didnt now he was there   how did he get on a tree ??\n\n\n\n\nsince there had been a fire a helicopter picked up water unknowing they had gotten a personso they droped the water on the fire the person landed on a tree and died',
    NULL,
    '2020-04-12 15:19:15.887'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Unknown Thing',
    'I have four legs and somtimes two arms. All of my people have the same basic shape but we come in many sizes and colors. What am I?\n\n\n\n\nA chair.',
    NULL,
    '2020-10-16 01:53:54.582'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'cloyster',
    'Pokemon  water ice',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png',
    '2020-03-06 14:31:09.300'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'articuno',
    'Pokemon  ice flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png',
    '2021-06-10 21:38:33.659'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'cloyster',
    'Pokemon  water ice',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png',
    '2021-01-02 12:21:49.074'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I hated facial hair but then it grew on me.',
    NULL,
    '2021-01-30 20:20:35.872'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Mauris commodo quis imperdiet massa tincidunt nunc',
    'Lectus urna duis convallis convallis tellus id interdum. Porttitor leo a diam sollicitudin tempor id eu. Sit amet aliquam id diam maecenas. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Fermentum odio eu feugiat pretium nibh ipsum consequat. Purus semper eget duis at tellus at. Arcu bibendum at varius vel pharetra vel turpis. Suscipit tellus mauris a diam maecenas sed enim. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Faucibus interdum posuere lorem ipsum. Turpis massa tincidunt dui ut ornare lectus sit amet est. Egestas maecenas pharetra convallis posuere morbi leo. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Amet venenatis urna cursus eget nunc scelerisque. Hac habitasse platea dictumst quisque sagittis purus sit. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Non blandit massa enim nec dui. Mus mauris vitae ultricies leo integer malesuada. Sed felis eget velit aliquet sagittis id consectetur.\nSed sed risus pretium quam vulputate dignissim suspendisse. Id leo in vitae turpis massa. Eget mauris pharetra et ultrices. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Nisl condimentum id venenatis a. Dui id ornare arcu odio. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Viverra maecenas accumsan lacus vel facilisis volutpat est. Platea dictumst vestibulum rhoncus est pellentesque elit. Hac habitasse platea dictumst quisque.\nVitae auctor eu augue ut lectus arcu bibendum at varius. Massa tincidunt dui ut ornare lectus sit amet est. Donec ac odio tempor orci dapibus ultrices in. Semper quis lectus nulla at volutpat. Est sit amet facilisis magna etiam tempor. Lacus sed viverra tellus in hac habitasse platea. Ultrices neque ornare aenean euismod elementum nisi. Elit scelerisque mauris pellentesque pulvinar pellentesque. Elit sed vulputate mi sit. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Feugiat in ante metus dictum at tempor commodo ullamcorper. Condimentum lacinia quis vel eros donec ac odio tempor.\n',
    'https://picsum.photos/392/598',
    '2022-02-05 17:45:07.142'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'When Chuck Norris is web surfing websites get the message "Warning: Internet Explorer has deemed this user to be malicious or dangerous. Proceed?".',
    NULL,
    '2022-06-24 20:05:53.923'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What do you call a man wearing a rug on his head? Matt.',
    'https://picsum.photos/273/189',
    '2020-06-19 18:31:46.590'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Which is the largest of the Canary Islands? \n\n\n\n\nTenerife',
    'https://picsum.photos/287/208',
    '2021-02-03 13:51:36.404'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Lunalight Black Sheep',
    'Effect Monster card\n\nBeast-Warrior\nATK 100 / DEF 600\nLevel 2\n\nYou can discard this card, then activate 1 of these effects;\n● Add 1 "Lunalight" monster from your Graveyard to your hand, except "Lunalight Black Sheep".\n● Add 1 "Polymerization" from your Deck to your hand.\nIf this card is sent to the Graveyard as a Fusion Material for a Fusion Summon: You can add to your hand, 1 face-up "Lunalight" Pendulum Monster from your Extra Deck or 1 "Lunalight" monster from your Graveyard, except "Lunalight Black Sheep".',
    'https://images.ygoprodeck.com/images/cards/11317977.jpg',
    '2022-12-25 06:05:17.861'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Which of these bottled water brands is produced by the makers of Coca-Cola?\n\n\n\n\nDasani',
    NULL,
    '2022-07-03 13:45:43.902'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Ounce A Pone A Riddle',
    'ounce a pone a riddle there was a guy name riddle one day he went to town and saw a sign that said riddle hes twin came to town and desided to take a little fiset and he did he ask riddle if he can solve hes Riddle and reddle said ok so he told hes reddle and Reddle couldent think of a answer so he finaly gave up and the answer was 4!!! wich riddle is Riddle\n\n\n\n\nriddle ladys age 13 my e-mail is lloydsmoney9@yahoo.com e-mail me some time',
    NULL,
    '2020-08-31 12:23:46.618'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris drives Optimus Prime to work.',
    'https://picsum.photos/489/284',
    '2021-11-05 15:06:22.928'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    '"Your wife and daughter look like twins," my friend said. "Well," I replied, "they were separated at birth."',
    NULL,
    '2022-06-13 04:44:58.178'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'CRAZY BOY',
    'Why did the crazy boy kill his father?\n\n\n\n\nHe wanted to be as crazy as a mad bull killing 3000 people.',
    NULL,
    '2021-01-30 01:27:03.043'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What did the buffalo say to his son when he dropped him off at school? “Bison!”',
    NULL,
    '2023-11-09 23:38:44.088'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'What Happened?',
    'A guy has 5,000 in his bank on monday. On tuesday, they guy had 4,000 dollars in his bank, but he didn''t spend or take out any money. By sunday, his morgage strangly went up and he had no money left in his bank. and he kept on gettinghis morgage up every sunday. On the saturday before that sunday, he threw out a working computer because he got a new one. The only way to make his morgage go up and his mney go down is through the computer. The guy goes to visit his friend every day and doesn''t come home until 5:00. By the next week his morgage went up higher. he was getting suspicious and narrowed down three victims. The mailman His arch enemy that killed his wife. And his computer hacking friend that lived in another state. What happened and how? Who did it?\n\n\n\n\nThe mailman did it. There is no mail on sunday and the mailman fruaded the guys info. every sunday the mailman would come at 4:00 and mess with his money and morgage. After pluging the computer into his truck and turning it on.',
    NULL,
    '2021-10-25 17:43:34.417'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Once Chuck Norris died just to see how it feels like to be dead. The next day he resurrected himself and roundhouse kicked everyone who celebrated his temporary death.',
    NULL,
    '2020-02-10 14:20:46.378'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Did you know the first French fries weren''t actually cooked in France? They were cooked in Greece.',
    NULL,
    '2021-03-30 08:39:15.897'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Hight',
    'wat has roots as no body sees; is taller than trees, up up it goes, and yet never grows\n\n\n\n\nmountains',
    NULL,
    '2023-08-08 14:00:48.633'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Ut ornare lectus sit amet est placerat. Eget nulla',
    'Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Consequat id porta nibh venenatis cras sed felis eget velit. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Et tortor consequat id porta nibh. Ut etiam sit amet nisl purus. Leo vel fringilla est ullamcorper. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Vel facilisis volutpat est velit egestas dui id. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Nibh tellus molestie nunc non blandit. Nisi lacus sed viverra tellus in hac habitasse platea dictumst.\nViverra aliquet eget sit amet tellus. Adipiscing at in tellus integer feugiat scelerisque. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Mauris ultrices eros in cursus. Dolor purus non enim praesent. Quam viverra orci sagittis eu volutpat. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Lobortis feugiat vivamus at augue. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Sed sed risus pretium quam. Integer malesuada nunc vel risus. Egestas congue quisque egestas diam in arcu. Elementum nibh tellus molestie nunc non blandit massa enim nec.\nAliquam sem fringilla ut morbi tincidunt augue interdum velit. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Tristique senectus et netus et malesuada fames ac. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut. Eros in cursus turpis massa tincidunt. Purus viverra accumsan in nisl nisi scelerisque eu. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Nam aliquam sem et tortor. Sit amet purus gravida quis blandit turpis. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Amet massa vitae tortor condimentum.\nEget sit amet tellus cras adipiscing enim eu. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Purus in massa tempor nec feugiat nisl pretium fusce. Eu feugiat pretium nibh ipsum consequat nisl. Purus in mollis nunc sed. Turpis massa sed elementum tempus egestas sed. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Est lorem ipsum dolor sit amet. Fringilla phasellus faucibus scelerisque eleifend donec. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.\n',
    NULL,
    '2021-08-03 06:00:11.724'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nibh nisl condimentum id venenatis a condimentum v',
    'Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Lacinia at quis risus sed. Velit egestas dui id ornare arcu odio ut sem nulla. Lacus vestibulum sed arcu non odio euismod lacinia. Imperdiet nulla malesuada pellentesque elit. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt. Adipiscing bibendum est ultricies integer quis auctor elit.\nTincidunt vitae semper quis lectus. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Convallis aenean et tortor at risus viverra adipiscing at in. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Massa eget egestas purus viverra accumsan in nisl nisi. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Posuere sollicitudin aliquam ultrices sagittis. Dolor purus non enim praesent elementum. Diam in arcu cursus euismod quis viverra nibh. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Dolor sed viverra ipsum nunc aliquet bibendum. Integer quis auctor elit sed vulputate mi. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Dui sapien eget mi proin sed libero enim sed. Neque sodales ut etiam sit amet nisl purus in.\nRisus sed vulputate odio ut enim blandit volutpat. Faucibus turpis in eu mi bibendum neque. Morbi tristique senectus et netus et malesuada fames ac. Lacinia quis vel eros donec. Est velit egestas dui id ornare arcu. Commodo viverra maecenas accumsan lacus. Turpis in eu mi bibendum neque egestas congue. Fermentum posuere urna nec tincidunt. Sit amet nisl purus in mollis. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Justo eget magna fermentum iaculis eu non diam. Proin nibh nisl condimentum id venenatis. Viverra maecenas accumsan lacus vel facilisis volutpat est. Rhoncus dolor purus non enim praesent elementum facilisis leo. Urna id volutpat lacus laoreet non curabitur gravida. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fermentum leo vel orci porta.\nNisl pretium fusce id velit ut tortor pretium viverra. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Volutpat diam ut venenatis tellus in metus. Commodo viverra maecenas accumsan lacus. Elit at imperdiet dui accumsan sit amet nulla facilisi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Eu scelerisque felis imperdiet proin. Arcu bibendum at varius vel pharetra vel turpis nunc. Orci a scelerisque purus semper eget. Elementum sagittis vitae et leo duis ut diam.\n',
    'https://picsum.photos/414/135',
    '2020-11-09 23:24:08.686'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Bill Cosby',
    'Having a child is surely the most beautifully irrational act that two people in love can commit.',
    NULL,
    '2021-11-10 05:11:14.123'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dark Master - Zorc',
    'Ritual Effect Monster card\n\nFiend\nATK 2700 / DEF 1500\nLevel 8\n\nYou can Ritual Summon this card with "Contract with the Dark Master". Once per turn: You can roll a six-sided die, then destroy all monsters your opponent controls if you roll 1 or 2, destroy 1 monster your opponent controls if you roll 3, 4 or 5, or destroy all monsters you control if you roll 6.',
    'https://images.ygoprodeck.com/images/cards/97642679.jpg',
    '2021-06-14 09:34:17.265'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Where would you find your natal cleft\n\n\n\n\nArse It''s The Crack',
    NULL,
    '2023-04-12 00:03:31.995'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Who was killed defending Quebec in 1759\n\n\n\n\nLouis Montcalm',
    NULL,
    '2020-03-05 04:52:43.553'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Mary Douglas',
    'Mormons... are so strong, they can handle wealth, they are confident. I think it is because they are not bogged down by rules for equality, but have a firmly defined system of relative status and responsible command.',
    'https://picsum.photos/641/254',
    '2019-11-21 20:43:01.385'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ninetales',
    'Pokemon  fire',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png',
    '2020-07-25 09:54:27.024'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Voltaire',
    'Love is a canvas furnished by nature and embroidered by imagination.',
    'https://picsum.photos/426/221',
    '2021-07-26 13:18:25.839'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Golden',
    'I get pumped up with air  I am can float  If you give to much air i bust  What am I?\n\n\n\n\nA balloon',
    NULL,
    '2022-11-02 09:55:31.154'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nisl pretium fusce id velit ut tortor pretium vive',
    'Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Sit amet nulla facilisi morbi tempus. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Sodales neque sodales ut etiam sit amet nisl purus. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Nisi lacus sed viverra tellus in hac habitasse. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Tincidunt eget nullam non nisi. Cursus risus at ultrices mi. Volutpat est velit egestas dui id ornare. Sagittis nisl rhoncus mattis rhoncus. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Fermentum leo vel orci porta non pulvinar neque. Quisque sagittis purus sit amet volutpat. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Porttitor massa id neque aliquam vestibulum morbi blandit. At quis risus sed vulputate odio. Nisi vitae suscipit tellus mauris a diam maecenas sed enim.\nId eu nisl nunc mi ipsum faucibus vitae aliquet nec. Consequat id porta nibh venenatis cras sed felis eget velit. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Et tortor consequat id porta nibh. Ut etiam sit amet nisl purus. Leo vel fringilla est ullamcorper. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Vel facilisis volutpat est velit egestas dui id. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Nibh tellus molestie nunc non blandit. Nisi lacus sed viverra tellus in hac habitasse platea dictumst.\nPurus in mollis nunc sed id semper. Suspendisse faucibus interdum posuere lorem ipsum. Dictum non consectetur a erat. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. In nibh mauris cursus mattis molestie a iaculis at erat. Velit aliquet sagittis id consectetur purus ut faucibus. Lorem dolor sed viverra ipsum. Facilisis gravida neque convallis a cras. Adipiscing vitae proin sagittis nisl rhoncus. Odio eu feugiat pretium nibh ipsum. Sit amet nulla facilisi morbi. Viverra mauris in aliquam sem. Vitae justo eget magna fermentum. Ultrices dui sapien eget mi proin sed libero. Convallis a cras semper auctor neque vitae tempus quam. Netus et malesuada fames ac turpis egestas. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Suspendisse potenti nullam ac tortor vitae.\n',
    NULL,
    '2021-10-09 05:12:37.213'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'kakuna',
    'Pokemon  bug poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
    '2023-03-28 20:30:39.764'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris likes to take long baths with the guys. No homo.',
    NULL,
    '2020-12-27 20:06:46.976'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'When my uncle Frank died, he wanted his remains to be buried in his favorite beer mug. His last wish was to be Frank in Stein.',
    NULL,
    '2020-02-10 05:11:57.879'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'gyarados',
    'Pokemon  water flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png',
    '2019-11-20 02:52:19.612'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Laughing Octopus',
    'How do u make an octopus laugh?\n\n\n\n\nu giv eit tentickles{tentacles}',
    NULL,
    '2020-07-02 15:27:01.989'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Does It Make Sense?',
    'Is the following statment true? Paris begins with p, and ends with e.\n\n\n\n\nYes, it does make sense. Paris begins with the letter p, and ends begins with the letter e. It is a matter of how you look at the question.',
    NULL,
    '2020-02-04 15:58:55.080'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Frida Kahlo',
    'I never paint dreams or nightmares. I paint my own reality.',
    'https://picsum.photos/448/638',
    '2023-02-11 01:42:35.459'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Eget sit amet tellus cras adipiscing enim eu. Dui ',
    'Purus in mollis nunc sed id semper. Suspendisse faucibus interdum posuere lorem ipsum. Dictum non consectetur a erat. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. In nibh mauris cursus mattis molestie a iaculis at erat. Velit aliquet sagittis id consectetur purus ut faucibus. Lorem dolor sed viverra ipsum. Facilisis gravida neque convallis a cras. Adipiscing vitae proin sagittis nisl rhoncus. Odio eu feugiat pretium nibh ipsum. Sit amet nulla facilisi morbi. Viverra mauris in aliquam sem. Vitae justo eget magna fermentum. Ultrices dui sapien eget mi proin sed libero. Convallis a cras semper auctor neque vitae tempus quam. Netus et malesuada fames ac turpis egestas. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Suspendisse potenti nullam ac tortor vitae.\n',
    NULL,
    '2020-05-06 20:49:40.018'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'clefairy',
    'Pokemon  fairy',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
    '2023-01-31 12:37:28.790'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'The Bilding',
    'A man is on the roof of a building he is working but he is not working he falls to his death but did not jump off the edge of the building.  How did he die??\n\n\n\n\nHe was construction worker on his break and fell off the steel bar.',
    'https://picsum.photos/196/165',
    '2023-06-29 09:41:24.318'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Blandit volutpat maecenas volutpat blandit. Nulla ',
    'Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Sit amet nulla facilisi morbi tempus. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Sodales neque sodales ut etiam sit amet nisl purus. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Nisi lacus sed viverra tellus in hac habitasse. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Tincidunt eget nullam non nisi. Cursus risus at ultrices mi. Volutpat est velit egestas dui id ornare. Sagittis nisl rhoncus mattis rhoncus. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Fermentum leo vel orci porta non pulvinar neque. Quisque sagittis purus sit amet volutpat. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Porttitor massa id neque aliquam vestibulum morbi blandit. At quis risus sed vulputate odio. Nisi vitae suscipit tellus mauris a diam maecenas sed enim.\nMi tempus imperdiet nulla malesuada pellentesque. Ut sem nulla pharetra diam sit amet. Eu consequat ac felis donec et. Ac felis donec et odio pellentesque diam volutpat. Vulputate sapien nec sagittis aliquam malesuada bibendum. Commodo viverra maecenas accumsan lacus vel. Ut sem viverra aliquet eget sit. Semper quis lectus nulla at volutpat diam ut. Ultricies integer quis auctor elit sed. Nulla facilisi morbi tempus iaculis urna. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Diam ut venenatis tellus in metus vulputate eu. Ut consequat semper viverra nam libero justo. Facilisi morbi tempus iaculis urna id. Tortor vitae purus faucibus ornare suspendisse.\nAliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Quis vel eros donec ac odio tempor orci. Augue eget arcu dictum varius duis at consectetur lorem donec. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Duis at tellus at urna condimentum mattis pellentesque id nibh. Sed nisi lacus sed viverra tellus. Tortor aliquam nulla facilisi cras fermentum odio eu. Vulputate mi sit amet mauris commodo quis imperdiet massa. Vulputate enim nulla aliquet porttitor lacus luctus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Venenatis tellus in metus vulputate eu. Neque sodales ut etiam sit amet. Id interdum velit laoreet id donec ultrices tincidunt arcu. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Viverra vitae congue eu consequat ac. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Volutpat diam ut venenatis tellus in metus vulputate eu. Nibh tellus molestie nunc non.\nUt ornare lectus sit amet est placerat. Eget nulla facilisi etiam dignissim diam quis enim. Penatibus et magnis dis parturient montes. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Odio pellentesque diam volutpat commodo. Duis ut diam quam nulla porttitor massa id. Diam donec adipiscing tristique risus. Sed blandit libero volutpat sed cras ornare. Tincidunt lobortis feugiat vivamus at augue eget arcu. Arcu dui vivamus arcu felis bibendum ut tristique. Dapibus ultrices in iaculis nunc sed augue lacus. Risus nullam eget felis eget nunc lobortis.\n',
    NULL,
    '2020-07-09 10:55:11.756'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'kangaskhan',
    'Pokemon  normal',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png',
    '2021-12-22 19:22:34.262'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'cloyster',
    'Pokemon  water ice',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png',
    '2020-03-06 07:10:41.138'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Eu turpis egestas pretium aenean pharetra magna ac',
    'A iaculis at erat pellentesque adipiscing commodo elit. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Mattis nunc sed blandit libero. Eu lobortis elementum nibh tellus molestie nunc non blandit. Eget duis at tellus at urna condimentum. Sagittis aliquam malesuada bibendum arcu vitae elementum. Felis imperdiet proin fermentum leo vel orci. Sed sed risus pretium quam vulputate. Sed risus pretium quam vulputate dignissim suspendisse in. Fames ac turpis egestas maecenas pharetra convallis posuere. Lobortis scelerisque fermentum dui faucibus in ornare quam. Aenean pharetra magna ac placerat vestibulum lectus mauris. Aliquet sagittis id consectetur purus. Netus et malesuada fames ac. Habitant morbi tristique senectus et. Habitasse platea dictumst vestibulum rhoncus. Egestas sed sed risus pretium quam vulputate. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus.\n',
    NULL,
    '2019-12-28 18:04:31.285'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What did the ocean say to the beach? Nothing, it just waved.',
    'https://picsum.photos/558/237',
    '2020-04-11 14:31:26.567'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dough Boy',
    'Were in the club ballas have a casadea?\n\n\n\n\nKind of Not',
    'https://picsum.photos/678/356',
    '2021-12-27 05:37:25.952'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What do houses wear? An address.',
    'https://picsum.photos/668/472',
    '2021-08-13 19:52:42.163'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Eget sit amet tellus cras adipiscing enim eu. Dui ',
    'Blandit volutpat maecenas volutpat blandit. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Aliquet enim tortor at auctor urna nunc id cursus metus. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Enim ut tellus elementum sagittis vitae et leo. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Elementum integer enim neque volutpat ac tincidunt vitae. Id leo in vitae turpis massa sed elementum. Volutpat sed cras ornare arcu dui vivamus arcu felis. Suspendisse in est ante in. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Elit eget gravida cum sociis natoque. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Purus faucibus ornare suspendisse sed. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Ac turpis egestas integer eget aliquet.\n',
    NULL,
    '2020-08-12 07:02:26.311'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Lauryn Hill',
    'That strong mother doesn''t tell her cub, Son, stay weak so the wolves can get you. She says, Toughen up, this is reality we are living in.',
    'https://picsum.photos/604/583',
    '2020-12-26 20:14:06.753'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'When you''re in Texas don''t look behind you, all you will see is Chuck Norris'' boot impaling your face followed by a bright light.',
    'https://picsum.photos/114/625',
    '2021-01-30 09:30:38.715'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Eget sit amet tellus cras adipiscing enim eu turpi',
    'Purus semper eget duis at tellus at urna condimentum. Amet justo donec enim diam vulputate ut pharetra sit. Pretium lectus quam id leo in vitae turpis massa sed. Feugiat nibh sed pulvinar proin gravida. Eget velit aliquet sagittis id. Nisl pretium fusce id velit. Imperdiet proin fermentum leo vel orci porta non pulvinar. Proin gravida hendrerit lectus a. Nibh tortor id aliquet lectus. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Amet est placerat in egestas erat imperdiet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Eu tincidunt tortor aliquam nulla facilisi cras. Tellus at urna condimentum mattis pellentesque. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Eu sem integer vitae justo. Tempor orci eu lobortis elementum nibh tellus molestie nunc non.\nMi eget mauris pharetra et ultrices neque. Nunc non blandit massa enim nec. Velit scelerisque in dictum non consectetur a. Enim sed faucibus turpis in eu mi bibendum neque. In egestas erat imperdiet sed. Ac auctor augue mauris augue neque gravida in fermentum. Vitae congue eu consequat ac felis donec. Feugiat sed lectus vestibulum mattis. Nibh venenatis cras sed felis eget velit aliquet. Mauris sit amet massa vitae tortor condimentum lacinia quis. Orci sagittis eu volutpat odio facilisis mauris sit amet. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Purus viverra accumsan in nisl. Consequat semper viverra nam libero justo laoreet sit amet. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Nec dui nunc mattis enim ut tellus elementum. Quis auctor elit sed vulputate mi sit. Feugiat nibh sed pulvinar proin gravida.\nLectus urna duis convallis convallis tellus id interdum. Porttitor leo a diam sollicitudin tempor id eu. Sit amet aliquam id diam maecenas. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Fermentum odio eu feugiat pretium nibh ipsum consequat. Purus semper eget duis at tellus at. Arcu bibendum at varius vel pharetra vel turpis. Suscipit tellus mauris a diam maecenas sed enim. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Faucibus interdum posuere lorem ipsum. Turpis massa tincidunt dui ut ornare lectus sit amet est. Egestas maecenas pharetra convallis posuere morbi leo. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Amet venenatis urna cursus eget nunc scelerisque. Hac habitasse platea dictumst quisque sagittis purus sit. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Non blandit massa enim nec dui. Mus mauris vitae ultricies leo integer malesuada. Sed felis eget velit aliquet sagittis id consectetur.\nTincidunt vitae semper quis lectus. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Convallis aenean et tortor at risus viverra adipiscing at in. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Massa eget egestas purus viverra accumsan in nisl nisi. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Posuere sollicitudin aliquam ultrices sagittis. Dolor purus non enim praesent elementum. Diam in arcu cursus euismod quis viverra nibh. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Dolor sed viverra ipsum nunc aliquet bibendum. Integer quis auctor elit sed vulputate mi. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Dui sapien eget mi proin sed libero enim sed. Neque sodales ut etiam sit amet nisl purus in.\n',
    NULL,
    '2022-11-16 07:07:36.671'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Emily Blunt',
    'It just proves good movies don''t need 100 million dollars to be good.',
    NULL,
    '2021-01-26 01:54:34.731'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What sits on the seabed and has anxiety? A nervous wreck.',
    NULL,
    '2021-11-01 22:52:18.801'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris takes no prisoners -- they''re dead before they have a chance to surrender.',
    NULL,
    '2023-02-10 14:10:35.296'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Magical Meltdown',
    'Spell Card card\n\n\nWhen this card is activated: You can add 1 "Aleister the Invoker" from your Deck to your hand. The activation of your cards and effects that include an effect that Fusion Summons a Fusion Monster cannot be negated, also your opponent''s cards and effects cannot activate when a monster is Fusion Summoned this way. You can only activate 1 "Magical Meltdown" per turn.',
    'https://images.ygoprodeck.com/images/cards/47679935.jpg',
    '2021-05-24 13:49:08.663'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'WHAT IS THE NAME OF SON',
    'raju''s mother had four son''s.. if 1st son''s name is 25paise , 2nd son''s name is 50paise and 3rd son''s name is 75paise.. what is the name of the 4th son???\n\n\n\n\nraju',
    NULL,
    '2021-11-12 03:06:39.571'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Hansenosis is more commonly known as___.\n\n\n\n\nLeprosy',
    NULL,
    '2023-08-25 19:54:36.681'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris doesn''t play COD: Nazi Zombies, Nazi Zombies play Chuck Norris.',
    NULL,
    '2020-11-30 09:32:20.876'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dignissim diam quis enim lobortis scelerisque ferm',
    'Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Quis vel eros donec ac odio tempor orci. Augue eget arcu dictum varius duis at consectetur lorem donec. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Duis at tellus at urna condimentum mattis pellentesque id nibh. Sed nisi lacus sed viverra tellus. Tortor aliquam nulla facilisi cras fermentum odio eu. Vulputate mi sit amet mauris commodo quis imperdiet massa. Vulputate enim nulla aliquet porttitor lacus luctus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Venenatis tellus in metus vulputate eu. Neque sodales ut etiam sit amet. Id interdum velit laoreet id donec ultrices tincidunt arcu. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Viverra vitae congue eu consequat ac. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Volutpat diam ut venenatis tellus in metus vulputate eu. Nibh tellus molestie nunc non.\nDignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Sit amet nulla facilisi morbi tempus. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Sodales neque sodales ut etiam sit amet nisl purus. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Nisi lacus sed viverra tellus in hac habitasse. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Tincidunt eget nullam non nisi. Cursus risus at ultrices mi. Volutpat est velit egestas dui id ornare. Sagittis nisl rhoncus mattis rhoncus. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Fermentum leo vel orci porta non pulvinar neque. Quisque sagittis purus sit amet volutpat. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Porttitor massa id neque aliquam vestibulum morbi blandit. At quis risus sed vulputate odio. Nisi vitae suscipit tellus mauris a diam maecenas sed enim.\nSed elementum tempus egestas sed sed risus pretium quam. Interdum varius sit amet mattis vulputate enim nulla. Orci porta non pulvinar neque laoreet suspendisse. Urna porttitor rhoncus dolor purus non enim praesent. Elit sed vulputate mi sit amet mauris commodo. Sit amet dictum sit amet. Elementum integer enim neque volutpat ac tincidunt. A erat nam at lectus urna duis convallis. Convallis aenean et tortor at risus viverra adipiscing at in. Mattis vulputate enim nulla aliquet porttitor lacus. Sagittis nisl rhoncus mattis rhoncus urna. Sit amet massa vitae tortor. Phasellus vestibulum lorem sed risus ultricies. Habitant morbi tristique senectus et netus et. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Mi eget mauris pharetra et ultrices neque. Sodales ut eu sem integer.\n',
    NULL,
    '2022-11-19 10:36:39.226'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'How many legs does a spider have\n\n\n\n\nEight',
    'https://picsum.photos/138/108',
    '2021-02-01 19:37:34.925'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'clefable',
    'Pokemon  fairy',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png',
    '2019-12-28 02:46:59.537'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'A man walks into a bar. The bartender asks, "What do you want?" The man says, "Oh, just some fruit punch." The bartender sighs and shakes his head, "If you want punch, you''re gonna have to wait in line." The man looks around, but there is no punchline.',
    NULL,
    '2019-11-26 06:55:04.158'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Kelly Osbourne',
    'I was dating this guy and we would spend all day text messaging each other. And he thought that he could tell that he liked me more because he actually spelt the word ''YOU'' and I just put the letter ''U''.',
    'https://picsum.photos/611/665',
    '2020-01-10 03:51:07.954'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Madolche Puddingcess Chocolat-a-la-Mode',
    'XYZ Monster card\n\nFairy\nATK 2500 / DEF 2200\nLevel 5\n\n2 Level 5 EARTH monsters\nYou can also Xyz Summon this card by using a Rank 4 or lower "Madolche" Xyz Monster you control as the material. (Transfer its materials to this card.) Once per turn: You can target 1 "Madolche" card in your GY; shuffle it into the Deck. While this card has "Madolche Puddingcess" as material, when a "Madolche" card(s) in your GY is shuffled into the Main Deck (except during the Damage Step): You can detach 1 material from this card; Special Summon 1 "Madolche" monster from your Deck in Attack Position or face-down Defense Position.',
    'https://images.ygoprodeck.com/images/cards/44311445.jpg',
    '2021-02-23 23:17:52.365'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'venomoth',
    'Pokemon  bug poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png',
    '2022-07-03 05:55:47.789'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Jordin Sparks',
    'I like the way my heart beats, I like the way I think I don''t need or want anything to change that.',
    'https://picsum.photos/177/339',
    '2020-12-28 06:48:39.761'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'A Common Coruption',
    'Some consider it evil in many ways Types of venom people it slays Corrupting killing harmful it stays Confusing their mind like a maze\n\n\n\n\npoision',
    'https://picsum.photos/258/409',
    '2021-04-16 18:47:58.964'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ditto',
    'Pokemon  normal',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    '2020-01-12 10:16:07.375'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What don''t Gary and Wyatt do when they take a shower with Lisa in "Weird Science?"\n\n\n\n\nTake Off Their Pants',
    NULL,
    '2020-11-15 14:55:17.619'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Viverra aliquet eget sit amet tellus. Adipiscing a',
    'Viverra aliquet eget sit amet tellus. Adipiscing at in tellus integer feugiat scelerisque. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Mauris ultrices eros in cursus. Dolor purus non enim praesent. Quam viverra orci sagittis eu volutpat. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Lobortis feugiat vivamus at augue. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Sed sed risus pretium quam. Integer malesuada nunc vel risus. Egestas congue quisque egestas diam in arcu. Elementum nibh tellus molestie nunc non blandit massa enim nec.\nSemper auctor neque vitae tempus quam pellentesque nec nam. Turpis egestas maecenas pharetra convallis posuere morbi. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. In cursus turpis massa tincidunt dui. Gravida neque convallis a cras semper auctor neque vitae tempus. Dui faucibus in ornare quam viverra. Consequat nisl vel pretium lectus quam id leo in vitae. Eget est lorem ipsum dolor sit amet. Enim facilisis gravida neque convallis a cras semper auctor. Non arcu risus quis varius quam quisque id diam. Enim praesent elementum facilisis leo vel fringilla est. Elementum sagittis vitae et leo duis ut diam quam. Nisi lacus sed viverra tellus. Id aliquet lectus proin nibh nisl condimentum id. Egestas sed sed risus pretium quam vulputate dignissim.\nDignissim convallis aenean et tortor at risus viverra adipiscing at. Lacinia quis vel eros donec ac odio tempor orci. Id porta nibh venenatis cras. Nunc sed augue lacus viverra vitae congue eu consequat. Nisi porta lorem mollis aliquam. Pellentesque habitant morbi tristique senectus. Bibendum est ultricies integer quis auctor elit sed. Posuere urna nec tincidunt praesent semper. Id donec ultrices tincidunt arcu non sodales. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Nibh mauris cursus mattis molestie a iaculis at. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Ut porttitor leo a diam. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Magna fringilla urna porttitor rhoncus dolor purus non enim. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed.\n',
    NULL,
    '2022-06-16 17:18:09.711'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'magikarp',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png',
    '2021-08-05 19:03:14.565'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Mi tempus imperdiet nulla malesuada pellentesque. ',
    'Consectetur a erat nam at lectus. Amet justo donec enim diam vulputate ut pharetra. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Porttitor rhoncus dolor purus non enim. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Augue ut lectus arcu bibendum. Lectus proin nibh nisl condimentum id.\n',
    NULL,
    '2021-01-23 23:56:52.289'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'EXTINGUISH!',
    'Trap Card card\n\n\n(This card is always treated as a "Rescue-ACE" card.)\nIf you control a "Rescue-ACE" monster: Target 1 Effect Monster your opponent controls; destroy it, then, if you currently control "Rescue-ACE Hydrant", your opponent cannot activate the effects of that destroyed monster, or of monsters with its same original name, this turn.',
    'https://images.ygoprodeck.com/images/cards/99162522.jpg',
    '2021-08-27 15:07:04.715'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'magmar',
    'Pokemon  fire',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png',
    '2021-06-06 18:59:34.815'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris has a .50 BMG Derringer.',
    'https://picsum.photos/518/670',
    '2022-12-05 14:02:40.936'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Prank-Kids Bow-Wow-Bark',
    'Link Monster card\n\nPyro\nATK 2000 / DEF undefined\nLevel undefined\n\n2 "Prank-Kids" monsters\nA "Prank-Kids" monster this card points to gains 1000 ATK. During your opponent''s turn (Quick Effect): You can Tribute this card, then target 2 "Prank-Kids" cards with different names in your GY, except Link Monsters; add them to your hand, also "Prank-Kids" monsters you control cannot be destroyed by your opponent''s card effects this turn. You can only use this effect of "Prank-Kids Bow-Wow-Bark" once per turn.',
    'https://images.ygoprodeck.com/images/cards/43886072.jpg',
    '2021-03-13 16:19:03.136'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Consectetur a erat nam at lectus. Amet justo donec',
    'Volutpat consequat mauris nunc congue. Sollicitudin ac orci phasellus egestas tellus. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Massa tempor nec feugiat nisl pretium fusce id. Amet purus gravida quis blandit turpis cursus in hac. Neque ornare aenean euismod elementum nisi quis eleifend. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Elit at imperdiet dui accumsan sit amet. Etiam erat velit scelerisque in dictum non consectetur a erat. Lacus vestibulum sed arcu non odio euismod lacinia. Ultrices eros in cursus turpis. Nibh nisl condimentum id venenatis a condimentum. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus.\nSemper auctor neque vitae tempus quam pellentesque nec nam. Turpis egestas maecenas pharetra convallis posuere morbi. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. In cursus turpis massa tincidunt dui. Gravida neque convallis a cras semper auctor neque vitae tempus. Dui faucibus in ornare quam viverra. Consequat nisl vel pretium lectus quam id leo in vitae. Eget est lorem ipsum dolor sit amet. Enim facilisis gravida neque convallis a cras semper auctor. Non arcu risus quis varius quam quisque id diam. Enim praesent elementum facilisis leo vel fringilla est. Elementum sagittis vitae et leo duis ut diam quam. Nisi lacus sed viverra tellus. Id aliquet lectus proin nibh nisl condimentum id. Egestas sed sed risus pretium quam vulputate dignissim.\n',
    NULL,
    '2023-01-14 12:54:25.015'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'What Is It?',
    'What is round, weightless and you can put it in a barrel?\n\n\n\n\nA Hole',
    'https://picsum.photos/513/299',
    '2020-01-23 06:33:18.117'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Mi eget mauris pharetra et ultrices neque. Nunc no',
    'Mi eget mauris pharetra et ultrices neque. Nunc non blandit massa enim nec. Velit scelerisque in dictum non consectetur a. Enim sed faucibus turpis in eu mi bibendum neque. In egestas erat imperdiet sed. Ac auctor augue mauris augue neque gravida in fermentum. Vitae congue eu consequat ac felis donec. Feugiat sed lectus vestibulum mattis. Nibh venenatis cras sed felis eget velit aliquet. Mauris sit amet massa vitae tortor condimentum lacinia quis. Orci sagittis eu volutpat odio facilisis mauris sit amet. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Purus viverra accumsan in nisl. Consequat semper viverra nam libero justo laoreet sit amet. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Nec dui nunc mattis enim ut tellus elementum. Quis auctor elit sed vulputate mi sit. Feugiat nibh sed pulvinar proin gravida.\nNisl pretium fusce id velit ut tortor pretium viverra. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Volutpat diam ut venenatis tellus in metus. Commodo viverra maecenas accumsan lacus. Elit at imperdiet dui accumsan sit amet nulla facilisi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Eu scelerisque felis imperdiet proin. Arcu bibendum at varius vel pharetra vel turpis nunc. Orci a scelerisque purus semper eget. Elementum sagittis vitae et leo duis ut diam.\n',
    'https://picsum.photos/256/508',
    '2020-02-24 20:45:52.624'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Doomking Balerdroch',
    'Effect Monster card\n\nZombie\nATK 2800 / DEF 2000\nLevel 8\n\nDuring the Standby Phase, if a face-up card is in a Field Zone and this card is in your GY: You can Special Summon this card in Defense Position. You can only use this effect of "Doomking Balerdroch" once per turn. Once per Chain, when a Zombie monster, except "Doomking Balerdroch", activates its effect (except during the Damage Step) (Quick Effect): You can apply 1 of these effects (but you cannot apply that same effect of "Doomking Balerdroch" again this turn).\n● Negate that effect. ● Banish 1 monster from the field or GY.',
    'https://images.ygoprodeck.com/images/cards/39185163.jpg',
    '2021-01-20 18:07:48.165'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ekans',
    'Pokemon  poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png',
    '2022-11-12 06:07:21.349'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Superstition if a woman sees a robin Valentines day marry who\n\n\n\n\nSailor',
    'https://picsum.photos/444/347',
    '2021-07-22 06:18:46.688'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Phantasm Spiral Grip',
    'Spell Card card\n\n\nEquip only to a Normal Monster. It gains 500 ATK. When the equipped monster destroys an opponent''s monster by battle: You can Special Summon 1 "Phantasm Spiral Dragon" from your hand, Deck, or Graveyard, and equip it with this card, then inflict 1000 damage to your opponent. You can only use this effect of "Phantasm Spiral Grip" once per turn.',
    'https://images.ygoprodeck.com/images/cards/75702749.jpg',
    '2023-04-25 17:39:41.896'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris is the best in the West. He also has the North, East and South totally covered.',
    NULL,
    '2021-07-20 01:18:01.674'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Holes',
    'What can hold water even though it has holes\n\n\n\n\na sponge',
    'https://picsum.photos/500/405',
    '2022-01-20 06:13:10.901'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'It really takes guts to be an organ donor.',
    NULL,
    '2022-10-13 16:28:18.563'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Sed sed risus pretium quam vulputate dignissim sus',
    'Nibh nisl condimentum id venenatis a condimentum vitae sapien. Laoreet sit amet cursus sit. Commodo ullamcorper a lacus vestibulum sed arcu. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Pharetra convallis posuere morbi leo urna. Id volutpat lacus laoreet non curabitur gravida arcu ac. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Lorem mollis aliquam ut porttitor. A arcu cursus vitae congue. Nisl purus in mollis nunc sed id semper. Convallis a cras semper auctor neque. Lectus arcu bibendum at varius. Facilisis sed odio morbi quis commodo odio aenean sed. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Vel orci porta non pulvinar neque laoreet suspendisse. Feugiat nisl pretium fusce id. Adipiscing bibendum est ultricies integer quis auctor.\nAliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Quis vel eros donec ac odio tempor orci. Augue eget arcu dictum varius duis at consectetur lorem donec. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Duis at tellus at urna condimentum mattis pellentesque id nibh. Sed nisi lacus sed viverra tellus. Tortor aliquam nulla facilisi cras fermentum odio eu. Vulputate mi sit amet mauris commodo quis imperdiet massa. Vulputate enim nulla aliquet porttitor lacus luctus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Venenatis tellus in metus vulputate eu. Neque sodales ut etiam sit amet. Id interdum velit laoreet id donec ultrices tincidunt arcu. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Viverra vitae congue eu consequat ac. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Volutpat diam ut venenatis tellus in metus vulputate eu. Nibh tellus molestie nunc non.\n',
    NULL,
    '2021-06-18 03:07:31.495'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I ordered a chicken and an egg online. I''ll let you know.',
    'https://picsum.photos/545/506',
    '2020-06-10 06:17:35.614'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Into the Void',
    'Spell Card card\n\n\nIf you have 3 or more cards in your hand: Draw 1 card, and if you do, during the End Phase of this turn, discard your entire hand.',
    'https://images.ygoprodeck.com/images/cards/93946239.jpg',
    '2023-06-04 08:27:49.922'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Judd Gregg',
    'I think, like everybody else in New Hampshire, when I pull up to fill up my car and I pay $50, I get upset. And I''m wondering if these prices are legitimate.',
    NULL,
    '2022-08-31 05:40:24.136'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Mysterious Triangle',
    'Spell Card card\n\n\nDestroy 1 monster on the field with an A-Counter. Then, you can Special Summon 1 Level 4 "Alien" monster from your Deck. Destroy it during the End Phase.',
    'https://images.ygoprodeck.com/images/cards/53291093.jpg',
    '2020-11-25 23:31:59.863'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Winston Churchill',
    'We shape our buildings thereafter they shape us.',
    'https://picsum.photos/648/445',
    '2019-12-26 23:06:59.484'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'The Forceful Sentry',
    'Spell Card card\n\n\nLook at your opponent''s hand. Select 1 card among them and return it to his/her Deck. The Deck is then shuffled.',
    'https://images.ygoprodeck.com/images/cards/42829885.jpg',
    '2020-06-15 15:29:22.400'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Ut eu sem integer vitae justo eget magna. Praesent',
    'Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Lacinia at quis risus sed. Velit egestas dui id ornare arcu odio ut sem nulla. Lacus vestibulum sed arcu non odio euismod lacinia. Imperdiet nulla malesuada pellentesque elit. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt. Adipiscing bibendum est ultricies integer quis auctor elit.\nTincidunt vitae semper quis lectus. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Convallis aenean et tortor at risus viverra adipiscing at in. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Massa eget egestas purus viverra accumsan in nisl nisi. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Posuere sollicitudin aliquam ultrices sagittis. Dolor purus non enim praesent elementum. Diam in arcu cursus euismod quis viverra nibh. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Dolor sed viverra ipsum nunc aliquet bibendum. Integer quis auctor elit sed vulputate mi. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Dui sapien eget mi proin sed libero enim sed. Neque sodales ut etiam sit amet nisl purus in.\nMauris commodo quis imperdiet massa tincidunt nunc pulvinar. Arcu felis bibendum ut tristique et egestas. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Quisque sagittis purus sit amet volutpat consequat mauris. Mattis vulputate enim nulla aliquet porttitor. Sit amet facilisis magna etiam tempor orci eu lobortis. Erat nam at lectus urna duis convallis convallis. Sit amet est placerat in. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Amet justo donec enim diam vulputate ut. Adipiscing vitae proin sagittis nisl rhoncus mattis. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Felis imperdiet proin fermentum leo vel orci porta. Consequat ac felis donec et odio pellentesque.\n',
    'https://picsum.photos/448/562',
    '2023-08-04 03:53:54.814'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Link into the VRAINS!',
    'Spell Card card\n\n\nSpecial Summon 1 monster from your hand, but negate its effects, then, immediately after this effect resolves, Link Summon 1 Link Monster using monsters you control as material, including that monster. This Link Summon cannot be negated, also your opponent cannot activate cards or effects when a monster is Link Summoned this way. If a Link Monster(s) you control is destroyed by battle or card effect while this card is in your GY: You can banish this card; add 1 monster from your GY to your hand with the same original Type as 1 of those destroyed monsters. You can only activate 1 "Link into the VRAINS!" per turn.',
    'https://images.ygoprodeck.com/images/cards/28827503.jpg',
    '2021-12-11 06:26:08.398'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'pidgey',
    'Pokemon  normal flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
    '2022-05-20 20:22:59.688'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris was once asked in an interview what he thought about all the Chuck Norris jokes going around. He simply said "They aren''t jokes" and went back to drinking his mug of nails.',
    NULL,
    '2021-09-07 15:44:27.247'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Unreachable',
    'I come in darkness, but fill the mind with light. I bring enlightenment to some, while gripping others in the hand of fear. With me it can be a journey of inexplicable joy and sorrow. What I will show you will often be unreachable. Journey with me and what you see may haunt you. Journey with me and you may never want to return home. Journey with me and you will never know when it will end. What am I?\n\n\n\n\nYour dreams.',
    NULL,
    '2020-01-24 18:06:15.323'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris can spawn threads that complete before they are started.',
    NULL,
    '2021-09-18 12:28:38.385'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Rachel Dratch',
    'I have no wisdom to share on dating.',
    NULL,
    '2022-05-14 08:31:49.675'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Riddle Me This #3',
    'Round like an apple, Deep like a cup, Yet all the king''s horses Cannot pull it up.\n\n\n\n\na Well.',
    'https://picsum.photos/582/462',
    '2020-02-28 21:17:40.323'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'After its humiliating failure to circumsize a young Chuck Norris, Hurst Performance made a fortune marketing the Jaws of Life to fire departments.',
    'https://picsum.photos/697/592',
    '2022-11-27 14:01:30.980'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Cat Cora',
    'I think the biggest thing is clean as you go. Wash all your knives, cutting boards, dishes, when you are done cooking, not look at a sink full of dishes after you are done. Cleaning as you go helps keep away cross contamination and you avoid having food borne bacteria.',
    NULL,
    '2022-06-25 09:20:51.556'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Members',
    'famiely member''s make them  other people break them\n\n\n\n\npromises',
    NULL,
    '2022-11-14 00:13:42.934'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Who What Where Whose??',
    'Whatam I????I am small, a cute one, and a great one.what am i??\n\n\n\n\na cute,a small,and a great pokemon!!',
    NULL,
    '2019-12-11 23:55:56.760'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'D - Tactics',
    'Trap Card card\n\n\nDuring the Standby Phase: You can have all "HERO" monsters you control gain 400 ATK (even if this card leaves the field). If a Level 8 or higher "Destiny HERO" monster(s) or a "Destiny End Dragoon" is Special Summoned to your field (except during the Damage Step): You can banish 1 card from your opponent''s hand (random), field, or GY. If this card in the Spell & Trap Zone is destroyed by card effect: You can add 1 "Destiny HERO" monster from your Deck to your hand. You can only use each effect of "D - Tactics" once per turn.',
    'https://images.ygoprodeck.com/images/cards/48032131.jpg',
    '2022-05-10 01:45:00.756'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Sanwitch',
    'Fusion Monster card\n\nSpellcaster\nATK 2100 / DEF 1800\nLevel 6\n\n"Sangan" + "Witch of the Black Forest"',
    'https://images.ygoprodeck.com/images/cards/53539634.jpg',
    '2022-10-17 15:25:04.660'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Justice is a dish best served cold. If it were served warm, it would be justwater.',
    NULL,
    '2022-04-29 03:34:52.997'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'In France,"haricot vert" is the term used for which of these vegetables?\n\n\n\n\nGreen Bean',
    NULL,
    '2020-11-12 05:35:55.229'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What has five toes and isn''t your foot? My foot.',
    'https://picsum.photos/377/201',
    '2023-04-30 15:29:12.586'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'VWXYZ-Dragon Catapult Cannon',
    'Fusion Monster card\n\nMachine\nATK 3000 / DEF 2800\nLevel 8\n\n"VW-Tiger Catapult" + "XYZ-Dragon Cannon"\nMust first be Special Summoned (from your Extra Deck) by banishing the above cards you control. (You do not use "Polymerization".) Once per turn: You can target 1 card your opponent controls; banish that target. When this card declares an attack on an opponent''s monster: You can target the attack target; change that attack target''s battle position. (Flip Effects are not activated.)',
    'https://images.ygoprodeck.com/images/cards/84243274.jpg',
    '2023-04-29 16:48:50.724'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'According to Homer Simpson what is a feline\n\n\n\n\nAn Elephant',
    NULL,
    '2022-02-10 10:33:33.225'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    ' __________ gather in groups to sleep through the winter. Sometimes up to 1,000 of them will coil up together to keep warm.\n\n\n\n\nRattlesnakes',
    NULL,
    '2020-12-06 01:44:17.506'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What''s parts include barbican, oilette and donjon\n\n\n\n\na Castle',
    'https://picsum.photos/317/551',
    '2022-03-06 14:41:07.073'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Sarah Michelle Gellar',
    'Everything I am is because of my mom.',
    NULL,
    '2023-09-08 00:46:53.054'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Janet Evanovich',
    'I think that some books are more successful than others to certain readers. People who read my books for the humor, they''re going to love one book. People who read my books for the mystery, they might not like that book quite as much.',
    NULL,
    '2022-03-16 16:36:29.380'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Fengli the Soldrapom',
    'Tuner Monster card\n\nPlant\nATK 800 / DEF 0\nLevel 1\n\nIf this card is sent from the Deck to your GY by a monster effect: You can Special Summon this card, then, if you control another Plant monster, you can halve the ATK/DEF of 1 monster on the field. You can only use this effect of "Fengli the Soldrapom" once per turn. Once per turn, if this card on the field would be destroyed by battle or card effect, you can send 1 Plant monster from your Deck to the GY instead.',
    'https://images.ygoprodeck.com/images/cards/35311929.jpg',
    '2023-07-10 19:14:46.977'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What is the largest moon of Saturn called\n\n\n\n\nTitan',
    NULL,
    '2023-03-12 13:12:01.284'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris once won American idle by riding a unicycle',
    NULL,
    '2021-11-07 00:42:33.130'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Whats The Moral??',
    'it was the first day of school, and a little boy named tim was going to pre-school. on the first day, his teacher said to the class, "who can tell me where joobalanga is on the map? how about you, tim?" and tim said, "i dont know where joobalonga is..." the teacher said, "WHAT???" and threw him out of class to the principals office. when tim got to the principals office, the principal asked, "why are you here on the first day of pre-school?" tim replied, "i didnt know where joobalonga was." then the principal said, "WHAT???" and called his mom to pick him up. when his mom came to the school, she was really angry at the school because they kicked out a pre-schooler. tim and his mom got into the car and were driving home when his mom asked, "why on earth did you get kicked out of school?" and tim answered, "all i said was that i didnt know where joobalonga was on the map..." then his mom said, "WHAT???" and kicked tim out of the car and into the street. tim was very sad and didnt know where to go, so he just walked along the crosswalk. on his way, he met a police officer. the police officer said, "why arent you in school or at home, little boy?" and tim said, "well, i got kicked out of everywhere because i didnt know where joobalonga was." the police officer said, "WHAT???" and threw tim across the street. tim picked himself up and happened to look up when he saw a sign that said "JOOBALONGA" now he got really excited and ran across the street to go see joobalonga when a speeding car ran over him.  now....whats the moral of the story?\n\n\n\n\nlook both ways before crossing the street (and thanks for reading the looong riddle...but it was worth it, right?)',
    NULL,
    '2022-01-24 22:19:49.374'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'When life gives Chuck Norris lemons, HE SQUIRTS THE LEMON JUICE IN HIS EYES AND RUNS RAMPANT ON LIFE''S ASS!!',
    'https://picsum.photos/570/592',
    '2022-08-26 06:04:12.821'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Chuck Palahniuk',
    'When did the future switch from being a promise to a threat?',
    NULL,
    '2020-09-24 11:26:55.530'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Kelly Clarkson',
    'I put on the Hank Williams and the Patsy Cline and the Rosemary Clooney on vinyl - I''m not trying to be some cool indie-rock person, I just love the way it sounds - and throw on a T-shirt and jeans. In Texas, we practically come out of the womb in jeans.',
    'https://picsum.photos/675/618',
    '2020-07-22 16:25:49.671'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Elizabeth Hardwick',
    'The greatest gift is a passion for reading. It is cheap, it consoles, it distracts, it excites, it gives you knowledge of the world and experience of a wide kind. It is a moral illumination.',
    'https://picsum.photos/310/291',
    '2022-04-30 15:35:50.541'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Vel turpis nunc eget lorem dolor sed viverra ipsum',
    'Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Consequat semper viverra nam libero justo laoreet sit amet cursus. Morbi quis commodo odio aenean. Ut sem nulla pharetra diam. Gravida cum sociis natoque penatibus et magnis. Eu sem integer vitae justo. Amet dictum sit amet justo donec enim diam vulputate ut. Eu consequat ac felis donec et. Sed vulputate odio ut enim. Vitae aliquet nec ullamcorper sit amet risus nullam.\nPurus semper eget duis at tellus at urna condimentum. Amet justo donec enim diam vulputate ut pharetra sit. Pretium lectus quam id leo in vitae turpis massa sed. Feugiat nibh sed pulvinar proin gravida. Eget velit aliquet sagittis id. Nisl pretium fusce id velit. Imperdiet proin fermentum leo vel orci porta non pulvinar. Proin gravida hendrerit lectus a. Nibh tortor id aliquet lectus. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Amet est placerat in egestas erat imperdiet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Eu tincidunt tortor aliquam nulla facilisi cras. Tellus at urna condimentum mattis pellentesque. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Eu sem integer vitae justo. Tempor orci eu lobortis elementum nibh tellus molestie nunc non.\nViverra aliquet eget sit amet tellus. Adipiscing at in tellus integer feugiat scelerisque. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Mauris ultrices eros in cursus. Dolor purus non enim praesent. Quam viverra orci sagittis eu volutpat. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Lobortis feugiat vivamus at augue. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Sed sed risus pretium quam. Integer malesuada nunc vel risus. Egestas congue quisque egestas diam in arcu. Elementum nibh tellus molestie nunc non blandit massa enim nec.\n',
    'https://picsum.photos/620/120',
    '2021-07-06 13:47:40.445'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'The koala eats the leaves from this tree\n\n\n\n\nEucalyptus',
    NULL,
    '2023-08-26 18:30:05.744'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Secret Six Samurai - Rihan',
    'Fusion Monster card\n\nWarrior\nATK 2400 / DEF 2400\nLevel 5\n\n3 "Six Samurai" monsters with different Attributes\nMust first be Special Summoned (from your Extra Deck) by sending the above cards you control to the GY. (You do not use "Polymerization".) Cannot be used as Fusion Material. Once per turn: You can banish 1 "Six Samurai" card from your hand or face-up from your field, then target 1 card on the field; banish it. If a "Six Samurai" monster(s) you control would be destroyed by battle or card effect, you can banish this card from your GY instead.',
    'https://images.ygoprodeck.com/images/cards/33964637.jpg',
    '2023-05-21 21:04:37.824'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Henri Frederic Amiel',
    'The man who has no inner-life is a slave to his surroundings.',
    NULL,
    '2020-01-30 10:06:37.296'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Where do pirates get their hooks? Second hand stores.',
    NULL,
    '2023-04-22 12:15:37.142'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'In the 70s The Bahamas gained independence from who\n\n\n\n\nGreat Britain',
    'https://picsum.photos/336/380',
    '2022-08-13 21:30:40.801'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Emma Goldman',
    'Anarchism is the great liberator of man from the phantoms that have held him captive it is the arbiter and pacifier of the two forces for individual and social harmony.',
    NULL,
    '2019-12-19 18:35:58.536'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Risus sed vulputate odio ut enim blandit volutpat.',
    'Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Sit amet nulla facilisi morbi tempus. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Sodales neque sodales ut etiam sit amet nisl purus. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Nisi lacus sed viverra tellus in hac habitasse. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Tincidunt eget nullam non nisi. Cursus risus at ultrices mi. Volutpat est velit egestas dui id ornare. Sagittis nisl rhoncus mattis rhoncus. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Fermentum leo vel orci porta non pulvinar neque. Quisque sagittis purus sit amet volutpat. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Porttitor massa id neque aliquam vestibulum morbi blandit. At quis risus sed vulputate odio. Nisi vitae suscipit tellus mauris a diam maecenas sed enim.\nAliquam sem fringilla ut morbi tincidunt augue interdum velit. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Tristique senectus et netus et malesuada fames ac. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut. Eros in cursus turpis massa tincidunt. Purus viverra accumsan in nisl nisi scelerisque eu. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Nam aliquam sem et tortor. Sit amet purus gravida quis blandit turpis. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Amet massa vitae tortor condimentum.\nConsectetur a erat nam at lectus. Amet justo donec enim diam vulputate ut pharetra. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Porttitor rhoncus dolor purus non enim. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Augue ut lectus arcu bibendum. Lectus proin nibh nisl condimentum id.\n',
    NULL,
    '2019-12-07 05:44:08.935'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Number 30: Acid Golem of Destruction',
    'XYZ Monster card\n\nRock\nATK 3000 / DEF 3000\nLevel 3\n\n2 Level 3 monsters\nDuring your Standby Phase: Detach 1 Xyz Material from this card or take 2000 damage. You cannot Special Summon any monsters. While this card has no Xyz Materials, it cannot attack.',
    'https://images.ygoprodeck.com/images/cards/81330115.jpg',
    '2023-11-12 01:47:45.388'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'By Olympic rules what must have 14 feathers\n\n\n\n\nBadminton Bird',
    NULL,
    '2020-06-03 19:14:28.558'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Never date a tennis player. Love means nothing to them.',
    NULL,
    '2023-08-02 21:34:41.563'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Easy Cheesie Version Of "colorful Name',
    'my mom and dads name are red and blue. Whats Mine?\n\n\n\n\nPurple',
    NULL,
    '2020-10-12 13:12:07.574'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Going To The Fair',
    'As I was going to the fair, I saw a man with golden hair. He had 3 sons each with another one. How many people were going to the fair?\n\n\n\n\nOne. Just me because I met the others on the way to the fair',
    'https://picsum.photos/442/532',
    '2021-12-02 20:08:38.396'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'squirtle',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    '2023-08-13 21:26:44.574'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What Instrument Do You Associate With "Yehudi Menuhin"\n\n\n\n\nViolin',
    NULL,
    '2020-12-08 13:57:40.795'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I tried to start a professional hide and seek team, but it didn''t work out. Turns out, good players are hard to find.',
    NULL,
    '2020-05-06 04:27:37.671'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'The difference between a numerator and a denominator is a short line. Only a fraction of people will understand this.',
    'https://picsum.photos/379/693',
    '2020-01-23 03:24:23.177'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Which 3 Bands Has Johnny Marr Been Associated With (PFE)\n\n\n\n\nThe Smiths, The The, Electronic',
    'https://picsum.photos/465/345',
    '2019-12-30 10:03:56.851'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris knows when to hold ''em, knows when to fold ''em... and knows when to kick the table over and blow away every asshole in the room.',
    'https://picsum.photos/452/265',
    '2021-09-12 23:51:58.370'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Ricky Schroder',
    'There are going to be peaks and valleys in everything - in your marriage, in your job, in your life. So just enjoy the peaks and ride out the valleys. Just try not to do anything too rash.',
    'https://picsum.photos/632/474',
    '2020-04-07 06:15:20.212'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dead Man Walking',
    'One day a man just came home in the morning from the bar last night and he turns on all the lights in his house and reads the newspaper. The newspaper rads; "Last night a boat has crashed and killed hundreds of people." This shocked the man and he pulls out a gun and shoots himself. Why does the man shoot himself?\n\n\n\n\nBecause he lives in a lighthouse and he just now turns on all the lights which means he didn''t have them on last night at the bar.',
    'https://picsum.photos/482/499',
    '2019-12-19 15:31:35.918'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Purus semper eget duis at tellus at urna condiment',
    'Lorem sed risus ultricies tristique nulla aliquet enim. Curabitur vitae nunc sed velit. Vel elit scelerisque mauris pellentesque pulvinar. Viverra nibh cras pulvinar mattis nunc sed blandit. Pellentesque pulvinar pellentesque habitant morbi. Elementum sagittis vitae et leo. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Senectus et netus et malesuada. Varius vel pharetra vel turpis nunc. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Quam elementum pulvinar etiam non quam.\n',
    NULL,
    '2022-05-12 07:52:50.241'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Patsy Mclenny became famous as who\n\n\n\n\nMorgan Fairchild',
    NULL,
    '2021-09-09 01:17:32.989'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'In which country is the largest active volcano in the world?\n\n\n\n\nEcuador',
    NULL,
    '2021-03-24 06:10:06.574'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Jesse Jackson',
    'At the end of the day, we must go forward with hope and not backward by fear and division.',
    'https://picsum.photos/424/423',
    '2021-03-14 09:31:47.578'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'pidgeotto',
    'Pokemon  normal flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
    '2020-08-11 05:53:41.621'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Iron Hans',
    'Effect Monster card\n\nWarrior\nATK 1200 / DEF 800\nLevel 4\n\nIf this card is Summoned: You can Special Summon 1 "Iron Knight" from your Deck, also if "Golden Castle of Stromberg" is not in a Field Zone when this effect resolves, you cannot Special Summon monsters from the Extra Deck for the rest of this turn. You can only use this effect of "Iron Hans" once per turn. Gains 1000 ATK for each "Iron Knight" you control, while "Golden Castle of Stromberg" is in a Field Zone.',
    'https://images.ygoprodeck.com/images/cards/41916534.jpg',
    '2021-09-18 16:18:32.946'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Tincidunt vitae semper quis lectus. Consectetur ad',
    'Nec feugiat nisl pretium fusce id velit. Aliquam ut porttitor leo a diam sollicitudin tempor. Elementum eu facilisis sed odio morbi quis. Aliquet nec ullamcorper sit amet risus nullam. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Diam volutpat commodo sed egestas. Et leo duis ut diam quam nulla porttitor massa id. Justo laoreet sit amet cursus sit. Id aliquet lectus proin nibh. Pretium fusce id velit ut tortor pretium viverra. Enim lobortis scelerisque fermentum dui. Id diam vel quam elementum. Ultrices sagittis orci a scelerisque purus semper eget duis. Pretium viverra suspendisse potenti nullam. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Vel quam elementum pulvinar etiam non quam lacus suspendisse.\nPurus in mollis nunc sed id semper. Suspendisse faucibus interdum posuere lorem ipsum. Dictum non consectetur a erat. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. In nibh mauris cursus mattis molestie a iaculis at erat. Velit aliquet sagittis id consectetur purus ut faucibus. Lorem dolor sed viverra ipsum. Facilisis gravida neque convallis a cras. Adipiscing vitae proin sagittis nisl rhoncus. Odio eu feugiat pretium nibh ipsum. Sit amet nulla facilisi morbi. Viverra mauris in aliquam sem. Vitae justo eget magna fermentum. Ultrices dui sapien eget mi proin sed libero. Convallis a cras semper auctor neque vitae tempus quam. Netus et malesuada fames ac turpis egestas. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Suspendisse potenti nullam ac tortor vitae.\nPraesent semper feugiat nibh sed pulvinar proin. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Urna molestie at elementum eu facilisis sed odio morbi quis. Adipiscing commodo elit at imperdiet dui accumsan. Ac felis donec et odio pellentesque diam. Sapien pellentesque habitant morbi tristique senectus et netus et. Interdum velit euismod in pellentesque massa placerat. Id diam maecenas ultricies mi eget mauris pharetra et. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Ultricies tristique nulla aliquet enim tortor. Non curabitur gravida arcu ac. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus.\nEget felis eget nunc lobortis mattis aliquam faucibus purus. Ipsum dolor sit amet consectetur adipiscing elit. Purus in mollis nunc sed id semper. Imperdiet sed euismod nisi porta lorem mollis aliquam. Auctor neque vitae tempus quam. Vitae tempus quam pellentesque nec. Auctor augue mauris augue neque. Mattis aliquam faucibus purus in massa tempor nec feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Massa enim nec dui nunc mattis enim. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Elementum facilisis leo vel fringilla est ullamcorper eget nulla.\n',
    NULL,
    '2021-06-22 01:04:40.892'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Cuirass, greave and pauldron are all pieces belonging to what\n\n\n\n\nArmour',
    NULL,
    '2022-07-11 04:41:19.649'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Trick Riddle',
    'What your eyes think is there actually is not, but the magical image is hidden within the "plot." What is it?\n\n\n\n\nAn optical illusion.',
    NULL,
    '2023-01-07 19:57:59.582'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'In dry measure 16 pints make up a what\n\n\n\n\nPeck',
    NULL,
    '2023-02-02 19:38:48.855'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chicken Riddle',
    'Why did the chicken did not cross the road?\n\n\n\n\nBecause there are too many ZEBRA CROSSING',
    NULL,
    '2022-05-08 23:43:35.080'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris says, ''if life gives you lemons, punch it in the nuts until it doesn''t.''',
    'https://picsum.photos/462/318',
    '2022-02-02 12:07:10.128'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'muk',
    'Pokemon  poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png',
    '2021-03-03 01:21:06.312'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Gene Tierney',
    'Those who become mentally ill often have a history of chronic pain.',
    NULL,
    '2021-01-05 06:12:00.439'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Ac auctor augue mauris augue neque gravida in ferm',
    'Nec feugiat nisl pretium fusce id velit. Aliquam ut porttitor leo a diam sollicitudin tempor. Elementum eu facilisis sed odio morbi quis. Aliquet nec ullamcorper sit amet risus nullam. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Diam volutpat commodo sed egestas. Et leo duis ut diam quam nulla porttitor massa id. Justo laoreet sit amet cursus sit. Id aliquet lectus proin nibh. Pretium fusce id velit ut tortor pretium viverra. Enim lobortis scelerisque fermentum dui. Id diam vel quam elementum. Ultrices sagittis orci a scelerisque purus semper eget duis. Pretium viverra suspendisse potenti nullam. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Vel quam elementum pulvinar etiam non quam lacus suspendisse.\n',
    NULL,
    '2021-07-30 03:43:06.872'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'A Chuck Norris roundhouse kick delivered with precision accuracy to the base of your skull will cause your face to blister, putrify and later slide off the front of your head.',
    NULL,
    '2021-10-31 21:29:50.432'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Aliens do exist. They''re just waiting for Chuck Norris to die before they attack.',
    'https://picsum.photos/477/446',
    '2023-01-26 16:45:42.802'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Before becoming a famous actor,who won a televised contest naming him "America''s Toughest Bouncer"?\n\n\n\n\nMr. t',
    'https://picsum.photos/304/500',
    '2021-09-01 19:34:55.895'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'At 1.98 millimeters thick, which of these U.S. coins is the thickest?\n\n\n\n\nNickel',
    NULL,
    '2021-03-28 10:59:33.463'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris is a safety issue',
    'https://picsum.photos/268/583',
    '2023-04-30 12:55:33.574'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Fire Ejection',
    'Spell Card card\n\n\nSend 1 Pyro monster from your Deck to the GY, then, if you sent a "Volcanic" monster to the GY, you can apply 1 of these effects.\n● Inflict damage to your opponent equal to its Level x 100.\n● Special Summon 1 "Bomb Token" (Pyro/FIRE/Level 1/ATK 1000/DEF 1000) to your opponent''s field. Each time 1 is destroyed, its controller takes 500 damage.\nYou can only activate 1 "Fire Ejection" per turn.',
    'https://images.ygoprodeck.com/images/cards/11654067.jpg',
    '2023-04-16 07:29:02.166'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Seven',
    'How do you make seven, even?\n\n\n\n\nYou take away the S',
    'https://picsum.photos/695/111',
    '2021-04-13 10:09:17.795'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Why Is Life Like A Shower',
    'Why is life so much like a shower?\n\n\n\n\nBecause one wrong turn and your in hot water',
    NULL,
    '2020-06-11 16:41:17.384'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Richey Edwards Who Is Missing Presumed Dead Played In Which Band\n\n\n\n\nMarseilles',
    'https://picsum.photos/203/364',
    '2020-01-29 12:37:19.014'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Magikey Duo',
    'Trap Card card\n\n\nYou can target 1 Normal Monster or 1 "Magikey" monster in your GY; add it to your hand, then you can apply 1 of these effects.\n● Fusion Summon 1 "Magikey" Fusion Monster from your Extra Deck in Defense Position, using monsters from your hand or field as Fusion Material.\n● Ritual Summon 1 "Magikey" Ritual Monster from your hand in Defense Position, by Tributing monsters from your hand or field whose total Levels equal or exceed its Level.',
    'https://images.ygoprodeck.com/images/cards/51510279.jpg',
    '2020-06-20 12:45:42.004'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'I Pulled Down Your Pants!',
    'gnjhr.\n\n\n\n\ntrhrthrt.Ha! I fooled you!This is a fake riddle. You will see more of me soon!',
    NULL,
    '2020-12-05 23:26:07.442'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Loretta Young',
    'I can''t imagine dating a boy, meeting him only outside the home. What''s a home and family for if it''s not the center of one''s life?',
    'https://picsum.photos/480/458',
    '2023-10-07 15:09:07.902'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Janice Dickinson',
    'Follow sound business trends, not fashion trends.',
    NULL,
    '2020-04-14 15:55:48.447'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'When Chuck Norris smiles, someone dies. When he''s smiling while roundhouse kicking someone, then two people die.',
    NULL,
    '2021-12-14 22:19:44.611'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'pidgey',
    'Pokemon  normal flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
    '2020-01-10 10:00:52.000'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Mordschlag',
    'Spell Card card\n\n\nEquip only to a Normal Summoned/Set monster you control. It is unaffected by your opponent''s activated effects of Special Summoned monsters. During damage calculation, if the equipped monster battles an opponent''s Special Summoned monster: That opponent''s monster loses ATK/DEF equal to the equipped monster''s original ATK, during that damage calculation only.',
    'https://images.ygoprodeck.com/images/cards/12760674.jpg',
    '2021-11-03 01:40:05.320'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Cynet Cascade',
    'Trap Card card\n\n\nIf you Link Summon a Link Monster: You can target 1 monster in your GY used as its material; Special Summon it.',
    'https://images.ygoprodeck.com/images/cards/4433488.jpg',
    '2023-07-24 12:01:17.617'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris once dug a hole all the way to the moon.',
    NULL,
    '2021-12-02 15:41:37.046'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What is Super Chicken''s partners name\n\n\n\n\nFred',
    'https://picsum.photos/282/300',
    '2020-05-14 21:53:05.430'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dignissim convallis aenean et tortor at risus vive',
    'Posuere ac ut consequat semper viverra. Viverra vitae congue eu consequat. Enim nunc faucibus a pellentesque. Urna cursus eget nunc scelerisque. Eu augue ut lectus arcu bibendum at varius vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Sed enim ut sem viverra. Sed enim ut sem viverra aliquet eget sit amet. Molestie nunc non blandit massa enim nec. Et molestie ac feugiat sed lectus. Lacinia quis vel eros donec ac odio tempor orci. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Orci sagittis eu volutpat odio facilisis. Est ullamcorper eget nulla facilisi etiam. Nibh sit amet commodo nulla facilisi nullam. Egestas diam in arcu cursus euismod quis viverra. Luctus accumsan tortor posuere ac ut consequat semper viverra. Tristique risus nec feugiat in fermentum posuere. Facilisi cras fermentum odio eu. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo.\nLectus urna duis convallis convallis tellus id interdum. Porttitor leo a diam sollicitudin tempor id eu. Sit amet aliquam id diam maecenas. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Fermentum odio eu feugiat pretium nibh ipsum consequat. Purus semper eget duis at tellus at. Arcu bibendum at varius vel pharetra vel turpis. Suscipit tellus mauris a diam maecenas sed enim. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Faucibus interdum posuere lorem ipsum. Turpis massa tincidunt dui ut ornare lectus sit amet est. Egestas maecenas pharetra convallis posuere morbi leo. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Amet venenatis urna cursus eget nunc scelerisque. Hac habitasse platea dictumst quisque sagittis purus sit. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Non blandit massa enim nec dui. Mus mauris vitae ultricies leo integer malesuada. Sed felis eget velit aliquet sagittis id consectetur.\nAliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Quis vel eros donec ac odio tempor orci. Augue eget arcu dictum varius duis at consectetur lorem donec. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Duis at tellus at urna condimentum mattis pellentesque id nibh. Sed nisi lacus sed viverra tellus. Tortor aliquam nulla facilisi cras fermentum odio eu. Vulputate mi sit amet mauris commodo quis imperdiet massa. Vulputate enim nulla aliquet porttitor lacus luctus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Venenatis tellus in metus vulputate eu. Neque sodales ut etiam sit amet. Id interdum velit laoreet id donec ultrices tincidunt arcu. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Viverra vitae congue eu consequat ac. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Volutpat diam ut venenatis tellus in metus vulputate eu. Nibh tellus molestie nunc non.\nDolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Elit eget gravida cum sociis natoque penatibus et. Aliquet nibh praesent tristique magna sit amet purus gravida. Sodales ut eu sem integer vitae. Lectus arcu bibendum at varius vel. Eget mi proin sed libero. Turpis egestas sed tempus urna et pharetra. Ut tellus elementum sagittis vitae et leo. Odio ut enim blandit volutpat. Massa tincidunt dui ut ornare lectus sit amet est placerat. Cursus mattis molestie a iaculis. Arcu dictum varius duis at consectetur lorem donec. In massa tempor nec feugiat nisl pretium.\n',
    NULL,
    '2020-10-27 19:52:20.720'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Khloe Kardashian',
    'I''m thrilled to continue my partnership with U by Kotex for Generation Know while helping to empower girls. I''ve always been a motivational resource for my younger sisters and hope I can positively impact and inspire other young girls too.',
    NULL,
    '2020-01-27 06:28:25.733'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Bobby Flay',
    'Even if the chef has a good business head, his focus should be behind kitchen doors. A business partner should take care of everything in front of the kitchen doors.',
    NULL,
    '2022-10-28 20:18:52.670'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Mrshooter',
    'a woman shoots her husband then she drowns him then she hangs him and then later on they go to dinner how is that possible?\n\n\n\n\nthe woman took a picture of her husband',
    'https://picsum.photos/314/326',
    '2021-05-23 14:09:53.120'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Barrage Blast',
    'Trap Card card\n\n\nOnce per turn, you can detach any number of materials from Machine Xyz Monsters you control, then target that many cards on the field; destroy them. If a Machine Xyz Monster(s) you control is destroyed by battle or an opponent''s card effect while this card is in your GY: You can banish this card and 1 Machine Xyz Monster from your GY; inflict damage to your opponent equal to the banished monster''s Rank x 200.',
    'https://images.ygoprodeck.com/images/cards/51369889.jpg',
    '2020-09-10 23:26:12.947'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'squirtle',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    '2021-09-14 15:10:19.009'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Gustave Flaubert',
    'A friend who dies, it''s something of you who dies.',
    'https://picsum.photos/543/319',
    '2019-12-02 17:24:25.929'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'flareon',
    'Pokemon  fire',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png',
    '2021-07-27 09:35:31.635'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'pidgey',
    'Pokemon  normal flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
    '2023-02-01 06:23:22.050'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'raichu',
    'Pokemon  electric',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
    '2022-04-24 22:08:33.618'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Guardragon Shield',
    'Spell Card card\n\n\nYou can target 1 Dragon monster you control; it gains ATK/DEF equal to the total Link Rating of the Link Monsters currently on the field x 100, until the end of the opponent''s turn. You can only use this effect of "Guardragon Shield" once per turn. Once per turn, if exactly 1 Dragon monster you control would be destroyed by battle or card effect, you can send 1 Normal Monster from your hand or Deck to the GY instead.',
    'https://images.ygoprodeck.com/images/cards/50186558.jpg',
    '2022-09-10 04:11:56.746'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What do you call a cow with no legs? Ground beef.',
    'https://picsum.photos/229/128',
    '2023-08-07 00:32:02.313'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'articuno',
    'Pokemon  ice flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png',
    '2021-05-06 19:38:48.320'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What do you say to a rabbit on its birthday? Hoppy Birthday!',
    NULL,
    '2020-09-10 19:08:19.121'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris and the Dale Lamma got to gether to see the perfect human the Dale Lamma asked Chuck Norris where the person was Chuck Norris told Him to look at ME the perfect HUMAN!{Which is Chuck Norris}',
    NULL,
    '2022-04-15 13:09:12.935'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Horst Koehler',
    'Responsibility and respect of others and their religious beliefs are also part of freedom.',
    NULL,
    '2021-11-30 11:19:13.840'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Jack Kevorkian',
    'I gambled and I lost. I failed in securing my options for this choice for myself, but I succeeded in verifying the Dark Age is still with us.',
    NULL,
    '2020-09-10 04:12:04.024'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Colors',
    'There is a purple house, a red house, a blue house, pink house, a yellow house, and a white. What color is the green house?\n\n\n\n\nClear! A green hosue is where you grow plants',
    'https://picsum.photos/310/453',
    '2020-11-21 22:35:06.919'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Murder',
    'Some FBI agents are going to investigate a murder that happened at 3:00 this afternoon. They discovered a man had been shot. The car was all locked up:the doors, windows everything!A man has just bought a brand new car that could drive right out of a parking lot. Aparrantly he had been shot while sleeping. The car was in perfect shape. No bullet holes on any part of the car. There was no gun found in the car. He was also alone. How did the man get shot?\n\n\n\n\nthe brand new car was a convertible. He was shot from the back of the car because the top was down!',
    'https://picsum.photos/256/445',
    '2022-12-10 15:57:59.739'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I have a joke about procrastination, but I’ll tell it to you later.',
    NULL,
    '2021-03-15 04:19:15.690'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Four Men In A Boat',
    'Four Men are in a boat fishing..suddenly,the boat sank....the four men sank,three of the men''s hair was wet,but one of the men''s hair is dry, how is this possible?\n\n\n\n\nThe Man Was Bald!',
    'https://picsum.photos/514/443',
    '2021-06-09 22:11:45.130'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Mi eget mauris pharetra et ultrices neque. Nunc no',
    'Sem viverra aliquet eget sit amet tellus cras. Proin nibh nisl condimentum id venenatis a. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Viverra vitae congue eu consequat ac felis donec et odio. Ultrices vitae auctor eu augue ut. Leo integer malesuada nunc vel risus. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus et malesuada fames ac. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Diam vel quam elementum pulvinar. Faucibus nisl tincidunt eget nullam. Lacus viverra vitae congue eu consequat. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Diam sit amet nisl suscipit. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.\nBibendum arcu vitae elementum curabitur vitae nunc sed velit. Consequat semper viverra nam libero justo laoreet sit amet cursus. Morbi quis commodo odio aenean. Ut sem nulla pharetra diam. Gravida cum sociis natoque penatibus et magnis. Eu sem integer vitae justo. Amet dictum sit amet justo donec enim diam vulputate ut. Eu consequat ac felis donec et. Sed vulputate odio ut enim. Vitae aliquet nec ullamcorper sit amet risus nullam.\nFaucibus interdum posuere lorem ipsum dolor sit amet consectetur. Quis hendrerit dolor magna eget est lorem ipsum dolor. In aliquam sem fringilla ut. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Facilisis leo vel fringilla est. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Volutpat lacus laoreet non curabitur. Cum sociis natoque penatibus et magnis dis. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Nunc lobortis mattis aliquam faucibus. Arcu felis bibendum ut tristique et. Amet purus gravida quis blandit turpis cursus in hac habitasse. In fermentum et sollicitudin ac orci phasellus. Malesuada fames ac turpis egestas integer eget.\nLectus urna duis convallis convallis tellus id interdum. Porttitor leo a diam sollicitudin tempor id eu. Sit amet aliquam id diam maecenas. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Fermentum odio eu feugiat pretium nibh ipsum consequat. Purus semper eget duis at tellus at. Arcu bibendum at varius vel pharetra vel turpis. Suscipit tellus mauris a diam maecenas sed enim. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Faucibus interdum posuere lorem ipsum. Turpis massa tincidunt dui ut ornare lectus sit amet est. Egestas maecenas pharetra convallis posuere morbi leo. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Amet venenatis urna cursus eget nunc scelerisque. Hac habitasse platea dictumst quisque sagittis purus sit. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Non blandit massa enim nec dui. Mus mauris vitae ultricies leo integer malesuada. Sed felis eget velit aliquet sagittis id consectetur.\n',
    NULL,
    '2022-10-15 16:50:43.218'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Vel turpis nunc eget lorem dolor sed viverra ipsum',
    'Purus semper eget duis at tellus at urna condimentum. Amet justo donec enim diam vulputate ut pharetra sit. Pretium lectus quam id leo in vitae turpis massa sed. Feugiat nibh sed pulvinar proin gravida. Eget velit aliquet sagittis id. Nisl pretium fusce id velit. Imperdiet proin fermentum leo vel orci porta non pulvinar. Proin gravida hendrerit lectus a. Nibh tortor id aliquet lectus. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Amet est placerat in egestas erat imperdiet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Eu tincidunt tortor aliquam nulla facilisi cras. Tellus at urna condimentum mattis pellentesque. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Eu sem integer vitae justo. Tempor orci eu lobortis elementum nibh tellus molestie nunc non.\nSollicitudin nibh sit amet commodo. Purus sit amet luctus venenatis lectus. Dolor sit amet consectetur adipiscing elit ut aliquam purus. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Aliquet lectus proin nibh nisl condimentum. Laoreet non curabitur gravida arcu. Consectetur libero id faucibus nisl tincidunt eget nullam. Pretium viverra suspendisse potenti nullam ac tortor vitae. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Sed enim ut sem viverra aliquet. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Odio euismod lacinia at quis risus sed. Amet justo donec enim diam vulputate. Montes nascetur ridiculus mus mauris vitae ultricies leo integer.\nVel turpis nunc eget lorem dolor sed viverra ipsum nunc. Lacinia at quis risus sed. Velit egestas dui id ornare arcu odio ut sem nulla. Lacus vestibulum sed arcu non odio euismod lacinia. Imperdiet nulla malesuada pellentesque elit. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt. Adipiscing bibendum est ultricies integer quis auctor elit.\n',
    NULL,
    '2023-04-17 16:22:50.840'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'How Many Legs, Including Pincers Does A Crab Have? \n\n\n\n\nTen',
    NULL,
    '2022-02-28 19:23:18.751'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Sinister Shadow Games',
    'Trap Card card\n\n\nSend 1 "Shaddoll" card from your Deck to the GY, then you can change any number of face-down Defense Position "Shaddoll" monsters you control to face-up Defense Position.',
    'https://images.ygoprodeck.com/images/cards/77505534.jpg',
    '2023-07-19 02:31:27.467'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Samuel L. Jackson',
    'People go to movies on Saturday to get away from the war in Iraq and taxes and election news and pedophiles online and just go and have some fun. I like doing movies that are fun.',
    'https://picsum.photos/635/248',
    '2021-09-25 07:38:50.867'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Posuere ac ut consequat semper viverra. Viverra vi',
    'Purus in mollis nunc sed id semper. Suspendisse faucibus interdum posuere lorem ipsum. Dictum non consectetur a erat. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. In nibh mauris cursus mattis molestie a iaculis at erat. Velit aliquet sagittis id consectetur purus ut faucibus. Lorem dolor sed viverra ipsum. Facilisis gravida neque convallis a cras. Adipiscing vitae proin sagittis nisl rhoncus. Odio eu feugiat pretium nibh ipsum. Sit amet nulla facilisi morbi. Viverra mauris in aliquam sem. Vitae justo eget magna fermentum. Ultrices dui sapien eget mi proin sed libero. Convallis a cras semper auctor neque vitae tempus quam. Netus et malesuada fames ac turpis egestas. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Suspendisse potenti nullam ac tortor vitae.\n',
    'https://picsum.photos/645/242',
    '2020-04-07 02:37:00.363'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Three Rooms',
    'You are convicted of murder. you have to choose between 3 rooms. The first room hast raging fires. The second room has men with loaded guns. The third room has lions, tigers and bears who haven''t eaten for 2 years. What room would you choose?\n\n\n\n\nThe third room. The lions, tigers and bears are all dead as they have not eaten for two years.',
    NULL,
    '2021-04-23 16:03:45.913'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'lickitung',
    'Pokemon  normal',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png',
    '2022-08-13 13:45:57.533'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Rivers:- The Orange River Flows Into The Atlantic Ocean Between Which 2 South African Countries \n\n\n\n\nNambia & South Africa',
    'https://picsum.photos/621/278',
    '2020-05-10 07:38:54.736'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris made ''journey '' stop believing.',
    'https://picsum.photos/370/606',
    '2021-06-10 17:35:54.205'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris once squeezed a m&m so hard that it became a skittle.',
    'https://picsum.photos/541/334',
    '2023-09-06 16:38:18.556'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Comediennes:- Julie Kavner Is The Voice Of Marge In Which Cartoon Series \n\n\n\n\nThe Simpsons',
    NULL,
    '2023-06-06 05:49:23.539'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Posuere ac ut consequat semper viverra. Viverra vi',
    'Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Sit amet nulla facilisi morbi tempus. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Sodales neque sodales ut etiam sit amet nisl purus. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Nisi lacus sed viverra tellus in hac habitasse. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Tincidunt eget nullam non nisi. Cursus risus at ultrices mi. Volutpat est velit egestas dui id ornare. Sagittis nisl rhoncus mattis rhoncus. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Fermentum leo vel orci porta non pulvinar neque. Quisque sagittis purus sit amet volutpat. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Porttitor massa id neque aliquam vestibulum morbi blandit. At quis risus sed vulputate odio. Nisi vitae suscipit tellus mauris a diam maecenas sed enim.\nSed elementum tempus egestas sed sed risus pretium quam. Interdum varius sit amet mattis vulputate enim nulla. Orci porta non pulvinar neque laoreet suspendisse. Urna porttitor rhoncus dolor purus non enim praesent. Elit sed vulputate mi sit amet mauris commodo. Sit amet dictum sit amet. Elementum integer enim neque volutpat ac tincidunt. A erat nam at lectus urna duis convallis. Convallis aenean et tortor at risus viverra adipiscing at in. Mattis vulputate enim nulla aliquet porttitor lacus. Sagittis nisl rhoncus mattis rhoncus urna. Sit amet massa vitae tortor. Phasellus vestibulum lorem sed risus ultricies. Habitant morbi tristique senectus et netus et. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Mi eget mauris pharetra et ultrices neque. Sodales ut eu sem integer.\nVolutpat consequat mauris nunc congue. Sollicitudin ac orci phasellus egestas tellus. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Massa tempor nec feugiat nisl pretium fusce id. Amet purus gravida quis blandit turpis cursus in hac. Neque ornare aenean euismod elementum nisi quis eleifend. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Elit at imperdiet dui accumsan sit amet. Etiam erat velit scelerisque in dictum non consectetur a erat. Lacus vestibulum sed arcu non odio euismod lacinia. Ultrices eros in cursus turpis. Nibh nisl condimentum id venenatis a condimentum. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus.\nNibh nisl condimentum id venenatis a condimentum vitae sapien. Laoreet sit amet cursus sit. Commodo ullamcorper a lacus vestibulum sed arcu. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Pharetra convallis posuere morbi leo urna. Id volutpat lacus laoreet non curabitur gravida arcu ac. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Lorem mollis aliquam ut porttitor. A arcu cursus vitae congue. Nisl purus in mollis nunc sed id semper. Convallis a cras semper auctor neque. Lectus arcu bibendum at varius. Facilisis sed odio morbi quis commodo odio aenean sed. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Vel orci porta non pulvinar neque laoreet suspendisse. Feugiat nisl pretium fusce id. Adipiscing bibendum est ultricies integer quis auctor.\n',
    NULL,
    '2020-09-29 13:01:48.244'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Bald people once did have hair. Until they saw Chuck Norris.',
    NULL,
    '2023-03-30 03:29:18.103'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'When measuring a woman''s measurements, as in "36, 35, 36" the numbers correspond to which of the following?\n\n\n\n\nBust, Waist, Hips',
    NULL,
    '2023-11-03 04:23:06.085'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'The sun sets in the ____?\n\n\n\n\nWest',
    NULL,
    '2020-03-27 23:28:25.943'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nibh sit amet commodo nulla. Placerat vestibulum l',
    'Ac auctor augue mauris augue neque gravida in fermentum et. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Molestie at elementum eu facilisis sed odio morbi quis. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Cursus mattis molestie a iaculis. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Ultrices neque ornare aenean euismod elementum. Eu facilisis sed odio morbi. Arcu dui vivamus arcu felis. Aliquam etiam erat velit scelerisque in dictum. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Pellentesque nec nam aliquam sem. Amet volutpat consequat mauris nunc congue. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean sed adipiscing diam donec adipiscing tristique. Tellus pellentesque eu tincidunt tortor aliquam. Sem nulla pharetra diam sit amet nisl suscipit.\nSemper auctor neque vitae tempus quam pellentesque nec nam. Turpis egestas maecenas pharetra convallis posuere morbi. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. In cursus turpis massa tincidunt dui. Gravida neque convallis a cras semper auctor neque vitae tempus. Dui faucibus in ornare quam viverra. Consequat nisl vel pretium lectus quam id leo in vitae. Eget est lorem ipsum dolor sit amet. Enim facilisis gravida neque convallis a cras semper auctor. Non arcu risus quis varius quam quisque id diam. Enim praesent elementum facilisis leo vel fringilla est. Elementum sagittis vitae et leo duis ut diam quam. Nisi lacus sed viverra tellus. Id aliquet lectus proin nibh nisl condimentum id. Egestas sed sed risus pretium quam vulputate dignissim.\n',
    NULL,
    '2020-03-15 23:12:31.647'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    '“I bought the world’s worst thesaurus yesterday. Not only is it terrible, it’s terrible.”',
    'https://picsum.photos/151/549',
    '2021-12-01 14:07:56.668'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Ultimate Insect LV3',
    'Effect Monster card\n\nInsect\nATK 1400 / DEF 900\nLevel 3\n\nIf this card was Special Summoned by the effect of "Ultimate Insect LV1", while it remains on the field all of your opponent''s monsters lose 300 ATK. During your Standby Phase, by sending this face-up card to the Graveyard, Special Summon 1 "Ultimate Insect LV5" from your hand or Deck. (You cannot activate this effect the turn this card is Normal Summoned, Special Summoned, or flipped face-up.)',
    'https://images.ygoprodeck.com/images/cards/34088136.jpg',
    '2022-04-14 16:53:12.496'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Lectus magna fringilla urna porttitor rhoncus dolo',
    'Eget sit amet tellus cras adipiscing enim eu turpis. Amet facilisis magna etiam tempor. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Purus viverra accumsan in nisl nisi. Vitae elementum curabitur vitae nunc sed velit. Sed lectus vestibulum mattis ullamcorper velit. Consequat interdum varius sit amet mattis. Amet justo donec enim diam. Sed vulputate odio ut enim blandit volutpat maecenas. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Habitant morbi tristique senectus et netus et malesuada. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Congue mauris rhoncus aenean vel elit scelerisque. Id neque aliquam vestibulum morbi blandit cursus. Nunc sed augue lacus viverra vitae congue eu consequat ac. Leo vel orci porta non pulvinar neque. Consequat interdum varius sit amet mattis.\nEu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Sagittis id consectetur purus ut faucibus pulvinar elementum. Accumsan tortor posuere ac ut. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Purus in massa tempor nec feugiat nisl. Felis eget nunc lobortis mattis. Amet massa vitae tortor condimentum lacinia quis vel. Sed cras ornare arcu dui vivamus arcu. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Integer vitae justo eget magna fermentum iaculis eu. Lorem mollis aliquam ut porttitor. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Vulputate dignissim suspendisse in est ante. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Nulla facilisi nullam vehicula ipsum a arcu cursus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum.\nSollicitudin nibh sit amet commodo. Purus sit amet luctus venenatis lectus. Dolor sit amet consectetur adipiscing elit ut aliquam purus. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Aliquet lectus proin nibh nisl condimentum. Laoreet non curabitur gravida arcu. Consectetur libero id faucibus nisl tincidunt eget nullam. Pretium viverra suspendisse potenti nullam ac tortor vitae. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Sed enim ut sem viverra aliquet. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Odio euismod lacinia at quis risus sed. Amet justo donec enim diam vulputate. Montes nascetur ridiculus mus mauris vitae ultricies leo integer.\n',
    'https://picsum.photos/101/364',
    '2019-12-27 16:08:32.801'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Joseph Addison',
    'If you wish to succeed in life, make perseverance your bosom friend, experience your wise counselor, caution your elder brother, and hope your guardian genius.',
    NULL,
    '2020-06-08 00:55:39.070'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'grimer',
    'Pokemon  poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png',
    '2022-12-23 10:39:42.481'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'The Sphinx!',
    'A man comes across a sphinx who will eat him if he doesn''t answer the riddle right. Here''s the riddle. In the morning of life I''m on four legs, In the evening I''m on two, And at night I''m on three,  What am I?\n\n\n\n\nA Human. MORNING OF LIFE A baby that crawls on all fours EVENING An adult that walks with ease NIGHT An old man with his trusty cane',
    NULL,
    '2022-05-14 13:03:38.438'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Praesent semper feugiat nibh sed pulvinar proin. I',
    'Mi eget mauris pharetra et ultrices neque. Nunc non blandit massa enim nec. Velit scelerisque in dictum non consectetur a. Enim sed faucibus turpis in eu mi bibendum neque. In egestas erat imperdiet sed. Ac auctor augue mauris augue neque gravida in fermentum. Vitae congue eu consequat ac felis donec. Feugiat sed lectus vestibulum mattis. Nibh venenatis cras sed felis eget velit aliquet. Mauris sit amet massa vitae tortor condimentum lacinia quis. Orci sagittis eu volutpat odio facilisis mauris sit amet. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Purus viverra accumsan in nisl. Consequat semper viverra nam libero justo laoreet sit amet. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Nec dui nunc mattis enim ut tellus elementum. Quis auctor elit sed vulputate mi sit. Feugiat nibh sed pulvinar proin gravida.\nSed sed risus pretium quam vulputate dignissim suspendisse. Id leo in vitae turpis massa. Eget mauris pharetra et ultrices. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Nisl condimentum id venenatis a. Dui id ornare arcu odio. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Viverra maecenas accumsan lacus vel facilisis volutpat est. Platea dictumst vestibulum rhoncus est pellentesque elit. Hac habitasse platea dictumst quisque.\nPurus in mollis nunc sed id semper. Suspendisse faucibus interdum posuere lorem ipsum. Dictum non consectetur a erat. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. In nibh mauris cursus mattis molestie a iaculis at erat. Velit aliquet sagittis id consectetur purus ut faucibus. Lorem dolor sed viverra ipsum. Facilisis gravida neque convallis a cras. Adipiscing vitae proin sagittis nisl rhoncus. Odio eu feugiat pretium nibh ipsum. Sit amet nulla facilisi morbi. Viverra mauris in aliquam sem. Vitae justo eget magna fermentum. Ultrices dui sapien eget mi proin sed libero. Convallis a cras semper auctor neque vitae tempus quam. Netus et malesuada fames ac turpis egestas. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Suspendisse potenti nullam ac tortor vitae.\n',
    NULL,
    '2023-06-27 04:17:03.915'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris is "lovin'' it" at taco bell',
    NULL,
    '2020-10-23 10:32:07.370'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Can anyone tell me what oblivious means, because I have no idea.',
    NULL,
    '2021-11-19 22:15:30.540'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Mahatma Gandhi',
    'Only he can take great resolves who has indomitable faith in God and has fear of God.',
    'https://picsum.photos/619/432',
    '2021-02-09 16:27:15.183'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Which day did the Boomtown Rats not like\n\n\n\n\nMonday',
    NULL,
    '2020-05-24 21:21:00.752'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Cocoon Party',
    'Spell Card card\n\n\nSpecial Summon 1 "Chrysalis" monster from your Deck for each "Neo-Spacian" monster with a different name in your Graveyard.',
    'https://images.ygoprodeck.com/images/cards/80368942.jpg',
    '2023-04-24 22:17:53.556'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'We’re renovating the house, and the first floor is going great, but the second floor is another story.',
    NULL,
    '2022-01-04 06:23:29.651'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Vitae auctor eu augue ut lectus arcu bibendum at v',
    'Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Sagittis id consectetur purus ut faucibus pulvinar elementum. Accumsan tortor posuere ac ut. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Purus in massa tempor nec feugiat nisl. Felis eget nunc lobortis mattis. Amet massa vitae tortor condimentum lacinia quis vel. Sed cras ornare arcu dui vivamus arcu. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Integer vitae justo eget magna fermentum iaculis eu. Lorem mollis aliquam ut porttitor. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Vulputate dignissim suspendisse in est ante. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Nulla facilisi nullam vehicula ipsum a arcu cursus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum.\nMi eget mauris pharetra et ultrices neque. Nunc non blandit massa enim nec. Velit scelerisque in dictum non consectetur a. Enim sed faucibus turpis in eu mi bibendum neque. In egestas erat imperdiet sed. Ac auctor augue mauris augue neque gravida in fermentum. Vitae congue eu consequat ac felis donec. Feugiat sed lectus vestibulum mattis. Nibh venenatis cras sed felis eget velit aliquet. Mauris sit amet massa vitae tortor condimentum lacinia quis. Orci sagittis eu volutpat odio facilisis mauris sit amet. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Purus viverra accumsan in nisl. Consequat semper viverra nam libero justo laoreet sit amet. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Nec dui nunc mattis enim ut tellus elementum. Quis auctor elit sed vulputate mi sit. Feugiat nibh sed pulvinar proin gravida.\n',
    NULL,
    '2022-04-07 04:52:53.144'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Risus sed vulputate odio ut enim blandit volutpat.',
    'Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Tristique senectus et netus et malesuada fames ac. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut. Eros in cursus turpis massa tincidunt. Purus viverra accumsan in nisl nisi scelerisque eu. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Nam aliquam sem et tortor. Sit amet purus gravida quis blandit turpis. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Amet massa vitae tortor condimentum.\n',
    'https://picsum.photos/234/270',
    '2021-07-18 14:02:31.975'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I failed my driving test today. The instructor asked me, “What do you do at a red light?” I said, “I usually check my emails and see what people are up to on Facebook.”',
    'https://picsum.photos/265/298',
    '2021-09-06 23:34:08.849'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'We’re renovating the house, and the first floor is going great, but the second floor is another story.',
    NULL,
    '2020-09-16 21:48:37.143'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'parasect',
    'Pokemon  bug grass',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png',
    '2020-05-04 15:06:56.113'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Paleozoic Opabinia',
    'XYZ Monster card\n\n\n2 Level 2 monsters\nThis card is unaffected by other monsters'' effects. You can activate "Paleozoic" Trap Cards from your hand. If this card has a Trap Card as Xyz Material: You can detach 1 Xyz Material from this card; add 1 "Paleozoic" Trap Card from your Deck to your hand. You can only use this effect of "Paleozoic Opabinia" once per turn.',
    'https://images.ygoprodeck.com/images/cards/37649320.jpg',
    '2021-03-19 13:56:47.741'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Sed sed risus pretium quam vulputate dignissim sus',
    'Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Consequat semper viverra nam libero justo laoreet sit amet cursus. Morbi quis commodo odio aenean. Ut sem nulla pharetra diam. Gravida cum sociis natoque penatibus et magnis. Eu sem integer vitae justo. Amet dictum sit amet justo donec enim diam vulputate ut. Eu consequat ac felis donec et. Sed vulputate odio ut enim. Vitae aliquet nec ullamcorper sit amet risus nullam.\nSed sed risus pretium quam vulputate dignissim suspendisse. Id leo in vitae turpis massa. Eget mauris pharetra et ultrices. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Nisl condimentum id venenatis a. Dui id ornare arcu odio. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Viverra maecenas accumsan lacus vel facilisis volutpat est. Platea dictumst vestibulum rhoncus est pellentesque elit. Hac habitasse platea dictumst quisque.\nEget sit amet tellus cras adipiscing enim eu. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Purus in massa tempor nec feugiat nisl pretium fusce. Eu feugiat pretium nibh ipsum consequat nisl. Purus in mollis nunc sed. Turpis massa sed elementum tempus egestas sed. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Est lorem ipsum dolor sit amet. Fringilla phasellus faucibus scelerisque eleifend donec. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.\nSollicitudin nibh sit amet commodo. Purus sit amet luctus venenatis lectus. Dolor sit amet consectetur adipiscing elit ut aliquam purus. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Aliquet lectus proin nibh nisl condimentum. Laoreet non curabitur gravida arcu. Consectetur libero id faucibus nisl tincidunt eget nullam. Pretium viverra suspendisse potenti nullam ac tortor vitae. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Sed enim ut sem viverra aliquet. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Odio euismod lacinia at quis risus sed. Amet justo donec enim diam vulputate. Montes nascetur ridiculus mus mauris vitae ultricies leo integer.\n',
    'https://picsum.photos/442/478',
    '2022-12-09 01:14:40.417'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Marc Maron',
    'We need the children of Indonesia and the Philippines to manufacture our freedom of choice.',
    NULL,
    '2023-05-18 07:38:28.072'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'venomoth',
    'Pokemon  bug poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png',
    '2021-10-02 13:35:50.031'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'The rotation of earth really makes my day.',
    NULL,
    '2021-04-15 04:32:25.021'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'The rotation of earth really makes my day.',
    NULL,
    '2020-06-03 00:58:48.653'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'old spice was about to come out with a new Chuck Norris scent collection and there slogan for it would have been "old spice,smell like THE MAN!" but it never made it to stores, cause no one man is man enough to bare the same scent as Chuck Norris.',
    NULL,
    '2022-09-27 10:44:33.859'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Sed lectus vestibulum mattis ullamcorper velit sed',
    'Ut eu sem integer vitae justo eget magna. Praesent tristique magna sit amet purus. Quis auctor elit sed vulputate mi. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Aenean euismod elementum nisi quis eleifend quam. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Nec nam aliquam sem et. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Tellus in metus vulputate eu.\nSemper auctor neque vitae tempus quam pellentesque nec nam. Turpis egestas maecenas pharetra convallis posuere morbi. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. In cursus turpis massa tincidunt dui. Gravida neque convallis a cras semper auctor neque vitae tempus. Dui faucibus in ornare quam viverra. Consequat nisl vel pretium lectus quam id leo in vitae. Eget est lorem ipsum dolor sit amet. Enim facilisis gravida neque convallis a cras semper auctor. Non arcu risus quis varius quam quisque id diam. Enim praesent elementum facilisis leo vel fringilla est. Elementum sagittis vitae et leo duis ut diam quam. Nisi lacus sed viverra tellus. Id aliquet lectus proin nibh nisl condimentum id. Egestas sed sed risus pretium quam vulputate dignissim.\nLectus urna duis convallis convallis tellus id interdum. Porttitor leo a diam sollicitudin tempor id eu. Sit amet aliquam id diam maecenas. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Fermentum odio eu feugiat pretium nibh ipsum consequat. Purus semper eget duis at tellus at. Arcu bibendum at varius vel pharetra vel turpis. Suscipit tellus mauris a diam maecenas sed enim. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Faucibus interdum posuere lorem ipsum. Turpis massa tincidunt dui ut ornare lectus sit amet est. Egestas maecenas pharetra convallis posuere morbi leo. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Amet venenatis urna cursus eget nunc scelerisque. Hac habitasse platea dictumst quisque sagittis purus sit. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Non blandit massa enim nec dui. Mus mauris vitae ultricies leo integer malesuada. Sed felis eget velit aliquet sagittis id consectetur.\n',
    NULL,
    '2023-01-28 22:19:26.748'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why was the stadium so hot after the game? Because all the fans left.',
    NULL,
    '2020-04-16 10:00:01.328'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'In a 2002 hit, Grammy-winning artist John Mayer sings "your body is a" what?\n\n\n\n\nWonderland',
    'https://picsum.photos/613/198',
    '2020-01-15 21:07:39.640'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'dugtrio',
    'Pokemon  ground',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png',
    '2020-03-31 02:33:22.422'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nisl pretium fusce id velit ut tortor pretium vive',
    'Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Consequat semper viverra nam libero justo laoreet sit amet cursus. Morbi quis commodo odio aenean. Ut sem nulla pharetra diam. Gravida cum sociis natoque penatibus et magnis. Eu sem integer vitae justo. Amet dictum sit amet justo donec enim diam vulputate ut. Eu consequat ac felis donec et. Sed vulputate odio ut enim. Vitae aliquet nec ullamcorper sit amet risus nullam.\nViverra aliquet eget sit amet tellus. Adipiscing at in tellus integer feugiat scelerisque. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Mauris ultrices eros in cursus. Dolor purus non enim praesent. Quam viverra orci sagittis eu volutpat. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Lobortis feugiat vivamus at augue. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Sed sed risus pretium quam. Integer malesuada nunc vel risus. Egestas congue quisque egestas diam in arcu. Elementum nibh tellus molestie nunc non blandit massa enim nec.\nA iaculis at erat pellentesque adipiscing commodo elit. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Mattis nunc sed blandit libero. Eu lobortis elementum nibh tellus molestie nunc non blandit. Eget duis at tellus at urna condimentum. Sagittis aliquam malesuada bibendum arcu vitae elementum. Felis imperdiet proin fermentum leo vel orci. Sed sed risus pretium quam vulputate. Sed risus pretium quam vulputate dignissim suspendisse in. Fames ac turpis egestas maecenas pharetra convallis posuere. Lobortis scelerisque fermentum dui faucibus in ornare quam. Aenean pharetra magna ac placerat vestibulum lectus mauris. Aliquet sagittis id consectetur purus. Netus et malesuada fames ac. Habitant morbi tristique senectus et. Habitasse platea dictumst vestibulum rhoncus. Egestas sed sed risus pretium quam vulputate. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus.\nEnim eu turpis egestas pretium aenean. Ipsum a arcu cursus vitae. Massa massa ultricies mi quis hendrerit dolor. Rhoncus dolor purus non enim praesent elementum. Tristique magna sit amet purus. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Egestas diam in arcu cursus. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. In mollis nunc sed id semper risus in hendrerit gravida. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Volutpat consequat mauris nunc congue nisi vitae.\n',
    NULL,
    '2021-05-29 12:19:39.508'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Apparition',
    'Trap Card card\n\n\nIf a face-up "HERO" monster(s) you control is destroyed by battle or card effect: Special Summon 1 Level 4 or lower "Vision HERO" monster from your Deck, then you can halve the original ATK/DEF of 1 monster your opponent controls. You can only activate 1 "Apparition" per turn.',
    'https://images.ygoprodeck.com/images/cards/91392974.jpg',
    '2023-05-13 06:53:15.207'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'If Chuck Norris were rea he would roundhouse kick me in the face befor I ekfvievheidciejdnckejdnjcknendc.',
    NULL,
    '2023-01-15 10:02:56.744'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris once shot down a Russian MIG in an aerial dogfight. Chuck was flying in a hot air ballon.',
    NULL,
    '2023-06-08 15:41:26.067'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Horses In Stables',
    'How can you get 9 horses in seven stables?\n\n\n\n\nPut the nuber and letter in each stable. 9/h/o/r/s/e/s',
    NULL,
    '2022-06-24 17:06:47.690'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dignissim diam quis enim lobortis scelerisque ferm',
    'Sed sed risus pretium quam vulputate dignissim suspendisse. Id leo in vitae turpis massa. Eget mauris pharetra et ultrices. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Nisl condimentum id venenatis a. Dui id ornare arcu odio. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Viverra maecenas accumsan lacus vel facilisis volutpat est. Platea dictumst vestibulum rhoncus est pellentesque elit. Hac habitasse platea dictumst quisque.\nSem viverra aliquet eget sit amet tellus cras. Proin nibh nisl condimentum id venenatis a. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Viverra vitae congue eu consequat ac felis donec et odio. Ultrices vitae auctor eu augue ut. Leo integer malesuada nunc vel risus. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus et malesuada fames ac. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Diam vel quam elementum pulvinar. Faucibus nisl tincidunt eget nullam. Lacus viverra vitae congue eu consequat. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Diam sit amet nisl suscipit. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.\n',
    NULL,
    '2020-05-23 05:47:33.936'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Where does young Anakin Skywalker come from?\n\n\n\n\nTatooine',
    NULL,
    '2021-11-30 14:44:20.463'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What invention allows us to see through walls? Windows.',
    NULL,
    '2021-12-17 01:13:53.774'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Semper auctor neque vitae tempus quam pellentesque',
    'Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Consequat semper viverra nam libero justo laoreet sit amet cursus. Morbi quis commodo odio aenean. Ut sem nulla pharetra diam. Gravida cum sociis natoque penatibus et magnis. Eu sem integer vitae justo. Amet dictum sit amet justo donec enim diam vulputate ut. Eu consequat ac felis donec et. Sed vulputate odio ut enim. Vitae aliquet nec ullamcorper sit amet risus nullam.\nPosuere ac ut consequat semper viverra. Viverra vitae congue eu consequat. Enim nunc faucibus a pellentesque. Urna cursus eget nunc scelerisque. Eu augue ut lectus arcu bibendum at varius vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Sed enim ut sem viverra. Sed enim ut sem viverra aliquet eget sit amet. Molestie nunc non blandit massa enim nec. Et molestie ac feugiat sed lectus. Lacinia quis vel eros donec ac odio tempor orci. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Orci sagittis eu volutpat odio facilisis. Est ullamcorper eget nulla facilisi etiam. Nibh sit amet commodo nulla facilisi nullam. Egestas diam in arcu cursus euismod quis viverra. Luctus accumsan tortor posuere ac ut consequat semper viverra. Tristique risus nec feugiat in fermentum posuere. Facilisi cras fermentum odio eu. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo.\nBlandit volutpat maecenas volutpat blandit. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Aliquet enim tortor at auctor urna nunc id cursus metus. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Enim ut tellus elementum sagittis vitae et leo. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Elementum integer enim neque volutpat ac tincidunt vitae. Id leo in vitae turpis massa sed elementum. Volutpat sed cras ornare arcu dui vivamus arcu felis. Suspendisse in est ante in. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Elit eget gravida cum sociis natoque. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Purus faucibus ornare suspendisse sed. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Ac turpis egestas integer eget aliquet.\n',
    NULL,
    '2020-01-12 19:51:49.169'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What have woodpecker scalps, porpoise teeth and giraffe tails all been used as?\n\n\n\n\nMoney',
    NULL,
    '2023-11-11 00:43:02.434'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Tom A. Watson',
    'And obviously, with hindsight now, now knowing what went on in the company, it would have been absolutely appropriate back then for us to have the chief executive of the company, most senior person in the United Kingdom, come and answer for the policy they were pursuing. And we ducked that, and frankly that''s a failure of Parliament.',
    'https://picsum.photos/522/524',
    '2020-04-17 10:21:47.584'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Mystic Plasma Zone',
    'Spell Card card\n\n\nIncrease the ATK of all DARK monsters by 500 points and decreases their DEF by 400 points.',
    'https://images.ygoprodeck.com/images/cards/18161786.jpg',
    '2023-04-24 13:08:18.537'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Madame de Stael',
    'Love is a symbol of eternity. It wipes out all sense of time, destroying all memory of a beginning and all fear of an end.',
    NULL,
    '2020-03-12 14:11:20.909'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Gagagigo',
    'Normal Monster card\n\nReptile\nATK 1850 / DEF 1000\nLevel 4\n\nThis young evildoer used to have an evil heart, but by meeting a special person, he discovered justice.',
    'https://images.ygoprodeck.com/images/cards/49003308.jpg',
    '2023-11-08 06:49:13.290'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Johnny Depp',
    'It''s good to experience Hollywood in short bursts, I guess. Little snippets. I don''t think I can handle being here all the time, it''s pretty nutty.',
    NULL,
    '2020-10-08 15:41:56.463'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    '"Dancing On The Ceiling" Was A Hit For You\n\n\n\n\nLionel Richie',
    NULL,
    '2020-12-12 18:49:25.847'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Particle Fusion',
    'Spell Card card\n\n\nSend, from your side of the field to the Graveyard, the Fusion Material Monsters that are listed on a "Gem-Knight" Fusion Monster Card, then Special Summon that Fusion Monster from your Extra Deck. (This Special Summon is treated as a Fusion Summon.) When you do: Banish this card from the Graveyard to target 1 "Gem-Knight" Fusion Material Monster used for the Fusion Summon; the Fusion Summoned monster gains that monster''s ATK until the End Phase.',
    'https://images.ygoprodeck.com/images/cards/39261576.jpg',
    '2022-07-15 01:52:25.207'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Ac auctor augue mauris augue neque gravida in ferm',
    'Nisl pretium fusce id velit ut tortor pretium viverra. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Volutpat diam ut venenatis tellus in metus. Commodo viverra maecenas accumsan lacus. Elit at imperdiet dui accumsan sit amet nulla facilisi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Eu scelerisque felis imperdiet proin. Arcu bibendum at varius vel pharetra vel turpis nunc. Orci a scelerisque purus semper eget. Elementum sagittis vitae et leo duis ut diam.\nBibendum arcu vitae elementum curabitur vitae nunc sed velit. Consequat semper viverra nam libero justo laoreet sit amet cursus. Morbi quis commodo odio aenean. Ut sem nulla pharetra diam. Gravida cum sociis natoque penatibus et magnis. Eu sem integer vitae justo. Amet dictum sit amet justo donec enim diam vulputate ut. Eu consequat ac felis donec et. Sed vulputate odio ut enim. Vitae aliquet nec ullamcorper sit amet risus nullam.\n',
    NULL,
    '2021-04-11 04:51:42.877'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'hitmonlee',
    'Pokemon  fighting',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png',
    '2022-06-28 10:03:16.104'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris has a cave troll.',
    'https://picsum.photos/592/563',
    '2021-03-22 17:15:27.858'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What does ''V.S.O.P'' Stand For On A Bottle Of Wine Or Sherry \n\n\n\n\nVery Special Old Pale',
    'https://picsum.photos/239/525',
    '2021-07-13 06:17:22.986'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'How many people were killed in the battle of Lexington?\n\n\n\n\nEight',
    NULL,
    '2020-05-07 05:19:53.432'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Ut ornare lectus sit amet est placerat. Eget nulla',
    'Eget felis eget nunc lobortis mattis aliquam faucibus purus. Ipsum dolor sit amet consectetur adipiscing elit. Purus in mollis nunc sed id semper. Imperdiet sed euismod nisi porta lorem mollis aliquam. Auctor neque vitae tempus quam. Vitae tempus quam pellentesque nec. Auctor augue mauris augue neque. Mattis aliquam faucibus purus in massa tempor nec feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Massa enim nec dui nunc mattis enim. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Elementum facilisis leo vel fringilla est ullamcorper eget nulla.\n',
    NULL,
    '2022-04-09 05:39:59.678'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Duane Michals',
    'Trust that little voice in your head that says ''Wouldn''t it be interesting if...'' And then do it.',
    NULL,
    '2022-06-28 08:20:13.686'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What does a painter do when he gets cold? Puts on another coat.',
    NULL,
    '2023-10-01 09:35:20.443'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from John Baldacci',
    'There is a lot of interest in the arts, music, theatre, filmmaking, engineering, architecture and software design. I think we have now transitioned the modern-day version of the entrepreneur into the creative economy.',
    'https://picsum.photos/480/549',
    '2021-08-27 03:14:57.137'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I only seem to get sick on weekdays. I must have a weekend immune system.',
    'https://picsum.photos/436/456',
    '2020-10-07 07:57:00.558'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'krabby',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png',
    '2022-02-02 03:38:04.738'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Just burned 2,000 calories. That’s the last time I leave brownies in the oven while I nap.',
    NULL,
    '2023-05-27 13:14:43.423'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Which Olivia Newton John 81'' album could describe some exercise?\n\n\n\n\nPhysical',
    NULL,
    '2021-10-24 06:05:43.595'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Sed elementum tempus egestas sed sed risus pretium',
    'Blandit volutpat maecenas volutpat blandit. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Aliquet enim tortor at auctor urna nunc id cursus metus. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Enim ut tellus elementum sagittis vitae et leo. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Elementum integer enim neque volutpat ac tincidunt vitae. Id leo in vitae turpis massa sed elementum. Volutpat sed cras ornare arcu dui vivamus arcu felis. Suspendisse in est ante in. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Elit eget gravida cum sociis natoque. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Purus faucibus ornare suspendisse sed. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Ac turpis egestas integer eget aliquet.\nAc auctor augue mauris augue neque gravida in fermentum et. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Molestie at elementum eu facilisis sed odio morbi quis. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Cursus mattis molestie a iaculis. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Ultrices neque ornare aenean euismod elementum. Eu facilisis sed odio morbi. Arcu dui vivamus arcu felis. Aliquam etiam erat velit scelerisque in dictum. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Pellentesque nec nam aliquam sem. Amet volutpat consequat mauris nunc congue. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean sed adipiscing diam donec adipiscing tristique. Tellus pellentesque eu tincidunt tortor aliquam. Sem nulla pharetra diam sit amet nisl suscipit.\nEu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Sagittis id consectetur purus ut faucibus pulvinar elementum. Accumsan tortor posuere ac ut. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Purus in massa tempor nec feugiat nisl. Felis eget nunc lobortis mattis. Amet massa vitae tortor condimentum lacinia quis vel. Sed cras ornare arcu dui vivamus arcu. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Integer vitae justo eget magna fermentum iaculis eu. Lorem mollis aliquam ut porttitor. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Vulputate dignissim suspendisse in est ante. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Nulla facilisi nullam vehicula ipsum a arcu cursus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum.\nLeo vel orci porta non pulvinar neque. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Consectetur libero id faucibus nisl tincidunt eget. Morbi tristique senectus et netus. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Sit amet nulla facilisi morbi tempus iaculis urna. Suscipit tellus mauris a diam maecenas. In aliquam sem fringilla ut. Tortor at risus viverra adipiscing. Scelerisque eleifend donec pretium vulputate sapien nec. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Mi tempus imperdiet nulla malesuada pellentesque elit. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Nam at lectus urna duis convallis.\n',
    NULL,
    '2020-05-12 17:23:45.756'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Blandit volutpat maecenas volutpat blandit. Nulla ',
    'Praesent semper feugiat nibh sed pulvinar proin. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Urna molestie at elementum eu facilisis sed odio morbi quis. Adipiscing commodo elit at imperdiet dui accumsan. Ac felis donec et odio pellentesque diam. Sapien pellentesque habitant morbi tristique senectus et netus et. Interdum velit euismod in pellentesque massa placerat. Id diam maecenas ultricies mi eget mauris pharetra et. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Ultricies tristique nulla aliquet enim tortor. Non curabitur gravida arcu ac. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus.\n',
    NULL,
    '2023-08-06 16:31:29.112'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I just read that someone in London gets stabbed every 52 seconds. Poor bastard.',
    'https://picsum.photos/332/477',
    '2020-10-28 17:19:06.869'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Pat Robertson',
    'The Supreme Court has insulted you over and over again, Lord. They''ve taken your Bible away from the schools. They''ve forbidden little children to pray. They''ve taken the knowledge of God as best they can, and organizations have come into court to take the knowledge of God out of the public square of America.',
    'https://picsum.photos/205/569',
    '2023-09-25 12:41:25.989'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What is a group of martins\n\n\n\n\nRichness',
    NULL,
    '2022-03-12 18:26:59.204'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Machine Lord Ur',
    'Effect Monster card\n\nMachine\nATK 1600 / DEF 1500\nLevel 4\n\nThis card can attack all monsters your opponent controls once each. If this card attacks or is attacked, your opponent takes no battle damage.',
    'https://images.ygoprodeck.com/images/cards/96938777.jpg',
    '2021-10-14 20:23:55.030'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Johnny What Are You Holding?',
    'The teacher says, OK class who can tell what I''m holding? Its red and hard. A little boy named Johnny said I know its an apple. Nice try says the teacher. But its a ball. OK next one, What am I holding? Its sozt and yellow. I kno, Ikno sad Johnny. Its a stufed animal (duck). No sorry Johnny thats not it. Its a tennis ball, but I like the way you think. So Johnny says, OK teacher it my turn. What am I holding? He puts his hand in his pocket and says its hard and round and has a head. Johnny go to the princibles office right now young man. Johnny says what did i do? Then she says you know what you did, now go!! He stod up and walk to the door. He said, Its not what you think, but I like the way you think.   What is it?\n\n\n\n\nIts a quarter.',
    'https://picsum.photos/441/696',
    '2020-05-09 16:44:56.019'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Which one of rc, rl and rlc circuits which one oscillates charge\n\n\n\n\nRlc',
    NULL,
    '2023-06-26 15:32:52.269'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'You know how the old saying goes: You can take the boy out of Texas, but you can''t stop Chuck Norris from killing you. And that boy.',
    'https://picsum.photos/478/236',
    '2020-04-04 22:17:37.455'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why can’t you trust a balloon? It’s full of hot air',
    NULL,
    '2020-08-03 23:37:36.281'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'alakazam',
    'Pokemon  psychic',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png',
    '2020-04-30 20:03:13.915'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'The name of the only weapon in women''s fencing?\n\n\n\n\nFoil',
    NULL,
    '2023-06-26 23:39:51.211'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'No Legs One Legs Two Legs Three Legs And Four Legs',
    'no legs lays on three legs two legs is by three legs four legs got some\n\n\n\n\na fish lays on a stool a man is eating the fish the cat got the bones',
    NULL,
    '2020-01-03 23:31:13.274'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'dugtrio',
    'Pokemon  ground',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png',
    '2022-07-14 05:22:43.903'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Deskbot 003',
    'Effect Monster card\n\nMachine\nATK 500 / DEF 500\nLevel 3\n\nWhen this card is Normal Summoned: You can Special Summon 1 "Deskbot" monster from your Deck, except "Deskbot 003". Once per turn (Quick Effect): You can target 1 "Deskbot" monster you control; it gains 500 ATK/DEF for each "Deskbot" card you currently control, until the end of this turn.',
    'https://images.ygoprodeck.com/images/cards/75944053.jpg',
    '2023-10-14 08:20:36.270'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Isabel Allende',
    'The fact that I am a writer comes from the experience of being cut away from my roots and living in Venezuela, where I couldn''t find a place for myself, for years and years.',
    NULL,
    '2020-04-17 10:05:47.010'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'wigglytuff',
    'Pokemon  normal fairy',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png',
    '2023-03-28 08:22:00.755'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'muk',
    'Pokemon  poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png',
    '2023-02-24 09:24:58.328'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris made the dinasaurs extinct',
    NULL,
    '2023-03-14 05:33:52.308'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nisl pretium fusce id velit ut tortor pretium vive',
    'Praesent semper feugiat nibh sed pulvinar proin. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Urna molestie at elementum eu facilisis sed odio morbi quis. Adipiscing commodo elit at imperdiet dui accumsan. Ac felis donec et odio pellentesque diam. Sapien pellentesque habitant morbi tristique senectus et netus et. Interdum velit euismod in pellentesque massa placerat. Id diam maecenas ultricies mi eget mauris pharetra et. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Ultricies tristique nulla aliquet enim tortor. Non curabitur gravida arcu ac. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus.\nAliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Quis vel eros donec ac odio tempor orci. Augue eget arcu dictum varius duis at consectetur lorem donec. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Duis at tellus at urna condimentum mattis pellentesque id nibh. Sed nisi lacus sed viverra tellus. Tortor aliquam nulla facilisi cras fermentum odio eu. Vulputate mi sit amet mauris commodo quis imperdiet massa. Vulputate enim nulla aliquet porttitor lacus luctus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Venenatis tellus in metus vulputate eu. Neque sodales ut etiam sit amet. Id interdum velit laoreet id donec ultrices tincidunt arcu. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Viverra vitae congue eu consequat ac. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Volutpat diam ut venenatis tellus in metus vulputate eu. Nibh tellus molestie nunc non.\nNec feugiat nisl pretium fusce id velit. Aliquam ut porttitor leo a diam sollicitudin tempor. Elementum eu facilisis sed odio morbi quis. Aliquet nec ullamcorper sit amet risus nullam. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Diam volutpat commodo sed egestas. Et leo duis ut diam quam nulla porttitor massa id. Justo laoreet sit amet cursus sit. Id aliquet lectus proin nibh. Pretium fusce id velit ut tortor pretium viverra. Enim lobortis scelerisque fermentum dui. Id diam vel quam elementum. Ultrices sagittis orci a scelerisque purus semper eget duis. Pretium viverra suspendisse potenti nullam. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Vel quam elementum pulvinar etiam non quam lacus suspendisse.\n',
    NULL,
    '2021-02-20 21:24:00.509'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris was cast for the first Terminator but was rejected because the cameras kept melting when put in his direction',
    'https://picsum.photos/441/484',
    '2022-04-15 05:01:04.458'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'A man walks into a magic forest and tries to cut down a talking tree. “You can''t cut me down,” the tree complains. “I’m a talking tree!” The man responds, “You may be a talking tree, but you will dialogue.”',
    NULL,
    '2022-10-01 14:22:49.500'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Sky Striker Ace - Kagari',
    'Link Monster card\n\nMachine\nATK 1500 / DEF undefined\nLevel undefined\n\n1 non-FIRE "Sky Striker Ace" monster\nIf this card is Special Summoned: You can target 1 "Sky Striker" Spell in your GY; add it to your hand. Gains 100 ATK for each Spell in your GY. You can only Special Summon "Sky Striker Ace - Kagari(s)" once per turn.',
    'https://images.ygoprodeck.com/images/cards/63288573.jpg',
    '2022-02-08 06:29:34.431'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Praesent semper feugiat nibh sed pulvinar proin. I',
    'Nibh nisl condimentum id venenatis a condimentum vitae sapien. Laoreet sit amet cursus sit. Commodo ullamcorper a lacus vestibulum sed arcu. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Pharetra convallis posuere morbi leo urna. Id volutpat lacus laoreet non curabitur gravida arcu ac. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Lorem mollis aliquam ut porttitor. A arcu cursus vitae congue. Nisl purus in mollis nunc sed id semper. Convallis a cras semper auctor neque. Lectus arcu bibendum at varius. Facilisis sed odio morbi quis commodo odio aenean sed. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Vel orci porta non pulvinar neque laoreet suspendisse. Feugiat nisl pretium fusce id. Adipiscing bibendum est ultricies integer quis auctor.\nRisus sed vulputate odio ut enim blandit volutpat. Faucibus turpis in eu mi bibendum neque. Morbi tristique senectus et netus et malesuada fames ac. Lacinia quis vel eros donec. Est velit egestas dui id ornare arcu. Commodo viverra maecenas accumsan lacus. Turpis in eu mi bibendum neque egestas congue. Fermentum posuere urna nec tincidunt. Sit amet nisl purus in mollis. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Justo eget magna fermentum iaculis eu non diam. Proin nibh nisl condimentum id venenatis. Viverra maecenas accumsan lacus vel facilisis volutpat est. Rhoncus dolor purus non enim praesent elementum facilisis leo. Urna id volutpat lacus laoreet non curabitur gravida. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fermentum leo vel orci porta.\nUt ornare lectus sit amet est placerat. Eget nulla facilisi etiam dignissim diam quis enim. Penatibus et magnis dis parturient montes. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Odio pellentesque diam volutpat commodo. Duis ut diam quam nulla porttitor massa id. Diam donec adipiscing tristique risus. Sed blandit libero volutpat sed cras ornare. Tincidunt lobortis feugiat vivamus at augue eget arcu. Arcu dui vivamus arcu felis bibendum ut tristique. Dapibus ultrices in iaculis nunc sed augue lacus. Risus nullam eget felis eget nunc lobortis.\n',
    NULL,
    '2021-08-17 01:36:21.283'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Peter Agre',
    'My brother Jim and I spent many wonderful summers working on dairy farms in Wisconsin owned by Mom''s cousins, and as members of our local Boy Scout troop.',
    NULL,
    '2021-01-13 21:34:33.461'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Generals:- Who Took Part In The Franco Prussian War Of 1870And Commited Suicide In Belgium In 1891 \n\n\n\n\nGeorges Boulanger',
    NULL,
    '2020-01-23 13:19:10.105'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'growlithe',
    'Pokemon  fire',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png',
    '2020-10-06 00:43:52.856'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'zapdos',
    'Pokemon  electric flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png',
    '2023-05-15 16:47:14.785'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What do you call a fly without wings? A walk.',
    NULL,
    '2020-03-09 15:43:02.840'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why did the employee get fired from the keyboard factory? He wasn’t putting in enough shifts.',
    NULL,
    '2022-10-14 08:46:23.894'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris lost his virginity before his dad',
    NULL,
    '2020-12-13 22:41:44.926'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Posuere ac ut consequat semper viverra. Viverra vi',
    'Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Massa enim nec dui nunc. Netus et malesuada fames ac turpis egestas. Gravida rutrum quisque non tellus orci. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Amet aliquam id diam maecenas ultricies mi eget mauris. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Ultricies tristique nulla aliquet enim. Urna et pharetra pharetra massa. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit.\nSed elementum tempus egestas sed sed risus pretium quam. Interdum varius sit amet mattis vulputate enim nulla. Orci porta non pulvinar neque laoreet suspendisse. Urna porttitor rhoncus dolor purus non enim praesent. Elit sed vulputate mi sit amet mauris commodo. Sit amet dictum sit amet. Elementum integer enim neque volutpat ac tincidunt. A erat nam at lectus urna duis convallis. Convallis aenean et tortor at risus viverra adipiscing at in. Mattis vulputate enim nulla aliquet porttitor lacus. Sagittis nisl rhoncus mattis rhoncus urna. Sit amet massa vitae tortor. Phasellus vestibulum lorem sed risus ultricies. Habitant morbi tristique senectus et netus et. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Mi eget mauris pharetra et ultrices neque. Sodales ut eu sem integer.\nViverra aliquet eget sit amet tellus. Adipiscing at in tellus integer feugiat scelerisque. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Mauris ultrices eros in cursus. Dolor purus non enim praesent. Quam viverra orci sagittis eu volutpat. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Lobortis feugiat vivamus at augue. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Sed sed risus pretium quam. Integer malesuada nunc vel risus. Egestas congue quisque egestas diam in arcu. Elementum nibh tellus molestie nunc non blandit massa enim nec.\nAliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Quis vel eros donec ac odio tempor orci. Augue eget arcu dictum varius duis at consectetur lorem donec. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Duis at tellus at urna condimentum mattis pellentesque id nibh. Sed nisi lacus sed viverra tellus. Tortor aliquam nulla facilisi cras fermentum odio eu. Vulputate mi sit amet mauris commodo quis imperdiet massa. Vulputate enim nulla aliquet porttitor lacus luctus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Venenatis tellus in metus vulputate eu. Neque sodales ut etiam sit amet. Id interdum velit laoreet id donec ultrices tincidunt arcu. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Viverra vitae congue eu consequat ac. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Volutpat diam ut venenatis tellus in metus vulputate eu. Nibh tellus molestie nunc non.\n',
    NULL,
    '2023-07-26 05:01:21.014'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'WHAT AM I',
    'WHEN YOU KMOW WHAT I AM I AM SOMETHING BUT WHEN YOU DON''T KNOW WHAT I AM THEN I AM NOTHING. WHAT AM I?\n\n\n\n\nI AM A RIDDLE',
    NULL,
    '2023-08-22 03:52:01.886'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris grinds his coffee with his teeth and boils the water with his own rage.',
    NULL,
    '2020-12-11 19:43:38.709'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Launcher Spider',
    'Normal Monster card\n\nMachine\nATK 2200 / DEF 2500\nLevel 7\n\nA mechanical spider with rocket launchers capable of random fire.',
    'https://images.ygoprodeck.com/images/cards/87322377.jpg',
    '2021-02-26 19:02:33.140'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from John Ruskin',
    'Man''s only true happiness is to live in hope of something to be won by him. Reverence something to be worshipped by him, and love something to be cherished by him, forever.',
    NULL,
    '2019-12-15 14:47:23.852'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Aliquam sem fringilla ut morbi tincidunt augue int',
    'Mi tempus imperdiet nulla malesuada pellentesque. Ut sem nulla pharetra diam sit amet. Eu consequat ac felis donec et. Ac felis donec et odio pellentesque diam volutpat. Vulputate sapien nec sagittis aliquam malesuada bibendum. Commodo viverra maecenas accumsan lacus vel. Ut sem viverra aliquet eget sit. Semper quis lectus nulla at volutpat diam ut. Ultricies integer quis auctor elit sed. Nulla facilisi morbi tempus iaculis urna. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Diam ut venenatis tellus in metus vulputate eu. Ut consequat semper viverra nam libero justo. Facilisi morbi tempus iaculis urna id. Tortor vitae purus faucibus ornare suspendisse.\nDignissim convallis aenean et tortor at risus viverra adipiscing at. Lacinia quis vel eros donec ac odio tempor orci. Id porta nibh venenatis cras. Nunc sed augue lacus viverra vitae congue eu consequat. Nisi porta lorem mollis aliquam. Pellentesque habitant morbi tristique senectus. Bibendum est ultricies integer quis auctor elit sed. Posuere urna nec tincidunt praesent semper. Id donec ultrices tincidunt arcu non sodales. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Nibh mauris cursus mattis molestie a iaculis at. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Ut porttitor leo a diam. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Magna fringilla urna porttitor rhoncus dolor purus non enim. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed.\nA iaculis at erat pellentesque adipiscing commodo elit. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Mattis nunc sed blandit libero. Eu lobortis elementum nibh tellus molestie nunc non blandit. Eget duis at tellus at urna condimentum. Sagittis aliquam malesuada bibendum arcu vitae elementum. Felis imperdiet proin fermentum leo vel orci. Sed sed risus pretium quam vulputate. Sed risus pretium quam vulputate dignissim suspendisse in. Fames ac turpis egestas maecenas pharetra convallis posuere. Lobortis scelerisque fermentum dui faucibus in ornare quam. Aenean pharetra magna ac placerat vestibulum lectus mauris. Aliquet sagittis id consectetur purus. Netus et malesuada fames ac. Habitant morbi tristique senectus et. Habitasse platea dictumst vestibulum rhoncus. Egestas sed sed risus pretium quam vulputate. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus.\nEt pharetra pharetra massa massa ultricies mi quis hendrerit. Non odio euismod lacinia at quis risus sed vulputate. Vulputate sapien nec sagittis aliquam. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Tristique et egestas quis ipsum. Dui ut ornare lectus sit amet. Ac feugiat sed lectus vestibulum mattis. Enim tortor at auctor urna nunc. Feugiat sed lectus vestibulum mattis ullamcorper. Eget mauris pharetra et ultrices neque. Euismod elementum nisi quis eleifend quam. Volutpat odio facilisis mauris sit amet massa. Ultricies lacus sed turpis tincidunt id aliquet risus. Egestas diam in arcu cursus euismod quis.\n',
    'https://picsum.photos/171/263',
    '2020-07-08 00:05:50.752'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'scyther',
    'Pokemon  bug flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png',
    '2020-02-03 11:55:42.670'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from George Bernard Shaw',
    'Beauty is all very well at first sight but who ever looks at it when it has been in the house three days?',
    'https://picsum.photos/579/375',
    '2021-04-29 13:14:46.352'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'How do you follow Will Smith in the Mud? Follow the fresh prints.',
    NULL,
    '2023-04-12 00:39:10.148'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'electabuzz',
    'Pokemon  electric',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png',
    '2021-09-30 07:12:45.906'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'The brand Seven for All Mankind is best known for its high-end brand of what?\n\n\n\n\nJeans',
    'https://picsum.photos/135/182',
    '2021-05-30 05:23:38.940'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What is a triangle whose sides are all of different lengths\n\n\n\n\nScalene',
    'https://picsum.photos/450/696',
    '2022-01-22 03:06:32.541'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Billy Gardell',
    'The quickest way to defuse fear or insecurity or anger is usually humor. I think comics figure that out quickly, and, once you figure it out, you think, ''Hey, if I can do this and get paid, that would be kind of cool.''',
    NULL,
    '2023-08-23 14:31:50.911'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'How do you follow Will Smith in the Mud? Follow the fresh prints.',
    NULL,
    '2023-02-19 04:52:53.097'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'The Hardest Riddle Ever!!',
    'it is greater than god  more evil than the devil poor people have it  rich people need it if you eat it you will die\n\n\n\n\nnothing',
    'https://picsum.photos/442/577',
    '2021-11-07 21:21:14.948'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Girl_girl',
    'What has keys but no locks,  & has space but no rooms?\n\n\n\n\nA computer.',
    'https://picsum.photos/388/360',
    '2023-02-01 21:10:08.349'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    '',
    'there is a guy going to the bahamas. this guy has 7 wives each wive has 7 cats each ct has 7 kittens each kitten has 7 ballsto play with. How many things are going to the Bahamas?\n\n\n\n\none',
    NULL,
    '2022-02-09 17:17:31.997'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Until the dinner plate was introduced in the 15th century, it was customary to eat on what\n\n\n\n\nBread',
    NULL,
    '2023-11-08 18:43:00.593'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Megalith Portal',
    'Spell Card card\n\n\nThe first time each Ritual Summoned monster would be destroyed by battle each turn, it is not destroyed. If a "Megalith" monster is Special Summoned (except during the Damage Step): You can target 1 Ritual Monster in your GY; add it to your hand. You can only use this effect of "Megalith Portal" once per turn.',
    'https://images.ygoprodeck.com/images/cards/84504242.jpg',
    '2020-03-15 04:38:51.440'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Horse Or Unicorn',
    'there is a person outside looking at his horses until he saw a strange looking horse and said it was a unicorn.He saw the ceature closer and it ran away from him andhe knew it was...\n\n\n\n\nA horse. (because a house was far and looked like a horn)',
    NULL,
    '2021-04-25 03:18:27.017'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Rose, Warrior of Revenge',
    'Tuner Monster card\n\nWarrior\nATK 1600 / DEF 600\nLevel 4\n\nWhen this card inflicts battle damage to your opponent: Inflict 300 damage to your opponent.',
    'https://images.ygoprodeck.com/images/cards/1557341.jpg',
    '2020-12-22 14:09:12.787'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Island',
    'What letter of the alphabet is like an island?\n\n\n\n\n''T'' (They''re both in the middle of waTer''',
    'https://picsum.photos/144/332',
    '2022-11-06 15:37:34.017'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris prefers his Cobb Salad served with cocklebur croutons.',
    NULL,
    '2023-02-12 22:35:28.815'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Mauris commodo quis imperdiet massa tincidunt nunc',
    'Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Tristique senectus et netus et malesuada fames ac. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut. Eros in cursus turpis massa tincidunt. Purus viverra accumsan in nisl nisi scelerisque eu. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Nam aliquam sem et tortor. Sit amet purus gravida quis blandit turpis. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Amet massa vitae tortor condimentum.\nDignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Sit amet nulla facilisi morbi tempus. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Sodales neque sodales ut etiam sit amet nisl purus. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Nisi lacus sed viverra tellus in hac habitasse. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Tincidunt eget nullam non nisi. Cursus risus at ultrices mi. Volutpat est velit egestas dui id ornare. Sagittis nisl rhoncus mattis rhoncus. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Fermentum leo vel orci porta non pulvinar neque. Quisque sagittis purus sit amet volutpat. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Porttitor massa id neque aliquam vestibulum morbi blandit. At quis risus sed vulputate odio. Nisi vitae suscipit tellus mauris a diam maecenas sed enim.\nCras semper auctor neque vitae tempus quam pellentesque nec. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Eu augue ut lectus arcu. Purus sit amet volutpat consequat mauris. Amet facilisis magna etiam tempor orci eu lobortis. Diam donec adipiscing tristique risus nec feugiat in fermentum. Consequat nisl vel pretium lectus quam id. Vivamus at augue eget arcu dictum varius duis at. Rutrum quisque non tellus orci. Felis eget velit aliquet sagittis id consectetur. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Massa sed elementum tempus egestas sed sed risus pretium. Tristique senectus et netus et malesuada fames. Leo vel fringilla est ullamcorper eget nulla facilisi. Mauris in aliquam sem fringilla ut morbi. Nibh tellus molestie nunc non blandit. Egestas sed tempus urna et pharetra pharetra massa massa. Malesuada nunc vel risus commodo viverra maecenas. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis.\n',
    'https://picsum.photos/613/551',
    '2022-10-04 12:06:50.145'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Posuere ac ut consequat semper viverra. Viverra vi',
    'Ut eu sem integer vitae justo eget magna. Praesent tristique magna sit amet purus. Quis auctor elit sed vulputate mi. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Aenean euismod elementum nisi quis eleifend quam. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Nec nam aliquam sem et. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Tellus in metus vulputate eu.\n',
    NULL,
    '2020-04-24 17:17:42.101'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dignissim diam quis enim lobortis scelerisque ferm',
    'Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Quis vel eros donec ac odio tempor orci. Augue eget arcu dictum varius duis at consectetur lorem donec. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Duis at tellus at urna condimentum mattis pellentesque id nibh. Sed nisi lacus sed viverra tellus. Tortor aliquam nulla facilisi cras fermentum odio eu. Vulputate mi sit amet mauris commodo quis imperdiet massa. Vulputate enim nulla aliquet porttitor lacus luctus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Venenatis tellus in metus vulputate eu. Neque sodales ut etiam sit amet. Id interdum velit laoreet id donec ultrices tincidunt arcu. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Viverra vitae congue eu consequat ac. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Volutpat diam ut venenatis tellus in metus vulputate eu. Nibh tellus molestie nunc non.\nLectus urna duis convallis convallis tellus id interdum. Porttitor leo a diam sollicitudin tempor id eu. Sit amet aliquam id diam maecenas. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Fermentum odio eu feugiat pretium nibh ipsum consequat. Purus semper eget duis at tellus at. Arcu bibendum at varius vel pharetra vel turpis. Suscipit tellus mauris a diam maecenas sed enim. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Faucibus interdum posuere lorem ipsum. Turpis massa tincidunt dui ut ornare lectus sit amet est. Egestas maecenas pharetra convallis posuere morbi leo. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Amet venenatis urna cursus eget nunc scelerisque. Hac habitasse platea dictumst quisque sagittis purus sit. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Non blandit massa enim nec dui. Mus mauris vitae ultricies leo integer malesuada. Sed felis eget velit aliquet sagittis id consectetur.\nSed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Massa enim nec dui nunc. Netus et malesuada fames ac turpis egestas. Gravida rutrum quisque non tellus orci. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Amet aliquam id diam maecenas ultricies mi eget mauris. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Ultricies tristique nulla aliquet enim. Urna et pharetra pharetra massa. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit.\nRisus sed vulputate odio ut enim blandit volutpat. Faucibus turpis in eu mi bibendum neque. Morbi tristique senectus et netus et malesuada fames ac. Lacinia quis vel eros donec. Est velit egestas dui id ornare arcu. Commodo viverra maecenas accumsan lacus. Turpis in eu mi bibendum neque egestas congue. Fermentum posuere urna nec tincidunt. Sit amet nisl purus in mollis. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Justo eget magna fermentum iaculis eu non diam. Proin nibh nisl condimentum id venenatis. Viverra maecenas accumsan lacus vel facilisis volutpat est. Rhoncus dolor purus non enim praesent elementum facilisis leo. Urna id volutpat lacus laoreet non curabitur gravida. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fermentum leo vel orci porta.\n',
    NULL,
    '2020-08-02 14:34:56.267'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    '-ologies: Study of the sound system of languages; the analysis and classification of phenomes\n\n\n\n\nPhonology',
    NULL,
    '2022-07-24 14:22:49.547'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from V. S. Pritchett',
    'The secret of happiness is to find a congenial monotony.',
    NULL,
    '2020-04-26 19:18:10.353'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Writing with light is the literal meaning of what word from Greek\n\n\n\n\nPhotography',
    NULL,
    '2020-03-25 03:08:46.512'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Gleipnir, the Fetters of Fenrir',
    'Trap Card card\n\n\nAdd 1 "Nordic" monster from your Deck to your hand.',
    'https://images.ygoprodeck.com/images/cards/14464864.jpg',
    '2020-12-29 20:35:10.692'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'dragonite',
    'Pokemon  dragon flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png',
    '2021-03-05 19:09:51.091'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from P. J. O''Rourke',
    'Ideology, politics and journalism, which luxuriate in failure, are impotent in the face of hope and joy.',
    NULL,
    '2020-07-06 14:57:18.060'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'machop',
    'Pokemon  fighting',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png',
    '2023-06-05 01:19:05.441'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nunc sed velit dignissim sodales ut eu sem integer',
    'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Elit eget gravida cum sociis natoque penatibus et. Aliquet nibh praesent tristique magna sit amet purus gravida. Sodales ut eu sem integer vitae. Lectus arcu bibendum at varius vel. Eget mi proin sed libero. Turpis egestas sed tempus urna et pharetra. Ut tellus elementum sagittis vitae et leo. Odio ut enim blandit volutpat. Massa tincidunt dui ut ornare lectus sit amet est placerat. Cursus mattis molestie a iaculis. Arcu dictum varius duis at consectetur lorem donec. In massa tempor nec feugiat nisl pretium.\nEget felis eget nunc lobortis mattis aliquam faucibus purus. Ipsum dolor sit amet consectetur adipiscing elit. Purus in mollis nunc sed id semper. Imperdiet sed euismod nisi porta lorem mollis aliquam. Auctor neque vitae tempus quam. Vitae tempus quam pellentesque nec. Auctor augue mauris augue neque. Mattis aliquam faucibus purus in massa tempor nec feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Massa enim nec dui nunc mattis enim. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Elementum facilisis leo vel fringilla est ullamcorper eget nulla.\nVitae auctor eu augue ut lectus arcu bibendum at varius. Massa tincidunt dui ut ornare lectus sit amet est. Donec ac odio tempor orci dapibus ultrices in. Semper quis lectus nulla at volutpat. Est sit amet facilisis magna etiam tempor. Lacus sed viverra tellus in hac habitasse platea. Ultrices neque ornare aenean euismod elementum nisi. Elit scelerisque mauris pellentesque pulvinar pellentesque. Elit sed vulputate mi sit. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Feugiat in ante metus dictum at tempor commodo ullamcorper. Condimentum lacinia quis vel eros donec ac odio tempor.\n',
    'https://picsum.photos/130/112',
    '2021-08-30 09:47:39.917'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nibh nisl condimentum id venenatis a condimentum v',
    'Ut eu sem integer vitae justo eget magna. Praesent tristique magna sit amet purus. Quis auctor elit sed vulputate mi. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Aenean euismod elementum nisi quis eleifend quam. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Nec nam aliquam sem et. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Tellus in metus vulputate eu.\n',
    NULL,
    '2020-06-04 21:05:12.076'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Someone Who Climb A Ladder About 10m',
    'A BOY CLIMB A 10M LADDER AND FELL ON THE FLOOR AND DO GOT INJURED.HOW CAN THAT BE?\n\n\n\n\nCAUSE THERE IS POLICEMAN AND AMBULANCE SAVE THE BOY.',
    'https://picsum.photos/280/471',
    '2020-07-09 00:04:01.406'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Lord Of The Ring!!!!!!!!!!!',
    'a man lived on the top floor of an appartment building. every day when he left to go to work he rode the elevater all the way to the lobby but every day when he came back from work he would ride the elevator half way then take the stairs the rest of the way. why is this?\n\n\n\n\nthe man rode the elevator half way because he was a hobbit and so the highest button he could reach was half way.',
    'https://picsum.photos/148/454',
    '2023-02-12 14:36:18.554'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'My dad died because he couldn’t remember his blood type. He kept insisting we “be positive,” but it’s just so hard without him.',
    NULL,
    '2022-03-24 21:42:00.542'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Which of these movie stars named "Sean" is a woman?\n\n\n\n\nSean Young',
    NULL,
    '2022-04-23 23:10:21.367'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Geomathmech Magma',
    'Synchro Tuner Monster card\n\nCyberse\nATK 2500 / DEF 0\nLevel 8\n\n1 Tuner + 1+ non-Tuner monsters\nWhen this card destroys a monster by battle: You can target up to 2 cards your opponent controls; destroy them. If this card is destroyed by battle, or if this card in its owner''s possession is destroyed by an opponent''s card effect: You can add 1 "Mathmech" Spell/Trap from your Deck to your hand. You can only use each effect of "Geomathmech Magma" once per turn.',
    'https://images.ygoprodeck.com/images/cards/15248594.jpg',
    '2021-11-09 17:13:13.373'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'lickitung',
    'Pokemon  normal',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png',
    '2022-09-22 19:42:03.728'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Revendread Evolution',
    'Spell Card card\n\n\nThis card can be used to Ritual Summon any "Vendread" Ritual Monster from your hand or GY. You must also Tribute monsters from your hand or field, and/or send 1 "Vendread" monster from your Deck to the GY, whose total Levels equal the Level of the Ritual Monster you Ritual Summon. The Ritual Summoned monster is destroyed during the End Phase of the next turn. You can only activate 1 "Revendread Evolution" per turn.',
    'https://images.ygoprodeck.com/images/cards/7986397.jpg',
    '2020-08-23 10:37:46.429'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    '6 Girls And A Brother',
    'A mother has 6 girls and each of them has a brother. How many children are there?\n\n\n\n\n7. Each girl has the same brother.',
    NULL,
    '2022-02-22 09:09:27.329'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Tincidunt vitae semper quis lectus. Consectetur ad',
    'Eget sit amet tellus cras adipiscing enim eu turpis. Amet facilisis magna etiam tempor. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Purus viverra accumsan in nisl nisi. Vitae elementum curabitur vitae nunc sed velit. Sed lectus vestibulum mattis ullamcorper velit. Consequat interdum varius sit amet mattis. Amet justo donec enim diam. Sed vulputate odio ut enim blandit volutpat maecenas. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Habitant morbi tristique senectus et netus et malesuada. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Congue mauris rhoncus aenean vel elit scelerisque. Id neque aliquam vestibulum morbi blandit cursus. Nunc sed augue lacus viverra vitae congue eu consequat ac. Leo vel orci porta non pulvinar neque. Consequat interdum varius sit amet mattis.\n',
    'https://picsum.photos/599/650',
    '2023-09-19 04:12:27.745'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from John Tyndall',
    'Knowledge once gained casts a light beyond its own immediate boundaries.',
    NULL,
    '2021-02-01 17:27:46.233'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Is Belfast in Northern or Southern Ireland?\n\n\n\n\nNorthern',
    NULL,
    '2022-09-22 22:18:57.413'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris ended world hunger with one knuckle sandwich.',
    NULL,
    '2022-12-31 15:02:17.144'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Banisher of the Light',
    'Effect Monster card\n\nFairy\nATK 100 / DEF 2000\nLevel 3\n\nAny card sent to the Graveyard is banished instead.',
    'https://images.ygoprodeck.com/images/cards/61528025.jpg',
    '2023-07-05 10:54:21.558'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from George Bernard Shaw',
    'There is no subject on which more dangerous nonsense is talked and thought than marriage.',
    NULL,
    '2021-09-17 04:33:04.837'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris can eat breakfast in McDonalds after 11:00am',
    NULL,
    '2021-02-18 05:34:40.653'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Leo vel orci porta non pulvinar neque. Porta nibh ',
    'Ac auctor augue mauris augue neque gravida in fermentum et. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Molestie at elementum eu facilisis sed odio morbi quis. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Cursus mattis molestie a iaculis. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Ultrices neque ornare aenean euismod elementum. Eu facilisis sed odio morbi. Arcu dui vivamus arcu felis. Aliquam etiam erat velit scelerisque in dictum. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Pellentesque nec nam aliquam sem. Amet volutpat consequat mauris nunc congue. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean sed adipiscing diam donec adipiscing tristique. Tellus pellentesque eu tincidunt tortor aliquam. Sem nulla pharetra diam sit amet nisl suscipit.\nDolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Elit eget gravida cum sociis natoque penatibus et. Aliquet nibh praesent tristique magna sit amet purus gravida. Sodales ut eu sem integer vitae. Lectus arcu bibendum at varius vel. Eget mi proin sed libero. Turpis egestas sed tempus urna et pharetra. Ut tellus elementum sagittis vitae et leo. Odio ut enim blandit volutpat. Massa tincidunt dui ut ornare lectus sit amet est placerat. Cursus mattis molestie a iaculis. Arcu dictum varius duis at consectetur lorem donec. In massa tempor nec feugiat nisl pretium.\n',
    NULL,
    '2023-02-19 05:43:54.412'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Vassal Token',
    'Token card\n\nThunder\nATK 800 / DEF 1000\nLevel 1\n\nSpecial Summoned with the effect of "Mithra the Thunder Vassal".',
    'https://images.ygoprodeck.com/images/cards/22404676.jpg',
    '2021-06-24 23:08:00.273'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'A change in frequency observed when light is scattered in a transparent material\n\n\n\n\nRaman Effect',
    NULL,
    '2023-10-13 08:55:01.513'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Purus in mollis nunc sed id semper. Suspendisse fa',
    'Consectetur a erat nam at lectus. Amet justo donec enim diam vulputate ut pharetra. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Porttitor rhoncus dolor purus non enim. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Augue ut lectus arcu bibendum. Lectus proin nibh nisl condimentum id.\nEget sit amet tellus cras adipiscing enim eu. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Purus in massa tempor nec feugiat nisl pretium fusce. Eu feugiat pretium nibh ipsum consequat nisl. Purus in mollis nunc sed. Turpis massa sed elementum tempus egestas sed. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Est lorem ipsum dolor sit amet. Fringilla phasellus faucibus scelerisque eleifend donec. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.\nAliquam sem fringilla ut morbi tincidunt augue interdum velit. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Tristique senectus et netus et malesuada fames ac. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut. Eros in cursus turpis massa tincidunt. Purus viverra accumsan in nisl nisi scelerisque eu. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Nam aliquam sem et tortor. Sit amet purus gravida quis blandit turpis. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Amet massa vitae tortor condimentum.\nMi eget mauris pharetra et ultrices neque. Nunc non blandit massa enim nec. Velit scelerisque in dictum non consectetur a. Enim sed faucibus turpis in eu mi bibendum neque. In egestas erat imperdiet sed. Ac auctor augue mauris augue neque gravida in fermentum. Vitae congue eu consequat ac felis donec. Feugiat sed lectus vestibulum mattis. Nibh venenatis cras sed felis eget velit aliquet. Mauris sit amet massa vitae tortor condimentum lacinia quis. Orci sagittis eu volutpat odio facilisis mauris sit amet. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Purus viverra accumsan in nisl. Consequat semper viverra nam libero justo laoreet sit amet. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Nec dui nunc mattis enim ut tellus elementum. Quis auctor elit sed vulputate mi sit. Feugiat nibh sed pulvinar proin gravida.\n',
    NULL,
    '2022-09-04 11:52:07.605'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What do you call a fake noodle? An Impasta.',
    'https://picsum.photos/145/449',
    '2020-06-27 10:15:19.871'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What Type Of Vegetable Is Used In A "Dubarry" Soup\n\n\n\n\nCauliflower',
    NULL,
    '2022-04-18 22:22:19.105'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Cunning of the Six Samurai',
    'Spell Card card\n\n\nSend 1 face-up "Six Samurai" monster you control to the Graveyard, then target 1 "Six Samurai" monster in either player''s Graveyard; Special Summon that target.',
    'https://images.ygoprodeck.com/images/cards/27178262.jpg',
    '2022-08-05 08:53:22.483'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'For Chuck Norris, pain truly is the cleanser.',
    NULL,
    '2023-02-18 15:11:30.330'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Reptilianne Lamia',
    'Tuner Monster card\n\n\nIf this card is in your hand and all monsters you control are face-up Reptile monsters (min. 1): You can target 1 face-up monster your opponent controls; change its ATK to 0, and if you do, Special Summon this card, then take damage equal to that monster''s original ATK. If this card is sent to the GY as Synchro Material: You can target up to 2 face-up monsters on the field; change their ATK to 0. You can only use 1 "Reptilianne Lamia" effect per turn, and only once that turn.',
    'https://images.ygoprodeck.com/images/cards/57647597.jpg',
    '2023-03-09 17:26:49.897'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'How Many Ducks',
    'ok if there are 2 ducks ahead of a duck and 2 ducks behind a duck and 1 duck in the middle how many are there.\n\n\n\n\n3',
    NULL,
    '2023-01-02 00:39:48.550'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Ut eu sem integer vitae justo eget magna. Praesent',
    'Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Sagittis id consectetur purus ut faucibus pulvinar elementum. Accumsan tortor posuere ac ut. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Purus in massa tempor nec feugiat nisl. Felis eget nunc lobortis mattis. Amet massa vitae tortor condimentum lacinia quis vel. Sed cras ornare arcu dui vivamus arcu. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Integer vitae justo eget magna fermentum iaculis eu. Lorem mollis aliquam ut porttitor. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Vulputate dignissim suspendisse in est ante. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Nulla facilisi nullam vehicula ipsum a arcu cursus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum.\n',
    NULL,
    '2021-05-21 06:51:08.604'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'metapod',
    'Pokemon  bug',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
    '2023-03-09 00:18:09.968'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris can tear a hole in the very fabric of space-time by simply rubbing his hands together.',
    NULL,
    '2021-12-01 04:22:27.489'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why did the Invisible Man turn down a job offer? He couldn’t see himself doing it.',
    NULL,
    '2021-07-27 12:33:59.429'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'voltorb',
    'Pokemon  electric',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png',
    '2022-08-20 20:34:53.572'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris can place his handprint in dry cement.',
    NULL,
    '2021-03-19 21:41:22.509'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'If paper beats rock, rock beats scissors, and scissors beats paper, what beats all 3 at the same time? Answer: Chuck Norris.',
    NULL,
    '2019-12-05 17:57:20.207'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'wartortle',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
    '2023-10-21 13:17:15.792'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dolor sit amet, consectetur adipiscing elit, sed d',
    'Blandit volutpat maecenas volutpat blandit. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Aliquet enim tortor at auctor urna nunc id cursus metus. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Enim ut tellus elementum sagittis vitae et leo. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Elementum integer enim neque volutpat ac tincidunt vitae. Id leo in vitae turpis massa sed elementum. Volutpat sed cras ornare arcu dui vivamus arcu felis. Suspendisse in est ante in. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Elit eget gravida cum sociis natoque. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Purus faucibus ornare suspendisse sed. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Ac turpis egestas integer eget aliquet.\nUt ornare lectus sit amet est placerat. Eget nulla facilisi etiam dignissim diam quis enim. Penatibus et magnis dis parturient montes. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Odio pellentesque diam volutpat commodo. Duis ut diam quam nulla porttitor massa id. Diam donec adipiscing tristique risus. Sed blandit libero volutpat sed cras ornare. Tincidunt lobortis feugiat vivamus at augue eget arcu. Arcu dui vivamus arcu felis bibendum ut tristique. Dapibus ultrices in iaculis nunc sed augue lacus. Risus nullam eget felis eget nunc lobortis.\nLeo vel orci porta non pulvinar neque. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Consectetur libero id faucibus nisl tincidunt eget. Morbi tristique senectus et netus. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Sit amet nulla facilisi morbi tempus iaculis urna. Suscipit tellus mauris a diam maecenas. In aliquam sem fringilla ut. Tortor at risus viverra adipiscing. Scelerisque eleifend donec pretium vulputate sapien nec. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Mi tempus imperdiet nulla malesuada pellentesque elit. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Nam at lectus urna duis convallis.\nDolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Elit eget gravida cum sociis natoque penatibus et. Aliquet nibh praesent tristique magna sit amet purus gravida. Sodales ut eu sem integer vitae. Lectus arcu bibendum at varius vel. Eget mi proin sed libero. Turpis egestas sed tempus urna et pharetra. Ut tellus elementum sagittis vitae et leo. Odio ut enim blandit volutpat. Massa tincidunt dui ut ornare lectus sit amet est placerat. Cursus mattis molestie a iaculis. Arcu dictum varius duis at consectetur lorem donec. In massa tempor nec feugiat nisl pretium.\n',
    NULL,
    '2020-01-27 08:00:48.737'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Barbara Bush',
    'Life has changed enormously, and I hope - I hope more people read good things.',
    NULL,
    '2019-11-29 05:24:32.308'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'You Cant Say Yes!!!!',
    'what question can you never say yes to you must always say no?\n\n\n\n\nare you asleep?',
    'https://picsum.photos/647/271',
    '2019-11-23 16:15:48.833'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Bob Hope',
    'I love to go to Washington - if only to be near my money.',
    'https://picsum.photos/163/399',
    '2023-01-02 03:05:39.030'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I wanted to go on a diet, but I feel like I have way too much on my plate right now.',
    'https://picsum.photos/562/156',
    '2019-11-21 12:37:31.670'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Eget sit amet tellus cras adipiscing enim eu turpi',
    'Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Tristique senectus et netus et malesuada fames ac. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut. Eros in cursus turpis massa tincidunt. Purus viverra accumsan in nisl nisi scelerisque eu. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Nam aliquam sem et tortor. Sit amet purus gravida quis blandit turpis. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Amet massa vitae tortor condimentum.\nPraesent semper feugiat nibh sed pulvinar proin. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Urna molestie at elementum eu facilisis sed odio morbi quis. Adipiscing commodo elit at imperdiet dui accumsan. Ac felis donec et odio pellentesque diam. Sapien pellentesque habitant morbi tristique senectus et netus et. Interdum velit euismod in pellentesque massa placerat. Id diam maecenas ultricies mi eget mauris pharetra et. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Ultricies tristique nulla aliquet enim tortor. Non curabitur gravida arcu ac. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus.\n',
    NULL,
    '2021-03-13 22:37:42.367'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Jason Reitman',
    'I don''t want to make films that give you the answer. If there is a message to my films - and I hope there isn''t - it''s to be open-minded.',
    NULL,
    '2021-07-12 07:47:50.660'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Prank-Kids Battle Butler',
    'Fusion Monster card\n\nThunder\nATK 3000 / DEF 3000\nLevel 10\n\n"Prank-Kids Lampsies" + "Prank-Kids Dropsies" + "Prank-Kids Fansies"\nMust be Fusion Summoned. (Quick Effect): You can Tribute this card; destroy all monsters your opponent controls. If this card in your possession is sent to your GY by your opponent''s card: You can target 1 non-Fusion Monster in your GY; Special Summon it. You can only use this effect of "Prank-Kids Battle Butler" once per turn.',
    'https://images.ygoprodeck.com/images/cards/81997228.jpg',
    '2023-11-03 10:49:31.339'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What do you call a beehive without an exit? Unbelievable.',
    NULL,
    '2020-04-01 15:43:57.292'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Since 1940, the year Chuck Norris was born, roundhouse-kick related deaths have increased 13,000 percent.',
    NULL,
    '2021-11-23 11:26:27.833'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'rattata',
    'Pokemon  normal',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
    '2021-09-19 02:16:14.420'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'nidoran-f',
    'Pokemon  poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png',
    '2023-01-30 17:11:39.660'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'yea whatever colten you would know Chuck Norris thing looks like wouldnt ya',
    NULL,
    '2020-06-23 04:26:09.255'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Pac-Man was based on Chuck Norris. They both eat souls.',
    NULL,
    '2023-06-22 15:31:01.694'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'kangaskhan',
    'Pokemon  normal',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png',
    '2021-02-15 05:39:13.868'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Eget sit amet tellus cras adipiscing enim eu. Dui ',
    'Ut ornare lectus sit amet est placerat. Eget nulla facilisi etiam dignissim diam quis enim. Penatibus et magnis dis parturient montes. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Odio pellentesque diam volutpat commodo. Duis ut diam quam nulla porttitor massa id. Diam donec adipiscing tristique risus. Sed blandit libero volutpat sed cras ornare. Tincidunt lobortis feugiat vivamus at augue eget arcu. Arcu dui vivamus arcu felis bibendum ut tristique. Dapibus ultrices in iaculis nunc sed augue lacus. Risus nullam eget felis eget nunc lobortis.\nPosuere ac ut consequat semper viverra. Viverra vitae congue eu consequat. Enim nunc faucibus a pellentesque. Urna cursus eget nunc scelerisque. Eu augue ut lectus arcu bibendum at varius vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Sed enim ut sem viverra. Sed enim ut sem viverra aliquet eget sit amet. Molestie nunc non blandit massa enim nec. Et molestie ac feugiat sed lectus. Lacinia quis vel eros donec ac odio tempor orci. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Orci sagittis eu volutpat odio facilisis. Est ullamcorper eget nulla facilisi etiam. Nibh sit amet commodo nulla facilisi nullam. Egestas diam in arcu cursus euismod quis viverra. Luctus accumsan tortor posuere ac ut consequat semper viverra. Tristique risus nec feugiat in fermentum posuere. Facilisi cras fermentum odio eu. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo.\n',
    'https://picsum.photos/465/597',
    '2021-01-14 21:43:33.896'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nibh sit amet commodo nulla. Placerat vestibulum l',
    'Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Quis vel eros donec ac odio tempor orci. Augue eget arcu dictum varius duis at consectetur lorem donec. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Duis at tellus at urna condimentum mattis pellentesque id nibh. Sed nisi lacus sed viverra tellus. Tortor aliquam nulla facilisi cras fermentum odio eu. Vulputate mi sit amet mauris commodo quis imperdiet massa. Vulputate enim nulla aliquet porttitor lacus luctus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Venenatis tellus in metus vulputate eu. Neque sodales ut etiam sit amet. Id interdum velit laoreet id donec ultrices tincidunt arcu. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Viverra vitae congue eu consequat ac. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Volutpat diam ut venenatis tellus in metus vulputate eu. Nibh tellus molestie nunc non.\n',
    NULL,
    '2021-12-31 00:29:42.539'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Mi tempus imperdiet nulla malesuada pellentesque. ',
    'Cras semper auctor neque vitae tempus quam pellentesque nec. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Eu augue ut lectus arcu. Purus sit amet volutpat consequat mauris. Amet facilisis magna etiam tempor orci eu lobortis. Diam donec adipiscing tristique risus nec feugiat in fermentum. Consequat nisl vel pretium lectus quam id. Vivamus at augue eget arcu dictum varius duis at. Rutrum quisque non tellus orci. Felis eget velit aliquet sagittis id consectetur. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Massa sed elementum tempus egestas sed sed risus pretium. Tristique senectus et netus et malesuada fames. Leo vel fringilla est ullamcorper eget nulla facilisi. Mauris in aliquam sem fringilla ut morbi. Nibh tellus molestie nunc non blandit. Egestas sed tempus urna et pharetra pharetra massa massa. Malesuada nunc vel risus commodo viverra maecenas. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis.\n',
    NULL,
    '2022-11-28 13:42:25.671'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Card Scanner',
    'Spell Card card\n\n\nOnce per turn: You can declare 1 card type (Monster, Spell, or Trap); both players reveal the bottom card of their Decks, and if it was the declared card type, they add it to their hand. Otherwise, they place it on top of their Deck. If this face-up card in its owner''s Spell & Trap Zone is destroyed by an opponent''s card effect: You can make your opponent place 1 card from their hand on the bottom of the Deck.',
    'https://images.ygoprodeck.com/images/cards/77066768.jpg',
    '2023-06-25 04:13:32.218'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Super Polymerization',
    'Spell Card card\n\n\nDiscard 1 card; Fusion Summon 1 Fusion Monster from your Extra Deck, using monsters from either field as Fusion Material. Neither player can activate cards or effects in response to this card''s activation.',
    'https://images.ygoprodeck.com/images/cards/48130397.jpg',
    '2022-05-19 10:05:04.209'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Mi tempus imperdiet nulla malesuada pellentesque. ',
    'Viverra aliquet eget sit amet tellus. Adipiscing at in tellus integer feugiat scelerisque. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Mauris ultrices eros in cursus. Dolor purus non enim praesent. Quam viverra orci sagittis eu volutpat. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Lobortis feugiat vivamus at augue. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Sed sed risus pretium quam. Integer malesuada nunc vel risus. Egestas congue quisque egestas diam in arcu. Elementum nibh tellus molestie nunc non blandit massa enim nec.\nVel turpis nunc eget lorem dolor sed viverra ipsum nunc. Lacinia at quis risus sed. Velit egestas dui id ornare arcu odio ut sem nulla. Lacus vestibulum sed arcu non odio euismod lacinia. Imperdiet nulla malesuada pellentesque elit. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt. Adipiscing bibendum est ultricies integer quis auctor elit.\nDolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Elit eget gravida cum sociis natoque penatibus et. Aliquet nibh praesent tristique magna sit amet purus gravida. Sodales ut eu sem integer vitae. Lectus arcu bibendum at varius vel. Eget mi proin sed libero. Turpis egestas sed tempus urna et pharetra. Ut tellus elementum sagittis vitae et leo. Odio ut enim blandit volutpat. Massa tincidunt dui ut ornare lectus sit amet est placerat. Cursus mattis molestie a iaculis. Arcu dictum varius duis at consectetur lorem donec. In massa tempor nec feugiat nisl pretium.\n',
    NULL,
    '2022-03-22 06:44:42.867'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Who wrote the nonsense poem The Jabberwocky\n\n\n\n\nLewis Carroll',
    NULL,
    '2022-04-09 19:29:36.895'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'geodude',
    'Pokemon  rock ground',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png',
    '2022-07-14 21:30:40.549'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    '',
    'Black within and red without, With four corners round and about. What is it?\n\n\n\n\nA chimney',
    'https://picsum.photos/201/350',
    '2021-03-20 21:29:04.946'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What is the capital of The Bahamas\n\n\n\n\nNassau',
    'https://picsum.photos/313/473',
    '2022-01-22 15:24:18.317'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris is like a vampire. The difference is that he drinks more blood in one day than Dracula has had in 300 years.',
    NULL,
    '2022-12-19 17:05:13.200'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What was Bugs Bunnies original name\n\n\n\n\nHappy Rabbit',
    NULL,
    '2020-12-12 13:24:19.918'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from George Washington',
    'Few men have virtue to withstand the highest bidder.',
    NULL,
    '2021-10-20 22:13:55.291'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'persian',
    'Pokemon  normal',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png',
    '2022-04-14 23:41:10.121'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Confusion',
    'What I want is what I hate Why you give is why i wait Those who quit are naught but fools Those who try are bound to lose To own me you must set me free And tell the truth yet lie to me The secret is as clear as day yet dark as night, so now let''s play....\n\n\n\n\nLove',
    NULL,
    '2023-01-06 23:11:51.278'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'I Wish I Was A Big Pebble',
    'What did the shy pebble say?\n\n\n\n\nI wish I was a little boulder.',
    'https://picsum.photos/405/228',
    '2022-09-29 14:25:55.831'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ditto',
    'Pokemon  normal',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    '2022-05-18 05:26:02.847'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris can play the violin...on the piano.',
    NULL,
    '2022-07-03 06:26:46.392'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Helen Keller',
    'Life is an exciting business, and most exciting when it is lived for others.',
    NULL,
    '2022-08-19 11:03:46.527'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Turbo-Tainted Hot Rod GT19',
    'Flip Effect Monster card\n\nMachine\nATK 500 / DEF 1500\nLevel 3\n\nFLIP: You can declare a Level from 1 to 9; this card becomes that Level until the end of this turn.\nAfter this card has been flipped face-up, during any Main Phase (Quick Effect): You can target 1 other face-up monster on either field; immediately after this effect resolves, Synchro Summon 1 monster using only this card and that target. You can only use 1 "Turbo-Tainted Hot Rod GT19" effect per turn, and only once that turn.',
    'https://images.ygoprodeck.com/images/cards/16769305.jpg',
    '2023-05-16 06:31:34.486'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'omastar',
    'Pokemon  rock water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png',
    '2021-04-01 06:51:00.445'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ninetales',
    'Pokemon  fire',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png',
    '2023-06-27 22:42:45.674'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ivysaur',
    'Pokemon  grass poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    '2021-03-18 20:11:59.060'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris can take the square root of a negitive number on a calculator without an error sign apearing on the screen',
    NULL,
    '2021-12-23 19:21:02.858'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from William Feather',
    'That they may have a little peace, even the best dogs are compelled to snarl occasionally.',
    NULL,
    '2021-12-11 08:14:55.602'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Gabrion, the Timelord',
    'Effect Monster card\n\n\nCannot be Special Summoned from the Deck. If you control no monsters, you can Normal Summon this card without Tributing. Cannot be destroyed by battle or card effects. You take no battle damage from attacks involving this card. At the end of the Battle Phase, if this card battled: Shuffle as many cards your opponent controls as possible into the Deck(s), then they draw cards equal to the number shuffled into their Main Deck. Once per turn, during your Standby Phase: Shuffle this card into the Deck.',
    'https://images.ygoprodeck.com/images/cards/6616912.jpg',
    '2021-04-20 14:43:07.971'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Richard G. Scott',
    'Make a Goal Box, a chart of positive daily contact with a family when you are working with them.',
    'https://picsum.photos/117/641',
    '2021-01-08 02:05:41.689'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Its not that Chuck Norris cant handle the truth. The truth cant handle Chuck Norris',
    'https://picsum.photos/551/679',
    '2021-12-01 07:18:07.170'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why did the scarecrow get an award? Because he was out standing in his field.',
    'https://picsum.photos/204/184',
    '2020-06-17 07:11:51.981'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'He led the mormons to the great salt lake\n\n\n\n\nBrigham Young',
    NULL,
    '2023-08-14 05:41:12.155'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'WHY',
    'A MIDGET GOES TO WORK EVERY DAY AND LIVES ON THE TOP FLOOR OF HIS APARTMENT WHICH IS THE 30TH FLOOR WHEN HE COME FROM WORK HE CATCHES THE ELAVATOR TO THE NINT 15TH FLOOR AND WALKS THE REST OF THE WAY EXEPT FOR WHEN ITS RAINING THEN HE TAKES THE ELAVATOR ALL THE WAY UP WHY\n\n\n\n\nCAUSE HE HAS AN UMBRELLA TO REACH UP TO THE 30',
    NULL,
    '2020-02-11 02:50:08.651'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Thomas Fuller',
    'Learning hath gained most by those books by which the printers have lost.',
    NULL,
    '2022-05-05 12:08:01.048'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris can make circumsized females come multiple times',
    NULL,
    '2022-05-10 14:18:28.700'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Abaki',
    'Effect Monster card\n\nFiend\nATK 1700 / DEF 1100\nLevel 4\n\nWhen this card is destroyed and sent to the Graveyard by battle, both players take 500 damage.',
    'https://images.ygoprodeck.com/images/cards/12694768.jpg',
    '2020-01-03 09:51:28.138'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'How Many?',
    'There is a list of number from 1-1000. How many times does the number "3" appear?\n\n\n\n\n301 times',
    'https://picsum.photos/407/203',
    '2020-02-11 09:54:17.933'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Cras semper auctor neque vitae tempus quam pellent',
    'Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Consequat semper viverra nam libero justo laoreet sit amet cursus. Morbi quis commodo odio aenean. Ut sem nulla pharetra diam. Gravida cum sociis natoque penatibus et magnis. Eu sem integer vitae justo. Amet dictum sit amet justo donec enim diam vulputate ut. Eu consequat ac felis donec et. Sed vulputate odio ut enim. Vitae aliquet nec ullamcorper sit amet risus nullam.\nEu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Sagittis id consectetur purus ut faucibus pulvinar elementum. Accumsan tortor posuere ac ut. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Purus in massa tempor nec feugiat nisl. Felis eget nunc lobortis mattis. Amet massa vitae tortor condimentum lacinia quis vel. Sed cras ornare arcu dui vivamus arcu. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Integer vitae justo eget magna fermentum iaculis eu. Lorem mollis aliquam ut porttitor. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Vulputate dignissim suspendisse in est ante. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Nulla facilisi nullam vehicula ipsum a arcu cursus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum.\nSed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Massa enim nec dui nunc. Netus et malesuada fames ac turpis egestas. Gravida rutrum quisque non tellus orci. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Amet aliquam id diam maecenas ultricies mi eget mauris. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Ultricies tristique nulla aliquet enim. Urna et pharetra pharetra massa. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit.\n',
    NULL,
    '2021-06-22 07:44:47.044'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Marlon Brando',
    'I don''t mind that I''m fat. You still get the same money.',
    'https://picsum.photos/437/385',
    '2023-11-12 07:02:03.778'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'The Mystery',
    'he who builds it doesnt need it he who buys it doesnt want it he who needs it doesnt know it what is it?\n\n\n\n\na coffin',
    NULL,
    '2021-06-24 15:38:51.195'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Riddle Me This #4',
    'Black within, Red without, With four corners round about. What am I?\n\n\n\n\na Chimny.',
    NULL,
    '2020-09-16 17:46:16.493'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'kakuna',
    'Pokemon  bug poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
    '2023-03-23 08:30:53.528'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why is Peter Pan always flying? Because he Neverlands.',
    NULL,
    '2022-09-09 23:37:06.984'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Chris Ware',
    'As children, as we learn what things are, we are slowly learning to dismiss them visually. As adults, entirely submerged in words and concepts, we spend almost all of our time thinking and worrying about the past and the future, hardly ever looking at or engaging with the world visually.',
    NULL,
    '2022-05-22 14:19:43.189'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'zapdos',
    'Pokemon  electric flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png',
    '2023-01-17 08:10:08.890'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Ann Richards',
    'I have always had the feeling I could do anything and my dad told me I could. I was in college before I found out he might be wrong.',
    NULL,
    '2022-07-05 09:57:57.614'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Charles de Gaulle',
    'The great leaders have always stage-managed their effects.',
    NULL,
    '2019-12-03 01:40:48.884'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Squiggle',
    'I am born on paper with twisted lines, I''m a sponge in a way and I taste awful, what am I?\n\n\n\n\nMoss',
    NULL,
    '2022-12-07 16:47:08.611'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dignissim convallis aenean et tortor at risus vive',
    'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Elit eget gravida cum sociis natoque penatibus et. Aliquet nibh praesent tristique magna sit amet purus gravida. Sodales ut eu sem integer vitae. Lectus arcu bibendum at varius vel. Eget mi proin sed libero. Turpis egestas sed tempus urna et pharetra. Ut tellus elementum sagittis vitae et leo. Odio ut enim blandit volutpat. Massa tincidunt dui ut ornare lectus sit amet est placerat. Cursus mattis molestie a iaculis. Arcu dictum varius duis at consectetur lorem donec. In massa tempor nec feugiat nisl pretium.\n',
    NULL,
    '2023-08-30 07:21:34.607'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'If you see a robbery at an Apple store, does that make you an iWitness?',
    'https://picsum.photos/312/598',
    '2020-08-07 15:23:37.053'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Scapegoat',
    'Spell Card card\n\n\nSpecial Summon 4 "Sheep Tokens" (Beast/EARTH/Level 1/ATK 0/DEF 0) in Defense Position. They cannot be Tributed for a Tribute Summon. You cannot Summon other monsters the turn you activate this card (but you can Normal Set).',
    'https://images.ygoprodeck.com/images/cards/73915051.jpg',
    '2022-04-23 11:21:55.132'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'nidoran-m',
    'Pokemon  poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png',
    '2023-01-31 13:29:06.604'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Often read at weddings,the Bible verse 1 Corinthians 13:4 begins "Love is patient,love is" what?\n\n\n\n\nKind',
    'https://picsum.photos/405/169',
    '2022-03-02 23:08:48.407'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Funeral',
    'A man is killed by a priest from a french missionary. Exactly two days later the funeral is held. At the funeral the mans daughter sees a man who she instantly falls in love with. However, the man disapears before he can get his contact information. The next day she is drinking coffee. After she finished the coffee she kills her sister. Why?\n\n\n\n\nShe deduced that the man was a friend of the family and by killing her sister he would come back to her sister''s funeral. This would allow her to get his contact information.',
    'https://picsum.photos/110/268',
    '2020-11-07 16:53:43.336'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Ovid',
    'Fair peace becomes men ferocious anger belongs to beasts.',
    'https://picsum.photos/173/526',
    '2019-12-17 23:25:26.753'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I don''t get why bakers aren''t wealthier. They make so much dough.',
    'https://picsum.photos/652/599',
    '2022-05-22 06:10:01.337'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'exeggcute',
    'Pokemon  grass psychic',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png',
    '2021-03-17 04:09:13.464'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Bibendum arcu vitae elementum curabitur vitae nunc',
    'Dignissim convallis aenean et tortor at risus viverra adipiscing at. Lacinia quis vel eros donec ac odio tempor orci. Id porta nibh venenatis cras. Nunc sed augue lacus viverra vitae congue eu consequat. Nisi porta lorem mollis aliquam. Pellentesque habitant morbi tristique senectus. Bibendum est ultricies integer quis auctor elit sed. Posuere urna nec tincidunt praesent semper. Id donec ultrices tincidunt arcu non sodales. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Nibh mauris cursus mattis molestie a iaculis at. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Ut porttitor leo a diam. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Magna fringilla urna porttitor rhoncus dolor purus non enim. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed.\n',
    NULL,
    '2021-05-22 03:46:57.453'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Sed sed risus pretium quam vulputate dignissim sus',
    'Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Sagittis id consectetur purus ut faucibus pulvinar elementum. Accumsan tortor posuere ac ut. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Purus in massa tempor nec feugiat nisl. Felis eget nunc lobortis mattis. Amet massa vitae tortor condimentum lacinia quis vel. Sed cras ornare arcu dui vivamus arcu. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Integer vitae justo eget magna fermentum iaculis eu. Lorem mollis aliquam ut porttitor. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Vulputate dignissim suspendisse in est ante. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Nulla facilisi nullam vehicula ipsum a arcu cursus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum.\nMi tempus imperdiet nulla malesuada pellentesque. Ut sem nulla pharetra diam sit amet. Eu consequat ac felis donec et. Ac felis donec et odio pellentesque diam volutpat. Vulputate sapien nec sagittis aliquam malesuada bibendum. Commodo viverra maecenas accumsan lacus vel. Ut sem viverra aliquet eget sit. Semper quis lectus nulla at volutpat diam ut. Ultricies integer quis auctor elit sed. Nulla facilisi morbi tempus iaculis urna. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Diam ut venenatis tellus in metus vulputate eu. Ut consequat semper viverra nam libero justo. Facilisi morbi tempus iaculis urna id. Tortor vitae purus faucibus ornare suspendisse.\nRisus sed vulputate odio ut enim blandit volutpat. Faucibus turpis in eu mi bibendum neque. Morbi tristique senectus et netus et malesuada fames ac. Lacinia quis vel eros donec. Est velit egestas dui id ornare arcu. Commodo viverra maecenas accumsan lacus. Turpis in eu mi bibendum neque egestas congue. Fermentum posuere urna nec tincidunt. Sit amet nisl purus in mollis. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Justo eget magna fermentum iaculis eu non diam. Proin nibh nisl condimentum id venenatis. Viverra maecenas accumsan lacus vel facilisis volutpat est. Rhoncus dolor purus non enim praesent elementum facilisis leo. Urna id volutpat lacus laoreet non curabitur gravida. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fermentum leo vel orci porta.\n',
    NULL,
    '2023-03-02 20:52:24.321'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Hector Hugh Munro',
    'The sacrifices of friendship were beautiful in her eyes as long as she was not asked to make them.',
    NULL,
    '2022-09-05 03:57:17.695'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Franklin P. Jones',
    'Anybody who finds it easy to make money on the horses is probably in the dog food business.',
    'https://picsum.photos/263/632',
    '2023-11-06 03:46:15.519'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Where would you find your pollers\n\n\n\n\nHands Its Your Thumbs',
    'https://picsum.photos/603/644',
    '2021-02-02 21:12:09.560'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Id eu nisl nunc mi ipsum faucibus vitae aliquet ne',
    'Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Arcu felis bibendum ut tristique et egestas. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Quisque sagittis purus sit amet volutpat consequat mauris. Mattis vulputate enim nulla aliquet porttitor. Sit amet facilisis magna etiam tempor orci eu lobortis. Erat nam at lectus urna duis convallis convallis. Sit amet est placerat in. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Amet justo donec enim diam vulputate ut. Adipiscing vitae proin sagittis nisl rhoncus mattis. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Felis imperdiet proin fermentum leo vel orci porta. Consequat ac felis donec et odio pellentesque.\nAliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Quis vel eros donec ac odio tempor orci. Augue eget arcu dictum varius duis at consectetur lorem donec. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Duis at tellus at urna condimentum mattis pellentesque id nibh. Sed nisi lacus sed viverra tellus. Tortor aliquam nulla facilisi cras fermentum odio eu. Vulputate mi sit amet mauris commodo quis imperdiet massa. Vulputate enim nulla aliquet porttitor lacus luctus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Venenatis tellus in metus vulputate eu. Neque sodales ut etiam sit amet. Id interdum velit laoreet id donec ultrices tincidunt arcu. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Viverra vitae congue eu consequat ac. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Volutpat diam ut venenatis tellus in metus vulputate eu. Nibh tellus molestie nunc non.\nPosuere ac ut consequat semper viverra. Viverra vitae congue eu consequat. Enim nunc faucibus a pellentesque. Urna cursus eget nunc scelerisque. Eu augue ut lectus arcu bibendum at varius vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Sed enim ut sem viverra. Sed enim ut sem viverra aliquet eget sit amet. Molestie nunc non blandit massa enim nec. Et molestie ac feugiat sed lectus. Lacinia quis vel eros donec ac odio tempor orci. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Orci sagittis eu volutpat odio facilisis. Est ullamcorper eget nulla facilisi etiam. Nibh sit amet commodo nulla facilisi nullam. Egestas diam in arcu cursus euismod quis viverra. Luctus accumsan tortor posuere ac ut consequat semper viverra. Tristique risus nec feugiat in fermentum posuere. Facilisi cras fermentum odio eu. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo.\n',
    NULL,
    '2022-03-03 11:47:48.966'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Semper auctor neque vitae tempus quam pellentesque',
    'Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Arcu felis bibendum ut tristique et egestas. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Quisque sagittis purus sit amet volutpat consequat mauris. Mattis vulputate enim nulla aliquet porttitor. Sit amet facilisis magna etiam tempor orci eu lobortis. Erat nam at lectus urna duis convallis convallis. Sit amet est placerat in. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Amet justo donec enim diam vulputate ut. Adipiscing vitae proin sagittis nisl rhoncus mattis. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Felis imperdiet proin fermentum leo vel orci porta. Consequat ac felis donec et odio pellentesque.\nSem viverra aliquet eget sit amet tellus cras. Proin nibh nisl condimentum id venenatis a. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Viverra vitae congue eu consequat ac felis donec et odio. Ultrices vitae auctor eu augue ut. Leo integer malesuada nunc vel risus. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus et malesuada fames ac. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Diam vel quam elementum pulvinar. Faucibus nisl tincidunt eget nullam. Lacus viverra vitae congue eu consequat. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Diam sit amet nisl suscipit. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.\nMi eget mauris pharetra et ultrices neque. Nunc non blandit massa enim nec. Velit scelerisque in dictum non consectetur a. Enim sed faucibus turpis in eu mi bibendum neque. In egestas erat imperdiet sed. Ac auctor augue mauris augue neque gravida in fermentum. Vitae congue eu consequat ac felis donec. Feugiat sed lectus vestibulum mattis. Nibh venenatis cras sed felis eget velit aliquet. Mauris sit amet massa vitae tortor condimentum lacinia quis. Orci sagittis eu volutpat odio facilisis mauris sit amet. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Purus viverra accumsan in nisl. Consequat semper viverra nam libero justo laoreet sit amet. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Nec dui nunc mattis enim ut tellus elementum. Quis auctor elit sed vulputate mi sit. Feugiat nibh sed pulvinar proin gravida.\nNec feugiat nisl pretium fusce id velit. Aliquam ut porttitor leo a diam sollicitudin tempor. Elementum eu facilisis sed odio morbi quis. Aliquet nec ullamcorper sit amet risus nullam. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Diam volutpat commodo sed egestas. Et leo duis ut diam quam nulla porttitor massa id. Justo laoreet sit amet cursus sit. Id aliquet lectus proin nibh. Pretium fusce id velit ut tortor pretium viverra. Enim lobortis scelerisque fermentum dui. Id diam vel quam elementum. Ultrices sagittis orci a scelerisque purus semper eget duis. Pretium viverra suspendisse potenti nullam. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Vel quam elementum pulvinar etiam non quam lacus suspendisse.\n',
    NULL,
    '2020-02-01 22:52:30.966'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Where is John Frost bridge shown on A Bridge too Far\n\n\n\n\nArnham - It Was Renamed After Him',
    'https://picsum.photos/546/218',
    '2021-10-07 21:12:42.853'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'meowth',
    'Pokemon  normal',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
    '2023-06-14 02:40:31.866'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Aliquet sagittis id consectetur purus ut faucibus ',
    'Eget sit amet tellus cras adipiscing enim eu turpis. Amet facilisis magna etiam tempor. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Purus viverra accumsan in nisl nisi. Vitae elementum curabitur vitae nunc sed velit. Sed lectus vestibulum mattis ullamcorper velit. Consequat interdum varius sit amet mattis. Amet justo donec enim diam. Sed vulputate odio ut enim blandit volutpat maecenas. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Habitant morbi tristique senectus et netus et malesuada. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Congue mauris rhoncus aenean vel elit scelerisque. Id neque aliquam vestibulum morbi blandit cursus. Nunc sed augue lacus viverra vitae congue eu consequat ac. Leo vel orci porta non pulvinar neque. Consequat interdum varius sit amet mattis.\nSem viverra aliquet eget sit amet tellus cras. Proin nibh nisl condimentum id venenatis a. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Viverra vitae congue eu consequat ac felis donec et odio. Ultrices vitae auctor eu augue ut. Leo integer malesuada nunc vel risus. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus et malesuada fames ac. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Diam vel quam elementum pulvinar. Faucibus nisl tincidunt eget nullam. Lacus viverra vitae congue eu consequat. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Diam sit amet nisl suscipit. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.\nPosuere ac ut consequat semper viverra. Viverra vitae congue eu consequat. Enim nunc faucibus a pellentesque. Urna cursus eget nunc scelerisque. Eu augue ut lectus arcu bibendum at varius vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Sed enim ut sem viverra. Sed enim ut sem viverra aliquet eget sit amet. Molestie nunc non blandit massa enim nec. Et molestie ac feugiat sed lectus. Lacinia quis vel eros donec ac odio tempor orci. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Orci sagittis eu volutpat odio facilisis. Est ullamcorper eget nulla facilisi etiam. Nibh sit amet commodo nulla facilisi nullam. Egestas diam in arcu cursus euismod quis viverra. Luctus accumsan tortor posuere ac ut consequat semper viverra. Tristique risus nec feugiat in fermentum posuere. Facilisi cras fermentum odio eu. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo.\n',
    NULL,
    '2023-08-04 09:31:35.657'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Super Crashbug',
    'Effect Monster card\n\n\nCannot be Normal Summoned or Set. Must first be Special Summoned (from your hand) in face-up Defense Position, by banishing "Crashbug X", "Crashbug Y", and "Crashbug Z" from your Graveyard. Switch the ATK and DEF of all face-up Attack Position monsters on the field. There can only be 1 face-up "Super Crashbug" on the field.',
    'https://images.ygoprodeck.com/images/cards/86804246.jpg',
    '2023-02-27 09:01:15.241'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Smiling Child',
    'A person says that if you can take a picture with you and a smiling child then I will give a dollar.There is only one person in the picture. You end up getting a dollar. How is this possible wothout you cheating?\n\n\n\n\nYou are the smiling child. It never said the word "another".',
    NULL,
    '2021-07-25 05:07:52.917'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Little known fact: Chuck Norris is rumored to have been the original choice to play evil Cobra Kai sensei John Kreese in The Karate Kid. Presumably he turned the role down because, realistically, no student trained by Chuck Norris could ever possibly lose a match.',
    NULL,
    '2023-09-05 18:52:54.894'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'What Color Is The Bear?',
    'A man builds a rectuangular house, and all the sides have a southern exposure. A bear walks by, what color is the bear? why?\n\n\n\n\nThe bear is white because it''s al the North pole!',
    NULL,
    '2023-01-29 10:34:48.385'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'In the "Lord of the Rings" movies, which of these creatures is usually the shortest?\n\n\n\n\nHobbit',
    NULL,
    '2023-06-27 16:29:40.698'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Patrick Swayze',
    'Together we can make a world where cancer no longer means living with fear, without hope, or worse.',
    'https://picsum.photos/198/303',
    '2023-07-20 20:08:12.287'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'persian',
    'Pokemon  normal',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png',
    '2021-02-20 02:39:52.191'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'When Chuck Norris wants chicken, he really means children.',
    NULL,
    '2020-05-02 00:49:34.166'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Two angles that total 180 degrees are called _______.\n\n\n\n\nSupplementary',
    NULL,
    '2023-01-29 10:01:29.171'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Commodo elit at imperdiet dui accumsan. Bibendum u',
    'Volutpat consequat mauris nunc congue. Sollicitudin ac orci phasellus egestas tellus. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Massa tempor nec feugiat nisl pretium fusce id. Amet purus gravida quis blandit turpis cursus in hac. Neque ornare aenean euismod elementum nisi quis eleifend. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Elit at imperdiet dui accumsan sit amet. Etiam erat velit scelerisque in dictum non consectetur a erat. Lacus vestibulum sed arcu non odio euismod lacinia. Ultrices eros in cursus turpis. Nibh nisl condimentum id venenatis a condimentum. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus.\nDignissim convallis aenean et tortor at risus viverra adipiscing at. Lacinia quis vel eros donec ac odio tempor orci. Id porta nibh venenatis cras. Nunc sed augue lacus viverra vitae congue eu consequat. Nisi porta lorem mollis aliquam. Pellentesque habitant morbi tristique senectus. Bibendum est ultricies integer quis auctor elit sed. Posuere urna nec tincidunt praesent semper. Id donec ultrices tincidunt arcu non sodales. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Nibh mauris cursus mattis molestie a iaculis at. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Ut porttitor leo a diam. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Magna fringilla urna porttitor rhoncus dolor purus non enim. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed.\nVel turpis nunc eget lorem dolor sed viverra ipsum nunc. Lacinia at quis risus sed. Velit egestas dui id ornare arcu odio ut sem nulla. Lacus vestibulum sed arcu non odio euismod lacinia. Imperdiet nulla malesuada pellentesque elit. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt. Adipiscing bibendum est ultricies integer quis auctor elit.\n',
    NULL,
    '2022-09-25 15:18:06.722'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Leo vel orci porta non pulvinar neque. Porta nibh ',
    'Semper auctor neque vitae tempus quam pellentesque nec nam. Turpis egestas maecenas pharetra convallis posuere morbi. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. In cursus turpis massa tincidunt dui. Gravida neque convallis a cras semper auctor neque vitae tempus. Dui faucibus in ornare quam viverra. Consequat nisl vel pretium lectus quam id leo in vitae. Eget est lorem ipsum dolor sit amet. Enim facilisis gravida neque convallis a cras semper auctor. Non arcu risus quis varius quam quisque id diam. Enim praesent elementum facilisis leo vel fringilla est. Elementum sagittis vitae et leo duis ut diam quam. Nisi lacus sed viverra tellus. Id aliquet lectus proin nibh nisl condimentum id. Egestas sed sed risus pretium quam vulputate dignissim.\n',
    NULL,
    '2019-12-15 00:20:11.235'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Moon And Earth',
    'On the Earth I am dead, Though I live on the moon. I am in no crater, And I''m in every boom.\n\n\n\n\nThe letter O.',
    'https://picsum.photos/264/532',
    '2022-05-19 19:02:27.734'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris chopped an axe with a tree',
    NULL,
    '2021-07-05 20:26:15.210'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dignissim convallis aenean et tortor at risus vive',
    'Risus sed vulputate odio ut enim blandit volutpat. Faucibus turpis in eu mi bibendum neque. Morbi tristique senectus et netus et malesuada fames ac. Lacinia quis vel eros donec. Est velit egestas dui id ornare arcu. Commodo viverra maecenas accumsan lacus. Turpis in eu mi bibendum neque egestas congue. Fermentum posuere urna nec tincidunt. Sit amet nisl purus in mollis. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Justo eget magna fermentum iaculis eu non diam. Proin nibh nisl condimentum id venenatis. Viverra maecenas accumsan lacus vel facilisis volutpat est. Rhoncus dolor purus non enim praesent elementum facilisis leo. Urna id volutpat lacus laoreet non curabitur gravida. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fermentum leo vel orci porta.\nLectus magna fringilla urna porttitor rhoncus dolor purus non enim. Blandit massa enim nec dui nunc. Ultrices vitae auctor eu augue ut. Sagittis purus sit amet volutpat consequat mauris nunc congue. Viverra suspendisse potenti nullam ac tortor vitae purus. Aliquet enim tortor at auctor urna nunc id. Orci sagittis eu volutpat odio facilisis mauris sit amet. Sem integer vitae justo eget magna fermentum iaculis eu. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Nec ullamcorper sit amet risus nullam. Malesuada bibendum arcu vitae elementum. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Pretium quam vulputate dignissim suspendisse. Gravida quis blandit turpis cursus in hac habitasse. Odio tempor orci dapibus ultrices in iaculis nunc sed. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Leo urna molestie at elementum eu facilisis sed odio.\nBibendum arcu vitae elementum curabitur vitae nunc sed velit. Consequat semper viverra nam libero justo laoreet sit amet cursus. Morbi quis commodo odio aenean. Ut sem nulla pharetra diam. Gravida cum sociis natoque penatibus et magnis. Eu sem integer vitae justo. Amet dictum sit amet justo donec enim diam vulputate ut. Eu consequat ac felis donec et. Sed vulputate odio ut enim. Vitae aliquet nec ullamcorper sit amet risus nullam.\nPraesent semper feugiat nibh sed pulvinar proin. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Urna molestie at elementum eu facilisis sed odio morbi quis. Adipiscing commodo elit at imperdiet dui accumsan. Ac felis donec et odio pellentesque diam. Sapien pellentesque habitant morbi tristique senectus et netus et. Interdum velit euismod in pellentesque massa placerat. Id diam maecenas ultricies mi eget mauris pharetra et. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Ultricies tristique nulla aliquet enim tortor. Non curabitur gravida arcu ac. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus.\n',
    'https://picsum.photos/288/164',
    '2023-07-18 21:28:48.676'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'snorlax',
    'Pokemon  normal',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
    '2021-12-09 02:54:10.143'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why can’t you trust an atom? Because they make up everything.',
    'https://picsum.photos/509/566',
    '2020-07-11 20:14:31.380'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What did the buffalo say to his son when he dropped him off at school? Bison.',
    'https://picsum.photos/563/186',
    '2020-07-19 14:56:33.339'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Miguel de Unamuno',
    'Love is the child of illusion and the parent of disillusion.',
    'https://picsum.photos/218/466',
    '2023-01-16 22:16:08.669'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'wigglytuff',
    'Pokemon  normal fairy',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png',
    '2021-09-26 17:34:01.994'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Commodo elit at imperdiet dui accumsan. Bibendum u',
    'Ut eu sem integer vitae justo eget magna. Praesent tristique magna sit amet purus. Quis auctor elit sed vulputate mi. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Aenean euismod elementum nisi quis eleifend quam. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Nec nam aliquam sem et. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Tellus in metus vulputate eu.\n',
    NULL,
    '2020-04-11 23:08:03.524'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Elbert Hubbard',
    'The highest reward that God gives us for good work is the ability to do better work.',
    NULL,
    '2021-03-09 13:35:08.248'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Cras semper auctor neque vitae tempus quam pellent',
    'Praesent semper feugiat nibh sed pulvinar proin. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Urna molestie at elementum eu facilisis sed odio morbi quis. Adipiscing commodo elit at imperdiet dui accumsan. Ac felis donec et odio pellentesque diam. Sapien pellentesque habitant morbi tristique senectus et netus et. Interdum velit euismod in pellentesque massa placerat. Id diam maecenas ultricies mi eget mauris pharetra et. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Ultricies tristique nulla aliquet enim tortor. Non curabitur gravida arcu ac. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus.\nEget sit amet tellus cras adipiscing enim eu. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Purus in massa tempor nec feugiat nisl pretium fusce. Eu feugiat pretium nibh ipsum consequat nisl. Purus in mollis nunc sed. Turpis massa sed elementum tempus egestas sed. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Est lorem ipsum dolor sit amet. Fringilla phasellus faucibus scelerisque eleifend donec. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.\nMi tempus imperdiet nulla malesuada pellentesque. Ut sem nulla pharetra diam sit amet. Eu consequat ac felis donec et. Ac felis donec et odio pellentesque diam volutpat. Vulputate sapien nec sagittis aliquam malesuada bibendum. Commodo viverra maecenas accumsan lacus vel. Ut sem viverra aliquet eget sit. Semper quis lectus nulla at volutpat diam ut. Ultricies integer quis auctor elit sed. Nulla facilisi morbi tempus iaculis urna. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Diam ut venenatis tellus in metus vulputate eu. Ut consequat semper viverra nam libero justo. Facilisi morbi tempus iaculis urna id. Tortor vitae purus faucibus ornare suspendisse.\n',
    NULL,
    '2022-06-11 13:32:23.389'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'With who did benito mussolini dally\n\n\n\n\nClara Petacci',
    'https://picsum.photos/653/672',
    '2023-10-04 20:17:13.936'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why does a husband lead a dog''s life? He comes in with muddy feet, gets comfortable by the fire, and waits to be fed.',
    NULL,
    '2021-02-24 11:38:20.014'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Who Did It?',
    'A rich and famous man died on Sunday. A detective came to the house. He first asked the maid what she had been doing on Sunday. She replied, "I was cooking and cleaning all day." The detective then asked the butler what he had been doing. He said, "I went to go pick up the mail, and then I came home." The detective then asked the limo driver what he had been doing. He said, "I was out on a date with my girlfriend. I had the day off." Who did it?\n\n\n\n\nThe butler. There''s no mail on Sunday!',
    'https://picsum.photos/462/243',
    '2022-09-01 15:31:58.629'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Bar',
    'A man walks into a bar and asks for a glass of water. The bartender points a gun at the man. The man says thank you and walks out of the bar. It was a genuine thank you and the man got what he was looking for, never drinking any water or walking out with some. What happened?\n\n\n\n\nThe man had the huccups.',
    NULL,
    '2020-07-14 15:59:44.227'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'tentacool',
    'Pokemon  water poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png',
    '2020-03-04 22:32:00.269'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
)
;

-- Loops and randomly chooses a user and a post to create a like. Catches errors due to unique index violations.
DO $$
BEGIN
	FOR r IN 1..10000 loop
		BEGIN
			INSERT INTO posts.likes(user_id, post_id)
			VALUES
			(
				(SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1),
				(SELECT post_id FROM posts.posts OFFSET floor(random() * 1000) LIMIT 1)
			);

			EXCEPTION
				WHEN OTHERS THEN
                -- Continue
		END;
	END loop;
END;
$$
