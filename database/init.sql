\encoding UTF8

-- Insert roles in the roles table. The ids are manually set.
INSERT INTO admin.roles (role_id, name)
VALUES (1, 'admin'), (2, 'user');

-- Insert a set of users into the database
INSERT INTO users.users(email, password)
VALUES
('ymullins@gmail.com', '$2b$10$Lo7Y0lRyodEMiMdgML.9W./rzVQHWbIxfZJv1N2kOakutYJxqC7qW'),
('megan10@yahoo.com', '$2b$10$0IXcdQjQ5Cp6kP70mAFRrOVsdQpPA2HJbhpXf03LzapF4gfagyXYy'),
('rholloway@gmail.com', '$2b$10$owNWSaA7SoR92NcMe2FMOu20adLwO1THkx3W9BhvsrP4dqXSkOjUy'),
('geraldmorales@yahoo.com', '$2b$10$OtLRgBZps7bHWSr648tESOm4cz5Lpq5WoZWln31R.2w0XgVU0T3v.'),
('lisaolsen@hotmail.com', '$2b$10$te5BQKtuDfAGFpwbD5QS.eMvZcuHh6PPCVNzR5corbn/i/s7Pxmwm'),
('veronica52@hotmail.com', '$2b$10$s2iDedv0L1bNeskA1pge5OFCPMxIu4bmB.MdLBKKL6SlwGp9nB24a'),
('mariegalvan@hotmail.com', '$2b$10$TQTSO3lb6y8qmpXPrWg5HOpjwvPFOtehuU0B/fnDKrhT6ShPVfbH6'),
('udyer@yahoo.com', '$2b$10$irMnji9gMp1vgyuVR/IFN.GuAaqrznVbkcH99mecyHOHpjWdbLZie'),
('justincobb@gmail.com', '$2b$10$5Y0V4d8jnldjqSKYTwAUE.4x/z7ku9dYmbR7D323eJnwOensWEyiy'),
('wmoreno@hotmail.com', '$2b$10$EP4Q99TAKBz3w4C7CQhvhujObyOWw491XC5ruiZO8EB6zgTxx8lfC'),
('hturner@hotmail.com', '$2b$10$B69EsHMl0DxnpTISH.oqc.b9hXPGBUErAGFElAd583DIg0PgSD9/e'),
('rayfranklin@gmail.com', '$2b$10$pA9NXZrKnX1hzn5pPaM5quCP52vZVKGFlNuDT.69CUrHoqJBCDWGS'),
('kgonzales@gmail.com', '$2b$10$HrsVEDdDDVIo0NFx/sxouO14L9fty.xXVoCcnh9gWP0BS1FFLu6OK'),
('sandrajarvis@hotmail.com', '$2b$10$9M8ZTJNlcv8FoivY8lsYq.s7ev5y2By8JI.EnwrbrPMV.3SXiukR2'),
('dominguezshawn@hotmail.com', '$2b$10$mlecWU6WCabP/t8W39enZ.L23dwZ2HJiJ.v3LQD1ca530GJyssNci'),
('lloydrebecca@gmail.com', '$2b$10$KF9jsIPFDCOxTwzWIMFDh.hkeI8P9MlL5J/0vC0YznZyPv8L0rFkq'),
('omorton@hotmail.com', '$2b$10$IkNDNuwHvanmAO3ydtI.3edBYyIugMXfhTvtg8wHD1P8erGts1yR.'),
('hyork@yahoo.com', '$2b$10$65I8QTE2tusXUMK8LXYWguDxzTIrYKdfGR3XyEwBtBiz7eEfmMcb2'),
('ywright@gmail.com', '$2b$10$DQIcKBufdL8O7Majzy164uUzAEt8g1E5EILfDzGm6KYEGbxpbaNSS'),
('fosterrachel@hotmail.com', '$2b$10$3pbR.upip1EfKHYYSe2L.um7HzYMQ9MotAhaPfBqSDuOP/DovlDjG'),
('harriskristen@gmail.com', '$2b$10$936BYRs.sMOT9kXpD9X0se8iC4pXsmCVmKax9NJ54zvFzsCyQnDmG'),
('mathewsjoe@hotmail.com', '$2b$10$LBu4jb4vaqwBE6x/TfD7NOGsiusL.2kl3QROa9k6ZYUVoh2GzLFcy'),
('laura09@yahoo.com', '$2b$10$wdExK5fMfRqIt7Rqack1geeoCGh8gcNIJ6sljIvh/I.8T8Z9Bkz3C'),
('hchavez@yahoo.com', '$2b$10$OwGeVjsV7h4rzT.eVSk/k.zuzPvFOW1DO15XUotEDVsgeHfWPZwx2'),
('jason69@yahoo.com', '$2b$10$gaIWl7OxIAZjT7iWcjUU6O3MT.00YpY7IeOZQ3n.Bac8DHIZI7oyG'),
('austin42@hotmail.com', '$2b$10$RSpaerZZWIxn4sKgKTLzQ.ildVcWVNwu4oQ0a1bGUL8MZvpdwCAgi'),
('kathleen53@hotmail.com', '$2b$10$cRuCHjWXzjRUR2itqrWX9OifcOEWbEi0/1H9F8.DylOXs2mjEzena'),
('ncraig@hotmail.com', '$2b$10$9ueo5onyPBsH.vFf9GC1jOGQdPlyQWfOTAHr/h1n6pUrm.G5xyv8O'),
('christina04@yahoo.com', '$2b$10$q5CkKQkl088oVYlCHfXCOOWLzi5a2mj/HeTLuFQqeoPF5IDrdeCUC'),
('aburton@hotmail.com', '$2b$10$ORF2bUhOjJwhJU5OK3aSEuFyuBCqe7.DTWAeO0YNfsRbTiaWBXtyi'),
('okennedy@yahoo.com', '$2b$10$jcLsF9Kmk8l8RBfFdbKO5.RqUb9vxwe7CFY8/awc/Dk/uS5xYJoKO'),
('juantaylor@yahoo.com', '$2b$10$sHpJOY4HO2fkUEX0CvqESuBSdVjYHIwsdCZd3svfztn7SNk10ylAm'),
('kimberly55@gmail.com', '$2b$10$4cKTyOce.WviOvoDD780B.JX8c1GEewIbCNDnH4ZcPRIKlPUm.QLK'),
('daviddowns@gmail.com', '$2b$10$64.uNGN3R/iaBy/RbVdPT.koGHgqMASR780Qq.BLPdTgF41z8YZTa'),
('maddenderek@yahoo.com', '$2b$10$LcUV6lgTMxVzq5Jzpli5seGJdliRKdFv5zUGwJcKXWIgEGxIq0CMK'),
('christopher37@hotmail.com', '$2b$10$f3mSHbITK2/pp07KbNK2oe2jGRDd4/Rx0zyEwgWjt7SpIZSJVvADC'),
('krista63@hotmail.com', '$2b$10$lGCDeLWVrOx11HaGVvu3hulogQz8DPK5vS4oS8UDqDFrURrjFP02m'),
('osanchez@gmail.com', '$2b$10$0cUW2KZFosnHj/KsYsE6suhwUttZKTYI51LPwI1.x7nzEg/soCIHa'),
('xlee@yahoo.com', '$2b$10$OhvozAUZoV6to4eTQf8uKuNsRa.zh8CQQVPfvsqWVfREH4BFZFglq'),
('sclark@gmail.com', '$2b$10$nHjkCX1hM7/5CErfAgDII.C3pVNbOeYkq5F8brwSwezJL.C1Wk/Ni'),
('james96@yahoo.com', '$2b$10$l.XNybXV9BaisdHRcSMwQO6t8BPKpUCF6T84G.BBYF6d/4i7YKOAC'),
('beckykim@hotmail.com', '$2b$10$Bfb3TfCHoAuVIQVYTxYCd.vCfRXobaH5AoFpjNqqnYRrGLuYlSfJa'),
('vvilla@hotmail.com', '$2b$10$/i/8ImTNM5P8VoGy3s9caustXZcB8.5g1lY5EXtctG1MLjVfK1zWO'),
('hperez@hotmail.com', '$2b$10$52XMlLbCD7bUwdP9J1gxEeqVgCVmlhN.Nri2w1.qd1mlwWNxBMMly'),
('uelliott@hotmail.com', '$2b$10$whCtb8noKktCgZHH6/Tc.uNHsx7k2B/x1QV26soMFK08he7/FNJ5u'),
('tkoch@gmail.com', '$2b$10$y1AZ08tDoVDTVdpggsKtze1aySHlv2yvZgRRnVVpMO4/z7TtILo9C'),
('erichall@yahoo.com', '$2b$10$jwwwwjnMyaQnuMop6Dv7l.9ofeGM1HAabmyEHW5Zjauu6AgC6431W'),
('gharvey@gmail.com', '$2b$10$KzfOY4jTuAEBgaUi35/ahe7QtAZyDTQ57ch4xF3F2DDyJqGXQyEqa'),
('burkeandrea@hotmail.com', '$2b$10$k1TeS2AqzIWhCaM2UOqfTu.nuzcndn2ikLqCrIVpnkpfbmzXYv8zq'),
('morenokayla@gmail.com', '$2b$10$61gpiyRal5dntSeu.VPuxuLMIgfRcCLSYyq98S9eCMsR7bxMlpx4C'),
('scottamy@hotmail.com', '$2b$10$QiLMXMq3m4rmWnDsbQ38s.q3YaIOVnCaRRW.7lEYQPrpu0JRRNquO'),
('turnerkevin@gmail.com', '$2b$10$ltbZlnfo9JLXHH3OYne6hONOT6D5gTpZlMNqL0UQ/XhYaPdhv9Kde'),
('rodriguezhannah@hotmail.com', '$2b$10$NT/kDJgZIqzG/LcCPut2yuMwRPPr4A8KZY.doF7dIAFCMkJZiiZSa'),
('angelaramsey@hotmail.com', '$2b$10$aFgV3a7B0gEaZCjFF69SCueGiglfGw6JvvAvgXPm54soY.4obmVEi'),
('mcgeecatherine@gmail.com', '$2b$10$0Y/GqB.qgq2rvGt8GAmev.NEe3jLpJnA5MAfHAUZj7qBLF5.lxEeG'),
('harrellhannah@yahoo.com', '$2b$10$eEF8dIPeTVTrF8hAaHRK2.sbo8iOGlzDAA7Od85/60gS1M9BwnJ8i'),
('brookswendy@hotmail.com', '$2b$10$YoEYrz6jHpk2PWkdT8mkT.nh7Pql8iSceRrYy53bNLm8AOEXtsA2m'),
('teresa94@yahoo.com', '$2b$10$QOZ80AruYb2L5wt0oV0tI.BBYuiVlvrc1r7YDEb3fE2hgtOqfyDv.'),
('kenneth72@gmail.com', '$2b$10$3b/j2.rPd4yDKl4jV9xlD.74w5x6gFMa14pGj5qtAeEDxTy8jekzm'),
('julieburns@yahoo.com', '$2b$10$Wao5qfG.RvcVj5gJDYEh7OEHLvJUy87DuGJPplUnEkmrnT.8CLsMO'),
('sharonweiss@hotmail.com', '$2b$10$c4LlUL0mWUKdsvch7lBgDuT/y7P6jyVKghYNlLpkJrIKohagFw7g2'),
('rachelperez@yahoo.com', '$2b$10$ua6n0oBi7xzzaX.RSQHuzOC.NkBiLRoNLHer60f5DHAxlj1DhFPaS'),
('monica07@hotmail.com', '$2b$10$1/kzxWIOpu3tnuE0GIKu8uztsQhDMUxaVb4wSS5kOmAjIuPbYbeDi'),
('amybrown@gmail.com', '$2b$10$ltuNw2tRFzNp8tbhXigh0OCGQ5MJ1YxTNC1KrCI0MdE3wjyH1f6Iu'),
('jamieneal@hotmail.com', '$2b$10$Fw08ddW0BCDzhxFbz37zEu5iQeNMasleST8TEWutyc8jXTlT2HBmG'),
('joseph55@hotmail.com', '$2b$10$XFYaGUcGeo4jN0CRVtA/LOt6cJLI9oXLs6dZvJIQ4flWHQfNujp/a'),
('martinfrank@gmail.com', '$2b$10$cfvMBOhLWvcWuDwCW6Zhv.tCbu78MRf7RgSPFFatmeUA2H0MgiNe.'),
('jacob91@hotmail.com', '$2b$10$Kuctd6Lu.qjugRJf5LE8bugdTbMENBljW4I7Cdc06/beGVSKB0Tbe'),
('stephanie75@yahoo.com', '$2b$10$x7N45hHey94rU6j1q/vj.uBqMRheyGPWLTaeht2exJRk5cRLV4QfC'),
('brittneymcdonald@gmail.com', '$2b$10$oSIhKtRDQgb0IZn7WBR/GOf6XvL2HCV.d6uVJoagHOPYwi5Hww3S2'),
('erik88@gmail.com', '$2b$10$WZASdmhWp2WkHLlKcFWpKeD6CVSYbMg0CO6PZ92GurgWVLYEOvVNq'),
('floydemma@yahoo.com', '$2b$10$xd2w3c0rIgqCPW3ad/0mI.DhEHAWOBl2uKnZgnytpxZ.bOZPnR./y'),
('christina44@hotmail.com', '$2b$10$g/WDhJ1aa2PrCZFsAAlopOOAoREN4jUlBqhg4.7bc/n4Nlh8ro8/i'),
('jerry88@gmail.com', '$2b$10$OCsKwW5ghpOxeLUakWwoQ.fhkBmQ27Ok7m6yHfWdAvoaArzNnCj4O'),
('williamsjohnathan@gmail.com', '$2b$10$Mlz9NNzU9hO7ebiOIrFmcOigt9zhrttMloXI0AP9DPgMatJ0UY84u'),
('cathyrogers@yahoo.com', '$2b$10$cWOAQnofsvK3SpjpliugKeA0G.d.YPLzkC5NirE2zxMCELSkJtqeu'),
('gwright@hotmail.com', '$2b$10$UQgiUB9AGy/ojf6AGK0zkuUyAS2Da/aTyevVLVZgWWHgTzF0J.htm'),
('murphygwendolyn@hotmail.com', '$2b$10$U5J.WCWfZOJHOnZyc/MM4.QJV.JPRko7LKisICiUVmSF6wXVtfU5e'),
('gallegoskaylee@hotmail.com', '$2b$10$MYlLsVgWa2KrsX81ANHYF.zNrBYRgmyOMA0i/P7rdtinpbo4E30Xu'),
('evanstyler@gmail.com', '$2b$10$VT6ePEPSJ5ovBOKxIRcw8euF6/8Yz3nVGvuETpQ5pcp3i9t4z0Ck.'),
('aturner@gmail.com', '$2b$10$2imU.0Ih2VkLr0WjGjqf.uSR.mmhjpyRX1wNQdpCnerC33KCXeIAe'),
('edavis@gmail.com', '$2b$10$ROyjoilWr.dIZX796N0He.IZBcbVYJdPaILqNoUNrluydSE6JKeqi'),
('yjohnson@gmail.com', '$2b$10$HF0chDUiV5Lbz8ulIcRYB.Bo7KH9z9TDTfb9xVvnSZ7tjY4oDngIa'),
('adamsmaxwell@yahoo.com', '$2b$10$W.XmNsLMKn3fv6AoAuEHTOxk6R2wZ5uuGfmYCIWdrmcRrEkKpeaKS'),
('amber93@gmail.com', '$2b$10$5rNxLRzihIuVXBwekYj7juyzx701Y/WJvNyAViq7tveDYDlYeL/SG'),
('paynemargaret@yahoo.com', '$2b$10$doigFtK8V2QHMnqbdn8fseo/TCyFbjEMtHLv8MY0r3VOGdA/UH8.G'),
('xgilbert@gmail.com', '$2b$10$GfHbPeGV2tg9CE2m6dzbU.pPZ19wnHYBWAUtdKiXFve4wVfQfrwtG'),
('ahicks@hotmail.com', '$2b$10$lqI1FrZ4hJi.QY3OBtLb1edqqNj/w12qWEbchbL9akQQ0V3r/4GDi'),
('ibarry@gmail.com', '$2b$10$6whbqocUZ/ZhECpupJj2oeb2rnjffr2wQFnkKaaGclkYGzV92VLni'),
('shanemarshall@gmail.com', '$2b$10$YYSoPfhoVWrR66MrbpLwBesWoMf.OjOCaBGdKHr7jJKcyKclJ3pUy'),
('charles44@gmail.com', '$2b$10$M7rHp1zQH0RPmeinaxxiueTKI4p3g.p20RAdAYi6Yj2ExXLlSEbcG'),
('natalienichols@hotmail.com', '$2b$10$OjETjA20t4gXYBvGV1Gc3.uZW8nt/7tcJoLt1gMP8Fx2DO.d0tv2q'),
('whiteroy@gmail.com', '$2b$10$u0xlVX7GsoJ3c7Ma01aLh.CHZ7yZDZEAFTSgnYh.Ev4Z9aSYqbvK6'),
('princerobert@yahoo.com', '$2b$10$Chjvr..ECS6sdv1hdjzXvu.uTV8IFBi0KetS6HxRrPBQcTpaPjZw.'),
('moorenicholas@yahoo.com', '$2b$10$aJ88.Li12hBsjIAlJ3A0weYrJ47sq1Un3RGv52yKXsIT2JOJixJF.'),
('frank62@gmail.com', '$2b$10$I9S.1v52XXxiVFjBgRtT3ea3.i.4wq0CSsXfAgQTIpn.taxbUcwuu'),
('paul67@hotmail.com', '$2b$10$HKXH5iJ87QbyPv8ijvl2SuU0GloSNoKucXquaxcdZca64XFGX5WP2'),
('gina96@gmail.com', '$2b$10$OWvmhozez61wjc/ZwgcryeRO2vPThaGnz.wxilRIhjHbZ1S.N2Kny'),
('gregory52@yahoo.com', '$2b$10$IWp4Rs3nCNGxD5xbMtngseAztZ0VXez37krEKrd2szDESpCIJhAuG'),
('xandrews@gmail.com', '$2b$10$qWRYGB3UrN6SSq.y6L.45eue1DEMuQzyTzlv6dZRWOJveJCZ.dJpC')
;

-- Insert a set of posts into the database
INSERT INTO posts.posts(title, message, image_url, creation_date, writer_id)
VALUES
(
    'Dad joke',
    'What did the baby corn say to the mama corn? Where''s popcorn?',
    NULL,
    '2023-02-07 23:31:11.498'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What do you get from a pampered cow? Spoiled milk.',
    'https://picsum.photos/111/293',
    '2021-08-30 13:34:31.058'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dignissim diam quis enim lobortis scelerisque ferm',
    'Leo vel orci porta non pulvinar neque. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Consectetur libero id faucibus nisl tincidunt eget. Morbi tristique senectus et netus. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Sit amet nulla facilisi morbi tempus iaculis urna. Suscipit tellus mauris a diam maecenas. In aliquam sem fringilla ut. Tortor at risus viverra adipiscing. Scelerisque eleifend donec pretium vulputate sapien nec. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Mi tempus imperdiet nulla malesuada pellentesque elit. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Nam at lectus urna duis convallis.
Enim eu turpis egestas pretium aenean. Ipsum a arcu cursus vitae. Massa massa ultricies mi quis hendrerit dolor. Rhoncus dolor purus non enim praesent elementum. Tristique magna sit amet purus. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Egestas diam in arcu cursus. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. In mollis nunc sed id semper risus in hendrerit gravida. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Volutpat consequat mauris nunc congue nisi vitae.
',
    NULL,
    '2021-10-22 13:26:46.135'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Bill Vaughan',
    'Muscles come and go flab lasts.',
    NULL,
    '2023-03-20 19:24:03.701'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Heads',
    '20 heads were cut'' no one was killed .after 10 days the heads again growd how could that be




NAILS',
    'https://picsum.photos/115/579',
    '2020-12-16 04:27:41.465'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Heinz Catsup leaving the bottle travels at 25 miles per year',
    'https://picsum.photos/617/405',
    '2020-03-08 12:12:03.750'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit North Korea',
    NULL,
    '2020-04-25 05:40:13.522'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Jesus walked on water. Chuck Norris swam on land',
    NULL,
    '2023-01-20 17:53:29.075'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Charles Dickens',
    'Charity begins at home, and justice begins next door.',
    'https://picsum.photos/197/342',
    '2020-11-23 18:33:59.887'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Go skiing in Dubai',
    'https://picsum.photos/413/150',
    '2021-02-26 00:53:22.958'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'paras',
    'Pokemon  bug grass',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png',
    '2022-07-09 02:50:37.615'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'What Am I?',
    'You love to visit me. Once you come, you never want to leave. Some use me for creativity. What am I?




Imagination!',
    'https://picsum.photos/414/218',
    '2021-12-28 11:58:45.975'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I just got my doctor''s test results and I’m really upset. Turns out, I’m not gonna be a doctor.',
    NULL,
    '2021-03-14 18:13:09.967'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Shop in the Grand Bazaar',
    'https://picsum.photos/550/520',
    '2020-10-02 19:15:29.631'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'weedle',
    'Pokemon  bug poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
    '2023-10-08 10:19:21.272'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The highest bridge in the world is located in the Himalyan mountains. It was built by the Indian Army, in 1982, and is about 5,600 metres above sea level',
    NULL,
    '2021-04-17 21:58:46.237'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I''d tell you a chemistry joke but I know i wouldn''t get a reaction.',
    NULL,
    '2023-04-17 07:51:45.221'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Women blink nearly twice as much as men',
    'https://picsum.photos/134/365',
    '2022-11-20 16:09:35.339'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Max Baer',
    'I define fear as standing across the ring from Joe Louis and knowing he wants to go home early.',
    NULL,
    '2019-12-25 04:43:42.828'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Canyon',
    'A man has nothing but as much roope as he requires to cross a canyon. There is nothing to fasten the rope to on either side and he is unable to absail or climb.




He fills the canyon with rope until he is simply able to walk over the rope to the other side.',
    NULL,
    '2022-01-22 08:46:10.800'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Dennis Brown',
    'You see, that is it with music, you never stop learning.',
    NULL,
    '2020-10-23 11:39:50.081'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The first toilet being flushed in a motion picture was in the movie "Psycho."',
    'https://picsum.photos/213/526',
    '2022-09-26 04:33:20.389'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'A Teenagers Riddle',
    'ees llahs uoy dna sdrawkcab siht daer eeht ot flesti laever lliw elddir eht erbmun a si eulc eht ton si rewsna eht redroni hguorht desuac redro fo tuo yltnerruc nihtiw seil rewsna eht




the answer is "turds". want to know how to get this answer? here it is: decifered -  read this backwards and you shall see the riddle will reveal itself to thee the clue is a number the answer is not caused through inorder currently out of order the answer lies within after this, the top paragraph is used for only one thing. the word "backwards" after you decifer the riddle, you still have to do some  backwards reading. "the clue is a number". to get this number, count the number of words in each line, for the first, its 5. count from the end of the line "r" and count 5 letters back. you end with "u". do the same for the rest, and you end with : "usdrt" the next part, is a riddle in itself. "caused through inorder currently out of order the answer lies within" the "caused through inorder" is suggesting an anagram. the "answer lies within" means that the answer is the solved anagram. if we solve the anagram, we come up with two results that make sense. "durst" and "turds" now think, a teenager made this riddle, it would seem strange  having an answer like "durst" leaving only one possibility. yep, you guessed it. the answer is "turds"',
    NULL,
    '2022-08-15 02:07:04.848'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'rhyhorn',
    'Pokemon  ground rock',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png',
    '2023-08-31 09:46:16.015'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Maker',
    'I am the creator, through thick and thin, My time is sunset then I begin. Worlds of men and beasts I make, to me these things are not fake. But Over and over I will kill , I am the tirent and creator but not at will. What am I?




A sleeping dreamer.',
    NULL,
    '2021-11-16 14:39:23.290'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Mighty Mouse often sang "Here I Come to Save the Day!" The next and little-known line of that song was "Because Chuck Norris Has My Back!"',
    NULL,
    '2022-06-10 13:50:45.980'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'vulpix',
    'Pokemon  fire',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png',
    '2021-02-13 04:41:01.545'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Explore the Batu Caves',
    NULL,
    '2021-08-11 19:01:56.456'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The fins of the Spiny Dogfish Shark are sometimes used as sandpaper for wood products',
    NULL,
    '2021-02-02 17:30:56.400'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris is the answer to the question, "What''s the worst thing that could happen?"',
    'https://picsum.photos/234/453',
    '2023-03-29 12:03:53.428'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Enid Bagnold',
    'In marriage there are no manners to keep up, and beneath the wildest accusations no real criticism. Each is familiar with that ancient child in the other who may erupt again. We are not ridiculous to ourselves. We are ageless. That is the luxury of the wedding ring.',
    NULL,
    '2020-01-17 06:22:26.700'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'If the early bird gets the worm, I''ll sleep in until there''s pancakes.',
    NULL,
    '2022-03-25 03:06:50.134'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'The Two Soldiers',
    'can you fit 10 donkeys on a truck




no they are too fat',
    'https://picsum.photos/591/380',
    '2021-07-09 13:43:03.539'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit all of the ‘Stans',
    NULL,
    '2021-12-13 19:05:40.256'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Id eu nisl nunc mi ipsum faucibus vitae aliquet ne',
    'Mi eget mauris pharetra et ultrices neque. Nunc non blandit massa enim nec. Velit scelerisque in dictum non consectetur a. Enim sed faucibus turpis in eu mi bibendum neque. In egestas erat imperdiet sed. Ac auctor augue mauris augue neque gravida in fermentum. Vitae congue eu consequat ac felis donec. Feugiat sed lectus vestibulum mattis. Nibh venenatis cras sed felis eget velit aliquet. Mauris sit amet massa vitae tortor condimentum lacinia quis. Orci sagittis eu volutpat odio facilisis mauris sit amet. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Purus viverra accumsan in nisl. Consequat semper viverra nam libero justo laoreet sit amet. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Nec dui nunc mattis enim ut tellus elementum. Quis auctor elit sed vulputate mi sit. Feugiat nibh sed pulvinar proin gravida.
Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Sagittis id consectetur purus ut faucibus pulvinar elementum. Accumsan tortor posuere ac ut. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Purus in massa tempor nec feugiat nisl. Felis eget nunc lobortis mattis. Amet massa vitae tortor condimentum lacinia quis vel. Sed cras ornare arcu dui vivamus arcu. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Integer vitae justo eget magna fermentum iaculis eu. Lorem mollis aliquam ut porttitor. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Vulputate dignissim suspendisse in est ante. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Nulla facilisi nullam vehicula ipsum a arcu cursus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum.
',
    'https://picsum.photos/683/452',
    '2023-09-29 02:51:32.722'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why did the cookie go to the doctor? It was feeling crumby.',
    NULL,
    '2022-04-22 05:36:42.884'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The stage were the television sitcom "Friends" is shot on is said to be haunted',
    'https://picsum.photos/402/257',
    '2021-05-23 20:00:12.144'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris Roundhouse kicked the Earth, It''s been spinning ever since....',
    'https://picsum.photos/593/188',
    '2021-05-01 03:57:36.590'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Win something at auction',
    NULL,
    '2023-07-30 11:53:15.999'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nibh sit amet commodo nulla. Placerat vestibulum l',
    'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Elit eget gravida cum sociis natoque penatibus et. Aliquet nibh praesent tristique magna sit amet purus gravida. Sodales ut eu sem integer vitae. Lectus arcu bibendum at varius vel. Eget mi proin sed libero. Turpis egestas sed tempus urna et pharetra. Ut tellus elementum sagittis vitae et leo. Odio ut enim blandit volutpat. Massa tincidunt dui ut ornare lectus sit amet est placerat. Cursus mattis molestie a iaculis. Arcu dictum varius duis at consectetur lorem donec. In massa tempor nec feugiat nisl pretium.
Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Tristique senectus et netus et malesuada fames ac. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut. Eros in cursus turpis massa tincidunt. Purus viverra accumsan in nisl nisi scelerisque eu. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Nam aliquam sem et tortor. Sit amet purus gravida quis blandit turpis. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Amet massa vitae tortor condimentum.
Volutpat consequat mauris nunc congue. Sollicitudin ac orci phasellus egestas tellus. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Massa tempor nec feugiat nisl pretium fusce id. Amet purus gravida quis blandit turpis cursus in hac. Neque ornare aenean euismod elementum nisi quis eleifend. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Elit at imperdiet dui accumsan sit amet. Etiam erat velit scelerisque in dictum non consectetur a erat. Lacus vestibulum sed arcu non odio euismod lacinia. Ultrices eros in cursus turpis. Nibh nisl condimentum id venenatis a condimentum. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus.
',
    NULL,
    '2022-08-16 01:55:25.347'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The movie "Cleopatra" cost $44 million to make in 1963. The same movie would now cost $300 million to make taking inflation into account',
    NULL,
    '2020-02-01 21:08:31.362'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Ray Comfort',
    'Faith is the first step to understanding. Either it''s the Word of an infallible God, the fallible words of men, or faith in what you personally believe. You''ve got to have faith in something. Believe me.',
    'https://picsum.photos/198/259',
    '2021-05-30 20:19:12.118'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Which Famous Wine Region Is Centred On Reims




Champagne',
    'https://picsum.photos/124/286',
    '2022-04-28 12:44:29.005'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris knows where Carmen Sandiego is.',
    'https://picsum.photos/406/322',
    '2020-05-24 23:52:32.757'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Attend the Australian Celtic Festival',
    NULL,
    '2021-07-20 18:43:49.809'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Eget sit amet tellus cras adipiscing enim eu. Dui ',
    'Sed elementum tempus egestas sed sed risus pretium quam. Interdum varius sit amet mattis vulputate enim nulla. Orci porta non pulvinar neque laoreet suspendisse. Urna porttitor rhoncus dolor purus non enim praesent. Elit sed vulputate mi sit amet mauris commodo. Sit amet dictum sit amet. Elementum integer enim neque volutpat ac tincidunt. A erat nam at lectus urna duis convallis. Convallis aenean et tortor at risus viverra adipiscing at in. Mattis vulputate enim nulla aliquet porttitor lacus. Sagittis nisl rhoncus mattis rhoncus urna. Sit amet massa vitae tortor. Phasellus vestibulum lorem sed risus ultricies. Habitant morbi tristique senectus et netus et. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Mi eget mauris pharetra et ultrices neque. Sodales ut eu sem integer.
Viverra aliquet eget sit amet tellus. Adipiscing at in tellus integer feugiat scelerisque. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Mauris ultrices eros in cursus. Dolor purus non enim praesent. Quam viverra orci sagittis eu volutpat. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Lobortis feugiat vivamus at augue. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Sed sed risus pretium quam. Integer malesuada nunc vel risus. Egestas congue quisque egestas diam in arcu. Elementum nibh tellus molestie nunc non blandit massa enim nec.
',
    NULL,
    '2022-03-31 23:01:46.459'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Gary Neville can kick a football 200meters, to out do Garry Chuck Norris kicked phill Neville 300 meters',
    'https://picsum.photos/208/668',
    '2021-07-08 21:07:22.120'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'In one day, a queen bee can lay up to 1500 eggs in one day',
    NULL,
    '2023-11-11 01:19:01.472'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What do you call a cow with no legs? Ground beef.',
    'https://picsum.photos/498/647',
    '2023-06-14 05:35:25.502'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Eleanor Robson Belmont',
    'Never be afraid to meet to the hilt the demand of either work, or friendship - two of life''s major assets.',
    NULL,
    '2021-03-29 00:39:16.709'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'A new way to teach kids to ride, balance bikes are bicycles that are missing what part?




Pedals',
    NULL,
    '2023-11-06 20:50:18.747'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'rhyhorn',
    'Pokemon  ground rock',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png',
    '2023-02-21 13:46:28.997'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Vanessa Paradis',
    'The movies and the parts I''m being offered are becoming better and better.',
    'https://picsum.photos/513/328',
    '2020-06-27 14:50:32.850'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Police label anyone attacking Chuck Norris as a Code 45-11.... A suicide.',
    'https://picsum.photos/693/538',
    '2023-01-08 09:29:00.115'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Mauris commodo quis imperdiet massa tincidunt nunc',
    'Ut eu sem integer vitae justo eget magna. Praesent tristique magna sit amet purus. Quis auctor elit sed vulputate mi. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Aenean euismod elementum nisi quis eleifend quam. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Nec nam aliquam sem et. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Tellus in metus vulputate eu.
Viverra aliquet eget sit amet tellus. Adipiscing at in tellus integer feugiat scelerisque. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Mauris ultrices eros in cursus. Dolor purus non enim praesent. Quam viverra orci sagittis eu volutpat. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Lobortis feugiat vivamus at augue. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Sed sed risus pretium quam. Integer malesuada nunc vel risus. Egestas congue quisque egestas diam in arcu. Elementum nibh tellus molestie nunc non blandit massa enim nec.
',
    NULL,
    '2023-10-12 06:41:29.196'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Butterflies taste with their feet',
    NULL,
    '2022-11-10 12:04:22.627'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Charlie Sheen',
    'You have the right to kill me, but you don''t have the right to judge me. That''s life. There''s nobility in that. There''s focus. It''s genuine. It''s crystal and it''s pure and it''s available to everybody, so just shut your traps and put down your McDonalds, your vaccines, your Us Weekly, your TMZ and the rest of it.',
    'https://picsum.photos/535/603',
    '2021-12-28 09:57:56.045'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Mike Shinoda',
    'I grew up painting and playing piano so when I was a little kid I thought I was going to be an artist or a painter but my mom had me taking piano lessons for about 10-12 years as a young kid.',
    NULL,
    '2022-03-20 10:59:42.931'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Samuel Johnson',
    'There is no private house in which people can enjoy themselves so well as at a capital tavern... No, Sir there is nothing which has yet been contrived by man by which so much happiness is produced as by a good tavern or inn.',
    NULL,
    '2020-02-15 08:05:02.576'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from David Copperfield',
    'Dreams are illusions, and we can''t let go of them because we would be dead.',
    NULL,
    '2023-06-25 11:02:28.577'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'In 1976 Sue Barker won her only Grand Slam Final. Which one?




The French Open',
    'https://picsum.photos/452/527',
    '2023-01-29 04:47:54.278'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'There are approximately 60 muscles in the face',
    NULL,
    '2022-12-26 18:04:33.688'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Ancient Egyptians used the spice Thyme to help preserve mummies',
    NULL,
    '2022-12-23 00:14:41.828'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Which Character Is The Most Famous Creation Of James Matthew Barrie?




Peter Pan',
    'https://picsum.photos/569/382',
    '2022-07-01 01:50:30.803'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'During the Depression.impoverished people built tent cities and shantytowns known by what "presidential" nickname?




Hoovervilles',
    'https://picsum.photos/235/595',
    '2021-03-15 13:46:01.173'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Where do you take someone who’s been injured in a peak-a-boo accident? To the I-C-U.',
    'https://picsum.photos/267/376',
    '2021-03-16 10:43:44.359'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'In New Jersey what can''t be sold on a Sunday




Cabbage',
    NULL,
    '2022-05-25 09:51:49.707'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Ron Wyden',
    'I believe the most important aspect of Medicare is not the structure of the program but the guarantee to all Americans that they will have high quality health care as they get older.',
    'https://picsum.photos/399/130',
    '2022-08-27 23:37:52.810'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What is unusual about the 1965 horror film Incubus




Only One In Esperanto',
    NULL,
    '2021-04-06 22:10:18.113'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'gastly',
    'Pokemon  ghost poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png',
    '2020-06-15 01:04:15.741'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'What Are They?',
    'Always opens and closes without making sound




  Eye lids',
    'https://picsum.photos/244/101',
    '2022-02-28 00:46:02.310'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'In America, using the metric system can get you in legal trouble.',
    NULL,
    '2023-04-09 15:35:20.358'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from George Will',
    'Well, you know, the definition of second marriage is the triumph of hope over experience.',
    NULL,
    '2022-01-11 21:55:18.784'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris and the Dale Lamma got to gether to see the perfect human the Dale Lamma asked Chuck Norris where the person was Chuck Norris told Him to look at ME the perfect HUMAN!{Which is Chuck Norris}',
    NULL,
    '2020-11-15 13:45:07.469'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Indonesia consists only of islands - 13,667 total',
    NULL,
    '2021-09-03 10:42:56.116'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Thomas Watson, who was the chairman of IBM in 1943 predicted that their would probably only be a world market for five computers.',
    'https://picsum.photos/211/314',
    '2020-09-25 21:34:20.850'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Train',
    'An electric train is going 50 miles per hour West. The wind is going 50 miles per hour east. Which way does the steam go?




Well, if there was steam, there would be a problem. Electric trains don''t have steam (unless there''s a fire or an electric problem, but then everyone would panic, and the train wouldn''t be moving)',
    NULL,
    '2022-06-21 21:05:42.858'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Start Of Eternity',
    'I come at the end of time and at the start of eternitiy. I come four times in every week, but only once in a thousand years. What am I?




The letter E.',
    'https://picsum.photos/317/259',
    '2020-04-07 05:13:34.595'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'pidgeot',
    'Pokemon  normal flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
    '2022-08-15 21:47:09.258'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Tincidunt vitae semper quis lectus. Consectetur ad',
    'Mi tempus imperdiet nulla malesuada pellentesque. Ut sem nulla pharetra diam sit amet. Eu consequat ac felis donec et. Ac felis donec et odio pellentesque diam volutpat. Vulputate sapien nec sagittis aliquam malesuada bibendum. Commodo viverra maecenas accumsan lacus vel. Ut sem viverra aliquet eget sit. Semper quis lectus nulla at volutpat diam ut. Ultricies integer quis auctor elit sed. Nulla facilisi morbi tempus iaculis urna. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Diam ut venenatis tellus in metus vulputate eu. Ut consequat semper viverra nam libero justo. Facilisi morbi tempus iaculis urna id. Tortor vitae purus faucibus ornare suspendisse.
',
    'https://picsum.photos/412/176',
    '2021-06-24 23:08:15.082'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Attend a traditional black tie ball',
    NULL,
    '2023-03-15 09:10:18.988'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit the Kennedy Space Centre',
    'https://picsum.photos/115/673',
    '2021-02-04 12:55:23.667'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Phil McGraw',
    'The Internet is just bringing all kinds of information into the home. There''s just a lot of distraction, a lot of competition for the parent''s voice to resonate in the children''s ears.',
    NULL,
    '2021-05-31 10:35:36.834'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Carlos Ghosn',
    'The role of leadership is to transform the complex situation into small pieces and prioritize them.',
    NULL,
    '2020-11-07 18:54:06.150'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris breaks hockey sticks over his shins.',
    'https://picsum.photos/582/640',
    '2023-03-10 04:24:30.787'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Consectetur a erat nam at lectus. Amet justo donec',
    'Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Sagittis id consectetur purus ut faucibus pulvinar elementum. Accumsan tortor posuere ac ut. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Purus in massa tempor nec feugiat nisl. Felis eget nunc lobortis mattis. Amet massa vitae tortor condimentum lacinia quis vel. Sed cras ornare arcu dui vivamus arcu. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Integer vitae justo eget magna fermentum iaculis eu. Lorem mollis aliquam ut porttitor. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Vulputate dignissim suspendisse in est ante. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Nulla facilisi nullam vehicula ipsum a arcu cursus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum.
Nibh nisl condimentum id venenatis a condimentum vitae sapien. Laoreet sit amet cursus sit. Commodo ullamcorper a lacus vestibulum sed arcu. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Pharetra convallis posuere morbi leo urna. Id volutpat lacus laoreet non curabitur gravida arcu ac. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Lorem mollis aliquam ut porttitor. A arcu cursus vitae congue. Nisl purus in mollis nunc sed id semper. Convallis a cras semper auctor neque. Lectus arcu bibendum at varius. Facilisis sed odio morbi quis commodo odio aenean sed. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Vel orci porta non pulvinar neque laoreet suspendisse. Feugiat nisl pretium fusce id. Adipiscing bibendum est ultricies integer quis auctor.
',
    NULL,
    '2020-05-17 17:32:10.633'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Food, Not Water',
    'Give me food, and I will live; give me water, and I will die. What am I?




Fire!',
    NULL,
    '2021-03-28 23:01:22.470'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Sharks are capable of surviving on average six weeks without eating. The record observed in an aquarium is fifteen months by a species of shark known as the "swell shark."',
    NULL,
    '2021-08-27 01:55:48.906'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The name for Ivory Soap was inspired by a verse from the Bible. Harley Proctor got though of the name when the minister read from Psalms 45:8, "All thy garments smell of myrrh and aloes and cassia, out of the ivory palaces whereby they have made thee glad."',
    'https://picsum.photos/460/302',
    '2022-10-04 17:43:02.742'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'The rotation of earth really makes my day.',
    NULL,
    '2022-06-02 19:34:51.322'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit Westminster Abbey',
    NULL,
    '2021-09-18 15:07:22.202'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Attend Burning Man',
    NULL,
    '2021-09-17 17:32:34.580'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The steepest street in the world is Baldwin Street located in Dunedin, New Zealand. It has an incline of 38%',
    NULL,
    '2021-09-28 09:02:56.827'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'vulpix',
    'Pokemon  fire',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png',
    '2020-12-24 16:34:14.841'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris only finds M&M''s in a bag of Trail Mix.',
    'https://picsum.photos/358/164',
    '2020-01-01 18:53:33.980'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Thailand used to be called Siam',
    NULL,
    '2023-05-27 09:35:52.372'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'The Inquisition forced him to recant his belief in the Copernican Theory.




Galileo',
    'https://picsum.photos/244/602',
    '2021-10-27 14:02:35.538'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'flareon',
    'Pokemon  fire',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png',
    '2021-02-21 07:06:15.003'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Which sport is derived from the Indian game of Poona?




Badminton',
    NULL,
    '2022-07-04 04:51:47.491'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'hitmonchan',
    'Pokemon  fighting',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png',
    '2023-08-10 07:13:12.711'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Easy',
    'each time you take a step you make one of me, but then you leave me behind




a footprint',
    'https://picsum.photos/534/156',
    '2022-05-08 09:49:19.288'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The fat from sheep, which is called tallow can be used to make soap and candles',
    NULL,
    '2022-10-16 06:37:39.105'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Get down to my ideal weight',
    'https://picsum.photos/583/197',
    '2021-08-15 06:01:33.436'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Florence Welch',
    'Going to parties usually makes me feel depressed, just because I have such social fear after meeting people.',
    'https://picsum.photos/612/643',
    '2021-10-01 22:56:17.651'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What’s a scarecrow’s favorite fruit? Straw-berries',
    NULL,
    '2022-07-15 02:13:14.290'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The first domain name ever registered was Symbolics.com on March 15, 1985.',
    'https://picsum.photos/334/470',
    '2020-01-08 23:38:27.958'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'A cheese factory exploded in France. Da brie is everywhere!',
    NULL,
    '2022-03-20 09:35:58.430'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Risus sed vulputate odio ut enim blandit volutpat.',
    'Mi tempus imperdiet nulla malesuada pellentesque. Ut sem nulla pharetra diam sit amet. Eu consequat ac felis donec et. Ac felis donec et odio pellentesque diam volutpat. Vulputate sapien nec sagittis aliquam malesuada bibendum. Commodo viverra maecenas accumsan lacus vel. Ut sem viverra aliquet eget sit. Semper quis lectus nulla at volutpat diam ut. Ultricies integer quis auctor elit sed. Nulla facilisi morbi tempus iaculis urna. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Diam ut venenatis tellus in metus vulputate eu. Ut consequat semper viverra nam libero justo. Facilisi morbi tempus iaculis urna id. Tortor vitae purus faucibus ornare suspendisse.
Praesent semper feugiat nibh sed pulvinar proin. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Urna molestie at elementum eu facilisis sed odio morbi quis. Adipiscing commodo elit at imperdiet dui accumsan. Ac felis donec et odio pellentesque diam. Sapien pellentesque habitant morbi tristique senectus et netus et. Interdum velit euismod in pellentesque massa placerat. Id diam maecenas ultricies mi eget mauris pharetra et. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Ultricies tristique nulla aliquet enim tortor. Non curabitur gravida arcu ac. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus.
',
    NULL,
    '2023-04-19 01:23:12.452'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Ut ornare lectus sit amet est placerat. Eget nulla',
    'Blandit volutpat maecenas volutpat blandit. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Aliquet enim tortor at auctor urna nunc id cursus metus. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Enim ut tellus elementum sagittis vitae et leo. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Elementum integer enim neque volutpat ac tincidunt vitae. Id leo in vitae turpis massa sed elementum. Volutpat sed cras ornare arcu dui vivamus arcu felis. Suspendisse in est ante in. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Elit eget gravida cum sociis natoque. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Purus faucibus ornare suspendisse sed. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Ac turpis egestas integer eget aliquet.
',
    'https://picsum.photos/287/174',
    '2020-07-02 10:19:11.493'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'pidgeotto',
    'Pokemon  normal flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
    '2020-10-22 12:20:26.728'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Eat blowfish',
    NULL,
    '2022-04-18 08:40:30.286'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Lectus urna duis convallis convallis tellus id int',
    'Enim eu turpis egestas pretium aenean. Ipsum a arcu cursus vitae. Massa massa ultricies mi quis hendrerit dolor. Rhoncus dolor purus non enim praesent elementum. Tristique magna sit amet purus. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Egestas diam in arcu cursus. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. In mollis nunc sed id semper risus in hendrerit gravida. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Volutpat consequat mauris nunc congue nisi vitae.
',
    NULL,
    '2021-11-16 08:42:27.388'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Andre Gide',
    'Work and struggle and never accept an evil that you can change.',
    'https://picsum.photos/138/429',
    '2022-08-29 02:47:28.700'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Sed elementum tempus egestas sed sed risus pretium',
    'Risus sed vulputate odio ut enim blandit volutpat. Faucibus turpis in eu mi bibendum neque. Morbi tristique senectus et netus et malesuada fames ac. Lacinia quis vel eros donec. Est velit egestas dui id ornare arcu. Commodo viverra maecenas accumsan lacus. Turpis in eu mi bibendum neque egestas congue. Fermentum posuere urna nec tincidunt. Sit amet nisl purus in mollis. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Justo eget magna fermentum iaculis eu non diam. Proin nibh nisl condimentum id venenatis. Viverra maecenas accumsan lacus vel facilisis volutpat est. Rhoncus dolor purus non enim praesent elementum facilisis leo. Urna id volutpat lacus laoreet non curabitur gravida. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fermentum leo vel orci porta.
A iaculis at erat pellentesque adipiscing commodo elit. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Mattis nunc sed blandit libero. Eu lobortis elementum nibh tellus molestie nunc non blandit. Eget duis at tellus at urna condimentum. Sagittis aliquam malesuada bibendum arcu vitae elementum. Felis imperdiet proin fermentum leo vel orci. Sed sed risus pretium quam vulputate. Sed risus pretium quam vulputate dignissim suspendisse in. Fames ac turpis egestas maecenas pharetra convallis posuere. Lobortis scelerisque fermentum dui faucibus in ornare quam. Aenean pharetra magna ac placerat vestibulum lectus mauris. Aliquet sagittis id consectetur purus. Netus et malesuada fames ac. Habitant morbi tristique senectus et. Habitasse platea dictumst vestibulum rhoncus. Egestas sed sed risus pretium quam vulputate. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus.
',
    NULL,
    '2020-07-24 04:54:33.901'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Drink ouzo in Greece',
    NULL,
    '2021-01-16 14:04:23.231'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nec feugiat nisl pretium fusce id velit. Aliquam u',
    'Nunc sed velit dignissim sodales ut eu sem integer. Aliquam sem et tortor consequat id porta nibh venenatis cras. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. In aliquam sem fringilla ut morbi tincidunt. Feugiat nisl pretium fusce id velit ut tortor. Eu feugiat pretium nibh ipsum consequat nisl vel. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Libero id faucibus nisl tincidunt eget nullam. Urna cursus eget nunc scelerisque. Convallis tellus id interdum velit laoreet id. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Amet consectetur adipiscing elit pellentesque habitant. Orci ac auctor augue mauris augue neque gravida in. Risus quis varius quam quisque id diam vel quam. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Amet porttitor eget dolor morbi non. Convallis convallis tellus id interdum.
Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Consequat id porta nibh venenatis cras sed felis eget velit. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Et tortor consequat id porta nibh. Ut etiam sit amet nisl purus. Leo vel fringilla est ullamcorper. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Vel facilisis volutpat est velit egestas dui id. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Nibh tellus molestie nunc non blandit. Nisi lacus sed viverra tellus in hac habitasse platea dictumst.
Eget sit amet tellus cras adipiscing enim eu. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Purus in massa tempor nec feugiat nisl pretium fusce. Eu feugiat pretium nibh ipsum consequat nisl. Purus in mollis nunc sed. Turpis massa sed elementum tempus egestas sed. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Est lorem ipsum dolor sit amet. Fringilla phasellus faucibus scelerisque eleifend donec. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.
',
    NULL,
    '2020-04-11 22:25:11.466'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris once abducted aliens.',
    NULL,
    '2021-02-02 15:17:32.425'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Have a charicature of me drawn',
    'https://picsum.photos/374/684',
    '2020-08-30 08:46:47.177'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'What Could It Be?',
    'what runs but does not walk has a mouth but does not talk has a head but does not weep and has a bed but does not sleep




a river',
    NULL,
    '2022-02-05 20:14:20.115'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'How many Chuck Norris'' roundhouse kick does it take for a nuclear explosion? 2',
    'https://picsum.photos/500/214',
    '2020-12-14 06:59:52.937'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Faucibus interdum posuere lorem ipsum dolor sit am',
    'Purus semper eget duis at tellus at urna condimentum. Amet justo donec enim diam vulputate ut pharetra sit. Pretium lectus quam id leo in vitae turpis massa sed. Feugiat nibh sed pulvinar proin gravida. Eget velit aliquet sagittis id. Nisl pretium fusce id velit. Imperdiet proin fermentum leo vel orci porta non pulvinar. Proin gravida hendrerit lectus a. Nibh tortor id aliquet lectus. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Amet est placerat in egestas erat imperdiet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Eu tincidunt tortor aliquam nulla facilisi cras. Tellus at urna condimentum mattis pellentesque. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Eu sem integer vitae justo. Tempor orci eu lobortis elementum nibh tellus molestie nunc non.
Blandit volutpat maecenas volutpat blandit. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Aliquet enim tortor at auctor urna nunc id cursus metus. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Enim ut tellus elementum sagittis vitae et leo. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Elementum integer enim neque volutpat ac tincidunt vitae. Id leo in vitae turpis massa sed elementum. Volutpat sed cras ornare arcu dui vivamus arcu felis. Suspendisse in est ante in. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Elit eget gravida cum sociis natoque. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Purus faucibus ornare suspendisse sed. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Ac turpis egestas integer eget aliquet.
Sem viverra aliquet eget sit amet tellus cras. Proin nibh nisl condimentum id venenatis a. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Viverra vitae congue eu consequat ac felis donec et odio. Ultrices vitae auctor eu augue ut. Leo integer malesuada nunc vel risus. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus et malesuada fames ac. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Diam vel quam elementum pulvinar. Faucibus nisl tincidunt eget nullam. Lacus viverra vitae congue eu consequat. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Diam sit amet nisl suscipit. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.
',
    'https://picsum.photos/148/470',
    '2022-07-04 06:19:35.520'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Try fire walking',
    NULL,
    '2022-04-09 14:05:50.605'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Pretty Little Things',
    'I can be long, or I can be short. I can be grown, and I can be bought. I can be painted, or left bare. I can be round, or square. What am I?




Your fingernails.',
    'https://picsum.photos/649/286',
    '2021-02-09 02:30:08.469'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Common pesticides such as roach, termite and flea insecticide can be found in the bodies of majority of Americans',
    'https://picsum.photos/666/665',
    '2022-03-03 02:46:26.988'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Hubert H. Humphrey',
    'Freedom is hammered out on the anvil of discussion, dissent, and debate.',
    'https://picsum.photos/317/214',
    '2021-08-09 23:56:23.784'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Martin Scorsese',
    'There are two kinds of power you have to fight. The first is the money, and that''s just our system. The other is the people close around you, knowing when to accept their criticism, knowing when to say no.',
    NULL,
    '2020-06-22 21:47:24.789'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Id eu nisl nunc mi ipsum faucibus vitae aliquet ne',
    'Eget sit amet tellus cras adipiscing enim eu turpis. Amet facilisis magna etiam tempor. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Purus viverra accumsan in nisl nisi. Vitae elementum curabitur vitae nunc sed velit. Sed lectus vestibulum mattis ullamcorper velit. Consequat interdum varius sit amet mattis. Amet justo donec enim diam. Sed vulputate odio ut enim blandit volutpat maecenas. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Habitant morbi tristique senectus et netus et malesuada. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Congue mauris rhoncus aenean vel elit scelerisque. Id neque aliquam vestibulum morbi blandit cursus. Nunc sed augue lacus viverra vitae congue eu consequat ac. Leo vel orci porta non pulvinar neque. Consequat interdum varius sit amet mattis.
Praesent semper feugiat nibh sed pulvinar proin. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Urna molestie at elementum eu facilisis sed odio morbi quis. Adipiscing commodo elit at imperdiet dui accumsan. Ac felis donec et odio pellentesque diam. Sapien pellentesque habitant morbi tristique senectus et netus et. Interdum velit euismod in pellentesque massa placerat. Id diam maecenas ultricies mi eget mauris pharetra et. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Ultricies tristique nulla aliquet enim tortor. Non curabitur gravida arcu ac. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus.
Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Blandit massa enim nec dui nunc. Ultrices vitae auctor eu augue ut. Sagittis purus sit amet volutpat consequat mauris nunc congue. Viverra suspendisse potenti nullam ac tortor vitae purus. Aliquet enim tortor at auctor urna nunc id. Orci sagittis eu volutpat odio facilisis mauris sit amet. Sem integer vitae justo eget magna fermentum iaculis eu. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Nec ullamcorper sit amet risus nullam. Malesuada bibendum arcu vitae elementum. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Pretium quam vulputate dignissim suspendisse. Gravida quis blandit turpis cursus in hac habitasse. Odio tempor orci dapibus ultrices in iaculis nunc sed. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Leo urna molestie at elementum eu facilisis sed odio.
',
    NULL,
    '2022-08-12 22:23:28.512'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'A steak pun is a rare medium well done.',
    NULL,
    '2021-04-20 08:21:51.066'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'raichu',
    'Pokemon  electric',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
    '2021-01-06 20:32:46.275'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Viverra aliquet eget sit amet tellus. Adipiscing a',
    'Eget sit amet tellus cras adipiscing enim eu. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Purus in massa tempor nec feugiat nisl pretium fusce. Eu feugiat pretium nibh ipsum consequat nisl. Purus in mollis nunc sed. Turpis massa sed elementum tempus egestas sed. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Est lorem ipsum dolor sit amet. Fringilla phasellus faucibus scelerisque eleifend donec. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.
Nisl pretium fusce id velit ut tortor pretium viverra. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Volutpat diam ut venenatis tellus in metus. Commodo viverra maecenas accumsan lacus. Elit at imperdiet dui accumsan sit amet nulla facilisi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Eu scelerisque felis imperdiet proin. Arcu bibendum at varius vel pharetra vel turpis nunc. Orci a scelerisque purus semper eget. Elementum sagittis vitae et leo duis ut diam.
Ut ornare lectus sit amet est placerat. Eget nulla facilisi etiam dignissim diam quis enim. Penatibus et magnis dis parturient montes. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Odio pellentesque diam volutpat commodo. Duis ut diam quam nulla porttitor massa id. Diam donec adipiscing tristique risus. Sed blandit libero volutpat sed cras ornare. Tincidunt lobortis feugiat vivamus at augue eget arcu. Arcu dui vivamus arcu felis bibendum ut tristique. Dapibus ultrices in iaculis nunc sed augue lacus. Risus nullam eget felis eget nunc lobortis.
',
    NULL,
    '2023-03-15 21:58:32.733'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris went out for a casual bike ride when he was visiting Paris and accidentally won the Tour de France.',
    NULL,
    '2020-04-10 09:26:39.602'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'A iaculis at erat pellentesque adipiscing commodo ',
    'Lectus urna duis convallis convallis tellus id interdum. Porttitor leo a diam sollicitudin tempor id eu. Sit amet aliquam id diam maecenas. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Fermentum odio eu feugiat pretium nibh ipsum consequat. Purus semper eget duis at tellus at. Arcu bibendum at varius vel pharetra vel turpis. Suscipit tellus mauris a diam maecenas sed enim. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Faucibus interdum posuere lorem ipsum. Turpis massa tincidunt dui ut ornare lectus sit amet est. Egestas maecenas pharetra convallis posuere morbi leo. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Amet venenatis urna cursus eget nunc scelerisque. Hac habitasse platea dictumst quisque sagittis purus sit. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Non blandit massa enim nec dui. Mus mauris vitae ultricies leo integer malesuada. Sed felis eget velit aliquet sagittis id consectetur.
Sollicitudin nibh sit amet commodo. Purus sit amet luctus venenatis lectus. Dolor sit amet consectetur adipiscing elit ut aliquam purus. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Aliquet lectus proin nibh nisl condimentum. Laoreet non curabitur gravida arcu. Consectetur libero id faucibus nisl tincidunt eget nullam. Pretium viverra suspendisse potenti nullam ac tortor vitae. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Sed enim ut sem viverra aliquet. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Odio euismod lacinia at quis risus sed. Amet justo donec enim diam vulputate. Montes nascetur ridiculus mus mauris vitae ultricies leo integer.
',
    'https://picsum.photos/507/430',
    '2020-12-03 02:57:18.155'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Connie Nielsen',
    'We have a certain warped sense of humor in Scandinavia, and that is what comes across in the choices in a lot of our movies.',
    'https://picsum.photos/640/292',
    '2023-08-05 03:03:56.199'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Seamus Heaney',
    'Whether it be a matter of personal relations within a marriage or political initiatives within a peace process, there is no sure-fire do-it-yourself kit.',
    NULL,
    '2022-01-14 05:09:57.007'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'dratini',
    'Pokemon  dragon',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png',
    '2021-07-11 23:46:13.755'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Spend New Year’s Eve in Sydney',
    NULL,
    '2020-04-30 00:30:47.012'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Who was the cisco kid''s faithful sidekick




Pancho',
    NULL,
    '2023-06-02 02:07:28.059'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'The Mystery',
    'What happens once every minute, twice every moment, but never in a thousand years?




the Letter M',
    'https://picsum.photos/302/595',
    '2020-06-17 19:26:43.991'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Sem viverra aliquet eget sit amet tellus cras. Pro',
    'Nunc sed velit dignissim sodales ut eu sem integer. Aliquam sem et tortor consequat id porta nibh venenatis cras. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. In aliquam sem fringilla ut morbi tincidunt. Feugiat nisl pretium fusce id velit ut tortor. Eu feugiat pretium nibh ipsum consequat nisl vel. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Libero id faucibus nisl tincidunt eget nullam. Urna cursus eget nunc scelerisque. Convallis tellus id interdum velit laoreet id. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Amet consectetur adipiscing elit pellentesque habitant. Orci ac auctor augue mauris augue neque gravida in. Risus quis varius quam quisque id diam vel quam. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Amet porttitor eget dolor morbi non. Convallis convallis tellus id interdum.
Lorem sed risus ultricies tristique nulla aliquet enim. Curabitur vitae nunc sed velit. Vel elit scelerisque mauris pellentesque pulvinar. Viverra nibh cras pulvinar mattis nunc sed blandit. Pellentesque pulvinar pellentesque habitant morbi. Elementum sagittis vitae et leo. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Senectus et netus et malesuada. Varius vel pharetra vel turpis nunc. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Quam elementum pulvinar etiam non quam.
Volutpat consequat mauris nunc congue. Sollicitudin ac orci phasellus egestas tellus. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Massa tempor nec feugiat nisl pretium fusce id. Amet purus gravida quis blandit turpis cursus in hac. Neque ornare aenean euismod elementum nisi quis eleifend. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Elit at imperdiet dui accumsan sit amet. Etiam erat velit scelerisque in dictum non consectetur a erat. Lacus vestibulum sed arcu non odio euismod lacinia. Ultrices eros in cursus turpis. Nibh nisl condimentum id venenatis a condimentum. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus.
Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Tristique senectus et netus et malesuada fames ac. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut. Eros in cursus turpis massa tincidunt. Purus viverra accumsan in nisl nisi scelerisque eu. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Nam aliquam sem et tortor. Sit amet purus gravida quis blandit turpis. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Amet massa vitae tortor condimentum.
',
    NULL,
    '2022-08-12 05:03:47.831'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'As who is Vincent Furnier known?




Alice Cooper',
    NULL,
    '2021-12-27 13:22:49.883'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Walt Disney World is home to the largest working wardrobe in the world with over ________________ costumes in its inventory




2.5 Million',
    NULL,
    '2021-01-15 18:29:48.883'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Armadillos breed in July, but get pregnant in November after delaying implantation. This allows the young to be born during the spring when there is an abundance of food',
    'https://picsum.photos/545/241',
    '2020-10-31 04:02:45.493'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'psyduck',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png',
    '2023-09-10 22:08:14.542'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Strange Death',
    'A man and a woman were driving in their car when it broke down. The man decided to go for help at a gas station a few miles back. He made sure nobody was in the car, rolled all the windows up, and locked all of the sedan''s doors. He went off, but when he came back, his wife was dead, and there was a stranger in the car. No physical damage was done to the car, so how did the stranger get in?




The stranger was a baby and the woman died in childbirth.',
    NULL,
    '2022-08-01 01:43:26.262'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'In the Chinese calendar what year follows Monkey




Chicken',
    NULL,
    '2020-02-23 14:41:59.382'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'jigglypuff',
    'Pokemon  normal fairy',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
    '2023-08-22 12:55:04.064'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Which playwrite was nicknamed doc




Neil Simon',
    NULL,
    '2020-12-18 23:07:17.176'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Aliquet sagittis id consectetur purus ut faucibus ',
    'Sed elementum tempus egestas sed sed risus pretium quam. Interdum varius sit amet mattis vulputate enim nulla. Orci porta non pulvinar neque laoreet suspendisse. Urna porttitor rhoncus dolor purus non enim praesent. Elit sed vulputate mi sit amet mauris commodo. Sit amet dictum sit amet. Elementum integer enim neque volutpat ac tincidunt. A erat nam at lectus urna duis convallis. Convallis aenean et tortor at risus viverra adipiscing at in. Mattis vulputate enim nulla aliquet porttitor lacus. Sagittis nisl rhoncus mattis rhoncus urna. Sit amet massa vitae tortor. Phasellus vestibulum lorem sed risus ultricies. Habitant morbi tristique senectus et netus et. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Mi eget mauris pharetra et ultrices neque. Sodales ut eu sem integer.
',
    NULL,
    '2021-10-16 08:55:16.495'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Mi tempus imperdiet nulla malesuada pellentesque. ',
    'A iaculis at erat pellentesque adipiscing commodo elit. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Mattis nunc sed blandit libero. Eu lobortis elementum nibh tellus molestie nunc non blandit. Eget duis at tellus at urna condimentum. Sagittis aliquam malesuada bibendum arcu vitae elementum. Felis imperdiet proin fermentum leo vel orci. Sed sed risus pretium quam vulputate. Sed risus pretium quam vulputate dignissim suspendisse in. Fames ac turpis egestas maecenas pharetra convallis posuere. Lobortis scelerisque fermentum dui faucibus in ornare quam. Aenean pharetra magna ac placerat vestibulum lectus mauris. Aliquet sagittis id consectetur purus. Netus et malesuada fames ac. Habitant morbi tristique senectus et. Habitasse platea dictumst vestibulum rhoncus. Egestas sed sed risus pretium quam vulputate. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus.
Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Massa enim nec dui nunc. Netus et malesuada fames ac turpis egestas. Gravida rutrum quisque non tellus orci. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Amet aliquam id diam maecenas ultricies mi eget mauris. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Ultricies tristique nulla aliquet enim. Urna et pharetra pharetra massa. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit.
Eget sit amet tellus cras adipiscing enim eu. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Purus in massa tempor nec feugiat nisl pretium fusce. Eu feugiat pretium nibh ipsum consequat nisl. Purus in mollis nunc sed. Turpis massa sed elementum tempus egestas sed. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Est lorem ipsum dolor sit amet. Fringilla phasellus faucibus scelerisque eleifend donec. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.
',
    'https://picsum.photos/586/354',
    '2022-02-10 23:10:54.518'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Marilyn Manson',
    'My goal isn''t to make money, it''s to try and survive and make a point.',
    'https://picsum.photos/266/649',
    '2022-03-15 18:25:37.207'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Never smile at a crocodile. Unless you know that Chuck Norris is about to rip it in half like a phone book.',
    NULL,
    '2023-08-23 07:05:05.633'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Jonathan Safran Foer',
    'Food is not just what we put in our mouths to fill up it is culture and identity. Reason plays some role in our decisions about food, but it''s rarely driving the car.',
    NULL,
    '2023-02-21 01:12:08.773'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Vigesimal is which base numbering system




Base Twenty',
    'https://picsum.photos/508/426',
    '2023-01-19 21:09:09.593'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Risus sed vulputate odio ut enim blandit volutpat.',
    'Eget sit amet tellus cras adipiscing enim eu turpis. Amet facilisis magna etiam tempor. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Purus viverra accumsan in nisl nisi. Vitae elementum curabitur vitae nunc sed velit. Sed lectus vestibulum mattis ullamcorper velit. Consequat interdum varius sit amet mattis. Amet justo donec enim diam. Sed vulputate odio ut enim blandit volutpat maecenas. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Habitant morbi tristique senectus et netus et malesuada. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Congue mauris rhoncus aenean vel elit scelerisque. Id neque aliquam vestibulum morbi blandit cursus. Nunc sed augue lacus viverra vitae congue eu consequat ac. Leo vel orci porta non pulvinar neque. Consequat interdum varius sit amet mattis.
Nibh nisl condimentum id venenatis a condimentum vitae sapien. Laoreet sit amet cursus sit. Commodo ullamcorper a lacus vestibulum sed arcu. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Pharetra convallis posuere morbi leo urna. Id volutpat lacus laoreet non curabitur gravida arcu ac. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Lorem mollis aliquam ut porttitor. A arcu cursus vitae congue. Nisl purus in mollis nunc sed id semper. Convallis a cras semper auctor neque. Lectus arcu bibendum at varius. Facilisis sed odio morbi quis commodo odio aenean sed. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Vel orci porta non pulvinar neque laoreet suspendisse. Feugiat nisl pretium fusce id. Adipiscing bibendum est ultricies integer quis auctor.
Ac auctor augue mauris augue neque gravida in fermentum et. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Molestie at elementum eu facilisis sed odio morbi quis. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Cursus mattis molestie a iaculis. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Ultrices neque ornare aenean euismod elementum. Eu facilisis sed odio morbi. Arcu dui vivamus arcu felis. Aliquam etiam erat velit scelerisque in dictum. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Pellentesque nec nam aliquam sem. Amet volutpat consequat mauris nunc congue. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean sed adipiscing diam donec adipiscing tristique. Tellus pellentesque eu tincidunt tortor aliquam. Sem nulla pharetra diam sit amet nisl suscipit.
',
    'https://picsum.photos/330/628',
    '2019-12-02 09:13:15.743'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'charmeleon',
    'Pokemon  fire',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
    '2022-12-13 06:03:23.269'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Lectus urna duis convallis convallis tellus id int',
    'A iaculis at erat pellentesque adipiscing commodo elit. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Mattis nunc sed blandit libero. Eu lobortis elementum nibh tellus molestie nunc non blandit. Eget duis at tellus at urna condimentum. Sagittis aliquam malesuada bibendum arcu vitae elementum. Felis imperdiet proin fermentum leo vel orci. Sed sed risus pretium quam vulputate. Sed risus pretium quam vulputate dignissim suspendisse in. Fames ac turpis egestas maecenas pharetra convallis posuere. Lobortis scelerisque fermentum dui faucibus in ornare quam. Aenean pharetra magna ac placerat vestibulum lectus mauris. Aliquet sagittis id consectetur purus. Netus et malesuada fames ac. Habitant morbi tristique senectus et. Habitasse platea dictumst vestibulum rhoncus. Egestas sed sed risus pretium quam vulputate. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus.
Dignissim convallis aenean et tortor at risus viverra adipiscing at. Lacinia quis vel eros donec ac odio tempor orci. Id porta nibh venenatis cras. Nunc sed augue lacus viverra vitae congue eu consequat. Nisi porta lorem mollis aliquam. Pellentesque habitant morbi tristique senectus. Bibendum est ultricies integer quis auctor elit sed. Posuere urna nec tincidunt praesent semper. Id donec ultrices tincidunt arcu non sodales. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Nibh mauris cursus mattis molestie a iaculis at. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Ut porttitor leo a diam. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Magna fringilla urna porttitor rhoncus dolor purus non enim. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed.
',
    NULL,
    '2020-07-01 17:26:44.366'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Aliquam sem fringilla ut morbi tincidunt augue int',
    'Enim eu turpis egestas pretium aenean. Ipsum a arcu cursus vitae. Massa massa ultricies mi quis hendrerit dolor. Rhoncus dolor purus non enim praesent elementum. Tristique magna sit amet purus. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Egestas diam in arcu cursus. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. In mollis nunc sed id semper risus in hendrerit gravida. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Volutpat consequat mauris nunc congue nisi vitae.
Sem viverra aliquet eget sit amet tellus cras. Proin nibh nisl condimentum id venenatis a. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Viverra vitae congue eu consequat ac felis donec et odio. Ultrices vitae auctor eu augue ut. Leo integer malesuada nunc vel risus. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus et malesuada fames ac. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Diam vel quam elementum pulvinar. Faucibus nisl tincidunt eget nullam. Lacus viverra vitae congue eu consequat. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Diam sit amet nisl suscipit. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.
Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Elit eget gravida cum sociis natoque penatibus et. Aliquet nibh praesent tristique magna sit amet purus gravida. Sodales ut eu sem integer vitae. Lectus arcu bibendum at varius vel. Eget mi proin sed libero. Turpis egestas sed tempus urna et pharetra. Ut tellus elementum sagittis vitae et leo. Odio ut enim blandit volutpat. Massa tincidunt dui ut ornare lectus sit amet est placerat. Cursus mattis molestie a iaculis. Arcu dictum varius duis at consectetur lorem donec. In massa tempor nec feugiat nisl pretium.
',
    'https://picsum.photos/393/120',
    '2021-01-23 17:19:36.235'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris pukes gold and shits rainbows and pisses Jack Daniels&#65279;.',
    'https://picsum.photos/478/617',
    '2023-02-24 03:20:56.770'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'seel',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png',
    '2022-04-09 10:24:10.416'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I had a dream that I weighed less than a thousandth of a gram. I was like, 0mg.',
    NULL,
    '2023-07-25 02:07:34.352'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'In ancient Athens every third man worked with what




Marble',
    NULL,
    '2021-08-25 23:06:13.533'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'shellder',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png',
    '2023-09-16 19:50:14.474'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Have you heard of the new sport called Quiet Tennis”? It’s like normal tennis but without the racket.',
    NULL,
    '2019-11-21 12:33:54.122'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'See the flowers bloom in the Simpson Desert',
    NULL,
    '2022-10-14 11:22:15.531'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Ride a horse along the beach',
    NULL,
    '2022-04-20 10:36:54.700'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'His Incomplete 8th Symphony Is World Famous As The Unfinished Name This Prolific Austrian Composer




Franz Schuberts',
    'https://picsum.photos/141/168',
    '2021-03-21 10:10:51.811'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'kabutops',
    'Pokemon  rock water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png',
    '2019-12-12 08:17:07.585'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Live in a different country for a year',
    NULL,
    '2023-09-27 13:30:09.352'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris doesn''t need to shower, he dares dirt to touch him...',
    'https://picsum.photos/602/291',
    '2020-06-14 19:13:58.250'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit the Red Light District in Amsterdam',
    NULL,
    '2020-01-31 07:40:46.626'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'When does a joke become a dad joke? When it becomes apparent!',
    NULL,
    '2021-09-22 08:54:52.967'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Eget sit amet tellus cras adipiscing enim eu turpi',
    'Enim eu turpis egestas pretium aenean. Ipsum a arcu cursus vitae. Massa massa ultricies mi quis hendrerit dolor. Rhoncus dolor purus non enim praesent elementum. Tristique magna sit amet purus. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Egestas diam in arcu cursus. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. In mollis nunc sed id semper risus in hendrerit gravida. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Volutpat consequat mauris nunc congue nisi vitae.
Ut ornare lectus sit amet est placerat. Eget nulla facilisi etiam dignissim diam quis enim. Penatibus et magnis dis parturient montes. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Odio pellentesque diam volutpat commodo. Duis ut diam quam nulla porttitor massa id. Diam donec adipiscing tristique risus. Sed blandit libero volutpat sed cras ornare. Tincidunt lobortis feugiat vivamus at augue eget arcu. Arcu dui vivamus arcu felis bibendum ut tristique. Dapibus ultrices in iaculis nunc sed augue lacus. Risus nullam eget felis eget nunc lobortis.
Volutpat consequat mauris nunc congue. Sollicitudin ac orci phasellus egestas tellus. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Massa tempor nec feugiat nisl pretium fusce id. Amet purus gravida quis blandit turpis cursus in hac. Neque ornare aenean euismod elementum nisi quis eleifend. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Elit at imperdiet dui accumsan sit amet. Etiam erat velit scelerisque in dictum non consectetur a erat. Lacus vestibulum sed arcu non odio euismod lacinia. Ultrices eros in cursus turpis. Nibh nisl condimentum id venenatis a condimentum. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus.
',
    NULL,
    '2021-07-22 21:21:30.852'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Dogs can''t operate MRI machines but catscan.',
    'https://picsum.photos/370/358',
    '2020-07-16 06:07:32.404'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Roy Rogers girlfriend Dale Evans rode what named horse




Buttermilk',
    NULL,
    '2022-10-21 23:02:19.127'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Who played Louis in ''Interview With The Vampire''?




Brad Pitt',
    NULL,
    '2022-04-22 08:38:55.274'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Dorothy Hamill',
    'I was passionate. I found something that I loved. I could be all alone in a big old skating rink and nobody could get near me and I didn''t have to talk to anybody because of my shyness. It was great. I was in my fantasy world.',
    NULL,
    '2020-04-13 15:03:56.351'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'kadabra',
    'Pokemon  psychic',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png',
    '2022-01-13 11:04:04.544'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Zoe Saldana',
    'Glamour is about feeling good in your own skin.',
    NULL,
    '2020-10-20 19:33:29.591'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Celebrate Songkran in Thailand',
    NULL,
    '2020-01-25 06:49:07.896'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Climb a glacier',
    NULL,
    '2022-05-17 02:16:16.330'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'You know why Steven Segal never removes his pony-tail? Beacause Chuck Norris told him not to.',
    NULL,
    '2020-11-03 01:57:21.637'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris'' jetpack has a drink holder.',
    'https://picsum.photos/641/118',
    '2020-10-15 07:21:52.679'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The fleshy bulbs on each side of your nose are called the Alea (AY-lee) singular Ala (AY-luh)',
    'https://picsum.photos/626/415',
    '2020-10-01 19:29:43.623'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Volunteer abroad',
    'https://picsum.photos/113/658',
    '2021-08-15 02:18:30.358'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Harry Connick, Jr.',
    'I don''t really get shaken very much. People could heckle me, a spotlight could go out, I could forget a lyric... I''m not operating on somebody''s brain, you know what I mean? So I just think it''s all funny.',
    'https://picsum.photos/110/446',
    '2023-10-07 18:46:12.015'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What author married Leon Trotsky''s secretary in 1924




Arthur Ransom',
    'https://picsum.photos/330/250',
    '2020-03-26 22:25:48.981'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'In US city houses the headquarters of Coca Cola?




Atlanta',
    'https://picsum.photos/115/101',
    '2023-03-10 04:50:25.845'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Id eu nisl nunc mi ipsum faucibus vitae aliquet ne',
    'Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Arcu felis bibendum ut tristique et egestas. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Quisque sagittis purus sit amet volutpat consequat mauris. Mattis vulputate enim nulla aliquet porttitor. Sit amet facilisis magna etiam tempor orci eu lobortis. Erat nam at lectus urna duis convallis convallis. Sit amet est placerat in. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Amet justo donec enim diam vulputate ut. Adipiscing vitae proin sagittis nisl rhoncus mattis. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Felis imperdiet proin fermentum leo vel orci porta. Consequat ac felis donec et odio pellentesque.
',
    NULL,
    '2020-11-11 12:22:38.003'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Did you know your pupils are the last part to stop working when you die? They dilate.',
    NULL,
    '2023-09-22 02:45:06.933'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'THE SAD STORY',
    'THERE WAS A GIRL IN HIGH SCHOOL. SHE AND HER FRIENDS ALL DECIDED TO HAVE A SLEEPOVER. JUST THEN THE CUTEST GUY ASKED HER OUT!! THEY ALL DECIDED TO CHANGE THE SLEEPOVER TO ANOTHER DAY. SHE KNEW THAT HER PARENTS WOULD SAY NO TO THE DATE SO SHE TOLD THEM THAT SHE WAS GOING TO THE SLEEPOVER INSTEAD. WHEN SHE GOT IN THE GUY''S CAR HE SAID THAT THEY WERE GOING TO HAVE A MOONLITE DINNER AT THE RIVER. BUT FIRST HE HAD TO BUY SOME BEER. SO SHE WENT WITH HIM. AFTER THE DINNER, HER DATE STARTED TO DRIVE FASTER AND FASTER! IT WAS BECAUSE HE WAS DRUNK. EVERY TIME SHE ASKED HIM TO SLOW DOWN, HE ONLY WENT FASTER! THE NEXT THING SHE KNEW, SHE WAS IN THE HOSPITAL WITH A NURSE.  SHE TOLD THE NURSE TO TELL THE PEOPLE IN THE OTHER CAR THAT SHE WAS SORRY FOR WHAT SHE HAD DONE AND THAT SHE WANTED HER PARENTS TO KNOW THAT SHE WAS SORRY AND THAT SHE LOVED THEM. JUST THEN SHE DIED. THE DOCTER CAME IN AND SAID " WHY DIDNT YOU GIVE THAT GIRL HER LAST WISH?" THEN THE NURSE SAID BECAUSE IT HAD TO DO WITH THE PEOPLE IN THE OTHER CAR THAT HAD DIED ALSO."   WHO WERE THE OTHER PEOPLE IN THE OTHER CAR?




HER PARENTS',
    'https://picsum.photos/699/669',
    '2021-05-02 17:13:56.595'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris once extinguished a veld fire using just a flamethrower, only Chuck Norris can fight fire with fire.',
    'https://picsum.photos/675/454',
    '2023-09-24 23:48:50.091'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why did the little strawberry cry? His mom was in a jam.',
    NULL,
    '2021-01-13 02:09:14.789'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris can have his cake, eat it, then roundhouse kick you in the face with the extra power it gave him.',
    NULL,
    '2023-05-07 03:10:04.300'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I only know 25 letters of the alphabet—I don''t know y.',
    NULL,
    '2021-06-14 06:56:06.476'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'exeggcute',
    'Pokemon  grass psychic',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png',
    '2023-10-29 22:49:40.261'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Epictetus',
    'To accuse others for one''s own misfortunes is a sign of want of education. To accuse oneself shows that one''s education has begun. To accuse neither oneself nor others shows that one''s education is complete.',
    NULL,
    '2020-02-08 09:04:34.463'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I have a joke about procrastination, but I’ll tell it to you later.',
    NULL,
    '2023-05-17 04:27:15.063'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Frogs do not need to drink water as they absorb the water through their skin',
    'https://picsum.photos/286/326',
    '2023-10-28 12:12:07.416'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'At the Royal Wedding,William and Kate shared a romantic balcony kiss as Grace,William''s 3-year old goddaughter,did what?




Covered Her Ears',
    NULL,
    '2020-07-20 02:16:34.977'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'electrode',
    'Pokemon  electric',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png',
    '2020-06-18 01:36:01.020'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Alex Winter',
    'I take a lot from everywhere. I take from music, architecture, novels, and plays. Anywhere that hits you.',
    'https://picsum.photos/390/604',
    '2022-06-18 11:02:04.280'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Thomas Aquinas',
    'How is it they live in such harmony the billions of stars - when most men can barely go a minute without declaring war in their minds about someone they know.',
    NULL,
    '2023-11-10 00:38:26.957'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Cyril Connolly',
    'Words today are like the shells and rope of seaweed which a child brings home glistening from the beach and which in an hour have lost their luster.',
    NULL,
    '2020-02-12 14:41:21.324'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Film - who was the star of "a boy and his dog"




Don Johnson',
    'https://picsum.photos/587/427',
    '2022-02-20 11:37:44.218'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Give a man a plane ticket and he flies for the day. Push him out of the plane at 3,000 feet and he’ll fly for the rest of his life.',
    'https://picsum.photos/681/370',
    '2022-12-23 03:39:40.011'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'parasect',
    'Pokemon  bug grass',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png',
    '2021-09-29 19:45:34.235'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Which Country Had Their World Cup Debut In France 1998 And Ended Up Finishing 3rd




Croatia',
    NULL,
    '2022-09-27 21:52:54.088'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'The Dutch painter Vermeer is perhaps most famous for his portrait called "Girl with a" what?




Pearl Earring',
    NULL,
    '2021-06-30 00:05:53.570'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit Ground Zero',
    NULL,
    '2023-09-20 18:50:43.726'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'The Clever Bride',
    'once there was a bride who lived with her mother-in-law and was very fond of rasberrys.she liked them so much she would steal them from the mother-in-law.the mother-in-law had a feeling that the bride was the one stealing the rasberrys because before she moved in they were never stolen before.so the mother-in-law came up with a plan she would put some rsberrys on the floor and see if she would take them.so when the bride did see it she did not eat it she picked it up and went to the mother-in-law and said only three words which convinced the mother-in-law that she was not the culperate.what were her three words?




"what is this" if she did not know what it was she would not have stolen it',
    'https://picsum.photos/291/133',
    '2021-10-31 23:23:31.798'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Something',
    'Something long, Something short, Something brown and may even look like a crown! Did you guess what I am?  I am what you see!!!




The answer is a paragraph because sometimes coffee spills my get on it and sometimes your pet bird may just go and eat it!!!',
    NULL,
    '2020-09-12 19:44:44.699'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'A father tells his son that he was adopted. “I want to meet my biological parents,” the son demands. “We are your biological parents,” the father responds. “Now pack up, the new ones will pick you up in twenty minutes.”',
    NULL,
    '2020-03-16 14:49:24.341'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'An interviewer recently asked Chuck Norris what it felt like to lose to Bruce Lee. Chuck Norris unloaded a revolver into her face.',
    'https://picsum.photos/368/555',
    '2023-10-17 04:55:09.119'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit the Boudhanath Stupa',
    NULL,
    '2023-09-04 09:30:00.109'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'According to research, Los Angeles highways are so congested that the average commuter sits in traffic for 82 hours a year',
    'https://picsum.photos/527/675',
    '2021-04-03 08:19:58.336'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'In fine print on the last page of the Guinness Book of World Records it notes that all world records are held by Chuck Norris, and those listed in the book are simply the closest anyone else has ever gotten.',
    'https://picsum.photos/364/347',
    '2020-02-28 04:25:38.120'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I talked to a poet who only wrote about wells. His stuff was deep.',
    NULL,
    '2022-07-22 16:31:54.473'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'The numbat, quokka and yapok are all types of what




Marsupials',
    NULL,
    '2021-02-02 09:33:23.192'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'A iaculis at erat pellentesque adipiscing commodo ',
    'Leo vel orci porta non pulvinar neque. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Consectetur libero id faucibus nisl tincidunt eget. Morbi tristique senectus et netus. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Sit amet nulla facilisi morbi tempus iaculis urna. Suscipit tellus mauris a diam maecenas. In aliquam sem fringilla ut. Tortor at risus viverra adipiscing. Scelerisque eleifend donec pretium vulputate sapien nec. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Mi tempus imperdiet nulla malesuada pellentesque elit. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Nam at lectus urna duis convallis.
Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Massa enim nec dui nunc. Netus et malesuada fames ac turpis egestas. Gravida rutrum quisque non tellus orci. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Amet aliquam id diam maecenas ultricies mi eget mauris. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Ultricies tristique nulla aliquet enim. Urna et pharetra pharetra massa. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit.
Sollicitudin nibh sit amet commodo. Purus sit amet luctus venenatis lectus. Dolor sit amet consectetur adipiscing elit ut aliquam purus. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Aliquet lectus proin nibh nisl condimentum. Laoreet non curabitur gravida arcu. Consectetur libero id faucibus nisl tincidunt eget nullam. Pretium viverra suspendisse potenti nullam ac tortor vitae. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Sed enim ut sem viverra aliquet. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Odio euismod lacinia at quis risus sed. Amet justo donec enim diam vulputate. Montes nascetur ridiculus mus mauris vitae ultricies leo integer.
Lectus urna duis convallis convallis tellus id interdum. Porttitor leo a diam sollicitudin tempor id eu. Sit amet aliquam id diam maecenas. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Fermentum odio eu feugiat pretium nibh ipsum consequat. Purus semper eget duis at tellus at. Arcu bibendum at varius vel pharetra vel turpis. Suscipit tellus mauris a diam maecenas sed enim. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Faucibus interdum posuere lorem ipsum. Turpis massa tincidunt dui ut ornare lectus sit amet est. Egestas maecenas pharetra convallis posuere morbi leo. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Amet venenatis urna cursus eget nunc scelerisque. Hac habitasse platea dictumst quisque sagittis purus sit. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Non blandit massa enim nec dui. Mus mauris vitae ultricies leo integer malesuada. Sed felis eget velit aliquet sagittis id consectetur.
',
    'https://picsum.photos/464/104',
    '2023-03-10 21:30:20.348'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris has a vacation home on the sun.',
    'https://picsum.photos/325/621',
    '2022-01-12 12:27:59.155'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Mardi Gras means "Fat Tuesday." This is the festival that New Orleans, Louisiana is famous for having every year',
    NULL,
    '2021-09-16 21:43:22.560'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Adam Osborne',
    'The future lies in designing and selling computers that people don''t realize are computers at all.',
    NULL,
    '2020-07-09 00:05:11.837'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'On a Canadian two dollar bill, the flag flying over the Parliament building is an American flag',
    'https://picsum.photos/474/374',
    '2019-12-21 02:15:01.785'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Kayak Long Island Sound',
    NULL,
    '2023-08-10 18:01:21.010'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What is the chemical symbol for californium?




Cf',
    NULL,
    '2022-08-19 11:32:05.220'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Blandit volutpat maecenas volutpat blandit. Nulla ',
    'Nec feugiat nisl pretium fusce id velit. Aliquam ut porttitor leo a diam sollicitudin tempor. Elementum eu facilisis sed odio morbi quis. Aliquet nec ullamcorper sit amet risus nullam. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Diam volutpat commodo sed egestas. Et leo duis ut diam quam nulla porttitor massa id. Justo laoreet sit amet cursus sit. Id aliquet lectus proin nibh. Pretium fusce id velit ut tortor pretium viverra. Enim lobortis scelerisque fermentum dui. Id diam vel quam elementum. Ultrices sagittis orci a scelerisque purus semper eget duis. Pretium viverra suspendisse potenti nullam. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Vel quam elementum pulvinar etiam non quam lacus suspendisse.
Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Elit eget gravida cum sociis natoque penatibus et. Aliquet nibh praesent tristique magna sit amet purus gravida. Sodales ut eu sem integer vitae. Lectus arcu bibendum at varius vel. Eget mi proin sed libero. Turpis egestas sed tempus urna et pharetra. Ut tellus elementum sagittis vitae et leo. Odio ut enim blandit volutpat. Massa tincidunt dui ut ornare lectus sit amet est placerat. Cursus mattis molestie a iaculis. Arcu dictum varius duis at consectetur lorem donec. In massa tempor nec feugiat nisl pretium.
Sed sed risus pretium quam vulputate dignissim suspendisse. Id leo in vitae turpis massa. Eget mauris pharetra et ultrices. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Nisl condimentum id venenatis a. Dui id ornare arcu odio. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Viverra maecenas accumsan lacus vel facilisis volutpat est. Platea dictumst vestibulum rhoncus est pellentesque elit. Hac habitasse platea dictumst quisque.
',
    NULL,
    '2020-06-18 10:40:31.743'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nibh nisl condimentum id venenatis a condimentum v',
    'Eget sit amet tellus cras adipiscing enim eu turpis. Amet facilisis magna etiam tempor. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Purus viverra accumsan in nisl nisi. Vitae elementum curabitur vitae nunc sed velit. Sed lectus vestibulum mattis ullamcorper velit. Consequat interdum varius sit amet mattis. Amet justo donec enim diam. Sed vulputate odio ut enim blandit volutpat maecenas. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Habitant morbi tristique senectus et netus et malesuada. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Congue mauris rhoncus aenean vel elit scelerisque. Id neque aliquam vestibulum morbi blandit cursus. Nunc sed augue lacus viverra vitae congue eu consequat ac. Leo vel orci porta non pulvinar neque. Consequat interdum varius sit amet mattis.
Et pharetra pharetra massa massa ultricies mi quis hendrerit. Non odio euismod lacinia at quis risus sed vulputate. Vulputate sapien nec sagittis aliquam. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Tristique et egestas quis ipsum. Dui ut ornare lectus sit amet. Ac feugiat sed lectus vestibulum mattis. Enim tortor at auctor urna nunc. Feugiat sed lectus vestibulum mattis ullamcorper. Eget mauris pharetra et ultrices neque. Euismod elementum nisi quis eleifend quam. Volutpat odio facilisis mauris sit amet massa. Ultricies lacus sed turpis tincidunt id aliquet risus. Egestas diam in arcu cursus euismod quis.
',
    'https://picsum.photos/108/403',
    '2022-04-19 22:06:08.866'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The Chihuahua Desert is the largest desert in North America, and is over 200,000 square miles',
    NULL,
    '2021-06-11 23:53:00.987'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Humour Flies',
    'An old lazy is walking in new york,she is on Prince Albert street and makes a left on Spedina st.When she turns around the corner,what does she see?




A bunch of dwarves in a chainsaw fight.',
    NULL,
    '2021-12-10 10:51:52.587'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What sound does a witches car make? Broom Broom',
    NULL,
    '2021-11-24 19:05:04.342'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Eu turpis egestas pretium aenean pharetra magna ac',
    'Volutpat consequat mauris nunc congue. Sollicitudin ac orci phasellus egestas tellus. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Massa tempor nec feugiat nisl pretium fusce id. Amet purus gravida quis blandit turpis cursus in hac. Neque ornare aenean euismod elementum nisi quis eleifend. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Elit at imperdiet dui accumsan sit amet. Etiam erat velit scelerisque in dictum non consectetur a erat. Lacus vestibulum sed arcu non odio euismod lacinia. Ultrices eros in cursus turpis. Nibh nisl condimentum id venenatis a condimentum. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus.
',
    NULL,
    '2022-08-01 14:31:04.593'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Vel turpis nunc eget lorem dolor sed viverra ipsum',
    'Viverra aliquet eget sit amet tellus. Adipiscing at in tellus integer feugiat scelerisque. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Mauris ultrices eros in cursus. Dolor purus non enim praesent. Quam viverra orci sagittis eu volutpat. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Lobortis feugiat vivamus at augue. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Sed sed risus pretium quam. Integer malesuada nunc vel risus. Egestas congue quisque egestas diam in arcu. Elementum nibh tellus molestie nunc non blandit massa enim nec.
Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Massa enim nec dui nunc. Netus et malesuada fames ac turpis egestas. Gravida rutrum quisque non tellus orci. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Amet aliquam id diam maecenas ultricies mi eget mauris. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Ultricies tristique nulla aliquet enim. Urna et pharetra pharetra massa. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit.
Risus sed vulputate odio ut enim blandit volutpat. Faucibus turpis in eu mi bibendum neque. Morbi tristique senectus et netus et malesuada fames ac. Lacinia quis vel eros donec. Est velit egestas dui id ornare arcu. Commodo viverra maecenas accumsan lacus. Turpis in eu mi bibendum neque egestas congue. Fermentum posuere urna nec tincidunt. Sit amet nisl purus in mollis. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Justo eget magna fermentum iaculis eu non diam. Proin nibh nisl condimentum id venenatis. Viverra maecenas accumsan lacus vel facilisis volutpat est. Rhoncus dolor purus non enim praesent elementum facilisis leo. Urna id volutpat lacus laoreet non curabitur gravida. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fermentum leo vel orci porta.
',
    'https://picsum.photos/526/406',
    '2023-03-05 01:58:47.470'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris laughs at Tiger Woods'' pathetic attempts to get to his level.',
    NULL,
    '2020-03-06 19:44:23.976'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Get a six pack and/or killer biceps',
    NULL,
    '2021-05-18 06:24:39.055'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Willie Morris',
    'His claim to his home is deep, but there are too many ghosts. He must absorb without being absorbed.',
    NULL,
    '2020-05-20 09:54:54.257'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Tim Vine',
    'I was reading a book... ''the history of glue'' - I couldn''t put it down.',
    'https://picsum.photos/563/498',
    '2023-06-07 14:51:04.316'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Leo vel orci porta non pulvinar neque. Porta nibh ',
    'Volutpat consequat mauris nunc congue. Sollicitudin ac orci phasellus egestas tellus. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Massa tempor nec feugiat nisl pretium fusce id. Amet purus gravida quis blandit turpis cursus in hac. Neque ornare aenean euismod elementum nisi quis eleifend. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Elit at imperdiet dui accumsan sit amet. Etiam erat velit scelerisque in dictum non consectetur a erat. Lacus vestibulum sed arcu non odio euismod lacinia. Ultrices eros in cursus turpis. Nibh nisl condimentum id venenatis a condimentum. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus.
Leo vel orci porta non pulvinar neque. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Consectetur libero id faucibus nisl tincidunt eget. Morbi tristique senectus et netus. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Sit amet nulla facilisi morbi tempus iaculis urna. Suscipit tellus mauris a diam maecenas. In aliquam sem fringilla ut. Tortor at risus viverra adipiscing. Scelerisque eleifend donec pretium vulputate sapien nec. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Mi tempus imperdiet nulla malesuada pellentesque elit. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Nam at lectus urna duis convallis.
Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Quis hendrerit dolor magna eget est lorem ipsum dolor. In aliquam sem fringilla ut. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Facilisis leo vel fringilla est. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Volutpat lacus laoreet non curabitur. Cum sociis natoque penatibus et magnis dis. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Nunc lobortis mattis aliquam faucibus. Arcu felis bibendum ut tristique et. Amet purus gravida quis blandit turpis cursus in hac habitasse. In fermentum et sollicitudin ac orci phasellus. Malesuada fames ac turpis egestas integer eget.
',
    NULL,
    '2021-07-26 00:14:11.527'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Drink elephant dung coffee in Cambodia',
    'https://picsum.photos/247/494',
    '2021-05-21 07:24:13.578'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris keeps a machete hidden inside his foreskin.',
    NULL,
    '2023-09-17 09:03:05.773'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Scotopic people can do what




See In The Dark',
    NULL,
    '2020-11-22 20:31:04.586'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'As a polite act of courtesy, Chuck Norris always brings his own Molotov to his neighborhood cocktail parties.',
    'https://picsum.photos/484/148',
    '2020-12-21 13:17:51.831'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Purus semper eget duis at tellus at urna condiment',
    'Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Blandit massa enim nec dui nunc. Ultrices vitae auctor eu augue ut. Sagittis purus sit amet volutpat consequat mauris nunc congue. Viverra suspendisse potenti nullam ac tortor vitae purus. Aliquet enim tortor at auctor urna nunc id. Orci sagittis eu volutpat odio facilisis mauris sit amet. Sem integer vitae justo eget magna fermentum iaculis eu. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Nec ullamcorper sit amet risus nullam. Malesuada bibendum arcu vitae elementum. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Pretium quam vulputate dignissim suspendisse. Gravida quis blandit turpis cursus in hac habitasse. Odio tempor orci dapibus ultrices in iaculis nunc sed. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Leo urna molestie at elementum eu facilisis sed odio.
Eget sit amet tellus cras adipiscing enim eu turpis. Amet facilisis magna etiam tempor. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Purus viverra accumsan in nisl nisi. Vitae elementum curabitur vitae nunc sed velit. Sed lectus vestibulum mattis ullamcorper velit. Consequat interdum varius sit amet mattis. Amet justo donec enim diam. Sed vulputate odio ut enim blandit volutpat maecenas. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Habitant morbi tristique senectus et netus et malesuada. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Congue mauris rhoncus aenean vel elit scelerisque. Id neque aliquam vestibulum morbi blandit cursus. Nunc sed augue lacus viverra vitae congue eu consequat ac. Leo vel orci porta non pulvinar neque. Consequat interdum varius sit amet mattis.
Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Tristique senectus et netus et malesuada fames ac. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut. Eros in cursus turpis massa tincidunt. Purus viverra accumsan in nisl nisi scelerisque eu. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Nam aliquam sem et tortor. Sit amet purus gravida quis blandit turpis. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Amet massa vitae tortor condimentum.
',
    NULL,
    '2021-09-19 20:23:29.233'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Commodo elit at imperdiet dui accumsan. Bibendum u',
    'Eget sit amet tellus cras adipiscing enim eu. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Purus in massa tempor nec feugiat nisl pretium fusce. Eu feugiat pretium nibh ipsum consequat nisl. Purus in mollis nunc sed. Turpis massa sed elementum tempus egestas sed. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Est lorem ipsum dolor sit amet. Fringilla phasellus faucibus scelerisque eleifend donec. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.
',
    NULL,
    '2021-03-27 18:09:21.134'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'A Strange Thing',
    'Three eye''s have I, all in a row. When red, all freeze. What am I?




A stoplight',
    'https://picsum.photos/616/658',
    '2022-03-03 04:48:39.518'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Sed lectus vestibulum mattis ullamcorper velit sed',
    'Eget sit amet tellus cras adipiscing enim eu turpis. Amet facilisis magna etiam tempor. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Purus viverra accumsan in nisl nisi. Vitae elementum curabitur vitae nunc sed velit. Sed lectus vestibulum mattis ullamcorper velit. Consequat interdum varius sit amet mattis. Amet justo donec enim diam. Sed vulputate odio ut enim blandit volutpat maecenas. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Habitant morbi tristique senectus et netus et malesuada. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Congue mauris rhoncus aenean vel elit scelerisque. Id neque aliquam vestibulum morbi blandit cursus. Nunc sed augue lacus viverra vitae congue eu consequat ac. Leo vel orci porta non pulvinar neque. Consequat interdum varius sit amet mattis.
Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Arcu felis bibendum ut tristique et egestas. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Quisque sagittis purus sit amet volutpat consequat mauris. Mattis vulputate enim nulla aliquet porttitor. Sit amet facilisis magna etiam tempor orci eu lobortis. Erat nam at lectus urna duis convallis convallis. Sit amet est placerat in. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Amet justo donec enim diam vulputate ut. Adipiscing vitae proin sagittis nisl rhoncus mattis. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Felis imperdiet proin fermentum leo vel orci porta. Consequat ac felis donec et odio pellentesque.
Viverra aliquet eget sit amet tellus. Adipiscing at in tellus integer feugiat scelerisque. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Mauris ultrices eros in cursus. Dolor purus non enim praesent. Quam viverra orci sagittis eu volutpat. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Lobortis feugiat vivamus at augue. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Sed sed risus pretium quam. Integer malesuada nunc vel risus. Egestas congue quisque egestas diam in arcu. Elementum nibh tellus molestie nunc non blandit massa enim nec.
',
    NULL,
    '2021-03-01 21:00:56.766'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Attend La Tomatina',
    NULL,
    '2022-09-20 05:08:09.773'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'poliwrath',
    'Pokemon  water fighting',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png',
    '2022-08-16 00:16:38.423'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Saint Ives',
    'As I was going to saint Ives, I met a man with seven wives. Each wife had seven cats, each cat had seven sacks, each sack had seven kits, kits, cats, sacks, and wives, how many were going to Saint Ives?




1',
    'https://picsum.photos/662/535',
    '2023-09-15 08:21:52.859'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nibh nisl condimentum id venenatis a condimentum v',
    'Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Tristique senectus et netus et malesuada fames ac. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut. Eros in cursus turpis massa tincidunt. Purus viverra accumsan in nisl nisi scelerisque eu. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Nam aliquam sem et tortor. Sit amet purus gravida quis blandit turpis. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Amet massa vitae tortor condimentum.
',
    NULL,
    '2020-05-19 17:11:41.779'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'In space, no one can hear you scream..... apart from Chuck Norris. He hears everything!',
    NULL,
    '2023-03-15 16:07:03.013'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Backpack in South America',
    'https://picsum.photos/392/179',
    '2023-01-13 01:31:58.232'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Which of these films is a "real" Hollywood movie,and not a "mockbuster"- a low-budget ripoff of a hit film?




Land Of The Lost',
    'https://picsum.photos/625/325',
    '2020-08-31 02:48:28.763'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Ketchup originated in China as a pickled fish sauce called ke-tsiap',
    NULL,
    '2022-10-05 06:07:27.740'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Id eu nisl nunc mi ipsum faucibus vitae aliquet ne',
    'Tincidunt vitae semper quis lectus. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Convallis aenean et tortor at risus viverra adipiscing at in. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Massa eget egestas purus viverra accumsan in nisl nisi. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Posuere sollicitudin aliquam ultrices sagittis. Dolor purus non enim praesent elementum. Diam in arcu cursus euismod quis viverra nibh. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Dolor sed viverra ipsum nunc aliquet bibendum. Integer quis auctor elit sed vulputate mi. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Dui sapien eget mi proin sed libero enim sed. Neque sodales ut etiam sit amet nisl purus in.
Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Elit eget gravida cum sociis natoque penatibus et. Aliquet nibh praesent tristique magna sit amet purus gravida. Sodales ut eu sem integer vitae. Lectus arcu bibendum at varius vel. Eget mi proin sed libero. Turpis egestas sed tempus urna et pharetra. Ut tellus elementum sagittis vitae et leo. Odio ut enim blandit volutpat. Massa tincidunt dui ut ornare lectus sit amet est placerat. Cursus mattis molestie a iaculis. Arcu dictum varius duis at consectetur lorem donec. In massa tempor nec feugiat nisl pretium.
Ut eu sem integer vitae justo eget magna. Praesent tristique magna sit amet purus. Quis auctor elit sed vulputate mi. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Aenean euismod elementum nisi quis eleifend quam. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Nec nam aliquam sem et. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Tellus in metus vulputate eu.
Nibh nisl condimentum id venenatis a condimentum vitae sapien. Laoreet sit amet cursus sit. Commodo ullamcorper a lacus vestibulum sed arcu. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Pharetra convallis posuere morbi leo urna. Id volutpat lacus laoreet non curabitur gravida arcu ac. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Lorem mollis aliquam ut porttitor. A arcu cursus vitae congue. Nisl purus in mollis nunc sed id semper. Convallis a cras semper auctor neque. Lectus arcu bibendum at varius. Facilisis sed odio morbi quis commodo odio aenean sed. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Vel orci porta non pulvinar neque laoreet suspendisse. Feugiat nisl pretium fusce id. Adipiscing bibendum est ultricies integer quis auctor.
',
    'https://picsum.photos/280/290',
    '2021-01-21 04:59:51.429'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ekans',
    'Pokemon  poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png',
    '2020-09-24 18:05:05.860'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit Lake Baikal',
    NULL,
    '2021-05-14 10:22:04.933'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Eget felis eget nunc lobortis mattis aliquam fauci',
    'Volutpat consequat mauris nunc congue. Sollicitudin ac orci phasellus egestas tellus. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Massa tempor nec feugiat nisl pretium fusce id. Amet purus gravida quis blandit turpis cursus in hac. Neque ornare aenean euismod elementum nisi quis eleifend. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Elit at imperdiet dui accumsan sit amet. Etiam erat velit scelerisque in dictum non consectetur a erat. Lacus vestibulum sed arcu non odio euismod lacinia. Ultrices eros in cursus turpis. Nibh nisl condimentum id venenatis a condimentum. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus.
Nibh nisl condimentum id venenatis a condimentum vitae sapien. Laoreet sit amet cursus sit. Commodo ullamcorper a lacus vestibulum sed arcu. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Pharetra convallis posuere morbi leo urna. Id volutpat lacus laoreet non curabitur gravida arcu ac. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Lorem mollis aliquam ut porttitor. A arcu cursus vitae congue. Nisl purus in mollis nunc sed id semper. Convallis a cras semper auctor neque. Lectus arcu bibendum at varius. Facilisis sed odio morbi quis commodo odio aenean sed. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Vel orci porta non pulvinar neque laoreet suspendisse. Feugiat nisl pretium fusce id. Adipiscing bibendum est ultricies integer quis auctor.
A iaculis at erat pellentesque adipiscing commodo elit. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Mattis nunc sed blandit libero. Eu lobortis elementum nibh tellus molestie nunc non blandit. Eget duis at tellus at urna condimentum. Sagittis aliquam malesuada bibendum arcu vitae elementum. Felis imperdiet proin fermentum leo vel orci. Sed sed risus pretium quam vulputate. Sed risus pretium quam vulputate dignissim suspendisse in. Fames ac turpis egestas maecenas pharetra convallis posuere. Lobortis scelerisque fermentum dui faucibus in ornare quam. Aenean pharetra magna ac placerat vestibulum lectus mauris. Aliquet sagittis id consectetur purus. Netus et malesuada fames ac. Habitant morbi tristique senectus et. Habitasse platea dictumst vestibulum rhoncus. Egestas sed sed risus pretium quam vulputate. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus.
',
    NULL,
    '2021-12-07 19:08:22.283'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'machop',
    'Pokemon  fighting',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png',
    '2023-05-02 17:10:07.965'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Every time I take my dog to the park, the ducks try to bite him. That’s what I get for buying a pure bread dog.',
    'https://picsum.photos/639/267',
    '2023-01-12 04:04:26.526'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Help start a festival',
    NULL,
    '2023-10-10 15:21:22.848'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'krabby',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png',
    '2020-01-14 18:42:18.186'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The food that is digested in your stomach is called "chyme."',
    NULL,
    '2023-07-28 12:05:00.838'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What is the basic unit of currency for Jordan ?




Dinar',
    NULL,
    '2022-09-23 19:07:27.023'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    '''Old Glory'' is also what Chuck Norris calls his package.',
    NULL,
    '2019-12-02 23:33:00.003'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Write and perform a song',
    NULL,
    '2022-12-05 04:47:39.914'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'hitmonchan',
    'Pokemon  fighting',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png',
    '2023-04-15 01:49:53.963'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Black Car',
    'there is a black car with black windows weels and rims under a steet lamp but the street lamp is broken how can you see the car ?




it is day light ;>',
    NULL,
    '2023-03-07 14:17:15.831'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'In Which Country Are The Worlds Deepest Mines




South Africa, Near Carletonville ; They Are 3,777m Deep',
    'https://picsum.photos/246/166',
    '2022-01-06 02:59:31.124'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Krispy Kreme make five million doughnut a day',
    NULL,
    '2022-07-04 21:34:02.302'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from James Inhofe',
    'I have to say when we talk about the treatment of these prisoners that I would guess that these prisoners wake up every morning thanking Allah that Saddam Hussein is not in charge of these prisons.',
    NULL,
    '2021-06-27 03:56:01.877'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'doduo',
    'Pokemon  normal flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png',
    '2023-05-24 23:07:03.073'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'What Appears',
    'What appears once in a minute, and twice in a millimeter?




The Letter M!',
    'https://picsum.photos/604/316',
    '2023-08-22 16:55:01.399'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit the top of the Empire State Building',
    'https://picsum.photos/180/193',
    '2022-12-01 20:57:26.692'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Take a boat down the Murray-Darling',
    NULL,
    '2022-08-26 22:36:31.352'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Ut ornare lectus sit amet est placerat. Eget nulla',
    'Nisl pretium fusce id velit ut tortor pretium viverra. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Volutpat diam ut venenatis tellus in metus. Commodo viverra maecenas accumsan lacus. Elit at imperdiet dui accumsan sit amet nulla facilisi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Eu scelerisque felis imperdiet proin. Arcu bibendum at varius vel pharetra vel turpis nunc. Orci a scelerisque purus semper eget. Elementum sagittis vitae et leo duis ut diam.
Tincidunt vitae semper quis lectus. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Convallis aenean et tortor at risus viverra adipiscing at in. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Massa eget egestas purus viverra accumsan in nisl nisi. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Posuere sollicitudin aliquam ultrices sagittis. Dolor purus non enim praesent elementum. Diam in arcu cursus euismod quis viverra nibh. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Dolor sed viverra ipsum nunc aliquet bibendum. Integer quis auctor elit sed vulputate mi. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Dui sapien eget mi proin sed libero enim sed. Neque sodales ut etiam sit amet nisl purus in.
Nibh nisl condimentum id venenatis a condimentum vitae sapien. Laoreet sit amet cursus sit. Commodo ullamcorper a lacus vestibulum sed arcu. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Pharetra convallis posuere morbi leo urna. Id volutpat lacus laoreet non curabitur gravida arcu ac. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Lorem mollis aliquam ut porttitor. A arcu cursus vitae congue. Nisl purus in mollis nunc sed id semper. Convallis a cras semper auctor neque. Lectus arcu bibendum at varius. Facilisis sed odio morbi quis commodo odio aenean sed. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Vel orci porta non pulvinar neque laoreet suspendisse. Feugiat nisl pretium fusce id. Adipiscing bibendum est ultricies integer quis auctor.
Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Blandit massa enim nec dui nunc. Ultrices vitae auctor eu augue ut. Sagittis purus sit amet volutpat consequat mauris nunc congue. Viverra suspendisse potenti nullam ac tortor vitae purus. Aliquet enim tortor at auctor urna nunc id. Orci sagittis eu volutpat odio facilisis mauris sit amet. Sem integer vitae justo eget magna fermentum iaculis eu. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Nec ullamcorper sit amet risus nullam. Malesuada bibendum arcu vitae elementum. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Pretium quam vulputate dignissim suspendisse. Gravida quis blandit turpis cursus in hac habitasse. Odio tempor orci dapibus ultrices in iaculis nunc sed. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Leo urna molestie at elementum eu facilisis sed odio.
',
    'https://picsum.photos/452/659',
    '2022-11-14 05:57:20.337'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Ben Hecht',
    'Love is the magician that pulls man out of his own hat.',
    'https://picsum.photos/259/337',
    '2022-05-21 10:03:35.740'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Are your base are belong to Chuck Norris.',
    NULL,
    '2021-02-18 09:18:56.097'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Auctioneer''s or judge''s hammer




Gavel',
    'https://picsum.photos/270/590',
    '2021-02-09 04:02:17.980'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What ex-girl friend of prince andrew appeared naked on screen




Koo Stark',
    'https://picsum.photos/634/623',
    '2023-01-24 03:46:29.736'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'vileplume',
    'Pokemon  grass poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png',
    '2023-03-26 07:25:14.669'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Francesca Annis',
    'We all know now that people can look good for their age. It isn''t so extraordinary, I don''t know why people go on about it so much.',
    NULL,
    '2020-05-31 20:59:37.151'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'All professional sports teams pay Chuck Norris Not to play--saves money on body bags and funeral arrangements.',
    NULL,
    '2023-01-13 12:23:17.218'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from John Shimkus',
    'States are looking for low-cost solutions that will enable better communication, while avoiding the danger in which the chain of command breaks down in emergencies. We do not want everyone talking to everyone else all the time.',
    NULL,
    '2023-06-07 00:15:31.149'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Mental Institution',
    'There was a man in the mental institution and nobody came to visit him,but one day a man came to visit him in a long brown trench coat,and a black hat.It wasn''t his dad,or his uncle,Who was he?




himself',
    NULL,
    '2020-04-27 01:41:34.377'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Theodore Roosevelt',
    'Far better is it to dare mighty things, to win glorious triumphs, even though checkered by failure... than to rank with those poor spirits who neither enjoy nor suffer much, because they live in a gray twilight that knows not victory nor defeat.',
    'https://picsum.photos/564/226',
    '2021-03-04 19:37:42.480'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'When the power went out at a Dallas TX shopping mall, Chuck Norris single-handedly rescued 14 blondes that were trapped on the escalators.',
    NULL,
    '2021-03-15 04:10:59.519'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Middle Of Paris',
    'What is in the middle of Paris?




The letter ''R!''',
    NULL,
    '2023-02-14 09:03:28.383'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'clefable',
    'Pokemon  fairy',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png',
    '2022-12-02 03:34:26.355'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'weepinbell',
    'Pokemon  grass poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png',
    '2023-09-30 16:30:39.285'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'There are no such thing as disabled people; only people who met Chuck Norris and lived.',
    NULL,
    '2022-01-30 23:18:35.015'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit Ngorogoro Crater',
    NULL,
    '2021-01-31 04:26:33.585'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'How many telemarketers does it take to change a light bulb? Only one, but he has to do it during dinner.',
    NULL,
    '2021-07-27 02:07:29.621'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What country was once named New France




Canada',
    NULL,
    '2021-04-27 21:51:34.277'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'See a UFO',
    NULL,
    '2022-08-10 17:38:17.002'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'poliwhirl',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png',
    '2022-12-16 07:55:22.481'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Garth Brooks',
    'Some of God''s greatest gifts are unanswered prayers.',
    NULL,
    '2020-03-04 20:47:35.188'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'weedle',
    'Pokemon  bug poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
    '2021-08-28 20:06:14.994'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'jigglypuff',
    'Pokemon  normal fairy',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
    '2022-10-06 04:55:30.275'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What is a group of this animal called: Crane




Sedge Siege',
    'https://picsum.photos/136/202',
    '2021-11-21 10:54:21.065'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Fvgfo0fpds][c''',
    'gb[dfc FDcv




jmrfjnz\]'' bhdg',
    'https://picsum.photos/682/621',
    '2022-10-06 07:03:29.146'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'graveler',
    'Pokemon  rock ground',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png',
    '2023-06-30 19:10:52.139'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Jonathan Sacks',
    'Dreams are where we visit the many lands and landscapes of human possibility and discover the one where we feel at home. The great religious leaders were all dreamers.',
    NULL,
    '2023-06-25 12:57:46.105'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'An Umbrella',
    'Three large people try to crowd under one small umbrella, but nobody gets wet. How is this possible?




The sun is shining; there''s no rain.',
    NULL,
    '2020-05-10 15:16:52.848'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Lorem sed risus ultricies tristique nulla aliquet ',
    'Volutpat consequat mauris nunc congue. Sollicitudin ac orci phasellus egestas tellus. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Massa tempor nec feugiat nisl pretium fusce id. Amet purus gravida quis blandit turpis cursus in hac. Neque ornare aenean euismod elementum nisi quis eleifend. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Elit at imperdiet dui accumsan sit amet. Etiam erat velit scelerisque in dictum non consectetur a erat. Lacus vestibulum sed arcu non odio euismod lacinia. Ultrices eros in cursus turpis. Nibh nisl condimentum id venenatis a condimentum. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus.
',
    NULL,
    '2021-03-09 10:12:40.410'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Cosplay at a convention',
    NULL,
    '2019-12-15 10:11:19.041'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Blandit volutpat maecenas volutpat blandit. Nulla ',
    'Sed elementum tempus egestas sed sed risus pretium quam. Interdum varius sit amet mattis vulputate enim nulla. Orci porta non pulvinar neque laoreet suspendisse. Urna porttitor rhoncus dolor purus non enim praesent. Elit sed vulputate mi sit amet mauris commodo. Sit amet dictum sit amet. Elementum integer enim neque volutpat ac tincidunt. A erat nam at lectus urna duis convallis. Convallis aenean et tortor at risus viverra adipiscing at in. Mattis vulputate enim nulla aliquet porttitor lacus. Sagittis nisl rhoncus mattis rhoncus urna. Sit amet massa vitae tortor. Phasellus vestibulum lorem sed risus ultricies. Habitant morbi tristique senectus et netus et. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Mi eget mauris pharetra et ultrices neque. Sodales ut eu sem integer.
Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Consequat id porta nibh venenatis cras sed felis eget velit. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Et tortor consequat id porta nibh. Ut etiam sit amet nisl purus. Leo vel fringilla est ullamcorper. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Vel facilisis volutpat est velit egestas dui id. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Nibh tellus molestie nunc non blandit. Nisi lacus sed viverra tellus in hac habitasse platea dictumst.
Lectus urna duis convallis convallis tellus id interdum. Porttitor leo a diam sollicitudin tempor id eu. Sit amet aliquam id diam maecenas. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Fermentum odio eu feugiat pretium nibh ipsum consequat. Purus semper eget duis at tellus at. Arcu bibendum at varius vel pharetra vel turpis. Suscipit tellus mauris a diam maecenas sed enim. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Faucibus interdum posuere lorem ipsum. Turpis massa tincidunt dui ut ornare lectus sit amet est. Egestas maecenas pharetra convallis posuere morbi leo. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Amet venenatis urna cursus eget nunc scelerisque. Hac habitasse platea dictumst quisque sagittis purus sit. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Non blandit massa enim nec dui. Mus mauris vitae ultricies leo integer malesuada. Sed felis eget velit aliquet sagittis id consectetur.
Ac auctor augue mauris augue neque gravida in fermentum et. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Molestie at elementum eu facilisis sed odio morbi quis. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Cursus mattis molestie a iaculis. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Ultrices neque ornare aenean euismod elementum. Eu facilisis sed odio morbi. Arcu dui vivamus arcu felis. Aliquam etiam erat velit scelerisque in dictum. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Pellentesque nec nam aliquam sem. Amet volutpat consequat mauris nunc congue. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean sed adipiscing diam donec adipiscing tristique. Tellus pellentesque eu tincidunt tortor aliquam. Sem nulla pharetra diam sit amet nisl suscipit.
',
    NULL,
    '2020-07-25 20:10:50.207'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Which comic strip was banned from "Stars and Stripes"?




Beetle Bailey',
    NULL,
    '2022-11-02 21:11:49.634'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Pablo Picasso',
    'Youth has no age.',
    NULL,
    '2020-12-20 21:05:13.071'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris'' tongue has an egg beater effect on twats and is often confused with a rivet gun.',
    NULL,
    '2023-10-04 09:39:45.270'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'squirtle',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    '2022-06-20 04:59:33.350'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'RailRoad Crossings',
    'Rail Road Crossings look out for the cars can you spell that with out any "R" ''s ?




That',
    'https://picsum.photos/463/681',
    '2022-09-26 23:44:30.414'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'As a child, 6 year old Chuck Norris would walk 17 miles to the zoo on misty summer mornings just to suddenly wake-up a few silverback Mountain Gorillas in order to have something to play with.',
    NULL,
    '2021-12-02 19:17:48.452'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Explore a hedge maze',
    'https://picsum.photos/493/531',
    '2023-06-20 02:04:22.564'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'It came into football in 1923 men say women don''t understand?




The Offside Rule',
    NULL,
    '2023-08-18 11:06:32.610'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dolor sit amet, consectetur adipiscing elit, sed d',
    'Sed sed risus pretium quam vulputate dignissim suspendisse. Id leo in vitae turpis massa. Eget mauris pharetra et ultrices. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Nisl condimentum id venenatis a. Dui id ornare arcu odio. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Viverra maecenas accumsan lacus vel facilisis volutpat est. Platea dictumst vestibulum rhoncus est pellentesque elit. Hac habitasse platea dictumst quisque.
Sed elementum tempus egestas sed sed risus pretium quam. Interdum varius sit amet mattis vulputate enim nulla. Orci porta non pulvinar neque laoreet suspendisse. Urna porttitor rhoncus dolor purus non enim praesent. Elit sed vulputate mi sit amet mauris commodo. Sit amet dictum sit amet. Elementum integer enim neque volutpat ac tincidunt. A erat nam at lectus urna duis convallis. Convallis aenean et tortor at risus viverra adipiscing at in. Mattis vulputate enim nulla aliquet porttitor lacus. Sagittis nisl rhoncus mattis rhoncus urna. Sit amet massa vitae tortor. Phasellus vestibulum lorem sed risus ultricies. Habitant morbi tristique senectus et netus et. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Mi eget mauris pharetra et ultrices neque. Sodales ut eu sem integer.
Eget sit amet tellus cras adipiscing enim eu turpis. Amet facilisis magna etiam tempor. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Purus viverra accumsan in nisl nisi. Vitae elementum curabitur vitae nunc sed velit. Sed lectus vestibulum mattis ullamcorper velit. Consequat interdum varius sit amet mattis. Amet justo donec enim diam. Sed vulputate odio ut enim blandit volutpat maecenas. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Habitant morbi tristique senectus et netus et malesuada. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Congue mauris rhoncus aenean vel elit scelerisque. Id neque aliquam vestibulum morbi blandit cursus. Nunc sed augue lacus viverra vitae congue eu consequat ac. Leo vel orci porta non pulvinar neque. Consequat interdum varius sit amet mattis.
Enim eu turpis egestas pretium aenean. Ipsum a arcu cursus vitae. Massa massa ultricies mi quis hendrerit dolor. Rhoncus dolor purus non enim praesent elementum. Tristique magna sit amet purus. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Egestas diam in arcu cursus. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. In mollis nunc sed id semper risus in hendrerit gravida. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Volutpat consequat mauris nunc congue nisi vitae.
',
    NULL,
    '2022-11-10 02:11:59.741'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'It requires 63 feet of wire to make a Slinky toy',
    NULL,
    '2023-05-02 19:38:52.974'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'mewtwo',
    'Pokemon  psychic',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
    '2023-02-24 21:42:14.432'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What was Madam Curie''s husbands name




Pierre',
    NULL,
    '2020-06-13 07:15:49.400'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why couldn''t the bicycle stand up by itself? It was two tired!',
    NULL,
    '2021-09-24 00:21:59.121'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'With winds of 50 miles per hour, The Statue of Liberty sways three inches and the torch sways five inches',
    NULL,
    '2021-10-02 13:56:27.693'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Vel turpis nunc eget lorem dolor sed viverra ipsum',
    'Lorem sed risus ultricies tristique nulla aliquet enim. Curabitur vitae nunc sed velit. Vel elit scelerisque mauris pellentesque pulvinar. Viverra nibh cras pulvinar mattis nunc sed blandit. Pellentesque pulvinar pellentesque habitant morbi. Elementum sagittis vitae et leo. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Senectus et netus et malesuada. Varius vel pharetra vel turpis nunc. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Quam elementum pulvinar etiam non quam.
Risus sed vulputate odio ut enim blandit volutpat. Faucibus turpis in eu mi bibendum neque. Morbi tristique senectus et netus et malesuada fames ac. Lacinia quis vel eros donec. Est velit egestas dui id ornare arcu. Commodo viverra maecenas accumsan lacus. Turpis in eu mi bibendum neque egestas congue. Fermentum posuere urna nec tincidunt. Sit amet nisl purus in mollis. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Justo eget magna fermentum iaculis eu non diam. Proin nibh nisl condimentum id venenatis. Viverra maecenas accumsan lacus vel facilisis volutpat est. Rhoncus dolor purus non enim praesent elementum facilisis leo. Urna id volutpat lacus laoreet non curabitur gravida. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fermentum leo vel orci porta.
Volutpat consequat mauris nunc congue. Sollicitudin ac orci phasellus egestas tellus. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Massa tempor nec feugiat nisl pretium fusce id. Amet purus gravida quis blandit turpis cursus in hac. Neque ornare aenean euismod elementum nisi quis eleifend. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Elit at imperdiet dui accumsan sit amet. Etiam erat velit scelerisque in dictum non consectetur a erat. Lacus vestibulum sed arcu non odio euismod lacinia. Ultrices eros in cursus turpis. Nibh nisl condimentum id venenatis a condimentum. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus.
',
    NULL,
    '2022-11-09 08:45:21.526'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'poliwrath',
    'Pokemon  water fighting',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png',
    '2020-09-07 01:38:30.883'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'May babies are on average 200 grams heavier than babies born in other months',
    NULL,
    '2023-10-20 17:47:44.692'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'oddish',
    'Pokemon  grass poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png',
    '2023-04-07 18:58:59.730'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Brew my own beer',
    NULL,
    '2020-06-10 17:00:55.451'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris and Super man had a bet,the bet was the looser had to wear his underwear out of his pants.',
    NULL,
    '2023-10-26 00:51:46.824'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris knows when God will return.',
    'https://picsum.photos/351/133',
    '2021-07-11 07:22:50.896'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Cycling Fly',
    'If there were 2 cyclists and they were facing eachother at exactly 20 kilometres apart. As the cyclists started at one cyclist was a fly and the fly flew back and fourth from the 2 cyclists, How far has the fly flown?




The fly flew only 15km because when the fly was flying the cyclists were getting closer as the fly flew, so the fly flew less than the cyclists.',
    NULL,
    '2020-03-20 21:21:28.152'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Taipan snakes have 50 times more toxic than a cobra snake',
    NULL,
    '2022-03-09 03:37:23.430'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'According To The Song How Many Drummers Drumming Were There




12',
    NULL,
    '2021-06-02 11:58:16.288'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'magikarp',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png',
    '2020-12-20 01:24:40.489'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Mummy powder was once thought to be a cure for all remedies. English men used to carry the powder with them in a tiny bag wherever they went',
    'https://picsum.photos/572/108',
    '2022-12-05 14:38:18.599'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Did you hear about the hungry clock. It went back four seconds.',
    NULL,
    '2021-09-28 19:53:21.392'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Which Light',
    'You''re on the first floor of a house and you have no view of the second story of the house. There are three light switches on the first floor that turn on three lights on the second floor. You can only have one switch on at a time and you can only go upstairs once. How do you find out which switch goes to which light.




Turn one switch on for 10 minutes then turn it off. Turn on the second switch then go upstairs. The light that is on is the second switch the light that is still hot is the first and the light that isn''t either is the third switch.',
    NULL,
    '2021-10-14 06:28:18.676'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Uranus is the only planet that rotates on its side',
    'https://picsum.photos/355/419',
    '2020-04-10 07:00:01.630'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Manitoulin Island is the largest island in a fresh water lake. It is located in Canadian Lake Superior',
    NULL,
    '2023-11-17 10:51:33.879'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    ' The word "struthious" refers to something that resembles or is related to __________




Ostriches',
    NULL,
    '2021-11-17 05:43:00.039'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'What the difference between Chuck Norris and Chuck Norris? Chuck Norris',
    NULL,
    '2020-11-16 11:56:59.141'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I have a joke about drilling, but it’s boring.',
    NULL,
    '2023-04-30 11:41:11.434'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Mary Marry',
    'He has married many but has never been married . Who is he?




A priest',
    'https://picsum.photos/371/530',
    '2020-04-10 19:20:46.680'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris can milk a horse.',
    NULL,
    '2023-08-30 16:08:42.309'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    '"On 21 december 2012 Chuck Norris will align the planets and cause a poleshift."',
    NULL,
    '2020-07-19 18:40:24.627'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Leo Buscaglia',
    'I''ve always thought that people need to feel good about themselves and I see my role as offering support to them, to provide some light along the way.',
    NULL,
    '2023-11-01 18:28:00.122'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'gyarados',
    'Pokemon  water flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png',
    '2020-09-03 09:42:27.592'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'mewtwo',
    'Pokemon  psychic',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
    '2022-03-15 20:10:06.365'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Francesca Annis',
    'The funny thing is I''m not bothered or sad about being on my own - after all I''ve never had a husband.',
    NULL,
    '2021-08-06 21:53:28.087'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Explore Bruges',
    NULL,
    '2022-04-29 15:05:39.819'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'krabby',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png',
    '2022-05-30 15:50:54.859'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris can burn a fire.',
    NULL,
    '2021-02-05 00:17:13.060'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Eget felis eget nunc lobortis mattis aliquam fauci',
    'Posuere ac ut consequat semper viverra. Viverra vitae congue eu consequat. Enim nunc faucibus a pellentesque. Urna cursus eget nunc scelerisque. Eu augue ut lectus arcu bibendum at varius vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Sed enim ut sem viverra. Sed enim ut sem viverra aliquet eget sit amet. Molestie nunc non blandit massa enim nec. Et molestie ac feugiat sed lectus. Lacinia quis vel eros donec ac odio tempor orci. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Orci sagittis eu volutpat odio facilisis. Est ullamcorper eget nulla facilisi etiam. Nibh sit amet commodo nulla facilisi nullam. Egestas diam in arcu cursus euismod quis viverra. Luctus accumsan tortor posuere ac ut consequat semper viverra. Tristique risus nec feugiat in fermentum posuere. Facilisi cras fermentum odio eu. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo.
',
    NULL,
    '2022-05-15 22:06:41.060'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Peladophobia is the fear of




Bald People',
    NULL,
    '2022-07-26 07:29:06.414'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What kind of cars do eggs drive? Yolkswagens.',
    NULL,
    '2021-06-14 03:41:02.506'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What drink comprises Rum, Coconut Milk and Pineapple?




Pina Collada',
    'https://picsum.photos/391/222',
    '2020-03-20 02:48:24.205'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'nidorino',
    'Pokemon  poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png',
    '2022-07-12 06:35:42.873'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Work a wrestling match',
    'https://picsum.photos/358/516',
    '2020-09-19 03:59:58.252'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'bellsprout',
    'Pokemon  grass poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png',
    '2022-05-16 21:59:40.947'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'A Thing That Eats Everything',
    'what is the thing that eats everything and drink nothing?




the fire',
    'https://picsum.photos/188/454',
    '2020-08-24 01:26:56.403'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'My sister-in-law is an archaeologist. Only person I’ve known that is excited to find a bone in her chicken.',
    NULL,
    '2022-01-29 08:18:43.714'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'cloyster',
    'Pokemon  water ice',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png',
    '2023-05-21 06:46:29.236'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Climb up to Tiger’s Nest',
    NULL,
    '2020-03-12 03:37:56.413'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'aerodactyl',
    'Pokemon  rock flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png',
    '2022-09-22 09:59:20.186'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'arcanine',
    'Pokemon  fire',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png',
    '2020-06-29 23:56:48.166'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'There was an army general during the Liberia Civil War who used to lead his army into battle naked. His nickname was "General Butt Naked." Joshua Milton Blahyi (his real name) is now an evangelical preacher in Monrovia',
    'https://picsum.photos/429/172',
    '2021-04-07 08:49:31.243'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'World''s #1 Riddle',
    'What is greater than God? More evil than the Devil? What most rich peope don''t have? What most poor people have? And if you eat it, you will die?




NOTHING',
    'https://picsum.photos/481/275',
    '2023-05-31 18:33:23.732'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris can milk a bull',
    NULL,
    '2022-09-26 06:25:17.035'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What is the name of the princess in Sleeping Beauty




Aurora',
    NULL,
    '2021-02-13 13:58:13.285'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why don’t eggs tell jokes? They’d crack each other up.',
    NULL,
    '2022-05-07 17:19:16.226'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'seadra',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png',
    '2022-04-28 16:28:03.390'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What Do Koala Bears Live On?




Eucalyptus Leaves',
    NULL,
    '2021-04-19 05:02:05.948'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Which author created Svengali




Georges Du Maurier',
    NULL,
    '2020-07-12 05:58:28.118'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Chazz Palminteri',
    'My mom was Sicilian, my dad was Sicilian. Mom was a great cook, but all the women were.',
    'https://picsum.photos/571/324',
    '2023-02-28 17:03:22.742'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Greater Than God',
    'What''s greater than god, more evil than the devil, the poor have it, the rich need it, and if you eat it you will die?




Nothing',
    NULL,
    '2020-10-24 06:55:32.758'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'The Key Of Your Life',
    'What goes up but doesnt come down, what gets bigger but not smaller. What adds on but doesnt add off.




Your age',
    NULL,
    '2021-03-09 05:26:46.341'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'poliwag',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png',
    '2023-01-02 22:46:54.863'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'My wife left a note on the fridge that said, “This isn''t working.” I’m not sure what she’s talking about. I opened the fridge door and it’s working fine!',
    NULL,
    '2020-06-24 09:20:12.701'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Attend the Calgary Stampede',
    NULL,
    '2022-05-16 19:06:32.263'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'What Has A Face',
    'what has a face but cannot smile?




clock',
    'https://picsum.photos/687/468',
    '2023-04-10 22:23:46.135'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Alphebet',
    'how many letters are in the alphabet?




8.',
    NULL,
    '2022-09-26 05:04:04.219'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ivysaur',
    'Pokemon  grass poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    '2021-03-13 11:21:26.848'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'In which continent would you find the Ob river ?




Asia',
    'https://picsum.photos/440/198',
    '2023-02-18 08:18:54.875'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Before the fur trade had started in Canada, it was estimated that there were over 6 million beavers',
    NULL,
    '2020-02-21 15:05:46.457'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Jenson Button',
    'The only time I think about life beyond F1 is when I contemplate becoming a dad. But there''s no way that''s going to happen while I''m still racing. To be successful in F1 you need to be very selfish in lots of ways and you''re away from home for long periods. That''s not the kind of father I want to be.',
    NULL,
    '2022-10-28 16:18:58.109'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'All babies are colour blind when they are born',
    NULL,
    '2021-11-13 14:29:16.043'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris can say a toung twister',
    'https://picsum.photos/214/277',
    '2021-07-07 19:06:14.054'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Ut eu sem integer vitae justo eget magna. Praesent',
    'Eget sit amet tellus cras adipiscing enim eu. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Purus in massa tempor nec feugiat nisl pretium fusce. Eu feugiat pretium nibh ipsum consequat nisl. Purus in mollis nunc sed. Turpis massa sed elementum tempus egestas sed. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Est lorem ipsum dolor sit amet. Fringilla phasellus faucibus scelerisque eleifend donec. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.
Nunc sed velit dignissim sodales ut eu sem integer. Aliquam sem et tortor consequat id porta nibh venenatis cras. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. In aliquam sem fringilla ut morbi tincidunt. Feugiat nisl pretium fusce id velit ut tortor. Eu feugiat pretium nibh ipsum consequat nisl vel. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Libero id faucibus nisl tincidunt eget nullam. Urna cursus eget nunc scelerisque. Convallis tellus id interdum velit laoreet id. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Amet consectetur adipiscing elit pellentesque habitant. Orci ac auctor augue mauris augue neque gravida in. Risus quis varius quam quisque id diam vel quam. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Amet porttitor eget dolor morbi non. Convallis convallis tellus id interdum.
Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Arcu felis bibendum ut tristique et egestas. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Quisque sagittis purus sit amet volutpat consequat mauris. Mattis vulputate enim nulla aliquet porttitor. Sit amet facilisis magna etiam tempor orci eu lobortis. Erat nam at lectus urna duis convallis convallis. Sit amet est placerat in. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Amet justo donec enim diam vulputate ut. Adipiscing vitae proin sagittis nisl rhoncus mattis. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Felis imperdiet proin fermentum leo vel orci porta. Consequat ac felis donec et odio pellentesque.
',
    'https://picsum.photos/531/397',
    '2023-08-21 16:35:36.209'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Have a charicature of me drawn',
    NULL,
    '2023-03-20 02:41:26.394'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What did the buffalo say to its son when he left? Bison!',
    NULL,
    '2021-04-20 13:54:32.723'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Can Opener',
    'What kind of can never needs a can opener?




A Pelican',
    NULL,
    '2020-04-10 02:49:54.232'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    '"It works on my machine" always holds true for Chuck Norris.',
    NULL,
    '2023-07-29 05:21:05.844'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What''s the name of the extinct volcano near hawaii''s waikiki beach




Diamond',
    NULL,
    '2023-09-20 04:37:36.525'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Justin Guarini',
    'Directly after the show people might have responded better to it, but who really knows. It did what it did and while it seems like a failure to most but it was a success for me and has given me so many opportunities.',
    NULL,
    '2022-09-06 05:19:59.412'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Mark Kennedy',
    'All of the biggest technological inventions created by man - the airplane, the automobile, the computer - says little about his intelligence, but speaks volumes about his laziness.',
    NULL,
    '2022-01-05 23:15:43.439'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Which knight of the round table was the beefiest? Sir loin.',
    NULL,
    '2022-10-29 21:16:10.210'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Ride the Trans Siberian from Beijing to Moscow',
    NULL,
    '2023-04-29 19:50:06.266'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit Dubai',
    NULL,
    '2021-09-02 23:23:57.743'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The largest cultivated crop in the United States is corn',
    'https://picsum.photos/173/183',
    '2021-07-14 14:53:56.083'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Lorem sed risus ultricies tristique nulla aliquet ',
    'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Elit eget gravida cum sociis natoque penatibus et. Aliquet nibh praesent tristique magna sit amet purus gravida. Sodales ut eu sem integer vitae. Lectus arcu bibendum at varius vel. Eget mi proin sed libero. Turpis egestas sed tempus urna et pharetra. Ut tellus elementum sagittis vitae et leo. Odio ut enim blandit volutpat. Massa tincidunt dui ut ornare lectus sit amet est placerat. Cursus mattis molestie a iaculis. Arcu dictum varius duis at consectetur lorem donec. In massa tempor nec feugiat nisl pretium.
Mi tempus imperdiet nulla malesuada pellentesque. Ut sem nulla pharetra diam sit amet. Eu consequat ac felis donec et. Ac felis donec et odio pellentesque diam volutpat. Vulputate sapien nec sagittis aliquam malesuada bibendum. Commodo viverra maecenas accumsan lacus vel. Ut sem viverra aliquet eget sit. Semper quis lectus nulla at volutpat diam ut. Ultricies integer quis auctor elit sed. Nulla facilisi morbi tempus iaculis urna. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Diam ut venenatis tellus in metus vulputate eu. Ut consequat semper viverra nam libero justo. Facilisi morbi tempus iaculis urna id. Tortor vitae purus faucibus ornare suspendisse.
Vitae auctor eu augue ut lectus arcu bibendum at varius. Massa tincidunt dui ut ornare lectus sit amet est. Donec ac odio tempor orci dapibus ultrices in. Semper quis lectus nulla at volutpat. Est sit amet facilisis magna etiam tempor. Lacus sed viverra tellus in hac habitasse platea. Ultrices neque ornare aenean euismod elementum nisi. Elit scelerisque mauris pellentesque pulvinar pellentesque. Elit sed vulputate mi sit. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Feugiat in ante metus dictum at tempor commodo ullamcorper. Condimentum lacinia quis vel eros donec ac odio tempor.
Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Quis vel eros donec ac odio tempor orci. Augue eget arcu dictum varius duis at consectetur lorem donec. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Duis at tellus at urna condimentum mattis pellentesque id nibh. Sed nisi lacus sed viverra tellus. Tortor aliquam nulla facilisi cras fermentum odio eu. Vulputate mi sit amet mauris commodo quis imperdiet massa. Vulputate enim nulla aliquet porttitor lacus luctus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Venenatis tellus in metus vulputate eu. Neque sodales ut etiam sit amet. Id interdum velit laoreet id donec ultrices tincidunt arcu. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Viverra vitae congue eu consequat ac. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Volutpat diam ut venenatis tellus in metus vulputate eu. Nibh tellus molestie nunc non.
',
    'https://picsum.photos/217/572',
    '2020-12-22 08:57:54.583'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit the Kigali Memorial Centre',
    'https://picsum.photos/531/336',
    '2020-02-24 19:55:55.499'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris doesn''t start his alphabet with an A. Instead he starts it with a Z, and ends with CN.',
    NULL,
    '2021-04-20 10:22:36.575'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Duncan Sheik',
    'I wouldn''t say that I''ve had a tough life by any stretch of the imagination.',
    NULL,
    '2020-01-02 04:34:20.883'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Handshaking',
    'If seven people meet each other and each shakes hands only once with each of the others, how many handshakes will there have been?




Twenty one. Most people would think there were 42 handshakes.',
    NULL,
    '2020-11-07 04:57:11.547'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'butterfree',
    'Pokemon  bug flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
    '2021-05-07 00:08:28.440'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris can beatbox at over 500 bpm.',
    NULL,
    '2020-02-22 12:53:47.933'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What did the llama say to his date? “Want to go on a picnic? Alpaca lunch.”',
    NULL,
    '2020-09-12 10:27:35.369'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Three Sets',
    'What common English word has 3 sets of double letters all in a row?




Bookkeeper',
    NULL,
    '2021-11-11 19:02:34.231'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'kabuto',
    'Pokemon  rock water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png',
    '2020-11-16 10:32:14.856'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'In the fairy tale ''Cinderella'''', which slipper did she lose, the left or the right




Left',
    NULL,
    '2020-06-22 16:51:49.847'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'arcanine',
    'Pokemon  fire',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png',
    '2020-09-24 23:12:30.664'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Have you ever wondered why Chuck Steaks are so tough. You guessed it.Chuck Norris.',
    'https://picsum.photos/472/425',
    '2022-08-25 10:17:48.275'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Element',
    'Never seen never heard. Never touched. Always out, always gone. Yet many fear it many touch it man face it many see it. What is it.




Darkness',
    NULL,
    '2020-10-25 06:12:13.104'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Actress Michelle Pfeiffer was the first choice to play Clarice Starling in the movie "Silence of the Lambs." She turned down the role because she found it too scary',
    'https://picsum.photos/173/419',
    '2021-08-02 17:23:32.786'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The sea cucumber spills its internal organs out as a defense mechanism',
    'https://picsum.photos/163/640',
    '2021-03-11 05:23:30.750'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I used to be addicted to soap, but I’m clean now.',
    NULL,
    '2022-03-16 08:56:20.005'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'When Chuck Norris does division, there are no remainders.',
    NULL,
    '2022-02-12 09:31:47.550'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'venonat',
    'Pokemon  bug poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png',
    '2021-01-02 01:01:52.806'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Anyone looking to buy a Delorean? Good shape, good mileage. Only driven from time to time',
    'https://picsum.photos/672/201',
    '2023-02-08 02:47:11.385'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'One of my friends and I just get together to eat hot dogs and tell the honest truth. It’s a frank relationship.',
    NULL,
    '2022-07-21 10:17:07.826'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What is the flower that stands for: lasting beauty




Stock',
    'https://picsum.photos/504/336',
    '2020-09-08 19:12:08.271'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Mukesh Ambani',
    'The organizational architecture is really that a centipede walks on hundred legs and one or two don''t count. So if I lose one or two legs, the process will go on, the organization will go on, the growth will go on.',
    NULL,
    '2020-09-02 10:13:27.991'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dolor sit amet, consectetur adipiscing elit, sed d',
    'Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Tristique senectus et netus et malesuada fames ac. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut. Eros in cursus turpis massa tincidunt. Purus viverra accumsan in nisl nisi scelerisque eu. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Nam aliquam sem et tortor. Sit amet purus gravida quis blandit turpis. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Amet massa vitae tortor condimentum.
Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Consequat semper viverra nam libero justo laoreet sit amet cursus. Morbi quis commodo odio aenean. Ut sem nulla pharetra diam. Gravida cum sociis natoque penatibus et magnis. Eu sem integer vitae justo. Amet dictum sit amet justo donec enim diam vulputate ut. Eu consequat ac felis donec et. Sed vulputate odio ut enim. Vitae aliquet nec ullamcorper sit amet risus nullam.
',
    'https://picsum.photos/577/632',
    '2022-01-24 03:43:55.672'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Basket Of Eggs',
    'A man is walking down a road with a basket of eggs. As he is walking he meets someone who buys one-half of his eggs plus one-half of an egg. He walks a little further and meets another person who buys one-half of his eggs plus one-half of an egg. After proceeding further he meets another person who buys one-half of his eggs plus one half an egg. At this point he has sold all of his eggs, and he never broke an egg. How many eggs did the man have to start with?




7 eggs. The first person bought one half of his eggs plus one half an egg (3 1/2 + 1/2 = 4 eggs) This left him 3 eggs. The second person bought one-half of his eggs plus one half an egg, (1 1/2 + 1/2 = 2 eggs) leaving the man 1 egg. The last person bought one-half of his eggs plus one-half an egg, (1/2 + 1/2 = 1 egg) leaving no eggs.',
    NULL,
    '2022-02-24 13:18:47.666'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'About 85% or product warning labels on household products are inadequate',
    'https://picsum.photos/359/548',
    '2023-03-22 12:50:44.959'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Remove forcibly or exile to another country




Deport',
    'https://picsum.photos/168/442',
    '2020-08-24 16:05:01.603'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'What Am I',
    'I am long and I roll,I am full of color,what am I?




A ball of yarn.',
    NULL,
    '2020-06-04 07:40:51.081'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What do you call a factory that makes OK products? A satisfactory.',
    NULL,
    '2021-11-21 06:20:34.545'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris doesn''t use a chainsaw to cut trees, he just stares at the tree until it falls over.',
    'https://picsum.photos/474/135',
    '2019-12-26 18:27:38.738'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What do a tick and the Eiffel Tower have in common? They’re both Paris sites.',
    'https://picsum.photos/406/700',
    '2021-02-21 17:50:34.407'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Frogs Lair',
    'there is a frog which can jump 10 meteres, it is stood in the middle of a pond 9 meteres away from the side, the frog cant jump to the side, why




it is dead',
    'https://picsum.photos/285/303',
    '2023-09-16 01:58:30.201'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris once ate a whole watermelon in one bite. The next day he crapped out 4 hammers, 3 turtles, 2 large pizzas, and 1 eggshell. That was 22 years ago.',
    NULL,
    '2022-05-11 14:40:34.351'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dolor sit amet, consectetur adipiscing elit, sed d',
    'Eget sit amet tellus cras adipiscing enim eu. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Purus in massa tempor nec feugiat nisl pretium fusce. Eu feugiat pretium nibh ipsum consequat nisl. Purus in mollis nunc sed. Turpis massa sed elementum tempus egestas sed. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Est lorem ipsum dolor sit amet. Fringilla phasellus faucibus scelerisque eleifend donec. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.
Mi eget mauris pharetra et ultrices neque. Nunc non blandit massa enim nec. Velit scelerisque in dictum non consectetur a. Enim sed faucibus turpis in eu mi bibendum neque. In egestas erat imperdiet sed. Ac auctor augue mauris augue neque gravida in fermentum. Vitae congue eu consequat ac felis donec. Feugiat sed lectus vestibulum mattis. Nibh venenatis cras sed felis eget velit aliquet. Mauris sit amet massa vitae tortor condimentum lacinia quis. Orci sagittis eu volutpat odio facilisis mauris sit amet. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Purus viverra accumsan in nisl. Consequat semper viverra nam libero justo laoreet sit amet. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Nec dui nunc mattis enim ut tellus elementum. Quis auctor elit sed vulputate mi sit. Feugiat nibh sed pulvinar proin gravida.
Mi tempus imperdiet nulla malesuada pellentesque. Ut sem nulla pharetra diam sit amet. Eu consequat ac felis donec et. Ac felis donec et odio pellentesque diam volutpat. Vulputate sapien nec sagittis aliquam malesuada bibendum. Commodo viverra maecenas accumsan lacus vel. Ut sem viverra aliquet eget sit. Semper quis lectus nulla at volutpat diam ut. Ultricies integer quis auctor elit sed. Nulla facilisi morbi tempus iaculis urna. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Diam ut venenatis tellus in metus vulputate eu. Ut consequat semper viverra nam libero justo. Facilisi morbi tempus iaculis urna id. Tortor vitae purus faucibus ornare suspendisse.
Nec feugiat nisl pretium fusce id velit. Aliquam ut porttitor leo a diam sollicitudin tempor. Elementum eu facilisis sed odio morbi quis. Aliquet nec ullamcorper sit amet risus nullam. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Diam volutpat commodo sed egestas. Et leo duis ut diam quam nulla porttitor massa id. Justo laoreet sit amet cursus sit. Id aliquet lectus proin nibh. Pretium fusce id velit ut tortor pretium viverra. Enim lobortis scelerisque fermentum dui. Id diam vel quam elementum. Ultrices sagittis orci a scelerisque purus semper eget duis. Pretium viverra suspendisse potenti nullam. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Vel quam elementum pulvinar etiam non quam lacus suspendisse.
',
    NULL,
    '2023-03-28 03:51:42.655'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Vitae auctor eu augue ut lectus arcu bibendum at v',
    'Risus sed vulputate odio ut enim blandit volutpat. Faucibus turpis in eu mi bibendum neque. Morbi tristique senectus et netus et malesuada fames ac. Lacinia quis vel eros donec. Est velit egestas dui id ornare arcu. Commodo viverra maecenas accumsan lacus. Turpis in eu mi bibendum neque egestas congue. Fermentum posuere urna nec tincidunt. Sit amet nisl purus in mollis. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Justo eget magna fermentum iaculis eu non diam. Proin nibh nisl condimentum id venenatis. Viverra maecenas accumsan lacus vel facilisis volutpat est. Rhoncus dolor purus non enim praesent elementum facilisis leo. Urna id volutpat lacus laoreet non curabitur gravida. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fermentum leo vel orci porta.
Sollicitudin nibh sit amet commodo. Purus sit amet luctus venenatis lectus. Dolor sit amet consectetur adipiscing elit ut aliquam purus. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Aliquet lectus proin nibh nisl condimentum. Laoreet non curabitur gravida arcu. Consectetur libero id faucibus nisl tincidunt eget nullam. Pretium viverra suspendisse potenti nullam ac tortor vitae. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Sed enim ut sem viverra aliquet. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Odio euismod lacinia at quis risus sed. Amet justo donec enim diam vulputate. Montes nascetur ridiculus mus mauris vitae ultricies leo integer.
Mi tempus imperdiet nulla malesuada pellentesque. Ut sem nulla pharetra diam sit amet. Eu consequat ac felis donec et. Ac felis donec et odio pellentesque diam volutpat. Vulputate sapien nec sagittis aliquam malesuada bibendum. Commodo viverra maecenas accumsan lacus vel. Ut sem viverra aliquet eget sit. Semper quis lectus nulla at volutpat diam ut. Ultricies integer quis auctor elit sed. Nulla facilisi morbi tempus iaculis urna. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Diam ut venenatis tellus in metus vulputate eu. Ut consequat semper viverra nam libero justo. Facilisi morbi tempus iaculis urna id. Tortor vitae purus faucibus ornare suspendisse.
',
    NULL,
    '2023-03-10 08:15:25.015'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Mirror House',
    'a teen girl went in a mirror house at the carnival.She stopped and did her makeup every 10 mirrors. There were 100 mirrors in the house. When she came out of the house, she had seen herself in a different mirror 101 times. How is this possible?




Well, Its pretty understandable. Every 10 mirros she stops and does her makeup, and when she finishes her makeup, she looks in her personal makeup mirror. So, that adds 1 mirror to the 100 mirrors!',
    NULL,
    '2023-07-19 20:10:30.433'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Et pharetra pharetra massa massa ultricies mi quis',
    'Eget sit amet tellus cras adipiscing enim eu. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Purus in massa tempor nec feugiat nisl pretium fusce. Eu feugiat pretium nibh ipsum consequat nisl. Purus in mollis nunc sed. Turpis massa sed elementum tempus egestas sed. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Est lorem ipsum dolor sit amet. Fringilla phasellus faucibus scelerisque eleifend donec. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.
Nibh sit amet commodo nulla. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Gravida neque convallis a cras. Id nibh tortor id aliquet lectus proin nibh. At tempor commodo ullamcorper a lacus vestibulum sed. Purus sit amet luctus venenatis lectus magna fringilla. Neque convallis a cras semper auctor. Auctor urna nunc id cursus metus. Purus in massa tempor nec feugiat nisl. Eget dolor morbi non arcu risus quis varius quam quisque. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Dui vivamus arcu felis bibendum ut tristique.Ut ornare lectus sit amet est placerat. Eget nulla facilisi etiam dignissim diam quis enim. Penatibus et magnis dis parturient montes. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Odio pellentesque diam volutpat commodo. Duis ut diam quam nulla porttitor massa id. Diam donec adipiscing tristique risus. Sed blandit libero volutpat sed cras ornare. Tincidunt lobortis feugiat vivamus at augue eget arcu. Arcu dui vivamus arcu felis bibendum ut tristique. Dapibus ultrices in iaculis nunc sed augue lacus. Risus nullam eget felis eget nunc lobortis.
Dignissim convallis aenean et tortor at risus viverra adipiscing at. Lacinia quis vel eros donec ac odio tempor orci. Id porta nibh venenatis cras. Nunc sed augue lacus viverra vitae congue eu consequat. Nisi porta lorem mollis aliquam. Pellentesque habitant morbi tristique senectus. Bibendum est ultricies integer quis auctor elit sed. Posuere urna nec tincidunt praesent semper. Id donec ultrices tincidunt arcu non sodales. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Nibh mauris cursus mattis molestie a iaculis at. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Ut porttitor leo a diam. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Magna fringilla urna porttitor rhoncus dolor purus non enim. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed.
',
    'https://picsum.photos/538/450',
    '2020-02-06 15:58:38.045'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Of which country is Amharic an official language




Ethiopia',
    'https://picsum.photos/416/218',
    '2020-12-27 01:49:43.322'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'My grief counselor died the other day. He was so good at his job, I don’t even care.',
    'https://picsum.photos/639/457',
    '2023-06-10 15:07:36.534'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'tauros',
    'Pokemon  normal',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png',
    '2020-04-10 07:38:52.242'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'charmeleon',
    'Pokemon  fire',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
    '2022-10-22 15:56:27.076'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'No Name',
    'I sit stern on the rock while I''m raising the wind, But the storm once abated, I''m gentle and kind. Kings sit at my feet who wait at my nod, To kneel in the dust on the ground I have trod. I''m seen by the world and known by but a few. The Gentile detests me, I''m pork to the Jew. My weight is three pounds,my length is a mile, And when once discovered, you''ll say with a smile- That the first and the last are the pride of the isle. The answer is a word of one syllable.




God',
    'https://picsum.photos/142/437',
    '2020-04-14 04:04:48.152'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Try the seafood diet—you see food, then you eat it.',
    NULL,
    '2023-09-21 09:38:22.692'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What do you call a kangaroo’s lazy joey? A pouch potato.',
    NULL,
    '2023-08-29 03:42:59.222'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Sleep with somebody way out of my league',
    'https://picsum.photos/682/289',
    '2022-02-04 21:09:55.272'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit Marrakech',
    NULL,
    '2022-02-03 18:30:41.535'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nunc sed velit dignissim sodales ut eu sem integer',
    'Blandit volutpat maecenas volutpat blandit. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Aliquet enim tortor at auctor urna nunc id cursus metus. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Enim ut tellus elementum sagittis vitae et leo. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Elementum integer enim neque volutpat ac tincidunt vitae. Id leo in vitae turpis massa sed elementum. Volutpat sed cras ornare arcu dui vivamus arcu felis. Suspendisse in est ante in. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Elit eget gravida cum sociis natoque. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Purus faucibus ornare suspendisse sed. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Ac turpis egestas integer eget aliquet.
Et pharetra pharetra massa massa ultricies mi quis hendrerit. Non odio euismod lacinia at quis risus sed vulputate. Vulputate sapien nec sagittis aliquam. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Tristique et egestas quis ipsum. Dui ut ornare lectus sit amet. Ac feugiat sed lectus vestibulum mattis. Enim tortor at auctor urna nunc. Feugiat sed lectus vestibulum mattis ullamcorper. Eget mauris pharetra et ultrices neque. Euismod elementum nisi quis eleifend quam. Volutpat odio facilisis mauris sit amet massa. Ultricies lacus sed turpis tincidunt id aliquet risus. Egestas diam in arcu cursus euismod quis.
Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Tristique senectus et netus et malesuada fames ac. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut. Eros in cursus turpis massa tincidunt. Purus viverra accumsan in nisl nisi scelerisque eu. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Nam aliquam sem et tortor. Sit amet purus gravida quis blandit turpis. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Amet massa vitae tortor condimentum.
',
    NULL,
    '2022-09-29 03:05:53.830'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'A bomb dropped by the Allies on Berlin during World War II killed every animal in the Berlin Zoo except the elephant, which escaped and roamed the city. When a Russian commander saw hungry Germans chasing the elephant and trying to kill it, he ordered his troops to protect it and shoot anyone who tried to kill it',
    NULL,
    '2021-10-30 05:06:35.492'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Atlantis is at the bottom of the Atlantic, because that''s where Chuck Norris put it.',
    NULL,
    '2023-07-25 19:03:42.867'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris does not hunt because the word hunting infers the probability of failure. Chuck Norris goes KILLING.',
    'https://picsum.photos/195/446',
    '2023-06-13 16:26:28.776'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'aerodactyl',
    'Pokemon  rock flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png',
    '2023-01-18 08:04:59.128'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Jessie wants to be Chuck Norris'' girl.',
    NULL,
    '2020-10-28 09:17:39.485'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The movie "Cleopatra" cost $44 million to make in 1963. The same movie would now cost $300 million to make taking inflation into account',
    NULL,
    '2020-11-15 20:36:55.042'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The Mount Horeb Mustard Museum which is located in Wisconsin has the biggest collection of prepared mustards. They have approximately 4,000 different jars and tubes from all over the world',
    NULL,
    '2021-12-06 10:59:59.065'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Sed sed risus pretium quam vulputate dignissim sus',
    'Mi eget mauris pharetra et ultrices neque. Nunc non blandit massa enim nec. Velit scelerisque in dictum non consectetur a. Enim sed faucibus turpis in eu mi bibendum neque. In egestas erat imperdiet sed. Ac auctor augue mauris augue neque gravida in fermentum. Vitae congue eu consequat ac felis donec. Feugiat sed lectus vestibulum mattis. Nibh venenatis cras sed felis eget velit aliquet. Mauris sit amet massa vitae tortor condimentum lacinia quis. Orci sagittis eu volutpat odio facilisis mauris sit amet. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Purus viverra accumsan in nisl. Consequat semper viverra nam libero justo laoreet sit amet. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Nec dui nunc mattis enim ut tellus elementum. Quis auctor elit sed vulputate mi sit. Feugiat nibh sed pulvinar proin gravida.
Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Quis vel eros donec ac odio tempor orci. Augue eget arcu dictum varius duis at consectetur lorem donec. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Duis at tellus at urna condimentum mattis pellentesque id nibh. Sed nisi lacus sed viverra tellus. Tortor aliquam nulla facilisi cras fermentum odio eu. Vulputate mi sit amet mauris commodo quis imperdiet massa. Vulputate enim nulla aliquet porttitor lacus luctus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Venenatis tellus in metus vulputate eu. Neque sodales ut etiam sit amet. Id interdum velit laoreet id donec ultrices tincidunt arcu. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Viverra vitae congue eu consequat ac. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Volutpat diam ut venenatis tellus in metus vulputate eu. Nibh tellus molestie nunc non.
',
    NULL,
    '2021-05-15 09:17:54.185'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'squirtle',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    '2021-02-05 21:29:49.855'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The sun shrinks five feet every hour',
    NULL,
    '2022-01-22 21:08:40.487'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris doesn''t play the lottery, he wins it.',
    NULL,
    '2022-02-07 00:56:45.752'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris won the daytona 500 in a flintstone car',
    NULL,
    '2021-08-27 19:24:24.632'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from John Stuart Mill',
    'The dictum that truth always triumphs over persecution is one of the pleasant falsehoods which men repeat after one another till they pass into commonplaces, but which all experience refutes.',
    NULL,
    '2021-10-02 21:14:58.338'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Each year ___________ has approximately 5,000 earthquakes, including 1,000 that measure above 3.5 on the Richter scale.




Alaska',
    'https://picsum.photos/305/623',
    '2020-04-16 23:43:52.783'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris can chocke someone with wireless earbuds.',
    NULL,
    '2022-02-25 07:53:12.329'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why did the man get fired from the banana factory? He kept throwing away the bent ones.',
    'https://picsum.photos/550/430',
    '2020-05-28 03:16:59.449'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Youssou N''Dour',
    'In the West, you have always associated the Islamic faith 100 percent with Arab culture. This in itself is a fundamentalist attitude and it is mistaken.',
    NULL,
    '2023-09-14 23:32:16.380'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'How does the moon cut his hair? Eclipse it.',
    'https://picsum.photos/459/497',
    '2021-03-11 06:49:44.466'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Scuba dive the Big Blue Hole',
    NULL,
    '2020-08-11 07:47:05.842'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Cavemen didn''t invent fire; Chuck Norris merely snapped his fingers and gave it to them',
    NULL,
    '2023-07-17 01:16:37.705'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What kind of bird works on a construction site? A crane.',
    NULL,
    '2020-10-29 16:50:58.913'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Torme Music: Who recorded Heartbreak Hotel in 1956




Elvis Presley',
    NULL,
    '2023-09-01 23:58:06.340'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'rattata',
    'Pokemon  normal',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
    '2020-05-30 18:11:31.330'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'For what purpose was the chow chow dog originally bred




As Food Or Chow',
    NULL,
    '2022-12-12 06:57:23.282'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris already knows that this is the 3,000th fact about him. It''s just that Chuck don''t give a fuck.',
    NULL,
    '2021-06-07 17:42:25.932'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'To the person who stole my depression medication: I hope you''re happy now.',
    NULL,
    '2023-07-06 17:43:29.457'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    '6:30 is hands down the best time on the clock.',
    NULL,
    '2023-05-30 19:43:12.083'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris fought the law, and the law got roundhouse kicked in the face',
    'https://picsum.photos/444/557',
    '2020-05-31 12:23:14.069'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Research indicates that mosquitoes are attracted to people who have recently eaten bananas',
    'https://picsum.photos/535/476',
    '2019-12-26 02:54:08.111'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Did you hear about the outlet who got in a fight with the power cord? He thought he could socket to him.',
    'https://picsum.photos/280/389',
    '2022-04-24 13:52:22.705'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Praesent semper feugiat nibh sed pulvinar proin. I',
    'Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Consequat id porta nibh venenatis cras sed felis eget velit. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Et tortor consequat id porta nibh. Ut etiam sit amet nisl purus. Leo vel fringilla est ullamcorper. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Vel facilisis volutpat est velit egestas dui id. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Nibh tellus molestie nunc non blandit. Nisi lacus sed viverra tellus in hac habitasse platea dictumst.
Nibh sit amet commodo nulla. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Gravida neque convallis a cras. Id nibh tortor id aliquet lectus proin nibh. At tempor commodo ullamcorper a lacus vestibulum sed. Purus sit amet luctus venenatis lectus magna fringilla. Neque convallis a cras semper auctor. Auctor urna nunc id cursus metus. Purus in massa tempor nec feugiat nisl. Eget dolor morbi non arcu risus quis varius quam quisque. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Dui vivamus arcu felis bibendum ut tristique.Sem viverra aliquet eget sit amet tellus cras. Proin nibh nisl condimentum id venenatis a. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Viverra vitae congue eu consequat ac felis donec et odio. Ultrices vitae auctor eu augue ut. Leo integer malesuada nunc vel risus. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus et malesuada fames ac. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Diam vel quam elementum pulvinar. Faucibus nisl tincidunt eget nullam. Lacus viverra vitae congue eu consequat. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Diam sit amet nisl suscipit. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.
',
    NULL,
    '2022-10-13 18:10:48.713'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What Is The Most Popular Karaoke Tune Worldwide




"you''ve Lost That Lovin Feeling"',
    NULL,
    '2022-01-05 14:19:14.739'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Howard Aiken',
    'Don''t worry about people stealing your ideas. If your ideas are any good, you''ll have to ram them down people''s throats.',
    NULL,
    '2022-12-12 19:25:52.816'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What does a dad get in their stocking if they’ve been naughty? Char-coal.',
    NULL,
    '2023-08-27 11:34:03.623'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why can’t you eat Wookie meat? Because it’s too chewy…',
    'https://picsum.photos/588/424',
    '2023-01-27 20:55:19.392'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'sandslash',
    'Pokemon  ground',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png',
    '2020-04-06 06:15:10.403'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Take the Manly Ferry',
    NULL,
    '2021-08-21 21:54:56.297'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I’m on a seafood diet. I see food and I eat it!',
    NULL,
    '2022-05-30 18:53:34.060'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Parker Posey',
    'My dad recently reminded me that my grandfather''s cousin was Lefty Frizzell.',
    NULL,
    '2020-09-11 03:48:17.570'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'bellsprout',
    'Pokemon  grass poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png',
    '2021-03-15 03:08:54.738'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dolor sit amet, consectetur adipiscing elit, sed d',
    'Consectetur a erat nam at lectus. Amet justo donec enim diam vulputate ut pharetra. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Porttitor rhoncus dolor purus non enim. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Augue ut lectus arcu bibendum. Lectus proin nibh nisl condimentum id.
Nunc sed velit dignissim sodales ut eu sem integer. Aliquam sem et tortor consequat id porta nibh venenatis cras. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. In aliquam sem fringilla ut morbi tincidunt. Feugiat nisl pretium fusce id velit ut tortor. Eu feugiat pretium nibh ipsum consequat nisl vel. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Libero id faucibus nisl tincidunt eget nullam. Urna cursus eget nunc scelerisque. Convallis tellus id interdum velit laoreet id. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Amet consectetur adipiscing elit pellentesque habitant. Orci ac auctor augue mauris augue neque gravida in. Risus quis varius quam quisque id diam vel quam. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Amet porttitor eget dolor morbi non. Convallis convallis tellus id interdum.
Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Consequat id porta nibh venenatis cras sed felis eget velit. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Et tortor consequat id porta nibh. Ut etiam sit amet nisl purus. Leo vel fringilla est ullamcorper. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Vel facilisis volutpat est velit egestas dui id. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Nibh tellus molestie nunc non blandit. Nisi lacus sed viverra tellus in hac habitasse platea dictumst.
',
    'https://picsum.photos/368/127',
    '2022-12-22 05:51:24.962'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Faucibus interdum posuere lorem ipsum dolor sit am',
    'Eget sit amet tellus cras adipiscing enim eu turpis. Amet facilisis magna etiam tempor. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Purus viverra accumsan in nisl nisi. Vitae elementum curabitur vitae nunc sed velit. Sed lectus vestibulum mattis ullamcorper velit. Consequat interdum varius sit amet mattis. Amet justo donec enim diam. Sed vulputate odio ut enim blandit volutpat maecenas. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Habitant morbi tristique senectus et netus et malesuada. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Congue mauris rhoncus aenean vel elit scelerisque. Id neque aliquam vestibulum morbi blandit cursus. Nunc sed augue lacus viverra vitae congue eu consequat ac. Leo vel orci porta non pulvinar neque. Consequat interdum varius sit amet mattis.
Lectus urna duis convallis convallis tellus id interdum. Porttitor leo a diam sollicitudin tempor id eu. Sit amet aliquam id diam maecenas. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Fermentum odio eu feugiat pretium nibh ipsum consequat. Purus semper eget duis at tellus at. Arcu bibendum at varius vel pharetra vel turpis. Suscipit tellus mauris a diam maecenas sed enim. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Faucibus interdum posuere lorem ipsum. Turpis massa tincidunt dui ut ornare lectus sit amet est. Egestas maecenas pharetra convallis posuere morbi leo. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Amet venenatis urna cursus eget nunc scelerisque. Hac habitasse platea dictumst quisque sagittis purus sit. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Non blandit massa enim nec dui. Mus mauris vitae ultricies leo integer malesuada. Sed felis eget velit aliquet sagittis id consectetur.
Volutpat consequat mauris nunc congue. Sollicitudin ac orci phasellus egestas tellus. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Massa tempor nec feugiat nisl pretium fusce id. Amet purus gravida quis blandit turpis cursus in hac. Neque ornare aenean euismod elementum nisi quis eleifend. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Elit at imperdiet dui accumsan sit amet. Etiam erat velit scelerisque in dictum non consectetur a erat. Lacus vestibulum sed arcu non odio euismod lacinia. Ultrices eros in cursus turpis. Nibh nisl condimentum id venenatis a condimentum. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus.
Viverra aliquet eget sit amet tellus. Adipiscing at in tellus integer feugiat scelerisque. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Mauris ultrices eros in cursus. Dolor purus non enim praesent. Quam viverra orci sagittis eu volutpat. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Lobortis feugiat vivamus at augue. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Sed sed risus pretium quam. Integer malesuada nunc vel risus. Egestas congue quisque egestas diam in arcu. Elementum nibh tellus molestie nunc non blandit massa enim nec.
',
    'https://picsum.photos/160/425',
    '2023-09-03 14:25:01.908'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Ac auctor augue mauris augue neque gravida in ferm',
    'Eget sit amet tellus cras adipiscing enim eu turpis. Amet facilisis magna etiam tempor. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Purus viverra accumsan in nisl nisi. Vitae elementum curabitur vitae nunc sed velit. Sed lectus vestibulum mattis ullamcorper velit. Consequat interdum varius sit amet mattis. Amet justo donec enim diam. Sed vulputate odio ut enim blandit volutpat maecenas. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Habitant morbi tristique senectus et netus et malesuada. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Congue mauris rhoncus aenean vel elit scelerisque. Id neque aliquam vestibulum morbi blandit cursus. Nunc sed augue lacus viverra vitae congue eu consequat ac. Leo vel orci porta non pulvinar neque. Consequat interdum varius sit amet mattis.
',
    NULL,
    '2023-01-04 13:04:39.147'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Approximately 40% of the states in the U.S. have severe, or extreme pollution problems',
    NULL,
    '2020-04-02 20:06:14.315'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The longer white infants from low-income families are breast-fed, the less likely they will be overweight as young children, researchers said on Monday',
    NULL,
    '2022-02-13 19:20:41.726'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Celebrate Holi in India',
    NULL,
    '2023-01-12 08:36:31.728'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Which authors personal publishing venture is Philtrum Press




Steven King',
    'https://picsum.photos/662/180',
    '2020-12-15 11:17:51.851'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'What Is It?',
    'what does no man want yet no man want to lose? (i have found actually two answers that would fit for this riddle)




answer 1. a bald head answer 2. a job',
    NULL,
    '2020-09-28 04:10:13.989'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Texas is the only state that is allowed to fly its flag at the same height as the U.S. flag',
    NULL,
    '2022-04-09 01:38:28.704'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Praesent semper feugiat nibh sed pulvinar proin. I',
    'Blandit volutpat maecenas volutpat blandit. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Aliquet enim tortor at auctor urna nunc id cursus metus. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Enim ut tellus elementum sagittis vitae et leo. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Elementum integer enim neque volutpat ac tincidunt vitae. Id leo in vitae turpis massa sed elementum. Volutpat sed cras ornare arcu dui vivamus arcu felis. Suspendisse in est ante in. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Elit eget gravida cum sociis natoque. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Purus faucibus ornare suspendisse sed. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Ac turpis egestas integer eget aliquet.
',
    NULL,
    '2022-11-07 17:22:46.434'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dignissim diam quis enim lobortis scelerisque ferm',
    'Lectus urna duis convallis convallis tellus id interdum. Porttitor leo a diam sollicitudin tempor id eu. Sit amet aliquam id diam maecenas. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Fermentum odio eu feugiat pretium nibh ipsum consequat. Purus semper eget duis at tellus at. Arcu bibendum at varius vel pharetra vel turpis. Suscipit tellus mauris a diam maecenas sed enim. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Faucibus interdum posuere lorem ipsum. Turpis massa tincidunt dui ut ornare lectus sit amet est. Egestas maecenas pharetra convallis posuere morbi leo. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Amet venenatis urna cursus eget nunc scelerisque. Hac habitasse platea dictumst quisque sagittis purus sit. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Non blandit massa enim nec dui. Mus mauris vitae ultricies leo integer malesuada. Sed felis eget velit aliquet sagittis id consectetur.
Sed elementum tempus egestas sed sed risus pretium quam. Interdum varius sit amet mattis vulputate enim nulla. Orci porta non pulvinar neque laoreet suspendisse. Urna porttitor rhoncus dolor purus non enim praesent. Elit sed vulputate mi sit amet mauris commodo. Sit amet dictum sit amet. Elementum integer enim neque volutpat ac tincidunt. A erat nam at lectus urna duis convallis. Convallis aenean et tortor at risus viverra adipiscing at in. Mattis vulputate enim nulla aliquet porttitor lacus. Sagittis nisl rhoncus mattis rhoncus urna. Sit amet massa vitae tortor. Phasellus vestibulum lorem sed risus ultricies. Habitant morbi tristique senectus et netus et. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Mi eget mauris pharetra et ultrices neque. Sodales ut eu sem integer.
Et pharetra pharetra massa massa ultricies mi quis hendrerit. Non odio euismod lacinia at quis risus sed vulputate. Vulputate sapien nec sagittis aliquam. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Tristique et egestas quis ipsum. Dui ut ornare lectus sit amet. Ac feugiat sed lectus vestibulum mattis. Enim tortor at auctor urna nunc. Feugiat sed lectus vestibulum mattis ullamcorper. Eget mauris pharetra et ultrices neque. Euismod elementum nisi quis eleifend quam. Volutpat odio facilisis mauris sit amet massa. Ultricies lacus sed turpis tincidunt id aliquet risus. Egestas diam in arcu cursus euismod quis.
',
    'https://picsum.photos/445/163',
    '2023-01-09 19:50:47.870'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit Meteora',
    'https://picsum.photos/136/261',
    '2022-12-12 09:16:01.098'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'If you suffered from scripturience what are you compelled to do




Write Things Down',
    NULL,
    '2023-01-06 18:56:15.113'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'If Chuck Norris was going to die in 4 seconds Steven Seagal "Might" get a hit on him with Steven Seagal dieing on Chuck Norris last breath',
    'https://picsum.photos/123/326',
    '2023-02-12 04:29:01.401'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'On what did Marley''s ghostly face first appear to Scrooge in Dickens'' A Christmas Carol




a Door Knocker',
    NULL,
    '2020-12-21 14:03:51.930'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Jonathan Sacks',
    'In an ecology of love, people can relate in trust and face the future without fear. They do not need to play it safe. They can take uncertainty in their stride.',
    'https://picsum.photos/238/365',
    '2021-09-06 23:06:05.318'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris already count to infinity. Twice.',
    NULL,
    '2023-10-02 13:52:26.228'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Sing for a live audience',
    NULL,
    '2021-01-23 07:49:44.273'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Judeophobia is the fear of




Jews',
    NULL,
    '2021-05-19 18:19:37.721'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I went to a seafood disco last week! Pulled a mussel!',
    'https://picsum.photos/227/320',
    '2021-12-10 08:49:37.242'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'caterpie',
    'Pokemon  bug',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
    '2021-10-10 19:57:35.462'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why did the football coach go to the bank? To get his quarter back.',
    'https://picsum.photos/267/358',
    '2020-09-30 07:49:00.936'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'One out of 20 people have an extra rib',
    NULL,
    '2022-08-27 17:46:10.043'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Who had hit records with ''You Love Us'' and ''Kevin Carter''




Manic Street Preachers',
    'https://picsum.photos/162/556',
    '2023-08-08 18:06:50.342'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Egg Head!',
    'A rooster lays an egg on a four sided roof. which way does the egg fall?




Roosters don''t lay eggs.',
    NULL,
    '2021-10-16 22:07:58.452'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Where Did Those Come From?',
    'One day there was a deadly car crash on the highway. No one was around when the car crashed and all 6 passengers inside were killed. When the police arrived and began to examine the scene, they found 7 hearts and 15 kidneys. How is this possible?




The car was delivering 1 heart and 3 kidneys to a hospital and was carrying a 6 man organ transplant crew.',
    NULL,
    '2020-11-25 07:55:29.852'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Climb an active volcano',
    NULL,
    '2022-07-25 09:44:39.107'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Eget sit amet tellus cras adipiscing enim eu turpi',
    'Eget felis eget nunc lobortis mattis aliquam faucibus purus. Ipsum dolor sit amet consectetur adipiscing elit. Purus in mollis nunc sed id semper. Imperdiet sed euismod nisi porta lorem mollis aliquam. Auctor neque vitae tempus quam. Vitae tempus quam pellentesque nec. Auctor augue mauris augue neque. Mattis aliquam faucibus purus in massa tempor nec feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Massa enim nec dui nunc mattis enim. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Elementum facilisis leo vel fringilla est ullamcorper eget nulla.
Sed elementum tempus egestas sed sed risus pretium quam. Interdum varius sit amet mattis vulputate enim nulla. Orci porta non pulvinar neque laoreet suspendisse. Urna porttitor rhoncus dolor purus non enim praesent. Elit sed vulputate mi sit amet mauris commodo. Sit amet dictum sit amet. Elementum integer enim neque volutpat ac tincidunt. A erat nam at lectus urna duis convallis. Convallis aenean et tortor at risus viverra adipiscing at in. Mattis vulputate enim nulla aliquet porttitor lacus. Sagittis nisl rhoncus mattis rhoncus urna. Sit amet massa vitae tortor. Phasellus vestibulum lorem sed risus ultricies. Habitant morbi tristique senectus et netus et. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Mi eget mauris pharetra et ultrices neque. Sodales ut eu sem integer.
Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Lacinia at quis risus sed. Velit egestas dui id ornare arcu odio ut sem nulla. Lacus vestibulum sed arcu non odio euismod lacinia. Imperdiet nulla malesuada pellentesque elit. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt. Adipiscing bibendum est ultricies integer quis auctor elit.
Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Tristique senectus et netus et malesuada fames ac. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut. Eros in cursus turpis massa tincidunt. Purus viverra accumsan in nisl nisi scelerisque eu. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Nam aliquam sem et tortor. Sit amet purus gravida quis blandit turpis. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Amet massa vitae tortor condimentum.
',
    NULL,
    '2022-06-05 01:47:15.428'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Wanna hear a joke about paper? Never mind. It''s tearable.',
    NULL,
    '2022-07-22 23:53:11.658'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'seel',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png',
    '2022-07-21 23:04:42.564'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The concept of Boxing Day, which is on December 26th, was to give boxes of food and clothing to the poor. It is now viewed in some countries as a time to get merchandise from stores at reduced prices',
    NULL,
    '2021-02-04 16:49:42.143'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Eget sit amet tellus cras adipiscing enim eu. Dui ',
    'Vitae auctor eu augue ut lectus arcu bibendum at varius. Massa tincidunt dui ut ornare lectus sit amet est. Donec ac odio tempor orci dapibus ultrices in. Semper quis lectus nulla at volutpat. Est sit amet facilisis magna etiam tempor. Lacus sed viverra tellus in hac habitasse platea. Ultrices neque ornare aenean euismod elementum nisi. Elit scelerisque mauris pellentesque pulvinar pellentesque. Elit sed vulputate mi sit. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Feugiat in ante metus dictum at tempor commodo ullamcorper. Condimentum lacinia quis vel eros donec ac odio tempor.
Nisl pretium fusce id velit ut tortor pretium viverra. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Volutpat diam ut venenatis tellus in metus. Commodo viverra maecenas accumsan lacus. Elit at imperdiet dui accumsan sit amet nulla facilisi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Eu scelerisque felis imperdiet proin. Arcu bibendum at varius vel pharetra vel turpis nunc. Orci a scelerisque purus semper eget. Elementum sagittis vitae et leo duis ut diam.
',
    NULL,
    '2023-01-16 16:48:23.376'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from George S. Patton',
    'It is foolish and wrong to mourn the men who died. Rather we should thank God that such men lived.',
    NULL,
    '2023-07-16 00:19:18.207'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Friday',
    'A man went out of town on Friday, he stayed three days and returned on Friday, How is this possible?




His horse''s name was Friday',
    NULL,
    '2023-08-08 09:19:06.760'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why did the tailor get fired? He wasn’t a good fit.',
    NULL,
    '2020-03-15 12:41:38.138'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'George Washington had to borrow money to go to his own inauguration',
    'https://picsum.photos/569/529',
    '2023-07-19 20:09:16.907'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Consectetur a erat nam at lectus. Amet justo donec',
    'Consectetur a erat nam at lectus. Amet justo donec enim diam vulputate ut pharetra. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Porttitor rhoncus dolor purus non enim. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Augue ut lectus arcu bibendum. Lectus proin nibh nisl condimentum id.
',
    NULL,
    '2020-04-14 07:02:06.557'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit Hitachi Seaside Park during spring',
    NULL,
    '2023-04-15 16:37:31.475'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What word comes from the Latin phrase to crowd together




Constipation Con Sta Pay Shun',
    'https://picsum.photos/457/342',
    '2023-08-17 22:24:25.084'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Mignon McLaughlin',
    'There are a handful of people whom money won''t spoil, and we all count ourselves among them.',
    NULL,
    '2023-03-28 18:13:11.842'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Id eu nisl nunc mi ipsum faucibus vitae aliquet ne',
    'Nunc sed velit dignissim sodales ut eu sem integer. Aliquam sem et tortor consequat id porta nibh venenatis cras. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. In aliquam sem fringilla ut morbi tincidunt. Feugiat nisl pretium fusce id velit ut tortor. Eu feugiat pretium nibh ipsum consequat nisl vel. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Libero id faucibus nisl tincidunt eget nullam. Urna cursus eget nunc scelerisque. Convallis tellus id interdum velit laoreet id. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Amet consectetur adipiscing elit pellentesque habitant. Orci ac auctor augue mauris augue neque gravida in. Risus quis varius quam quisque id diam vel quam. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Amet porttitor eget dolor morbi non. Convallis convallis tellus id interdum.
Eget sit amet tellus cras adipiscing enim eu. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Purus in massa tempor nec feugiat nisl pretium fusce. Eu feugiat pretium nibh ipsum consequat nisl. Purus in mollis nunc sed. Turpis massa sed elementum tempus egestas sed. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Est lorem ipsum dolor sit amet. Fringilla phasellus faucibus scelerisque eleifend donec. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.
',
    'https://picsum.photos/317/597',
    '2023-01-31 22:26:11.187'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Where do books hide when they’re afraid? Under their covers.',
    NULL,
    '2020-07-25 22:40:03.558'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Name the author of Gone with the Wind




Margaret Mitchell',
    NULL,
    '2020-09-09 03:17:36.019'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Faucibus interdum posuere lorem ipsum dolor sit am',
    'Et pharetra pharetra massa massa ultricies mi quis hendrerit. Non odio euismod lacinia at quis risus sed vulputate. Vulputate sapien nec sagittis aliquam. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Tristique et egestas quis ipsum. Dui ut ornare lectus sit amet. Ac feugiat sed lectus vestibulum mattis. Enim tortor at auctor urna nunc. Feugiat sed lectus vestibulum mattis ullamcorper. Eget mauris pharetra et ultrices neque. Euismod elementum nisi quis eleifend quam. Volutpat odio facilisis mauris sit amet massa. Ultricies lacus sed turpis tincidunt id aliquet risus. Egestas diam in arcu cursus euismod quis.
Eget felis eget nunc lobortis mattis aliquam faucibus purus. Ipsum dolor sit amet consectetur adipiscing elit. Purus in mollis nunc sed id semper. Imperdiet sed euismod nisi porta lorem mollis aliquam. Auctor neque vitae tempus quam. Vitae tempus quam pellentesque nec. Auctor augue mauris augue neque. Mattis aliquam faucibus purus in massa tempor nec feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Massa enim nec dui nunc mattis enim. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Elementum facilisis leo vel fringilla est ullamcorper eget nulla.
',
    NULL,
    '2020-12-15 12:06:18.279'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'This Halloween, Miley Cyrus wants to go Twerk or Treating at Chuck Norris'' house. Epic failure!',
    NULL,
    '2023-03-25 02:17:40.646'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Who was the Chancellor of West Germany in 1989 when the wall came down




Helmut Kohl',
    NULL,
    '2023-03-26 01:04:23.115'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Aliquam sem fringilla ut morbi tincidunt augue int',
    'Sed sed risus pretium quam vulputate dignissim suspendisse. Id leo in vitae turpis massa. Eget mauris pharetra et ultrices. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Nisl condimentum id venenatis a. Dui id ornare arcu odio. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Viverra maecenas accumsan lacus vel facilisis volutpat est. Platea dictumst vestibulum rhoncus est pellentesque elit. Hac habitasse platea dictumst quisque.
Nec feugiat nisl pretium fusce id velit. Aliquam ut porttitor leo a diam sollicitudin tempor. Elementum eu facilisis sed odio morbi quis. Aliquet nec ullamcorper sit amet risus nullam. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Diam volutpat commodo sed egestas. Et leo duis ut diam quam nulla porttitor massa id. Justo laoreet sit amet cursus sit. Id aliquet lectus proin nibh. Pretium fusce id velit ut tortor pretium viverra. Enim lobortis scelerisque fermentum dui. Id diam vel quam elementum. Ultrices sagittis orci a scelerisque purus semper eget duis. Pretium viverra suspendisse potenti nullam. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Vel quam elementum pulvinar etiam non quam lacus suspendisse.
',
    NULL,
    '2022-11-23 07:46:59.594'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The amount of blood a female mosquito drinks per serving is five millionths of a liter',
    'https://picsum.photos/303/497',
    '2022-01-22 07:32:46.598'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Back in 1953, it took 27 hours to make one Marshmallow Peep. Now it takes only six minutes',
    NULL,
    '2020-03-19 20:26:49.335'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why do melons have weddings? Because they cantaloupe.',
    'https://picsum.photos/586/126',
    '2021-08-17 00:20:01.538'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit Los Glaciares National Park',
    NULL,
    '2021-11-12 20:44:23.210'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What is a necklace of flowers called in hawaii




Lei',
    NULL,
    '2022-01-10 11:09:03.309'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What did the seal with one fin say to the shark? If seal is broken, do not consume.',
    'https://picsum.photos/588/317',
    '2022-09-05 05:07:40.453'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Studies have shown that by putting on slow background music it can make a person eat food at a slower rate',
    NULL,
    '2022-08-19 03:53:29.283'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What was Rocky''s nickname in the ring?




The Italian Stallion',
    'https://picsum.photos/166/303',
    '2023-01-01 14:54:34.478'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Woo a girl on the dancefloor',
    NULL,
    '2023-07-27 14:13:24.603'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Gwen Stefani',
    'It''s superfun being a mom, but it''s hard too.',
    NULL,
    '2021-09-22 13:48:07.290'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Henry Ward Beecher',
    'Laughter is not a bad beginning for a friendship, and it is the best ending for one.',
    'https://picsum.photos/363/614',
    '2023-04-07 07:34:49.010'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Thomas Jefferson',
    'In every country and every age, the priest had been hostile to Liberty.',
    NULL,
    '2022-06-14 21:18:04.116'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from David Amram',
    'Lawrence Ferlinghetti had a tremendous education as an artist and also an enormous knowledge of literarture.',
    NULL,
    '2023-08-13 18:25:53.300'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris used to bulls eye Lukes T-16 in his T-16 back home.',
    'https://picsum.photos/115/519',
    '2021-03-13 18:32:49.172'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Avery Laser Labels are named after company founder R. Stanton Avery',
    'https://picsum.photos/536/326',
    '2022-12-18 09:48:44.594'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Play in a sporting tournament',
    NULL,
    '2020-07-16 11:19:18.907'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit the Grand Canyon',
    NULL,
    '2021-08-02 11:31:57.460'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Olivia Thirlby',
    'I do, I kick major butt in ''Dredd.'' I get to kill people. I break a guy''s neck by roundhouse kicking him in the face. It was me, I did it. I learned how to roundhouse kick. I also do it with my hands cuffed behind my back so it''s pretty cool I have to say. Yeah, leather body suit, blonde hair, the whole thing.',
    'https://picsum.photos/458/149',
    '2020-01-06 07:50:53.509'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Tony Goldwyn',
    'I feel audiences are not given enough credit for their intelligence.',
    NULL,
    '2020-02-27 15:30:28.055'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Praesent semper feugiat nibh sed pulvinar proin. I',
    'Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Quis vel eros donec ac odio tempor orci. Augue eget arcu dictum varius duis at consectetur lorem donec. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Duis at tellus at urna condimentum mattis pellentesque id nibh. Sed nisi lacus sed viverra tellus. Tortor aliquam nulla facilisi cras fermentum odio eu. Vulputate mi sit amet mauris commodo quis imperdiet massa. Vulputate enim nulla aliquet porttitor lacus luctus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Venenatis tellus in metus vulputate eu. Neque sodales ut etiam sit amet. Id interdum velit laoreet id donec ultrices tincidunt arcu. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Viverra vitae congue eu consequat ac. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Volutpat diam ut venenatis tellus in metus vulputate eu. Nibh tellus molestie nunc non.
Eget felis eget nunc lobortis mattis aliquam faucibus purus. Ipsum dolor sit amet consectetur adipiscing elit. Purus in mollis nunc sed id semper. Imperdiet sed euismod nisi porta lorem mollis aliquam. Auctor neque vitae tempus quam. Vitae tempus quam pellentesque nec. Auctor augue mauris augue neque. Mattis aliquam faucibus purus in massa tempor nec feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Massa enim nec dui nunc mattis enim. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Elementum facilisis leo vel fringilla est ullamcorper eget nulla.
Nibh nisl condimentum id venenatis a condimentum vitae sapien. Laoreet sit amet cursus sit. Commodo ullamcorper a lacus vestibulum sed arcu. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Pharetra convallis posuere morbi leo urna. Id volutpat lacus laoreet non curabitur gravida arcu ac. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Lorem mollis aliquam ut porttitor. A arcu cursus vitae congue. Nisl purus in mollis nunc sed id semper. Convallis a cras semper auctor neque. Lectus arcu bibendum at varius. Facilisis sed odio morbi quis commodo odio aenean sed. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Vel orci porta non pulvinar neque laoreet suspendisse. Feugiat nisl pretium fusce id. Adipiscing bibendum est ultricies integer quis auctor.
',
    'https://picsum.photos/119/334',
    '2023-11-06 03:57:05.880'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'College went to Chuck Norris.',
    'https://picsum.photos/238/538',
    '2020-10-08 06:16:12.919'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Go rock climbing outside of a gym',
    NULL,
    '2022-01-15 23:19:29.190'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Drink sake in Japan',
    NULL,
    '2021-01-16 19:45:08.532'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Birds developed wings to fly away from Chuck Norris. Not to be outdone, he invented bird flu.',
    NULL,
    '2020-04-02 02:53:02.223'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Eat Mexican food in Mexico',
    'https://picsum.photos/106/613',
    '2022-06-16 01:41:46.121'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit Zion National Park',
    'https://picsum.photos/139/216',
    '2021-11-23 18:46:47.943'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris can drown a fish',
    NULL,
    '2022-04-04 02:51:21.438'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'My kid is blaming me for ruining their birthday. That''s ridiculous, I didn''t even know it was today!',
    NULL,
    '2021-11-10 22:30:32.417'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Most snails are hermaphrodites, meaning they have both female and male reproductive organs',
    'https://picsum.photos/386/599',
    '2023-09-21 07:07:46.036'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'A Chuck Norris rape only lasts for 0.4 of a second. The next six hours are demanded.',
    NULL,
    '2020-09-23 08:12:56.824'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Cant Move',
    'what can you walk up and never reach the top?




the down side of an escalator.',
    NULL,
    '2020-04-07 01:40:21.723'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Ac auctor augue mauris augue neque gravida in ferm',
    'Mi eget mauris pharetra et ultrices neque. Nunc non blandit massa enim nec. Velit scelerisque in dictum non consectetur a. Enim sed faucibus turpis in eu mi bibendum neque. In egestas erat imperdiet sed. Ac auctor augue mauris augue neque gravida in fermentum. Vitae congue eu consequat ac felis donec. Feugiat sed lectus vestibulum mattis. Nibh venenatis cras sed felis eget velit aliquet. Mauris sit amet massa vitae tortor condimentum lacinia quis. Orci sagittis eu volutpat odio facilisis mauris sit amet. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Purus viverra accumsan in nisl. Consequat semper viverra nam libero justo laoreet sit amet. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Nec dui nunc mattis enim ut tellus elementum. Quis auctor elit sed vulputate mi sit. Feugiat nibh sed pulvinar proin gravida.
Volutpat consequat mauris nunc congue. Sollicitudin ac orci phasellus egestas tellus. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Massa tempor nec feugiat nisl pretium fusce id. Amet purus gravida quis blandit turpis cursus in hac. Neque ornare aenean euismod elementum nisi quis eleifend. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Elit at imperdiet dui accumsan sit amet. Etiam erat velit scelerisque in dictum non consectetur a erat. Lacus vestibulum sed arcu non odio euismod lacinia. Ultrices eros in cursus turpis. Nibh nisl condimentum id venenatis a condimentum. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus.
Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Consequat semper viverra nam libero justo laoreet sit amet cursus. Morbi quis commodo odio aenean. Ut sem nulla pharetra diam. Gravida cum sociis natoque penatibus et magnis. Eu sem integer vitae justo. Amet dictum sit amet justo donec enim diam vulputate ut. Eu consequat ac felis donec et. Sed vulputate odio ut enim. Vitae aliquet nec ullamcorper sit amet risus nullam.
Consectetur a erat nam at lectus. Amet justo donec enim diam vulputate ut pharetra. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Porttitor rhoncus dolor purus non enim. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Augue ut lectus arcu bibendum. Lectus proin nibh nisl condimentum id.
',
    NULL,
    '2020-07-03 01:04:42.199'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Mozart wrote Ah, Vous Dirai-Je, Maman what''s its English title




Twinkle - Twinkle Little Star',
    'https://picsum.photos/507/641',
    '2023-03-19 02:30:37.480'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from William Godwin',
    'There can be no passion, and by consequence no love, where there is not imagination.',
    'https://picsum.photos/311/599',
    '2023-09-23 03:58:04.546'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nunc sed velit dignissim sodales ut eu sem integer',
    'Enim eu turpis egestas pretium aenean. Ipsum a arcu cursus vitae. Massa massa ultricies mi quis hendrerit dolor. Rhoncus dolor purus non enim praesent elementum. Tristique magna sit amet purus. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Egestas diam in arcu cursus. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. In mollis nunc sed id semper risus in hendrerit gravida. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Volutpat consequat mauris nunc congue nisi vitae.
Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Lacinia at quis risus sed. Velit egestas dui id ornare arcu odio ut sem nulla. Lacus vestibulum sed arcu non odio euismod lacinia. Imperdiet nulla malesuada pellentesque elit. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt. Adipiscing bibendum est ultricies integer quis auctor elit.
',
    NULL,
    '2022-09-22 06:38:56.054'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Vincent Van Gogh',
    'But I always think that the best way to know God is to love many things.',
    NULL,
    '2023-10-11 11:01:44.846'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'How many issues would a subscriber to both USA TODAY and Texas Weekly get in one calendar year?




64',
    NULL,
    '2022-10-18 08:25:18.479'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'In Peter and the Wolf what instrument represents the cat




The Clarinet',
    NULL,
    '2020-09-01 14:31:25.403'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Commonly known by his nickname "Teddy," U.S. Senator Ted Kennedy had what given first name?




Edward',
    NULL,
    '2020-12-09 16:58:58.266'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Eget felis eget nunc lobortis mattis aliquam fauci',
    'Mi eget mauris pharetra et ultrices neque. Nunc non blandit massa enim nec. Velit scelerisque in dictum non consectetur a. Enim sed faucibus turpis in eu mi bibendum neque. In egestas erat imperdiet sed. Ac auctor augue mauris augue neque gravida in fermentum. Vitae congue eu consequat ac felis donec. Feugiat sed lectus vestibulum mattis. Nibh venenatis cras sed felis eget velit aliquet. Mauris sit amet massa vitae tortor condimentum lacinia quis. Orci sagittis eu volutpat odio facilisis mauris sit amet. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Purus viverra accumsan in nisl. Consequat semper viverra nam libero justo laoreet sit amet. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Nec dui nunc mattis enim ut tellus elementum. Quis auctor elit sed vulputate mi sit. Feugiat nibh sed pulvinar proin gravida.
Semper auctor neque vitae tempus quam pellentesque nec nam. Turpis egestas maecenas pharetra convallis posuere morbi. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. In cursus turpis massa tincidunt dui. Gravida neque convallis a cras semper auctor neque vitae tempus. Dui faucibus in ornare quam viverra. Consequat nisl vel pretium lectus quam id leo in vitae. Eget est lorem ipsum dolor sit amet. Enim facilisis gravida neque convallis a cras semper auctor. Non arcu risus quis varius quam quisque id diam. Enim praesent elementum facilisis leo vel fringilla est. Elementum sagittis vitae et leo duis ut diam quam. Nisi lacus sed viverra tellus. Id aliquet lectus proin nibh nisl condimentum id. Egestas sed sed risus pretium quam vulputate dignissim.
',
    NULL,
    '2023-09-13 00:04:32.139'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'I Never Was, Am Always To Be,',
    ' I never was, am always to be, No one ever saw me, nor ever will And yet I am the confidence of all To live and breathe on this terrestrial ball




I am Tomorrow',
    NULL,
    '2019-12-29 21:52:06.573'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Ziggy Marley',
    'My father, his spirit is with me constantly, and I''m a believer in that world and the world of dreams and that stuff.',
    'https://picsum.photos/207/552',
    '2021-03-21 18:17:20.451'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'America''s next top model is really a competition of who gets to have Chuck Norris''s child.',
    NULL,
    '2023-06-26 22:36:04.939'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'The Powerful Bain',
    'there is somthing, adam has none, eve has two and everybody has one. who am i?




Answer:',
    NULL,
    '2022-11-25 12:48:52.919'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The name Aspirin was invented from "A" in acetyl chloride. The "spir" comes from spiraea ulmaria which is the plant that they got the salicylic acid from, and the "in" was used because back then it was popular to end the name of medicines with "in."',
    NULL,
    '2020-07-15 10:11:18.815'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris can''t test for equality because he has no equal.',
    NULL,
    '2020-08-04 14:00:01.234'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Go on a cruise',
    NULL,
    '2021-07-04 16:55:15.243'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Lectus magna fringilla urna porttitor rhoncus dolo',
    'Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Sit amet nulla facilisi morbi tempus. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Sodales neque sodales ut etiam sit amet nisl purus. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Nisi lacus sed viverra tellus in hac habitasse. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Tincidunt eget nullam non nisi. Cursus risus at ultrices mi. Volutpat est velit egestas dui id ornare. Sagittis nisl rhoncus mattis rhoncus. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Fermentum leo vel orci porta non pulvinar neque. Quisque sagittis purus sit amet volutpat. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Porttitor massa id neque aliquam vestibulum morbi blandit. At quis risus sed vulputate odio. Nisi vitae suscipit tellus mauris a diam maecenas sed enim.
Lorem sed risus ultricies tristique nulla aliquet enim. Curabitur vitae nunc sed velit. Vel elit scelerisque mauris pellentesque pulvinar. Viverra nibh cras pulvinar mattis nunc sed blandit. Pellentesque pulvinar pellentesque habitant morbi. Elementum sagittis vitae et leo. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Senectus et netus et malesuada. Varius vel pharetra vel turpis nunc. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Quam elementum pulvinar etiam non quam.
',
    NULL,
    '2021-02-10 09:40:49.928'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'scyther',
    'Pokemon  bug flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png',
    '2022-04-29 02:09:17.039'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Attend the Alburquerque Balloon Festival',
    NULL,
    '2023-09-13 03:31:32.921'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Witness a tsunami',
    'https://picsum.photos/394/547',
    '2023-03-20 20:07:23.370'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'starmie',
    'Pokemon  water psychic',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png',
    '2022-06-29 07:49:34.931'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Oscar Wilde',
    'What we have to do, what at any rate it is our duty to do, is to revive the old art of Lying.',
    'https://picsum.photos/650/465',
    '2021-09-06 03:43:14.876'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Crazy Bet',
    'If someone says to you, "I''ll bet you $1 that if you give me $2, I will give you $3 in return", would this be a good bet for you to accept?




No. This is a situation where you lose even if you win. Assuming the other person is being wise, they would take your $2 and say, "I lose", and give you $1 in return. You win the bet, but you''re out $1.',
    'https://picsum.photos/191/334',
    '2021-11-28 08:03:25.692'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Which snooker player was fined 20,000 for assaulting an official in 1996?




Ronnie O''sullivan',
    NULL,
    '2023-08-01 00:29:10.015'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Bond: What was the first James Bond film




Dr. No',
    NULL,
    '2023-06-21 10:12:42.392'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Eget sit amet tellus cras adipiscing enim eu. Dui ',
    'Tincidunt vitae semper quis lectus. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Convallis aenean et tortor at risus viverra adipiscing at in. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Massa eget egestas purus viverra accumsan in nisl nisi. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Posuere sollicitudin aliquam ultrices sagittis. Dolor purus non enim praesent elementum. Diam in arcu cursus euismod quis viverra nibh. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Dolor sed viverra ipsum nunc aliquet bibendum. Integer quis auctor elit sed vulputate mi. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Dui sapien eget mi proin sed libero enim sed. Neque sodales ut etiam sit amet nisl purus in.
',
    NULL,
    '2022-10-14 11:28:00.926'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Lectus magna fringilla urna porttitor rhoncus dolo',
    'Blandit volutpat maecenas volutpat blandit. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Aliquet enim tortor at auctor urna nunc id cursus metus. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Enim ut tellus elementum sagittis vitae et leo. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Elementum integer enim neque volutpat ac tincidunt vitae. Id leo in vitae turpis massa sed elementum. Volutpat sed cras ornare arcu dui vivamus arcu felis. Suspendisse in est ante in. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Elit eget gravida cum sociis natoque. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Purus faucibus ornare suspendisse sed. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Ac turpis egestas integer eget aliquet.
Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Quis vel eros donec ac odio tempor orci. Augue eget arcu dictum varius duis at consectetur lorem donec. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Duis at tellus at urna condimentum mattis pellentesque id nibh. Sed nisi lacus sed viverra tellus. Tortor aliquam nulla facilisi cras fermentum odio eu. Vulputate mi sit amet mauris commodo quis imperdiet massa. Vulputate enim nulla aliquet porttitor lacus luctus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Venenatis tellus in metus vulputate eu. Neque sodales ut etiam sit amet. Id interdum velit laoreet id donec ultrices tincidunt arcu. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Viverra vitae congue eu consequat ac. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Volutpat diam ut venenatis tellus in metus vulputate eu. Nibh tellus molestie nunc non.
Posuere ac ut consequat semper viverra. Viverra vitae congue eu consequat. Enim nunc faucibus a pellentesque. Urna cursus eget nunc scelerisque. Eu augue ut lectus arcu bibendum at varius vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Sed enim ut sem viverra. Sed enim ut sem viverra aliquet eget sit amet. Molestie nunc non blandit massa enim nec. Et molestie ac feugiat sed lectus. Lacinia quis vel eros donec ac odio tempor orci. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Orci sagittis eu volutpat odio facilisis. Est ullamcorper eget nulla facilisi etiam. Nibh sit amet commodo nulla facilisi nullam. Egestas diam in arcu cursus euismod quis viverra. Luctus accumsan tortor posuere ac ut consequat semper viverra. Tristique risus nec feugiat in fermentum posuere. Facilisi cras fermentum odio eu. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo.
',
    NULL,
    '2023-10-22 19:20:38.449'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'flareon',
    'Pokemon  fire',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png',
    '2022-03-22 12:07:11.338'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Think Literally',
    'The more there is the less you see. What is it?




What time is it . Darkness',
    NULL,
    '2021-01-05 16:31:36.739'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'parasect',
    'Pokemon  bug grass',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png',
    '2022-12-27 02:01:59.306'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    '1364849348938494893',
    'When cant a bike stand up?




When it it tired.',
    'https://picsum.photos/570/436',
    '2020-09-21 21:48:21.332'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'In which film did paul newman and robert redford hold hands and jump into a river




Butch Cassidy And The Sundance Kid',
    'https://picsum.photos/174/382',
    '2020-08-13 09:02:03.551'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'poliwrath',
    'Pokemon  water fighting',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png',
    '2021-01-25 18:41:03.962'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Edwin Louis Cole',
    'Reasonable men adapt to the world around them unreasonable men make the world adapt to them. The world is changed by unreasonable men.',
    NULL,
    '2021-08-31 21:01:13.784'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris does not do drugs. In order to get a buzz he climbs radio station transmition towers during thunderstorms and drinks Redbull & Captain Morgan Rum from a pair of 55 gallon steel drums.',
    NULL,
    '2022-08-26 14:47:39.759'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What is the national flower of Mexico




Dahlia',
    NULL,
    '2023-01-09 12:26:13.121'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris can sell pornography to a blind man.',
    NULL,
    '2023-10-19 03:27:15.739'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'weezing',
    'Pokemon  poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png',
    '2022-02-25 14:39:52.698'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dolor sit amet, consectetur adipiscing elit, sed d',
    'Ac auctor augue mauris augue neque gravida in fermentum et. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Molestie at elementum eu facilisis sed odio morbi quis. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Cursus mattis molestie a iaculis. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Ultrices neque ornare aenean euismod elementum. Eu facilisis sed odio morbi. Arcu dui vivamus arcu felis. Aliquam etiam erat velit scelerisque in dictum. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Pellentesque nec nam aliquam sem. Amet volutpat consequat mauris nunc congue. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean sed adipiscing diam donec adipiscing tristique. Tellus pellentesque eu tincidunt tortor aliquam. Sem nulla pharetra diam sit amet nisl suscipit.
Et pharetra pharetra massa massa ultricies mi quis hendrerit. Non odio euismod lacinia at quis risus sed vulputate. Vulputate sapien nec sagittis aliquam. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Tristique et egestas quis ipsum. Dui ut ornare lectus sit amet. Ac feugiat sed lectus vestibulum mattis. Enim tortor at auctor urna nunc. Feugiat sed lectus vestibulum mattis ullamcorper. Eget mauris pharetra et ultrices neque. Euismod elementum nisi quis eleifend quam. Volutpat odio facilisis mauris sit amet massa. Ultricies lacus sed turpis tincidunt id aliquet risus. Egestas diam in arcu cursus euismod quis.
Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Sit amet nulla facilisi morbi tempus. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Sodales neque sodales ut etiam sit amet nisl purus. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Nisi lacus sed viverra tellus in hac habitasse. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Tincidunt eget nullam non nisi. Cursus risus at ultrices mi. Volutpat est velit egestas dui id ornare. Sagittis nisl rhoncus mattis rhoncus. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Fermentum leo vel orci porta non pulvinar neque. Quisque sagittis purus sit amet volutpat. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Porttitor massa id neque aliquam vestibulum morbi blandit. At quis risus sed vulputate odio. Nisi vitae suscipit tellus mauris a diam maecenas sed enim.
',
    'https://picsum.photos/272/308',
    '2021-10-22 03:45:11.905'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Breaking And Falling',
    'One Breakes and Never Falls and one Falls but never breaks, what are they?




Night and Day',
    NULL,
    '2022-03-22 19:10:22.325'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Did you hear about the whale that swallowed a clown? It felt funny after.',
    NULL,
    '2021-07-12 19:03:44.152'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Cras semper auctor neque vitae tempus quam pellent',
    'Ut eu sem integer vitae justo eget magna. Praesent tristique magna sit amet purus. Quis auctor elit sed vulputate mi. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Aenean euismod elementum nisi quis eleifend quam. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Nec nam aliquam sem et. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Tellus in metus vulputate eu.
Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Sagittis id consectetur purus ut faucibus pulvinar elementum. Accumsan tortor posuere ac ut. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Purus in massa tempor nec feugiat nisl. Felis eget nunc lobortis mattis. Amet massa vitae tortor condimentum lacinia quis vel. Sed cras ornare arcu dui vivamus arcu. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Integer vitae justo eget magna fermentum iaculis eu. Lorem mollis aliquam ut porttitor. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Vulputate dignissim suspendisse in est ante. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Nulla facilisi nullam vehicula ipsum a arcu cursus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum.
',
    NULL,
    '2023-06-18 10:59:04.129'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'scyther',
    'Pokemon  bug flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png',
    '2020-02-04 03:37:38.023'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Have a wild weekend in Vegas',
    NULL,
    '2022-08-27 16:20:00.138'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What is tripsophillia




Arousal From Massage',
    NULL,
    '2021-10-18 11:56:39.394'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'To what group of elements do cerium, praesiodymium and promethium belong?




Rare Earth Metals',
    'https://picsum.photos/552/217',
    '2023-08-07 17:56:58.914'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'TO OPEN THE DOOR',
    'To open the door to be let in. You need this good breathing apparatus.




Respirator',
    NULL,
    '2023-06-13 18:30:08.103'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris once pissed on an electric fence. This took down the power grid in Texas, Oklahoma, Arizona and parts of southern Utah.',
    NULL,
    '2022-07-18 06:40:17.103'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit Shakespeare’s Globe Theatre',
    NULL,
    '2023-10-25 23:50:49.804'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'geodude',
    'Pokemon  rock ground',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png',
    '2020-06-20 13:50:00.596'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Stephen Hunter',
    'The prospects for a coherent, hilarious and consistent American comedy seem to lessen every year, as the poor waterlogged, gassy corpse called ''Evan Almighty'' proved when it floated ashore recently. So there''s a temptation to think too highly of Robin Williams''s uneven but occasionally funny ''License to Wed.''',
    NULL,
    '2021-06-19 01:18:20.598'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Drive a lamborgini',
    'https://picsum.photos/515/459',
    '2022-12-03 12:30:35.461'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Mauris commodo quis imperdiet massa tincidunt nunc',
    'Nibh sit amet commodo nulla. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Gravida neque convallis a cras. Id nibh tortor id aliquet lectus proin nibh. At tempor commodo ullamcorper a lacus vestibulum sed. Purus sit amet luctus venenatis lectus magna fringilla. Neque convallis a cras semper auctor. Auctor urna nunc id cursus metus. Purus in massa tempor nec feugiat nisl. Eget dolor morbi non arcu risus quis varius quam quisque. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Dui vivamus arcu felis bibendum ut tristique.',
    'https://picsum.photos/304/280',
    '2021-03-13 14:49:24.712'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Lucille Ball',
    'In life, all good things come hard, but wisdom is the hardest to come by.',
    NULL,
    '2021-08-13 23:36:32.559'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'David''s Father',
    'David''s father has three sons : Snap, Krackel, and _____ ?




David. (remember it''s Davids father)',
    'https://picsum.photos/439/223',
    '2020-09-08 13:18:59.525'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Semper auctor neque vitae tempus quam pellentesque',
    'Consectetur a erat nam at lectus. Amet justo donec enim diam vulputate ut pharetra. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Porttitor rhoncus dolor purus non enim. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Augue ut lectus arcu bibendum. Lectus proin nibh nisl condimentum id.
Eget sit amet tellus cras adipiscing enim eu turpis. Amet facilisis magna etiam tempor. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Purus viverra accumsan in nisl nisi. Vitae elementum curabitur vitae nunc sed velit. Sed lectus vestibulum mattis ullamcorper velit. Consequat interdum varius sit amet mattis. Amet justo donec enim diam. Sed vulputate odio ut enim blandit volutpat maecenas. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Habitant morbi tristique senectus et netus et malesuada. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Congue mauris rhoncus aenean vel elit scelerisque. Id neque aliquam vestibulum morbi blandit cursus. Nunc sed augue lacus viverra vitae congue eu consequat ac. Leo vel orci porta non pulvinar neque. Consequat interdum varius sit amet mattis.
Sollicitudin nibh sit amet commodo. Purus sit amet luctus venenatis lectus. Dolor sit amet consectetur adipiscing elit ut aliquam purus. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Aliquet lectus proin nibh nisl condimentum. Laoreet non curabitur gravida arcu. Consectetur libero id faucibus nisl tincidunt eget nullam. Pretium viverra suspendisse potenti nullam ac tortor vitae. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Sed enim ut sem viverra aliquet. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Odio euismod lacinia at quis risus sed. Amet justo donec enim diam vulputate. Montes nascetur ridiculus mus mauris vitae ultricies leo integer.
Ut eu sem integer vitae justo eget magna. Praesent tristique magna sit amet purus. Quis auctor elit sed vulputate mi. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Aenean euismod elementum nisi quis eleifend quam. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Nec nam aliquam sem et. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Tellus in metus vulputate eu.
',
    NULL,
    '2022-12-25 19:20:40.185'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Black Car',
    'there is a black car with black windows weels and rims under a steet lamp but the street lamp is broken how can you see the car ?




it is day light ;>',
    'https://picsum.photos/674/637',
    '2020-12-30 19:58:15.063'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Oak trees can live 200 or more years',
    NULL,
    '2022-08-12 16:35:22.935'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Montreal was named after a local mountain "Mont Royal."',
    NULL,
    '2021-09-13 07:20:02.735'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    '___________ has 150 recognized ecosystems.




Hawaii',
    NULL,
    '2022-05-29 11:54:36.324'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The favorite honeymoon place is Hawaii',
    NULL,
    '2022-02-12 13:21:13.561'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris can sleep with eyes OPEN.',
    NULL,
    '2023-05-07 09:21:54.963'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Adult earwigs can float in water for up to 24 hours',
    NULL,
    '2021-06-25 00:57:38.958'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Up? Down?',
    'What goes up but never comes down?




Your age',
    NULL,
    '2022-07-24 09:03:05.160'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Jay Weatherill',
    'You''ll be much more successful if you follow your dreams and follow your passions.',
    NULL,
    '2021-08-31 01:11:56.096'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Do arteries carry blood towards or away from the heart




Away',
    'https://picsum.photos/428/648',
    '2022-11-05 08:26:44.225'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'vaporeon',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png',
    '2022-10-25 00:23:02.374'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'In 1962, the first Wal-Mart opened up in Rogers, Arkansas',
    NULL,
    '2021-09-29 09:49:31.288'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Maine is the only state whose name is just one syllable',
    'https://picsum.photos/188/552',
    '2022-04-21 17:30:13.421'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Imagine if you walked into a bar and there was a long line of people waiting to take a swing at you. That’s the punch line.',
    'https://picsum.photos/386/605',
    '2022-01-30 11:04:57.310'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Joel Chandler Harris wrote which series of stories




Uncle Remus',
    NULL,
    '2021-11-29 22:49:02.243'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris wants all South Carolina beach goers to feel safe because he will personally be extracting all the teeth from all area sharks this 4th of July weekend.',
    NULL,
    '2023-03-23 14:01:55.155'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Tincidunt vitae semper quis lectus. Consectetur ad',
    'Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Lacinia at quis risus sed. Velit egestas dui id ornare arcu odio ut sem nulla. Lacus vestibulum sed arcu non odio euismod lacinia. Imperdiet nulla malesuada pellentesque elit. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt. Adipiscing bibendum est ultricies integer quis auctor elit.
Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Elit eget gravida cum sociis natoque penatibus et. Aliquet nibh praesent tristique magna sit amet purus gravida. Sodales ut eu sem integer vitae. Lectus arcu bibendum at varius vel. Eget mi proin sed libero. Turpis egestas sed tempus urna et pharetra. Ut tellus elementum sagittis vitae et leo. Odio ut enim blandit volutpat. Massa tincidunt dui ut ornare lectus sit amet est placerat. Cursus mattis molestie a iaculis. Arcu dictum varius duis at consectetur lorem donec. In massa tempor nec feugiat nisl pretium.
',
    'https://picsum.photos/302/212',
    '2021-08-23 01:18:01.550'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'If a child refuses to sleep during nap time, are they guilty of resisting a rest?',
    NULL,
    '2023-08-28 16:25:44.303'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'moltres',
    'Pokemon  fire flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png',
    '2020-08-14 13:33:50.616'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Get my body painted',
    NULL,
    '2020-06-10 01:24:48.826'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Which of these is not one of the many royal titles held by Prince Charles?




Duke Of Edinburgh',
    NULL,
    '2022-09-22 07:23:54.348'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Number of slices sacrificed to film Ringo''s Pizza Hut commercial




12',
    NULL,
    '2022-05-01 09:29:55.099'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris once choked a wildcat to death with his sphincter muscle.',
    'https://picsum.photos/134/398',
    '2020-09-17 20:07:13.950'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Judith Light',
    'I wish we lived in a society that made it safe and provided the courage for everyone to come out.',
    NULL,
    '2022-11-15 06:48:07.653'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'This Riddle Will Amaze You!',
    'What has jerry curlz, is overweight, has thunder thighs and likes to rub chicken patties all over his salty nips?




NATHANIEL LITTLES',
    'https://picsum.photos/480/278',
    '2022-10-14 19:46:51.587'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Who was the first leader of the canadian federal ndp




Tommy Douglas',
    'https://picsum.photos/440/349',
    '2020-07-03 04:53:14.380'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Learn to surf',
    NULL,
    '2020-03-11 16:24:35.534'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'If you see a crime at an Apple store, are you an iWitness?',
    NULL,
    '2022-03-25 03:06:16.321'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'An adult porcupine has approximately 30,000 quills on its body, which are replaced every year',
    NULL,
    '2020-10-26 08:40:17.480'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'The pie scene in american pie was originally a dare made to Chuck Norris, except the pie was actually a volcano crater.',
    NULL,
    '2023-07-20 10:01:03.321'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nisl pretium fusce id velit ut tortor pretium vive',
    'Consectetur a erat nam at lectus. Amet justo donec enim diam vulputate ut pharetra. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Porttitor rhoncus dolor purus non enim. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Augue ut lectus arcu bibendum. Lectus proin nibh nisl condimentum id.
Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Consequat id porta nibh venenatis cras sed felis eget velit. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Et tortor consequat id porta nibh. Ut etiam sit amet nisl purus. Leo vel fringilla est ullamcorper. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Vel facilisis volutpat est velit egestas dui id. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Nibh tellus molestie nunc non blandit. Nisi lacus sed viverra tellus in hac habitasse platea dictumst.
Ac auctor augue mauris augue neque gravida in fermentum et. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Molestie at elementum eu facilisis sed odio morbi quis. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Cursus mattis molestie a iaculis. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Ultrices neque ornare aenean euismod elementum. Eu facilisis sed odio morbi. Arcu dui vivamus arcu felis. Aliquam etiam erat velit scelerisque in dictum. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Pellentesque nec nam aliquam sem. Amet volutpat consequat mauris nunc congue. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean sed adipiscing diam donec adipiscing tristique. Tellus pellentesque eu tincidunt tortor aliquam. Sem nulla pharetra diam sit amet nisl suscipit.
',
    'https://picsum.photos/285/460',
    '2022-05-30 13:11:18.405'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dead Man Walking',
    'One day a man just came home in the morning from the bar last night and he turns on all the lights in his house and reads the newspaper. The newspaper rads; "Last night a boat has crashed and killed hundreds of people." This shocked the man and he pulls out a gun and shoots himself. Why does the man shoot himself?




Because he lives in a lighthouse and he just now turns on all the lights which means he didn''t have them on last night at the bar.',
    NULL,
    '2021-12-27 11:57:37.909'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Infants spend more time dreaming than adults do',
    'https://picsum.photos/189/600',
    '2020-10-22 03:17:57.301'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Attend a Beijing opera',
    'https://picsum.photos/251/308',
    '2022-06-06 00:50:43.977'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'paras',
    'Pokemon  bug grass',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png',
    '2020-02-24 18:46:26.630'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Blandit volutpat maecenas volutpat blandit. Nulla ',
    'A iaculis at erat pellentesque adipiscing commodo elit. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Mattis nunc sed blandit libero. Eu lobortis elementum nibh tellus molestie nunc non blandit. Eget duis at tellus at urna condimentum. Sagittis aliquam malesuada bibendum arcu vitae elementum. Felis imperdiet proin fermentum leo vel orci. Sed sed risus pretium quam vulputate. Sed risus pretium quam vulputate dignissim suspendisse in. Fames ac turpis egestas maecenas pharetra convallis posuere. Lobortis scelerisque fermentum dui faucibus in ornare quam. Aenean pharetra magna ac placerat vestibulum lectus mauris. Aliquet sagittis id consectetur purus. Netus et malesuada fames ac. Habitant morbi tristique senectus et. Habitasse platea dictumst vestibulum rhoncus. Egestas sed sed risus pretium quam vulputate. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus.
Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Lacinia at quis risus sed. Velit egestas dui id ornare arcu odio ut sem nulla. Lacus vestibulum sed arcu non odio euismod lacinia. Imperdiet nulla malesuada pellentesque elit. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt. Adipiscing bibendum est ultricies integer quis auctor elit.
Sed sed risus pretium quam vulputate dignissim suspendisse. Id leo in vitae turpis massa. Eget mauris pharetra et ultrices. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Nisl condimentum id venenatis a. Dui id ornare arcu odio. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Viverra maecenas accumsan lacus vel facilisis volutpat est. Platea dictumst vestibulum rhoncus est pellentesque elit. Hac habitasse platea dictumst quisque.
Lorem sed risus ultricies tristique nulla aliquet enim. Curabitur vitae nunc sed velit. Vel elit scelerisque mauris pellentesque pulvinar. Viverra nibh cras pulvinar mattis nunc sed blandit. Pellentesque pulvinar pellentesque habitant morbi. Elementum sagittis vitae et leo. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Senectus et netus et malesuada. Varius vel pharetra vel turpis nunc. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Quam elementum pulvinar etiam non quam.
',
    'https://picsum.photos/444/302',
    '2020-10-04 02:35:27.707'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'In Computing And Hi_Tech Gadetry What Doe The Initials WAP Stand For




Wireless Access Point',
    'https://picsum.photos/262/356',
    '2023-04-13 10:09:36.376'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Enim eu turpis egestas pretium aenean. Ipsum a arc',
    'Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Sagittis id consectetur purus ut faucibus pulvinar elementum. Accumsan tortor posuere ac ut. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Purus in massa tempor nec feugiat nisl. Felis eget nunc lobortis mattis. Amet massa vitae tortor condimentum lacinia quis vel. Sed cras ornare arcu dui vivamus arcu. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Integer vitae justo eget magna fermentum iaculis eu. Lorem mollis aliquam ut porttitor. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Vulputate dignissim suspendisse in est ante. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Nulla facilisi nullam vehicula ipsum a arcu cursus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum.
',
    NULL,
    '2023-04-13 03:15:42.826'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'fearow',
    'Pokemon  normal flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
    '2023-06-04 20:27:59.362'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The smallest stamp in the world was issued in 1863 by the Columbian state of Bolivar and measured 9.5 x 8mm',
    'https://picsum.photos/225/531',
    '2021-08-18 14:19:59.025'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'chansey',
    'Pokemon  normal',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png',
    '2020-08-03 10:56:41.296'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Francis Bacon',
    'I will never be an old man. To me, old age is always 15 years older than I am.',
    NULL,
    '2021-06-12 03:23:37.748'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Over 20 million BluBlocker sunglasses have been sold since its debut in 1986. They now come in over 100 different styles',
    'https://picsum.photos/549/467',
    '2020-04-23 07:52:41.393'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris once shot down a Russian MIG in an aerial dogfight. Chuck was flying in a hot air ballon.',
    NULL,
    '2022-09-05 18:22:29.071'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    '1955',
    'A man was born in 1955 today is his 18th birthday, how is that possible?




1955 was not the year he was born in it is the hospital room number he was born in.',
    'https://picsum.photos/237/691',
    '2020-03-25 19:08:20.136'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Lorem sed risus ultricies tristique nulla aliquet ',
    'Et pharetra pharetra massa massa ultricies mi quis hendrerit. Non odio euismod lacinia at quis risus sed vulputate. Vulputate sapien nec sagittis aliquam. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Tristique et egestas quis ipsum. Dui ut ornare lectus sit amet. Ac feugiat sed lectus vestibulum mattis. Enim tortor at auctor urna nunc. Feugiat sed lectus vestibulum mattis ullamcorper. Eget mauris pharetra et ultrices neque. Euismod elementum nisi quis eleifend quam. Volutpat odio facilisis mauris sit amet massa. Ultricies lacus sed turpis tincidunt id aliquet risus. Egestas diam in arcu cursus euismod quis.
A iaculis at erat pellentesque adipiscing commodo elit. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Mattis nunc sed blandit libero. Eu lobortis elementum nibh tellus molestie nunc non blandit. Eget duis at tellus at urna condimentum. Sagittis aliquam malesuada bibendum arcu vitae elementum. Felis imperdiet proin fermentum leo vel orci. Sed sed risus pretium quam vulputate. Sed risus pretium quam vulputate dignissim suspendisse in. Fames ac turpis egestas maecenas pharetra convallis posuere. Lobortis scelerisque fermentum dui faucibus in ornare quam. Aenean pharetra magna ac placerat vestibulum lectus mauris. Aliquet sagittis id consectetur purus. Netus et malesuada fames ac. Habitant morbi tristique senectus et. Habitasse platea dictumst vestibulum rhoncus. Egestas sed sed risus pretium quam vulputate. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus.
Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Lacinia at quis risus sed. Velit egestas dui id ornare arcu odio ut sem nulla. Lacus vestibulum sed arcu non odio euismod lacinia. Imperdiet nulla malesuada pellentesque elit. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt. Adipiscing bibendum est ultricies integer quis auctor elit.
',
    NULL,
    '2023-05-14 15:49:34.039'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Your Exact Weight',
    'A boy was at a carnival and went to a booth where a man said to the boy, "If I write your exact weight on this piece of paper then you have to give me $50, but if I cannot, I will pay you $50." The boy looked around and saw no scale so he agrees, thinking no matter what the carny writes he''ll just say he weighs more or less. In the end the boy ended up paying the man $50. How did the man win the bet?




The man did exactly as he said he would and wrote "your exact weight" on the paper.',
    NULL,
    '2023-05-01 02:13:09.218'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'What Am I???',
    'What gets wet, as it drys?




A Towel',
    NULL,
    '2022-09-05 22:04:44.355'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Attend the Full Moon Party in Thailand',
    NULL,
    '2020-03-03 06:22:51.618'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'What Common Phrase Is This??',
    'botimettle




time in a bottle',
    'https://picsum.photos/277/485',
    '2023-05-18 16:13:18.095'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Alan Watts',
    'The style of God venerated in the church, mosque, or synagogue seems completely different from the style of the natural universe.',
    'https://picsum.photos/137/383',
    '2021-11-13 16:40:28.624'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Serving ice cream on cherry pie was once illegal in Kansas',
    NULL,
    '2021-01-29 11:25:08.740'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Adele',
    'I just want to make music, I don''t want people to talk about me. All I''ve ever wanted to do was sing. I don''t want to be a celebrity. I don''t want to be in people''s faces, you know, constantly on covers of magazine that I haven''t even known I''m on.',
    NULL,
    '2023-07-19 22:32:51.243'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'In one gram of soil, about ten million bacteria live in it',
    'https://picsum.photos/239/381',
    '2023-04-19 12:47:27.178'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Russophobia is the fear of




Russians',
    NULL,
    '2023-05-01 01:22:30.912'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Babies cry when they are born because they know they are in a world with Chuck Norris.',
    'https://picsum.photos/358/279',
    '2023-11-12 19:09:51.751'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The dot that appears over the letter "i" is called a tittle',
    NULL,
    '2021-08-03 11:31:43.890'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Kevin Rudd',
    'These are important reforms. Infrastructure, education, health, hospitals, closing the gap with indigenous Australians. Also the Apology to the first Australians. As Prime Minister of the country I am proud of each and every one of these achievements.',
    'https://picsum.photos/171/540',
    '2021-03-19 15:27:49.846'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'In a year, Americans eat approximately 20 billion pickles',
    'https://picsum.photos/105/180',
    '2020-09-24 21:24:29.486'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'My wife said, “You weren’t even listening, were you?” And I thought, “that’s a pretty weird way to start a conversation.”',
    NULL,
    '2022-03-26 18:13:22.712'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'golem',
    'Pokemon  rock ground',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png',
    '2020-05-14 05:54:18.594'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'The Bearded Lady at Ringling Bros. and Barnum & Bailey Circus said that she got her masculine features by standing too close to Chuck Norris. Scientists believe that standing next to Ryan Seacrest will reverse the affect.',
    NULL,
    '2020-01-20 03:38:00.808'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Martin Yan',
    'I think being famous is more of a hindrance, a constraint, than just letting yourself be free.',
    'https://picsum.photos/132/161',
    '2021-01-06 04:34:58.059'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Learn how to fence',
    NULL,
    '2023-05-01 11:09:23.346'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Stay in a capsule hotel',
    'https://picsum.photos/351/230',
    '2023-03-31 15:46:56.058'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'An artificial Christmas tree last up to six years in a home',
    NULL,
    '2022-04-21 12:06:53.233'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Marilyn Monroe had six toes',
    NULL,
    '2020-12-09 21:04:56.495'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit Cartagena',
    NULL,
    '2023-11-01 05:56:33.428'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What martial art''s name means ''leisure time''




Kung Fu',
    NULL,
    '2022-04-15 03:58:55.224'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Broken Usefulness',
    'What is more useful when it is broken?




It comes from chickens  An egg.',
    NULL,
    '2019-12-30 07:13:08.174'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'In 1963, Mister Rogers was ordained as a Presbyterian minister',
    NULL,
    '2021-04-10 03:27:40.719'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'venomoth',
    'Pokemon  bug poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png',
    '2022-07-18 08:56:57.117'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Microsoft made $16,005 in revenue in its first year of operation',
    NULL,
    '2021-06-16 15:49:24.028'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Semper auctor neque vitae tempus quam pellentesque',
    'Viverra aliquet eget sit amet tellus. Adipiscing at in tellus integer feugiat scelerisque. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Mauris ultrices eros in cursus. Dolor purus non enim praesent. Quam viverra orci sagittis eu volutpat. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Lobortis feugiat vivamus at augue. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Sed sed risus pretium quam. Integer malesuada nunc vel risus. Egestas congue quisque egestas diam in arcu. Elementum nibh tellus molestie nunc non blandit massa enim nec.
',
    NULL,
    '2022-01-28 00:39:23.350'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Id eu nisl nunc mi ipsum faucibus vitae aliquet ne',
    'Ut eu sem integer vitae justo eget magna. Praesent tristique magna sit amet purus. Quis auctor elit sed vulputate mi. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Aenean euismod elementum nisi quis eleifend quam. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Nec nam aliquam sem et. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Tellus in metus vulputate eu.
Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Quis vel eros donec ac odio tempor orci. Augue eget arcu dictum varius duis at consectetur lorem donec. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Duis at tellus at urna condimentum mattis pellentesque id nibh. Sed nisi lacus sed viverra tellus. Tortor aliquam nulla facilisi cras fermentum odio eu. Vulputate mi sit amet mauris commodo quis imperdiet massa. Vulputate enim nulla aliquet porttitor lacus luctus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Venenatis tellus in metus vulputate eu. Neque sodales ut etiam sit amet. Id interdum velit laoreet id donec ultrices tincidunt arcu. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Viverra vitae congue eu consequat ac. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Volutpat diam ut venenatis tellus in metus vulputate eu. Nibh tellus molestie nunc non.
',
    NULL,
    '2021-04-13 17:26:09.531'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Alan Stuart Konigsberg famous as who




Woody Allen',
    NULL,
    '2020-09-03 00:48:15.015'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'dratini',
    'Pokemon  dragon',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png',
    '2023-10-20 10:39:29.730'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit the Wailing Wall',
    NULL,
    '2019-11-20 19:37:43.230'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'lapras',
    'Pokemon  water ice',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png',
    '2022-09-30 03:29:18.998'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Id eu nisl nunc mi ipsum faucibus vitae aliquet ne',
    'Purus in mollis nunc sed id semper. Suspendisse faucibus interdum posuere lorem ipsum. Dictum non consectetur a erat. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. In nibh mauris cursus mattis molestie a iaculis at erat. Velit aliquet sagittis id consectetur purus ut faucibus. Lorem dolor sed viverra ipsum. Facilisis gravida neque convallis a cras. Adipiscing vitae proin sagittis nisl rhoncus. Odio eu feugiat pretium nibh ipsum. Sit amet nulla facilisi morbi. Viverra mauris in aliquam sem. Vitae justo eget magna fermentum. Ultrices dui sapien eget mi proin sed libero. Convallis a cras semper auctor neque vitae tempus quam. Netus et malesuada fames ac turpis egestas. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Suspendisse potenti nullam ac tortor vitae.
Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Massa enim nec dui nunc. Netus et malesuada fames ac turpis egestas. Gravida rutrum quisque non tellus orci. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Amet aliquam id diam maecenas ultricies mi eget mauris. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Ultricies tristique nulla aliquet enim. Urna et pharetra pharetra massa. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit.
',
    NULL,
    '2023-10-16 00:33:03.642'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Jessica Savitch',
    'In interviews I gave early on in my career, I was quoted as saying it was possible to have it all: a dynamic job, marriage, and children. In some respects, I was a social adolescent.',
    NULL,
    '2019-11-24 01:36:25.276'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'View the Matterhorn from Zermatt',
    'https://picsum.photos/659/520',
    '2021-09-21 01:19:53.683'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Creatine Monohydrate, the body building supplement is manufactured from Chuck Norris'' dead skins extracts.',
    NULL,
    '2022-07-25 01:01:14.632'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ekans',
    'Pokemon  poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png',
    '2020-11-02 19:35:07.373'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'seaking',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png',
    '2020-12-12 02:12:08.586'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'A group of kangaroos is called a mob',
    NULL,
    '2023-11-10 13:02:50.103'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Johnny Depp',
    'France, and the whole of Europe have a great culture and an amazing history. Most important thing though is that people there know how to live! In America they''ve forgotten all about it. I''m afraid that the American culture is a disaster.',
    NULL,
    '2023-05-11 13:35:19.350'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'An Unhomey Situation',
    'You are stuck in the middle room in a three room structure.The rooms are in a row,and both of the rooms on ends only have a way out.In the room to your left it houses killer assassins.And on the right it houses solar-powered UV lasers that kill on sight.How do you get out?




Go through the right room at night.',
    NULL,
    '2022-04-21 11:21:54.266'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What was Hoyt Wilhelm''s best pitch




Knuckleball',
    NULL,
    '2021-11-08 05:37:43.989'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Persephone was the Greek goddess of ______?




Spring',
    NULL,
    '2023-02-07 23:50:15.609'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Harry S. Truman',
    'My father was not a failure. After all, he was the father of a president of the United States.',
    'https://picsum.photos/554/188',
    '2021-05-24 04:07:28.550'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris never sleeps',
    'https://picsum.photos/499/537',
    '2021-12-06 23:45:21.549'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'clefairy',
    'Pokemon  fairy',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
    '2020-05-23 10:36:05.563'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What comic book hero''s powers are the result of a botched gamma bomb experiment?




The Incredible Hulk',
    NULL,
    '2020-11-24 12:08:07.641'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'How do you know when Chuck Norris has been in your house? You are now homeless. And, more often than not, dead.',
    'https://picsum.photos/192/609',
    '2022-01-31 12:59:56.132'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'golduck',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png',
    '2023-10-01 04:10:21.716'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Participate in the Darwin Beer Regatta or the Henley on Todd Regatta',
    'https://picsum.photos/270/700',
    '2019-12-08 15:18:49.799'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Attend a champagne breakfast',
    NULL,
    '2020-10-15 11:25:34.064'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What common allergens are the male sex cells of plants




Pollen',
    'https://picsum.photos/426/445',
    '2020-09-05 19:07:58.171'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris won a poker tournament with pokemon cards.',
    NULL,
    '2020-03-30 08:59:46.554'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Just Because( Where Are You?)',
    'just because the sun is out dosen''t mean it''s day and just because the moon is out dosen''t mean it''s night. just because the ground has a whole in it means you will fall through.the fish are warmer than you but, colder than the you. where are you?




alaska',
    NULL,
    '2022-11-27 21:30:06.731'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Eric West',
    'Janet Jackson is an icon, I''ve been honored to meet her a few times, working with her would be amazing.',
    NULL,
    '2023-07-04 07:05:52.616'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'dugtrio',
    'Pokemon  ground',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png',
    '2020-08-03 04:38:33.009'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why can''t a leopard hide? He''s always spotted.',
    'https://picsum.photos/202/365',
    '2020-12-19 08:22:38.671'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nibh sit amet commodo nulla. Placerat vestibulum l',
    'Risus sed vulputate odio ut enim blandit volutpat. Faucibus turpis in eu mi bibendum neque. Morbi tristique senectus et netus et malesuada fames ac. Lacinia quis vel eros donec. Est velit egestas dui id ornare arcu. Commodo viverra maecenas accumsan lacus. Turpis in eu mi bibendum neque egestas congue. Fermentum posuere urna nec tincidunt. Sit amet nisl purus in mollis. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Justo eget magna fermentum iaculis eu non diam. Proin nibh nisl condimentum id venenatis. Viverra maecenas accumsan lacus vel facilisis volutpat est. Rhoncus dolor purus non enim praesent elementum facilisis leo. Urna id volutpat lacus laoreet non curabitur gravida. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fermentum leo vel orci porta.
Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Arcu felis bibendum ut tristique et egestas. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Quisque sagittis purus sit amet volutpat consequat mauris. Mattis vulputate enim nulla aliquet porttitor. Sit amet facilisis magna etiam tempor orci eu lobortis. Erat nam at lectus urna duis convallis convallis. Sit amet est placerat in. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Amet justo donec enim diam vulputate ut. Adipiscing vitae proin sagittis nisl rhoncus mattis. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Felis imperdiet proin fermentum leo vel orci porta. Consequat ac felis donec et odio pellentesque.
Eget sit amet tellus cras adipiscing enim eu. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Purus in massa tempor nec feugiat nisl pretium fusce. Eu feugiat pretium nibh ipsum consequat nisl. Purus in mollis nunc sed. Turpis massa sed elementum tempus egestas sed. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Est lorem ipsum dolor sit amet. Fringilla phasellus faucibus scelerisque eleifend donec. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.
Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Consequat semper viverra nam libero justo laoreet sit amet cursus. Morbi quis commodo odio aenean. Ut sem nulla pharetra diam. Gravida cum sociis natoque penatibus et magnis. Eu sem integer vitae justo. Amet dictum sit amet justo donec enim diam vulputate ut. Eu consequat ac felis donec et. Sed vulputate odio ut enim. Vitae aliquet nec ullamcorper sit amet risus nullam.
',
    NULL,
    '2022-06-12 07:35:29.250'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Scuba dive on the Great Barrier Reef',
    NULL,
    '2020-03-02 21:48:16.998'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What do you call a cow with no legs? Ground beef.',
    'https://picsum.photos/613/125',
    '2020-07-12 07:59:40.844'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Attend a lucha wrestling show',
    NULL,
    '2020-04-18 22:46:59.382'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'A panic-stricken man explained to his doctor, “You have to help me, I think I’m shrinking.” “Now settle down,” the doctor calmly told him. “You''ll just have to learn to be a little patient.”',
    NULL,
    '2022-10-23 07:45:40.805'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I just found out I’m colorblind. The news came out of the purple!',
    NULL,
    '2022-07-28 18:07:50.562'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'rhydon',
    'Pokemon  ground rock',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png',
    '2022-12-03 07:55:21.711'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Sed elementum tempus egestas sed sed risus pretium',
    'Enim eu turpis egestas pretium aenean. Ipsum a arcu cursus vitae. Massa massa ultricies mi quis hendrerit dolor. Rhoncus dolor purus non enim praesent elementum. Tristique magna sit amet purus. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Egestas diam in arcu cursus. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. In mollis nunc sed id semper risus in hendrerit gravida. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Volutpat consequat mauris nunc congue nisi vitae.
Sem viverra aliquet eget sit amet tellus cras. Proin nibh nisl condimentum id venenatis a. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Viverra vitae congue eu consequat ac felis donec et odio. Ultrices vitae auctor eu augue ut. Leo integer malesuada nunc vel risus. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus et malesuada fames ac. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Diam vel quam elementum pulvinar. Faucibus nisl tincidunt eget nullam. Lacus viverra vitae congue eu consequat. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Diam sit amet nisl suscipit. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.
Sollicitudin nibh sit amet commodo. Purus sit amet luctus venenatis lectus. Dolor sit amet consectetur adipiscing elit ut aliquam purus. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Aliquet lectus proin nibh nisl condimentum. Laoreet non curabitur gravida arcu. Consectetur libero id faucibus nisl tincidunt eget nullam. Pretium viverra suspendisse potenti nullam ac tortor vitae. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Sed enim ut sem viverra aliquet. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Odio euismod lacinia at quis risus sed. Amet justo donec enim diam vulputate. Montes nascetur ridiculus mus mauris vitae ultricies leo integer.
Nibh nisl condimentum id venenatis a condimentum vitae sapien. Laoreet sit amet cursus sit. Commodo ullamcorper a lacus vestibulum sed arcu. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Pharetra convallis posuere morbi leo urna. Id volutpat lacus laoreet non curabitur gravida arcu ac. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Lorem mollis aliquam ut porttitor. A arcu cursus vitae congue. Nisl purus in mollis nunc sed id semper. Convallis a cras semper auctor neque. Lectus arcu bibendum at varius. Facilisis sed odio morbi quis commodo odio aenean sed. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Vel orci porta non pulvinar neque laoreet suspendisse. Feugiat nisl pretium fusce id. Adipiscing bibendum est ultricies integer quis auctor.
',
    'https://picsum.photos/367/395',
    '2021-07-15 12:44:14.253'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'The subject of Richard Wagner''s famous composition "Ride of the Valkyries," a Valkyry is a what?




Norse Handmaiden',
    'https://picsum.photos/508/535',
    '2022-04-19 05:47:11.944'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Ear What Cannot Hear',
    'What kind of ear cannot hear? (Hint: No, the answer is not "Mike Tyson''s latest snack".)




An ear of corn',
    NULL,
    '2020-12-08 07:33:13.316'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Sollicitudin nibh sit amet commodo. Purus sit amet',
    'Sem viverra aliquet eget sit amet tellus cras. Proin nibh nisl condimentum id venenatis a. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Viverra vitae congue eu consequat ac felis donec et odio. Ultrices vitae auctor eu augue ut. Leo integer malesuada nunc vel risus. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus et malesuada fames ac. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Diam vel quam elementum pulvinar. Faucibus nisl tincidunt eget nullam. Lacus viverra vitae congue eu consequat. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Diam sit amet nisl suscipit. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.
Leo vel orci porta non pulvinar neque. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Consectetur libero id faucibus nisl tincidunt eget. Morbi tristique senectus et netus. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Sit amet nulla facilisi morbi tempus iaculis urna. Suscipit tellus mauris a diam maecenas. In aliquam sem fringilla ut. Tortor at risus viverra adipiscing. Scelerisque eleifend donec pretium vulputate sapien nec. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Mi tempus imperdiet nulla malesuada pellentesque elit. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Nam at lectus urna duis convallis.
Praesent semper feugiat nibh sed pulvinar proin. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Urna molestie at elementum eu facilisis sed odio morbi quis. Adipiscing commodo elit at imperdiet dui accumsan. Ac felis donec et odio pellentesque diam. Sapien pellentesque habitant morbi tristique senectus et netus et. Interdum velit euismod in pellentesque massa placerat. Id diam maecenas ultricies mi eget mauris pharetra et. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Ultricies tristique nulla aliquet enim tortor. Non curabitur gravida arcu ac. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus.
',
    NULL,
    '2022-07-13 20:20:04.244'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Fruit preserved in sugar




Glace',
    'https://picsum.photos/653/596',
    '2023-11-04 01:18:42.918'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Try sensory deprivation',
    NULL,
    '2020-12-10 22:37:09.971'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    '"Cop: I''m arresting you for downloading the entire Wikipedia." Man: "Wait! I can explain everything!"',
    NULL,
    '2022-07-24 13:02:37.920'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'slowbro',
    'Pokemon  water psychic',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png',
    '2020-05-18 19:54:01.815'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Attend a match at the MCG',
    'https://picsum.photos/395/653',
    '2022-05-02 07:02:39.020'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nisl pretium fusce id velit ut tortor pretium vive',
    'Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Blandit massa enim nec dui nunc. Ultrices vitae auctor eu augue ut. Sagittis purus sit amet volutpat consequat mauris nunc congue. Viverra suspendisse potenti nullam ac tortor vitae purus. Aliquet enim tortor at auctor urna nunc id. Orci sagittis eu volutpat odio facilisis mauris sit amet. Sem integer vitae justo eget magna fermentum iaculis eu. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Nec ullamcorper sit amet risus nullam. Malesuada bibendum arcu vitae elementum. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Pretium quam vulputate dignissim suspendisse. Gravida quis blandit turpis cursus in hac habitasse. Odio tempor orci dapibus ultrices in iaculis nunc sed. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Leo urna molestie at elementum eu facilisis sed odio.
Nibh nisl condimentum id venenatis a condimentum vitae sapien. Laoreet sit amet cursus sit. Commodo ullamcorper a lacus vestibulum sed arcu. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Pharetra convallis posuere morbi leo urna. Id volutpat lacus laoreet non curabitur gravida arcu ac. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Lorem mollis aliquam ut porttitor. A arcu cursus vitae congue. Nisl purus in mollis nunc sed id semper. Convallis a cras semper auctor neque. Lectus arcu bibendum at varius. Facilisis sed odio morbi quis commodo odio aenean sed. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Vel orci porta non pulvinar neque laoreet suspendisse. Feugiat nisl pretium fusce id. Adipiscing bibendum est ultricies integer quis auctor.
Eget sit amet tellus cras adipiscing enim eu. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Purus in massa tempor nec feugiat nisl pretium fusce. Eu feugiat pretium nibh ipsum consequat nisl. Purus in mollis nunc sed. Turpis massa sed elementum tempus egestas sed. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Est lorem ipsum dolor sit amet. Fringilla phasellus faucibus scelerisque eleifend donec. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.
',
    'https://picsum.photos/154/477',
    '2020-01-16 10:56:24.147'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I can always tell when my wife is lying just by looking at her. I can also tell when she’s standing.',
    NULL,
    '2023-04-28 13:10:08.654'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Lectus urna duis convallis convallis tellus id int',
    'Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Quis vel eros donec ac odio tempor orci. Augue eget arcu dictum varius duis at consectetur lorem donec. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Duis at tellus at urna condimentum mattis pellentesque id nibh. Sed nisi lacus sed viverra tellus. Tortor aliquam nulla facilisi cras fermentum odio eu. Vulputate mi sit amet mauris commodo quis imperdiet massa. Vulputate enim nulla aliquet porttitor lacus luctus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Venenatis tellus in metus vulputate eu. Neque sodales ut etiam sit amet. Id interdum velit laoreet id donec ultrices tincidunt arcu. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Viverra vitae congue eu consequat ac. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Volutpat diam ut venenatis tellus in metus vulputate eu. Nibh tellus molestie nunc non.
Vitae auctor eu augue ut lectus arcu bibendum at varius. Massa tincidunt dui ut ornare lectus sit amet est. Donec ac odio tempor orci dapibus ultrices in. Semper quis lectus nulla at volutpat. Est sit amet facilisis magna etiam tempor. Lacus sed viverra tellus in hac habitasse platea. Ultrices neque ornare aenean euismod elementum nisi. Elit scelerisque mauris pellentesque pulvinar pellentesque. Elit sed vulputate mi sit. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Feugiat in ante metus dictum at tempor commodo ullamcorper. Condimentum lacinia quis vel eros donec ac odio tempor.
',
    NULL,
    '2020-04-20 12:02:14.569'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'porygon',
    'Pokemon  normal',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png',
    '2022-07-22 14:50:43.651'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris is even better than the real thing.',
    NULL,
    '2022-05-20 00:31:23.244'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Lol First I Added By Nubby',
    'i haver skin but no bone, i have a core and i am edible when hot and cold




!!Apple!!',
    NULL,
    '2020-01-26 18:11:28.870'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nibh sit amet commodo nulla. Placerat vestibulum l',
    'Enim eu turpis egestas pretium aenean. Ipsum a arcu cursus vitae. Massa massa ultricies mi quis hendrerit dolor. Rhoncus dolor purus non enim praesent elementum. Tristique magna sit amet purus. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Egestas diam in arcu cursus. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. In mollis nunc sed id semper risus in hendrerit gravida. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Volutpat consequat mauris nunc congue nisi vitae.
Commodo elit at imperdiet dui accumsan. Bibendum ut tristique et egestas. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Diam vulputate ut pharetra sit amet aliquam id diam. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Facilisi morbi tempus iaculis urna id. Imperdiet sed euismod nisi porta lorem. Diam maecenas sed enim ut sem viverra aliquet eget. Varius duis at consectetur lorem donec massa. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Massa ultricies mi quis hendrerit. Semper auctor neque vitae tempus quam pellentesque nec nam. Feugiat in ante metus dictum. Gravida neque convallis a cras semper auctor neque.
',
    NULL,
    '2020-06-25 10:55:49.701'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris can swallow his tongue, reel out two feet of toilet paper and wipe his own ass with it.',
    NULL,
    '2021-09-05 18:56:32.279'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Paint Job',
    'amanda bought a brand new car that was freshly painted red. after paying $500.00 on a paint job it rained and she cried. why?




because they used art paint to paint her car instead of automobile paint',
    NULL,
    '2022-12-04 03:22:12.849'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'muk',
    'Pokemon  poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png',
    '2021-08-17 09:54:09.065'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'How do celebrities keep cool? They have many fans.',
    'https://picsum.photos/689/297',
    '2021-06-27 01:43:59.009'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What do you call a dinosaur with an extensive vocabulary? A thesaurus.',
    NULL,
    '2019-11-30 10:24:51.404'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Give a eulogy',
    NULL,
    '2023-02-25 09:25:19.439'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Eget felis eget nunc lobortis mattis aliquam fauci',
    'Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Sagittis id consectetur purus ut faucibus pulvinar elementum. Accumsan tortor posuere ac ut. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Purus in massa tempor nec feugiat nisl. Felis eget nunc lobortis mattis. Amet massa vitae tortor condimentum lacinia quis vel. Sed cras ornare arcu dui vivamus arcu. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Integer vitae justo eget magna fermentum iaculis eu. Lorem mollis aliquam ut porttitor. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Vulputate dignissim suspendisse in est ante. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Nulla facilisi nullam vehicula ipsum a arcu cursus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum.
Vitae auctor eu augue ut lectus arcu bibendum at varius. Massa tincidunt dui ut ornare lectus sit amet est. Donec ac odio tempor orci dapibus ultrices in. Semper quis lectus nulla at volutpat. Est sit amet facilisis magna etiam tempor. Lacus sed viverra tellus in hac habitasse platea. Ultrices neque ornare aenean euismod elementum nisi. Elit scelerisque mauris pellentesque pulvinar pellentesque. Elit sed vulputate mi sit. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Feugiat in ante metus dictum at tempor commodo ullamcorper. Condimentum lacinia quis vel eros donec ac odio tempor.
Risus sed vulputate odio ut enim blandit volutpat. Faucibus turpis in eu mi bibendum neque. Morbi tristique senectus et netus et malesuada fames ac. Lacinia quis vel eros donec. Est velit egestas dui id ornare arcu. Commodo viverra maecenas accumsan lacus. Turpis in eu mi bibendum neque egestas congue. Fermentum posuere urna nec tincidunt. Sit amet nisl purus in mollis. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Justo eget magna fermentum iaculis eu non diam. Proin nibh nisl condimentum id venenatis. Viverra maecenas accumsan lacus vel facilisis volutpat est. Rhoncus dolor purus non enim praesent elementum facilisis leo. Urna id volutpat lacus laoreet non curabitur gravida. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fermentum leo vel orci porta.
Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Consequat semper viverra nam libero justo laoreet sit amet cursus. Morbi quis commodo odio aenean. Ut sem nulla pharetra diam. Gravida cum sociis natoque penatibus et magnis. Eu sem integer vitae justo. Amet dictum sit amet justo donec enim diam vulputate ut. Eu consequat ac felis donec et. Sed vulputate odio ut enim. Vitae aliquet nec ullamcorper sit amet risus nullam.
',
    NULL,
    '2020-07-25 23:22:39.341'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Good Morning',
    'What is the first thing you do every morning?




wake up',
    NULL,
    '2020-06-12 15:35:18.008'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'CHUCK NORRIS once performed a heart transplant BLINDFOLDED',
    NULL,
    '2021-11-08 02:04:55.065'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Attend a Beijing opera',
    NULL,
    '2021-03-05 08:20:10.866'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'doduo',
    'Pokemon  normal flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png',
    '2020-05-17 13:17:57.324'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Saskya Pandita',
    'Even in decline, a virtuous man increases the beauty of his behavior. A burning stick, though turned to the ground, has its flame drawn upwards.',
    NULL,
    '2023-10-03 20:40:50.753'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Teeth',
    'What has teeth And can''t bite?




It is a comb.',
    'https://picsum.photos/449/547',
    '2022-11-04 18:36:49.789'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Taylor Swift',
    'I''m not the girl who always has a boyfriend. I''m the girl who rarely has a boyfriend.',
    NULL,
    '2021-07-30 00:37:08.486'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Mattie Stepanek',
    'Keep all special thoughts and memories for lifetimes to come. Share these keepsakes with others to inspire hope and build from the past, which can bridge to the future.',
    'https://picsum.photos/211/143',
    '2022-04-25 21:24:58.550'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'meowth',
    'Pokemon  normal',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
    '2020-10-18 04:04:31.967'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris once got his dick caught in an unfortunate wood chipper accident. After 24 hours of intensive reconstruction, the wood chipper was brought back into a fully functional machine.',
    NULL,
    '2023-02-25 21:45:05.574'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Practice the kama sutra with a beautiful girl',
    NULL,
    '2022-08-22 03:41:22.390'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from H. Jackson Brown, Jr.',
    'When you are angry or frustrated, what comes out? Whatever it is, it''s a good indication of what you''re made of.',
    NULL,
    '2023-04-16 13:04:19.579'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What was the name of Felix the Cats girlfriend




Phyllis',
    NULL,
    '2021-06-09 05:15:10.547'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Cabin In The Country',
    'A man goes into a cabin deep in the country. All walls within this cabin face south and are made of wood. A bear walks by the window. What color is he?




Since all walls within this cabin face south, the only location on the face of the earth this is possible is the North Pole. So thus the bear is a polar bear and the color would have to be white!',
    'https://picsum.photos/418/526',
    '2022-07-29 13:10:42.923'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What do houses wear? An address.',
    'https://picsum.photos/128/329',
    '2022-04-26 13:50:48.527'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris uses an orang-utan skull as a bong.',
    NULL,
    '2023-07-17 02:03:42.416'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris can make a barbeque.Under water!',
    NULL,
    '2023-01-20 06:11:43.497'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Life Question',
    'what has 4 legs in the begining 2 in the middle and 3 in the end




Baby Adult Then Old man with a cane',
    NULL,
    '2021-12-14 21:20:38.825'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What is the basic unit of currency for Kyrgyzstan ?




Som',
    NULL,
    '2022-01-30 21:59:19.338'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why did the deer go to the dentist? It had buck teeth.',
    NULL,
    '2020-09-02 15:12:12.404'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Edgar Allan Poe',
    'There is something in the unselfish and self-sacrificing love of a brute, which goes directly to the heart of him who has had frequent occasion to test the paltry friendship and gossamer fidelity of mere Man.',
    NULL,
    '2020-07-22 07:41:50.506'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nunc sed velit dignissim sodales ut eu sem integer',
    'Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Arcu felis bibendum ut tristique et egestas. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Quisque sagittis purus sit amet volutpat consequat mauris. Mattis vulputate enim nulla aliquet porttitor. Sit amet facilisis magna etiam tempor orci eu lobortis. Erat nam at lectus urna duis convallis convallis. Sit amet est placerat in. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Amet justo donec enim diam vulputate ut. Adipiscing vitae proin sagittis nisl rhoncus mattis. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Felis imperdiet proin fermentum leo vel orci porta. Consequat ac felis donec et odio pellentesque.
Purus semper eget duis at tellus at urna condimentum. Amet justo donec enim diam vulputate ut pharetra sit. Pretium lectus quam id leo in vitae turpis massa sed. Feugiat nibh sed pulvinar proin gravida. Eget velit aliquet sagittis id. Nisl pretium fusce id velit. Imperdiet proin fermentum leo vel orci porta non pulvinar. Proin gravida hendrerit lectus a. Nibh tortor id aliquet lectus. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Amet est placerat in egestas erat imperdiet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Eu tincidunt tortor aliquam nulla facilisi cras. Tellus at urna condimentum mattis pellentesque. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Eu sem integer vitae justo. Tempor orci eu lobortis elementum nibh tellus molestie nunc non.
',
    NULL,
    '2022-03-05 05:40:25.202'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Pat Riley',
    'There''s always the motivation of wanting to win. Everybody has that. But a champion needs, in his attitude, a motivation above and beyond winning.',
    'https://picsum.photos/296/558',
    '2020-04-10 17:54:06.408'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'dragonite',
    'Pokemon  dragon flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png',
    '2021-11-03 17:22:57.672'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Revisit my childhood vacation spot as an adult',
    NULL,
    '2023-04-17 02:53:14.391'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Spend a night in the Burj Al Arab',
    'https://picsum.photos/605/213',
    '2020-06-24 07:07:07.420'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'vaporeon',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png',
    '2020-10-08 22:00:15.320'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris can open an umbrella up your ass.',
    'https://picsum.photos/471/523',
    '2023-07-23 05:53:48.327'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'There is a law in the state of Idaho that does not permit one citizen to give another citizen a box of candy that is heavier than 50 pounds',
    NULL,
    '2022-11-05 03:02:39.646'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris knows the Vengabus is coming.',
    'https://picsum.photos/700/139',
    '2022-12-12 11:04:39.670'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Chop my own firewood',
    'https://picsum.photos/503/444',
    '2021-05-03 11:48:36.787'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Eu turpis egestas pretium aenean pharetra magna ac',
    'Cras semper auctor neque vitae tempus quam pellentesque nec. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Eu augue ut lectus arcu. Purus sit amet volutpat consequat mauris. Amet facilisis magna etiam tempor orci eu lobortis. Diam donec adipiscing tristique risus nec feugiat in fermentum. Consequat nisl vel pretium lectus quam id. Vivamus at augue eget arcu dictum varius duis at. Rutrum quisque non tellus orci. Felis eget velit aliquet sagittis id consectetur. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Massa sed elementum tempus egestas sed sed risus pretium. Tristique senectus et netus et malesuada fames. Leo vel fringilla est ullamcorper eget nulla facilisi. Mauris in aliquam sem fringilla ut morbi. Nibh tellus molestie nunc non blandit. Egestas sed tempus urna et pharetra pharetra massa massa. Malesuada nunc vel risus commodo viverra maecenas. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis.
',
    'https://picsum.photos/458/264',
    '2021-04-25 01:14:57.815'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The Olympic torch weighs about 3 pounds',
    NULL,
    '2022-04-09 10:36:15.864'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Penguins can jump as high as 6 feet in the air',
    NULL,
    '2023-08-09 23:16:13.089'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit the Watkins Glen National Park',
    NULL,
    '2020-10-30 22:33:03.904'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit Lake Bled',
    NULL,
    '2021-04-11 05:53:29.435'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Explore Palawan',
    NULL,
    '2021-03-06 03:39:38.698'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'tangela',
    'Pokemon  grass',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png',
    '2021-01-04 17:18:06.919'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Enim eu turpis egestas pretium aenean. Ipsum a arc',
    'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Elit eget gravida cum sociis natoque penatibus et. Aliquet nibh praesent tristique magna sit amet purus gravida. Sodales ut eu sem integer vitae. Lectus arcu bibendum at varius vel. Eget mi proin sed libero. Turpis egestas sed tempus urna et pharetra. Ut tellus elementum sagittis vitae et leo. Odio ut enim blandit volutpat. Massa tincidunt dui ut ornare lectus sit amet est placerat. Cursus mattis molestie a iaculis. Arcu dictum varius duis at consectetur lorem donec. In massa tempor nec feugiat nisl pretium.
Nibh sit amet commodo nulla. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Gravida neque convallis a cras. Id nibh tortor id aliquet lectus proin nibh. At tempor commodo ullamcorper a lacus vestibulum sed. Purus sit amet luctus venenatis lectus magna fringilla. Neque convallis a cras semper auctor. Auctor urna nunc id cursus metus. Purus in massa tempor nec feugiat nisl. Eget dolor morbi non arcu risus quis varius quam quisque. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Dui vivamus arcu felis bibendum ut tristique.Risus sed vulputate odio ut enim blandit volutpat. Faucibus turpis in eu mi bibendum neque. Morbi tristique senectus et netus et malesuada fames ac. Lacinia quis vel eros donec. Est velit egestas dui id ornare arcu. Commodo viverra maecenas accumsan lacus. Turpis in eu mi bibendum neque egestas congue. Fermentum posuere urna nec tincidunt. Sit amet nisl purus in mollis. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Justo eget magna fermentum iaculis eu non diam. Proin nibh nisl condimentum id venenatis. Viverra maecenas accumsan lacus vel facilisis volutpat est. Rhoncus dolor purus non enim praesent elementum facilisis leo. Urna id volutpat lacus laoreet non curabitur gravida. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fermentum leo vel orci porta.
Eget sit amet tellus cras adipiscing enim eu. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Purus in massa tempor nec feugiat nisl pretium fusce. Eu feugiat pretium nibh ipsum consequat nisl. Purus in mollis nunc sed. Turpis massa sed elementum tempus egestas sed. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Est lorem ipsum dolor sit amet. Fringilla phasellus faucibus scelerisque eleifend donec. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat.
',
    'https://picsum.photos/476/328',
    '2023-01-11 05:10:42.172'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Faucibus interdum posuere lorem ipsum dolor sit am',
    'Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Blandit massa enim nec dui nunc. Ultrices vitae auctor eu augue ut. Sagittis purus sit amet volutpat consequat mauris nunc congue. Viverra suspendisse potenti nullam ac tortor vitae purus. Aliquet enim tortor at auctor urna nunc id. Orci sagittis eu volutpat odio facilisis mauris sit amet. Sem integer vitae justo eget magna fermentum iaculis eu. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Nec ullamcorper sit amet risus nullam. Malesuada bibendum arcu vitae elementum. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Pretium quam vulputate dignissim suspendisse. Gravida quis blandit turpis cursus in hac habitasse. Odio tempor orci dapibus ultrices in iaculis nunc sed. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Leo urna molestie at elementum eu facilisis sed odio.
Cras semper auctor neque vitae tempus quam pellentesque nec. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Eu augue ut lectus arcu. Purus sit amet volutpat consequat mauris. Amet facilisis magna etiam tempor orci eu lobortis. Diam donec adipiscing tristique risus nec feugiat in fermentum. Consequat nisl vel pretium lectus quam id. Vivamus at augue eget arcu dictum varius duis at. Rutrum quisque non tellus orci. Felis eget velit aliquet sagittis id consectetur. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Massa sed elementum tempus egestas sed sed risus pretium. Tristique senectus et netus et malesuada fames. Leo vel fringilla est ullamcorper eget nulla facilisi. Mauris in aliquam sem fringilla ut morbi. Nibh tellus molestie nunc non blandit. Egestas sed tempus urna et pharetra pharetra massa massa. Malesuada nunc vel risus commodo viverra maecenas. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis.
Risus sed vulputate odio ut enim blandit volutpat. Faucibus turpis in eu mi bibendum neque. Morbi tristique senectus et netus et malesuada fames ac. Lacinia quis vel eros donec. Est velit egestas dui id ornare arcu. Commodo viverra maecenas accumsan lacus. Turpis in eu mi bibendum neque egestas congue. Fermentum posuere urna nec tincidunt. Sit amet nisl purus in mollis. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Justo eget magna fermentum iaculis eu non diam. Proin nibh nisl condimentum id venenatis. Viverra maecenas accumsan lacus vel facilisis volutpat est. Rhoncus dolor purus non enim praesent elementum facilisis leo. Urna id volutpat lacus laoreet non curabitur gravida. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fermentum leo vel orci porta.
Enim eu turpis egestas pretium aenean. Ipsum a arcu cursus vitae. Massa massa ultricies mi quis hendrerit dolor. Rhoncus dolor purus non enim praesent elementum. Tristique magna sit amet purus. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Egestas diam in arcu cursus. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. In mollis nunc sed id semper risus in hendrerit gravida. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Volutpat consequat mauris nunc congue nisi vitae.
',
    NULL,
    '2021-12-18 21:44:12.102'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris''s beard is the eigth wonder of the world.',
    NULL,
    '2020-05-19 23:28:03.251'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Where do you find the medulla oblongata?




Brain',
    NULL,
    '2021-06-05 07:53:05.683'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What musical instrument do you find in the bathroom? A tuba toothpaste!',
    NULL,
    '2021-05-07 15:28:51.749'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Smew, garganey and shoveler are all types of what bird




Duck',
    NULL,
    '2023-03-09 18:21:45.684'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Explore the Ruins of Petra',
    NULL,
    '2023-04-20 21:26:20.872'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Fvgfo0fpds][c''',
    'gb[dfc FDcv




jmrfjnz\]'' bhdg',
    NULL,
    '2021-10-04 04:53:21.976'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit the White Cliffs of Dover',
    NULL,
    '2021-10-11 15:41:12.345'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'I used to be a banker, but I lost interest.',
    'https://picsum.photos/343/221',
    '2020-06-05 07:38:36.223'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    '111,111,111 x 111,111,111 = 12,345,678,987,654,321',
    NULL,
    '2023-02-13 09:44:44.930'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What is the voice box




Larynx',
    NULL,
    '2022-02-14 15:05:33.156'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    '70% of the poor people in the world are female',
    'https://picsum.photos/589/233',
    '2021-10-21 13:36:36.719'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Leo vel orci porta non pulvinar neque. Porta nibh ',
    'Sed elementum tempus egestas sed sed risus pretium quam. Interdum varius sit amet mattis vulputate enim nulla. Orci porta non pulvinar neque laoreet suspendisse. Urna porttitor rhoncus dolor purus non enim praesent. Elit sed vulputate mi sit amet mauris commodo. Sit amet dictum sit amet. Elementum integer enim neque volutpat ac tincidunt. A erat nam at lectus urna duis convallis. Convallis aenean et tortor at risus viverra adipiscing at in. Mattis vulputate enim nulla aliquet porttitor lacus. Sagittis nisl rhoncus mattis rhoncus urna. Sit amet massa vitae tortor. Phasellus vestibulum lorem sed risus ultricies. Habitant morbi tristique senectus et netus et. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Mi eget mauris pharetra et ultrices neque. Sodales ut eu sem integer.
Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Massa enim nec dui nunc. Netus et malesuada fames ac turpis egestas. Gravida rutrum quisque non tellus orci. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Amet aliquam id diam maecenas ultricies mi eget mauris. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Ultricies tristique nulla aliquet enim. Urna et pharetra pharetra massa. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit.
',
    NULL,
    '2021-08-11 21:25:40.680'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'electrode',
    'Pokemon  electric',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png',
    '2021-03-16 06:35:15.829'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Vitae auctor eu augue ut lectus arcu bibendum at v',
    'Ut ornare lectus sit amet est placerat. Eget nulla facilisi etiam dignissim diam quis enim. Penatibus et magnis dis parturient montes. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Odio pellentesque diam volutpat commodo. Duis ut diam quam nulla porttitor massa id. Diam donec adipiscing tristique risus. Sed blandit libero volutpat sed cras ornare. Tincidunt lobortis feugiat vivamus at augue eget arcu. Arcu dui vivamus arcu felis bibendum ut tristique. Dapibus ultrices in iaculis nunc sed augue lacus. Risus nullam eget felis eget nunc lobortis.
Viverra aliquet eget sit amet tellus. Adipiscing at in tellus integer feugiat scelerisque. Fringilla urna porttitor rhoncus dolor purus non enim praesent. Mauris ultrices eros in cursus. Dolor purus non enim praesent. Quam viverra orci sagittis eu volutpat. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Lobortis feugiat vivamus at augue. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Sed sed risus pretium quam. Integer malesuada nunc vel risus. Egestas congue quisque egestas diam in arcu. Elementum nibh tellus molestie nunc non blandit massa enim nec.
',
    NULL,
    '2021-12-30 17:44:09.536'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'What Is A Question',
    'What is a question someone can ask, but you can never answer?




Are you Asleep? or Are you sleeping?',
    NULL,
    '2022-09-26 06:50:47.508'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Little known fact: Talking Shit About Chuck Norris is the eighth Deadly Sin. And by far the most deadly.',
    NULL,
    '2020-02-07 16:18:58.374'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'See drift racing in Japan',
    NULL,
    '2022-09-05 12:49:00.913'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Five percent of the people who use personal ads for dating are already married',
    NULL,
    '2022-01-28 15:45:52.425'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Explore San Francisco',
    NULL,
    '2022-10-14 02:06:56.813'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What Does Chilli Con Carne Mean




Spanish For Meat With Chilli Powder',
    'https://picsum.photos/276/230',
    '2022-11-05 13:32:51.224'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    '',
    'I am something when you make me, I hold your knowledge, I have the answer, I am as you make me I am this of which I have just said,  what am I?




~A riddle~',
    'https://picsum.photos/283/344',
    '2020-10-16 04:41:15.800'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris demands a 29th day of February every 4 years. We call this leap year. It''s true name is leapspinkick year.',
    NULL,
    '2020-01-12 08:22:13.283'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Learn to appreciate wine',
    'https://picsum.photos/204/360',
    '2023-04-27 10:09:13.930'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Cras semper auctor neque vitae tempus quam pellent',
    'Semper auctor neque vitae tempus quam pellentesque nec nam. Turpis egestas maecenas pharetra convallis posuere morbi. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. In cursus turpis massa tincidunt dui. Gravida neque convallis a cras semper auctor neque vitae tempus. Dui faucibus in ornare quam viverra. Consequat nisl vel pretium lectus quam id leo in vitae. Eget est lorem ipsum dolor sit amet. Enim facilisis gravida neque convallis a cras semper auctor. Non arcu risus quis varius quam quisque id diam. Enim praesent elementum facilisis leo vel fringilla est. Elementum sagittis vitae et leo duis ut diam quam. Nisi lacus sed viverra tellus. Id aliquet lectus proin nibh nisl condimentum id. Egestas sed sed risus pretium quam vulputate dignissim.
Blandit volutpat maecenas volutpat blandit. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Aliquet enim tortor at auctor urna nunc id cursus metus. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Enim ut tellus elementum sagittis vitae et leo. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Elementum integer enim neque volutpat ac tincidunt vitae. Id leo in vitae turpis massa sed elementum. Volutpat sed cras ornare arcu dui vivamus arcu felis. Suspendisse in est ante in. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Elit eget gravida cum sociis natoque. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Purus faucibus ornare suspendisse sed. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Ac turpis egestas integer eget aliquet.
Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Sit amet nulla facilisi morbi tempus. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Sodales neque sodales ut etiam sit amet nisl purus. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Nisi lacus sed viverra tellus in hac habitasse. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Tincidunt eget nullam non nisi. Cursus risus at ultrices mi. Volutpat est velit egestas dui id ornare. Sagittis nisl rhoncus mattis rhoncus. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Fermentum leo vel orci porta non pulvinar neque. Quisque sagittis purus sit amet volutpat. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Porttitor massa id neque aliquam vestibulum morbi blandit. At quis risus sed vulputate odio. Nisi vitae suscipit tellus mauris a diam maecenas sed enim.
',
    'https://picsum.photos/441/173',
    '2020-04-02 02:06:50.135'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Ut ornare lectus sit amet est placerat. Eget nulla',
    'Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Blandit massa enim nec dui nunc. Ultrices vitae auctor eu augue ut. Sagittis purus sit amet volutpat consequat mauris nunc congue. Viverra suspendisse potenti nullam ac tortor vitae purus. Aliquet enim tortor at auctor urna nunc id. Orci sagittis eu volutpat odio facilisis mauris sit amet. Sem integer vitae justo eget magna fermentum iaculis eu. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Nec ullamcorper sit amet risus nullam. Malesuada bibendum arcu vitae elementum. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Pretium quam vulputate dignissim suspendisse. Gravida quis blandit turpis cursus in hac habitasse. Odio tempor orci dapibus ultrices in iaculis nunc sed. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Leo urna molestie at elementum eu facilisis sed odio.
Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Lacinia at quis risus sed. Velit egestas dui id ornare arcu odio ut sem nulla. Lacus vestibulum sed arcu non odio euismod lacinia. Imperdiet nulla malesuada pellentesque elit. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt. Adipiscing bibendum est ultricies integer quis auctor elit.
Enim eu turpis egestas pretium aenean. Ipsum a arcu cursus vitae. Massa massa ultricies mi quis hendrerit dolor. Rhoncus dolor purus non enim praesent elementum. Tristique magna sit amet purus. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Egestas diam in arcu cursus. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. In mollis nunc sed id semper risus in hendrerit gravida. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Volutpat consequat mauris nunc congue nisi vitae.
',
    'https://picsum.photos/364/321',
    '2023-05-27 08:43:12.296'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The early occurrence of a fetus yawning is at eleven weeks after conception',
    NULL,
    '2020-05-29 23:50:27.353'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'graveler',
    'Pokemon  rock ground',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png',
    '2021-12-16 13:54:37.551'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'bellsprout',
    'Pokemon  grass poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png',
    '2023-08-07 04:32:20.015'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'onix',
    'Pokemon  rock ground',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png',
    '2021-11-24 22:50:17.694'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris was supposed to guest star on the Walking Dead but had to be cancelled. The walkers would not stop running from Chuck.',
    NULL,
    '2022-09-11 10:12:55.841'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Drying Riddle',
    'What is it that gets wetter when it dries?




A towel.',
    'https://picsum.photos/382/420',
    '2019-12-03 16:05:48.547'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris is so tough you could sharpen a knife just by holding it in the air next to his face.',
    'https://picsum.photos/229/583',
    '2022-09-18 16:26:24.679'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Who is the abandoned man cub in The Jungle Book




Mowgli',
    'https://picsum.photos/382/347',
    '2020-09-08 00:00:47.858'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'marowak',
    'Pokemon  ground',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png',
    '2023-01-01 23:35:29.997'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'See a solar eclipse',
    NULL,
    '2022-09-24 13:47:03.804'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris does not need to use spell check. If he happens to misspell a word, Merriam-Webster dictionary actually changes it''s own published spelling.',
    NULL,
    '2021-09-23 00:53:46.098'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Madus Riddle',
    'i will dance , i will sing , but i do no have life . How am i ?????????????????????????????????




Answer :::: T.V',
    NULL,
    '2020-12-29 20:16:11.693'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Miss America took Chuck Norris to his Senior Prom.',
    'https://picsum.photos/289/363',
    '2023-02-14 13:57:00.362'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ekans',
    'Pokemon  poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png',
    '2022-04-10 06:58:40.145'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The highest mountain in the Western Hemisphere is Mount Aconcagua in Argentina. It rises 22,834 feet above sea level',
    NULL,
    '2019-11-20 20:26:15.497'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Pack my life into a bag and buy a ticket going anywhere',
    'https://picsum.photos/673/599',
    '2023-03-12 07:29:19.829'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Et pharetra pharetra massa massa ultricies mi quis',
    'Nec feugiat nisl pretium fusce id velit. Aliquam ut porttitor leo a diam sollicitudin tempor. Elementum eu facilisis sed odio morbi quis. Aliquet nec ullamcorper sit amet risus nullam. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Diam volutpat commodo sed egestas. Et leo duis ut diam quam nulla porttitor massa id. Justo laoreet sit amet cursus sit. Id aliquet lectus proin nibh. Pretium fusce id velit ut tortor pretium viverra. Enim lobortis scelerisque fermentum dui. Id diam vel quam elementum. Ultrices sagittis orci a scelerisque purus semper eget duis. Pretium viverra suspendisse potenti nullam. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Vel quam elementum pulvinar etiam non quam lacus suspendisse.
Mi eget mauris pharetra et ultrices neque. Nunc non blandit massa enim nec. Velit scelerisque in dictum non consectetur a. Enim sed faucibus turpis in eu mi bibendum neque. In egestas erat imperdiet sed. Ac auctor augue mauris augue neque gravida in fermentum. Vitae congue eu consequat ac felis donec. Feugiat sed lectus vestibulum mattis. Nibh venenatis cras sed felis eget velit aliquet. Mauris sit amet massa vitae tortor condimentum lacinia quis. Orci sagittis eu volutpat odio facilisis mauris sit amet. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Purus viverra accumsan in nisl. Consequat semper viverra nam libero justo laoreet sit amet. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Nec dui nunc mattis enim ut tellus elementum. Quis auctor elit sed vulputate mi sit. Feugiat nibh sed pulvinar proin gravida.
Risus sed vulputate odio ut enim blandit volutpat. Faucibus turpis in eu mi bibendum neque. Morbi tristique senectus et netus et malesuada fames ac. Lacinia quis vel eros donec. Est velit egestas dui id ornare arcu. Commodo viverra maecenas accumsan lacus. Turpis in eu mi bibendum neque egestas congue. Fermentum posuere urna nec tincidunt. Sit amet nisl purus in mollis. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Justo eget magna fermentum iaculis eu non diam. Proin nibh nisl condimentum id venenatis. Viverra maecenas accumsan lacus vel facilisis volutpat est. Rhoncus dolor purus non enim praesent elementum facilisis leo. Urna id volutpat lacus laoreet non curabitur gravida. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fermentum leo vel orci porta.
Leo vel orci porta non pulvinar neque. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Consectetur libero id faucibus nisl tincidunt eget. Morbi tristique senectus et netus. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Sit amet nulla facilisi morbi tempus iaculis urna. Suscipit tellus mauris a diam maecenas. In aliquam sem fringilla ut. Tortor at risus viverra adipiscing. Scelerisque eleifend donec pretium vulputate sapien nec. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Mi tempus imperdiet nulla malesuada pellentesque elit. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Nam at lectus urna duis convallis.
',
    'https://picsum.photos/412/512',
    '2021-04-28 00:54:21.558'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Ring in New Year’s with a kiss',
    NULL,
    '2021-04-13 20:56:48.501'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'What Can Run',
    'What can run but never walks? Has a mouth but never talks? Has a bed but necer sleeps? Has a head but never weeps?




A river- a river runs  has a mouth when it meges into the sea  Has a river bed  and has a head at it''s mouth',
    NULL,
    '2020-09-15 21:06:12.614'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris make onions cry.',
    'https://picsum.photos/376/601',
    '2023-11-15 19:43:43.010'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Just got back from a job interview where I was asked if I could perform under pressure. I said I wasn’t too sure about that but I could do a wicked “Bohemian Rhapsody.”',
    'https://picsum.photos/458/264',
    '2020-10-20 00:07:36.838'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What kind of magic do cows believe in? Moodoo!',
    NULL,
    '2022-02-01 08:35:14.049'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit Yosemite',
    NULL,
    '2023-04-20 04:52:08.234'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Harry Browne',
    'Each person is living for himself his own happiness is all he can ever personally feel.',
    'https://picsum.photos/253/542',
    '2023-08-15 14:59:26.723'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'WHAT Am I?',
    'I AM SMALL N ALSO BIG. I CHANGE EVERYDAY. I WAS QUITE TINY/SMALL, BUT I NOW AM/IS BIG. I AM BECOMING BIGGER N BIGGER BY THE WEEK/MONTH/YEAR.what AM I?




ME',
    'https://picsum.photos/665/419',
    '2023-04-16 20:10:31.657'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Where were the original loopholes




Castle Walls - Arrow Firing Slits',
    NULL,
    '2020-01-14 08:30:56.318'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from P. J. O''Rourke',
    'No humorist is under any obligation to provide answers and probably if you were to delve into the literary history of humour it''s probably all about not providing answers because the humorist essentially says: this is the way things are.',
    NULL,
    '2021-07-23 18:55:33.002'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Wood frogs can be frozen solid and then thawed, and continue living. They use the glucose in their body to protect their vital organs while they are in a frozen state',
    NULL,
    '2021-09-05 08:48:30.767'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Roll in a huge pile of leaves',
    NULL,
    '2020-02-08 11:02:37.384'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Josh Hutcherson',
    'We''ve seen some insane signs: ''Is that a loaf of bread in your pocket, or are you just happy to see me?'' Funny stuff along those lines. Very original. One just said, ''I will do unspeakable things.'' I thought that was very interesting - and mildly terrifying!',
    NULL,
    '2022-12-10 01:06:25.729'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Anna Deavere Smith',
    'I think we need leadership that helps us remember that part of what we are about is caring about more than the person right next to us, but the folks across the way.',
    NULL,
    '2021-09-08 20:34:44.190'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Whitney Houston',
    'I finally faced the fact that it isn''t a crime not having friends. Being alone means you have fewer problems.',
    'https://picsum.photos/159/624',
    '2021-09-25 05:35:21.011'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'charmander',
    'Pokemon  fire',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    '2023-09-11 12:44:29.009'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'The Quarter',
    'what is wrong with a quarter date 24 BC (before Christ)?




how did they now that a quarter will be date 24 years before christ. (they can''t read the future)',
    NULL,
    '2021-09-21 21:16:08.173'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why did the scarecrow win an award? He was outstanding in his field.',
    'https://picsum.photos/580/317',
    '2021-12-10 08:16:38.497'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Lectus magna fringilla urna porttitor rhoncus dolo',
    'Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Quis hendrerit dolor magna eget est lorem ipsum dolor. In aliquam sem fringilla ut. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Facilisis leo vel fringilla est. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Volutpat lacus laoreet non curabitur. Cum sociis natoque penatibus et magnis dis. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Nunc lobortis mattis aliquam faucibus. Arcu felis bibendum ut tristique et. Amet purus gravida quis blandit turpis cursus in hac habitasse. In fermentum et sollicitudin ac orci phasellus. Malesuada fames ac turpis egestas integer eget.
',
    NULL,
    '2022-05-07 02:18:01.154'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'How many bottles of `champagne'' are there in a Nebuchadnezzar?




20 Bottles',
    'https://picsum.photos/644/327',
    '2022-10-05 16:59:24.394'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What do you call a penguin in the White House? Lost.',
    NULL,
    '2021-06-10 00:05:15.332'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Have an academic article published',
    NULL,
    '2022-05-24 14:58:55.456'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Once In A Minute',
    'What is once in a minute, twice in a moment, and never in a thousand years?




The letter M.',
    NULL,
    '2020-03-27 15:57:44.996'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Work',
    'The man takes the elevator down to go to work he goes down 20 flights of stairs and when he comes back from work he goes up to the 7th floor and walks the rest why?




he is a midgit and his hands can not reach 20 on the dile',
    NULL,
    '2020-08-22 22:29:02.722'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Practice yoga in India',
    NULL,
    '2022-08-20 13:49:49.683'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Albert Schweitzer',
    'Example is leadership.',
    'https://picsum.photos/117/656',
    '2020-10-28 04:57:55.857'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Some kids play Kick the can. Chuck Norris played Kick the keg.',
    NULL,
    '2021-11-13 13:18:38.532'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'An Umbrella',
    'Three large people try to crowd under one small umbrella, but nobody gets wet. How is this possible?




The sun is shining; there''s no rain.',
    NULL,
    '2022-03-31 23:55:46.259'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'kadabra',
    'Pokemon  psychic',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png',
    '2019-11-27 08:35:12.431'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Sed sed risus pretium quam vulputate dignissim sus',
    'Mi eget mauris pharetra et ultrices neque. Nunc non blandit massa enim nec. Velit scelerisque in dictum non consectetur a. Enim sed faucibus turpis in eu mi bibendum neque. In egestas erat imperdiet sed. Ac auctor augue mauris augue neque gravida in fermentum. Vitae congue eu consequat ac felis donec. Feugiat sed lectus vestibulum mattis. Nibh venenatis cras sed felis eget velit aliquet. Mauris sit amet massa vitae tortor condimentum lacinia quis. Orci sagittis eu volutpat odio facilisis mauris sit amet. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Purus viverra accumsan in nisl. Consequat semper viverra nam libero justo laoreet sit amet. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Nec dui nunc mattis enim ut tellus elementum. Quis auctor elit sed vulputate mi sit. Feugiat nibh sed pulvinar proin gravida.
Vitae auctor eu augue ut lectus arcu bibendum at varius. Massa tincidunt dui ut ornare lectus sit amet est. Donec ac odio tempor orci dapibus ultrices in. Semper quis lectus nulla at volutpat. Est sit amet facilisis magna etiam tempor. Lacus sed viverra tellus in hac habitasse platea. Ultrices neque ornare aenean euismod elementum nisi. Elit scelerisque mauris pellentesque pulvinar pellentesque. Elit sed vulputate mi sit. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Feugiat in ante metus dictum at tempor commodo ullamcorper. Condimentum lacinia quis vel eros donec ac odio tempor.
Consectetur a erat nam at lectus. Amet justo donec enim diam vulputate ut pharetra. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Porttitor rhoncus dolor purus non enim. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Augue ut lectus arcu bibendum. Lectus proin nibh nisl condimentum id.
',
    NULL,
    '2023-02-10 02:50:39.499'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit the Chapel of Bones',
    'https://picsum.photos/214/471',
    '2021-10-06 12:57:45.875'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Every three days a human stomach gets a new lining',
    'https://picsum.photos/368/666',
    '2020-07-01 06:23:08.868'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'You are more likely to be killed by a champagne cork than by a poisonous spider',
    NULL,
    '2023-03-11 03:27:08.724'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nibh sit amet commodo nulla. Placerat vestibulum l',
    'Purus semper eget duis at tellus at urna condimentum. Amet justo donec enim diam vulputate ut pharetra sit. Pretium lectus quam id leo in vitae turpis massa sed. Feugiat nibh sed pulvinar proin gravida. Eget velit aliquet sagittis id. Nisl pretium fusce id velit. Imperdiet proin fermentum leo vel orci porta non pulvinar. Proin gravida hendrerit lectus a. Nibh tortor id aliquet lectus. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Amet est placerat in egestas erat imperdiet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Eu tincidunt tortor aliquam nulla facilisi cras. Tellus at urna condimentum mattis pellentesque. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Eu sem integer vitae justo. Tempor orci eu lobortis elementum nibh tellus molestie nunc non.
A iaculis at erat pellentesque adipiscing commodo elit. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Mattis nunc sed blandit libero. Eu lobortis elementum nibh tellus molestie nunc non blandit. Eget duis at tellus at urna condimentum. Sagittis aliquam malesuada bibendum arcu vitae elementum. Felis imperdiet proin fermentum leo vel orci. Sed sed risus pretium quam vulputate. Sed risus pretium quam vulputate dignissim suspendisse in. Fames ac turpis egestas maecenas pharetra convallis posuere. Lobortis scelerisque fermentum dui faucibus in ornare quam. Aenean pharetra magna ac placerat vestibulum lectus mauris. Aliquet sagittis id consectetur purus. Netus et malesuada fames ac. Habitant morbi tristique senectus et. Habitasse platea dictumst vestibulum rhoncus. Egestas sed sed risus pretium quam vulputate. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus.
Sem viverra aliquet eget sit amet tellus cras. Proin nibh nisl condimentum id venenatis a. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Viverra vitae congue eu consequat ac felis donec et odio. Ultrices vitae auctor eu augue ut. Leo integer malesuada nunc vel risus. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus et malesuada fames ac. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Diam vel quam elementum pulvinar. Faucibus nisl tincidunt eget nullam. Lacus viverra vitae congue eu consequat. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Diam sit amet nisl suscipit. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.
',
    NULL,
    '2021-05-26 10:13:21.050'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Arthur Bloch',
    'A failure will not appear until a unit has passed final inspection.',
    NULL,
    '2020-06-13 00:39:25.038'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit Shanghai',
    NULL,
    '2022-07-14 14:17:50.278'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    ' The spiny cheek, starsnout poacher, and monkeyface prickleback are all names of __________




Fish',
    'https://picsum.photos/315/616',
    '2020-07-24 15:41:44.282'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Oh Great! You Broke It Again!!',
    'What is broken as soon as it is said?




SILENCE',
    NULL,
    '2019-12-13 23:05:33.845'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit the Louvre',
    'https://picsum.photos/243/284',
    '2021-07-14 06:14:54.058'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Murder Or Suicide?',
    'The Police find a man dead in the alley way. A bullet hole is in his head. Beside the man is the gun that killed him (with his fingerprints), a handkerchief, and a tape recorder. The Detective pushes play on the tape recorder and hears that it starts from the beginning, and it says: "I''m sorry that I must end my life. I''m in debt and I don''t know how to get out of it. I''m sorry..." then a second later he hears the gun go off. Why did the detective file the case as a murder instead of a suicide?




The tape started at the beginning and the gun shot was at the end. how could the man rewind the tape if he was already dead? Plus, the murderer could''ve used the the handkerchief to hold the gun and then puts the man''s hand on the gun when he was dead so only his fingerprints were left behind.',
    NULL,
    '2022-10-03 09:36:28.171'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The property (ID, Facts) VALUES on the Monopoly game board are the same today as they were in 1935',
    NULL,
    '2022-07-12 15:28:38.801'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'horsea',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png',
    '2020-05-31 10:38:15.846'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Eget sit amet tellus cras adipiscing enim eu turpi',
    'Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Consequat semper viverra nam libero justo laoreet sit amet cursus. Morbi quis commodo odio aenean. Ut sem nulla pharetra diam. Gravida cum sociis natoque penatibus et magnis. Eu sem integer vitae justo. Amet dictum sit amet justo donec enim diam vulputate ut. Eu consequat ac felis donec et. Sed vulputate odio ut enim. Vitae aliquet nec ullamcorper sit amet risus nullam.
Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Blandit massa enim nec dui nunc. Ultrices vitae auctor eu augue ut. Sagittis purus sit amet volutpat consequat mauris nunc congue. Viverra suspendisse potenti nullam ac tortor vitae purus. Aliquet enim tortor at auctor urna nunc id. Orci sagittis eu volutpat odio facilisis mauris sit amet. Sem integer vitae justo eget magna fermentum iaculis eu. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Nec ullamcorper sit amet risus nullam. Malesuada bibendum arcu vitae elementum. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Pretium quam vulputate dignissim suspendisse. Gravida quis blandit turpis cursus in hac habitasse. Odio tempor orci dapibus ultrices in iaculis nunc sed. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Leo urna molestie at elementum eu facilisis sed odio.
Consectetur a erat nam at lectus. Amet justo donec enim diam vulputate ut pharetra. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Porttitor rhoncus dolor purus non enim. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Augue ut lectus arcu bibendum. Lectus proin nibh nisl condimentum id.
',
    NULL,
    '2020-01-18 18:11:48.257'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Late at night, Chuck Norris was once walking back home alone after watching a Chuck Norris movie. A mugger approached him from the back, tapped on his shoulder and said "Hey, gimme your money!". Chuck Norris slowly turned around, paused for a while and gave the mugger a sarcastic smile. He then proceeded to rape the mugger anally, crush his skull, break his spine and killed him in a fraction of a second. Chuck Norris then brought the mugger back to life and then broke each of his limbs, eviscerated the mugger''s gut, ate the mugger''s still beating heart and infected him with AIDS, killing the unfortunate mugger once again. Chuck Norris then brough the mugger to life yet again for the second time, only to give the mugger a final fatal roundhous kick to his face killing the man and his soul at the same time. Chuck Norris then threw his packed wallet at the remains of his victim and said "Do not tap on my shoulders ever again", and continued to walk home slowly.',
    NULL,
    '2020-02-25 11:05:28.000'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Magic Johnson',
    'All kids need is a little help, a little hope and somebody who believes in them.',
    NULL,
    '2020-10-18 17:47:59.177'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Brandy, decoy and landscape all come from which language




Dutch',
    NULL,
    '2023-04-10 15:07:44.167'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'This Indian group ruled in early Peru.




Inca',
    NULL,
    '2021-11-05 00:12:11.955'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'goldeen',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png',
    '2023-08-07 01:39:10.555'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'More pollution is emitted from the average home compared to the average car.',
    NULL,
    '2021-02-23 11:24:31.645'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Attend El Classico',
    NULL,
    '2022-09-07 12:03:23.172'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    '“Siri,” I asked my phone, “why am I so bad with women?" She responded, “I’m Bixby, you moron.”',
    NULL,
    '2022-10-07 06:02:59.023'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Lorem sed risus ultricies tristique nulla aliquet ',
    'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Elit eget gravida cum sociis natoque penatibus et. Aliquet nibh praesent tristique magna sit amet purus gravida. Sodales ut eu sem integer vitae. Lectus arcu bibendum at varius vel. Eget mi proin sed libero. Turpis egestas sed tempus urna et pharetra. Ut tellus elementum sagittis vitae et leo. Odio ut enim blandit volutpat. Massa tincidunt dui ut ornare lectus sit amet est placerat. Cursus mattis molestie a iaculis. Arcu dictum varius duis at consectetur lorem donec. In massa tempor nec feugiat nisl pretium.
Lectus urna duis convallis convallis tellus id interdum. Porttitor leo a diam sollicitudin tempor id eu. Sit amet aliquam id diam maecenas. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Fermentum odio eu feugiat pretium nibh ipsum consequat. Purus semper eget duis at tellus at. Arcu bibendum at varius vel pharetra vel turpis. Suscipit tellus mauris a diam maecenas sed enim. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Faucibus interdum posuere lorem ipsum. Turpis massa tincidunt dui ut ornare lectus sit amet est. Egestas maecenas pharetra convallis posuere morbi leo. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Amet venenatis urna cursus eget nunc scelerisque. Hac habitasse platea dictumst quisque sagittis purus sit. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Non blandit massa enim nec dui. Mus mauris vitae ultricies leo integer malesuada. Sed felis eget velit aliquet sagittis id consectetur.
Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Sagittis id consectetur purus ut faucibus pulvinar elementum. Accumsan tortor posuere ac ut. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Purus in massa tempor nec feugiat nisl. Felis eget nunc lobortis mattis. Amet massa vitae tortor condimentum lacinia quis vel. Sed cras ornare arcu dui vivamus arcu. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Integer vitae justo eget magna fermentum iaculis eu. Lorem mollis aliquam ut porttitor. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Vulputate dignissim suspendisse in est ante. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Nulla facilisi nullam vehicula ipsum a arcu cursus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum.
Eget felis eget nunc lobortis mattis aliquam faucibus purus. Ipsum dolor sit amet consectetur adipiscing elit. Purus in mollis nunc sed id semper. Imperdiet sed euismod nisi porta lorem mollis aliquam. Auctor neque vitae tempus quam. Vitae tempus quam pellentesque nec. Auctor augue mauris augue neque. Mattis aliquam faucibus purus in massa tempor nec feugiat. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Massa enim nec dui nunc mattis enim. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Elementum facilisis leo vel fringilla est ullamcorper eget nulla.
',
    NULL,
    '2020-05-01 14:58:46.602'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dignissim convallis aenean et tortor at risus vive',
    'Consectetur a erat nam at lectus. Amet justo donec enim diam vulputate ut pharetra. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Porttitor rhoncus dolor purus non enim. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Augue ut lectus arcu bibendum. Lectus proin nibh nisl condimentum id.
',
    NULL,
    '2022-10-21 19:40:43.404'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Attend the Stanley Cup final',
    'https://picsum.photos/490/112',
    '2022-11-15 09:57:31.638'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Which popular cartoon strip has never included an adult




Peanuts',
    NULL,
    '2022-11-18 10:01:31.233'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The word "toy" comes from an old English word that means "tool."',
    NULL,
    '2022-07-13 20:21:35.117'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why did the scarecrow win an award? Because he was outstanding in his field!',
    NULL,
    '2022-09-24 08:23:59.942'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'dewgong',
    'Pokemon  water ice',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png',
    '2020-02-08 15:13:46.195'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Enim eu turpis egestas pretium aenean. Ipsum a arc',
    'Risus sed vulputate odio ut enim blandit volutpat. Faucibus turpis in eu mi bibendum neque. Morbi tristique senectus et netus et malesuada fames ac. Lacinia quis vel eros donec. Est velit egestas dui id ornare arcu. Commodo viverra maecenas accumsan lacus. Turpis in eu mi bibendum neque egestas congue. Fermentum posuere urna nec tincidunt. Sit amet nisl purus in mollis. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Justo eget magna fermentum iaculis eu non diam. Proin nibh nisl condimentum id venenatis. Viverra maecenas accumsan lacus vel facilisis volutpat est. Rhoncus dolor purus non enim praesent elementum facilisis leo. Urna id volutpat lacus laoreet non curabitur gravida. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fermentum leo vel orci porta.
',
    NULL,
    '2022-10-14 02:33:04.537'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What was the name of Elizabeth Taylor''s character in ''Cat on a Hot Tin Roof''?




Margaret Pollitt ''maggie The Cat''''',
    NULL,
    '2023-09-22 06:28:39.813'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'When Chuck Norris pummels the shit outta you, get yourself to a hospital, and tell ''em Chuck sent you - they''ve got a special ward all ready to go.',
    'https://picsum.photos/592/360',
    '2020-02-27 15:08:18.800'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ditto',
    'Pokemon  normal',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
    '2021-04-05 19:19:52.387'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'charizard',
    'Pokemon  fire flying',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
    '2022-12-18 22:58:27.468'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Attend a Renaissance Festival',
    NULL,
    '2022-07-23 07:31:38.994'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Around The World',
    'What goes around the world in 3 seconds, but stays in your hand?




A Yo-Yo.',
    'https://picsum.photos/100/294',
    '2023-05-13 15:58:46.301'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'When Chuck Norris inhales a helium balloon his voice will sound like Barry White in slo-mo for the next nine hours.',
    NULL,
    '2021-10-22 08:34:10.423'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'grimer',
    'Pokemon  poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png',
    '2020-05-27 07:02:20.651'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'kabutops',
    'Pokemon  rock water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png',
    '2021-02-27 07:40:17.472'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Who was Jesus betrayed by?




Judas Iscariot',
    'https://picsum.photos/414/529',
    '2021-03-23 20:48:39.012'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Keeping your car tuned up is a good way to save on gas. A car that is tuned up is 9% more efficient on gasoline.',
    NULL,
    '2021-11-07 21:56:20.714'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Cat Cora',
    'My humanitarian work evolved from being with my family. My mom, my dad, they really set a great example for giving back. My mom was a nurse, my dad was a school teacher. But my mom did a lot of things for geriatrics and elderly people. She would do home visits for free.',
    NULL,
    '2022-05-13 03:41:56.079'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'mr-mime',
    'Pokemon  psychic fairy',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png',
    '2020-07-08 18:35:37.937'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Michelle Malkin',
    'Situational unawareness in the private marketplace or on the battlefield will cost you your livelihood or your life. In the Age of Obama, however, such willful ignorance is a job prerequisite. The less you know the better.',
    NULL,
    '2020-05-20 19:54:42.332'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The longest one-syllable word in the English language is "screeched."',
    'https://picsum.photos/610/698',
    '2020-01-25 04:25:18.229'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Aging',
    'In the morning i have 4 legs In the afternoon I have 2 legs  In the evening I have 3 legs What am I




a baby(4 legs) an adult(2 legs) an old person with a cane(3 legs)',
    NULL,
    '2022-03-27 01:24:42.918'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Victor Hugo',
    'Religions do a useful thing: they narrow God to the limits of man. Philosophy replies by doing a necessary thing: it elevates man to the plane of God.',
    'https://picsum.photos/566/370',
    '2022-07-05 22:20:09.181'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'weezing',
    'Pokemon  poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png',
    '2020-10-23 12:33:34.140'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Visit the Titanic Museum in Belfast',
    NULL,
    '2023-07-19 07:26:08.427'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'In 1961, Italian artist Piero Manzoni packed his feces in cans, signed and mounted them, and then sold them as art',
    NULL,
    '2020-12-30 09:58:47.134'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Last night I had a dream I was a muffler. I woke up exhausted.',
    NULL,
    '2023-02-16 15:22:36.655'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris can beat an Englishman in an impersonating British accents.',
    'https://picsum.photos/269/285',
    '2021-04-24 00:21:19.002'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dignissim diam quis enim lobortis scelerisque ferm',
    'Consectetur a erat nam at lectus. Amet justo donec enim diam vulputate ut pharetra. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Porttitor rhoncus dolor purus non enim. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Augue ut lectus arcu bibendum. Lectus proin nibh nisl condimentum id.
',
    NULL,
    '2020-09-23 19:09:28.699'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Desert snails can stay in their shell for up to three years',
    'https://picsum.photos/656/236',
    '2023-05-28 14:30:24.927'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Eat Korean BBQ in Korea',
    'https://picsum.photos/531/136',
    '2019-12-14 14:29:05.344'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Give a speech at a friend’s wedding',
    NULL,
    '2019-12-08 00:34:28.766'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Booga Booga',
    'A man is in a cement house. There are no windows, no doors, and everything is cement(even the floor) he only things in there are a table, a calendar, and a mirror. how does he get out?




he looked in the mirror, he''s seen what he saw, he took the saw, cut the table in half, two haves make a whole, he put the hole in the wall and walked out.',
    NULL,
    '2021-09-08 06:49:32.050'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from William F. Buckley, Jr.',
    'The best defense against usurpatory government is an assertive citizenry.',
    'https://picsum.photos/433/227',
    '2021-11-27 10:46:42.824'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What''s a lawyer''s favorite drink? Subpoena colada.',
    NULL,
    '2020-07-03 09:17:59.707'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'There are over 9 million beef and dairy cattle in New Zealand',
    NULL,
    '2020-04-05 05:40:36.689'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Take a Quokka selfie',
    NULL,
    '2021-08-20 08:38:06.418'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'slowbro',
    'Pokemon  water psychic',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png',
    '2020-12-22 04:34:54.054'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Mikhail Baryshnikov',
    'Your body actually reminds you about your age and your injuries - the body has a stronger memory than your mind.',
    NULL,
    '2021-04-10 01:07:41.465'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Learn calligraphy',
    NULL,
    '2020-05-18 12:26:58.376'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'starmie',
    'Pokemon  water psychic',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png',
    '2022-01-26 19:24:19.087'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'A single death is a tragedy; Chuck Norris roundhouse kick to the face is a statistic.',
    NULL,
    '2020-10-18 02:19:26.063'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Perform as a clown at a party',
    NULL,
    '2021-07-17 05:08:11.881'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Ac auctor augue mauris augue neque gravida in ferm',
    'Vitae auctor eu augue ut lectus arcu bibendum at varius. Massa tincidunt dui ut ornare lectus sit amet est. Donec ac odio tempor orci dapibus ultrices in. Semper quis lectus nulla at volutpat. Est sit amet facilisis magna etiam tempor. Lacus sed viverra tellus in hac habitasse platea. Ultrices neque ornare aenean euismod elementum nisi. Elit scelerisque mauris pellentesque pulvinar pellentesque. Elit sed vulputate mi sit. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Feugiat in ante metus dictum at tempor commodo ullamcorper. Condimentum lacinia quis vel eros donec ac odio tempor.
Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Lacinia at quis risus sed. Velit egestas dui id ornare arcu odio ut sem nulla. Lacus vestibulum sed arcu non odio euismod lacinia. Imperdiet nulla malesuada pellentesque elit. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt. Adipiscing bibendum est ultricies integer quis auctor elit.
Blandit volutpat maecenas volutpat blandit. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Aliquet enim tortor at auctor urna nunc id cursus metus. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Enim ut tellus elementum sagittis vitae et leo. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Elementum integer enim neque volutpat ac tincidunt vitae. Id leo in vitae turpis massa sed elementum. Volutpat sed cras ornare arcu dui vivamus arcu felis. Suspendisse in est ante in. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Elit eget gravida cum sociis natoque. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Purus faucibus ornare suspendisse sed. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Ac turpis egestas integer eget aliquet.
Purus semper eget duis at tellus at urna condimentum. Amet justo donec enim diam vulputate ut pharetra sit. Pretium lectus quam id leo in vitae turpis massa sed. Feugiat nibh sed pulvinar proin gravida. Eget velit aliquet sagittis id. Nisl pretium fusce id velit. Imperdiet proin fermentum leo vel orci porta non pulvinar. Proin gravida hendrerit lectus a. Nibh tortor id aliquet lectus. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Amet est placerat in egestas erat imperdiet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Eu tincidunt tortor aliquam nulla facilisi cras. Tellus at urna condimentum mattis pellentesque. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Eu sem integer vitae justo. Tempor orci eu lobortis elementum nibh tellus molestie nunc non.
',
    'https://picsum.photos/270/365',
    '2023-05-14 04:44:38.633'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Did you hear about the claustrophobic astronaut? He just wanted a bit more space.',
    NULL,
    '2021-01-30 21:35:50.157'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Stanley Kubricks Full Metal Jacket was filmed in what Location




London''s Dockland',
    NULL,
    '2020-09-25 02:29:27.482'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'paras',
    'Pokemon  bug grass',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png',
    '2023-04-21 07:55:41.694'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What happened when the blue ship and the red ship collided at sea? Their crews were marooned.',
    NULL,
    '2022-03-11 04:32:26.149'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Eget felis eget nunc lobortis mattis aliquam fauci',
    'Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Sit amet nulla facilisi morbi tempus. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Sodales neque sodales ut etiam sit amet nisl purus. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Nisi lacus sed viverra tellus in hac habitasse. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Tincidunt eget nullam non nisi. Cursus risus at ultrices mi. Volutpat est velit egestas dui id ornare. Sagittis nisl rhoncus mattis rhoncus. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Fermentum leo vel orci porta non pulvinar neque. Quisque sagittis purus sit amet volutpat. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Porttitor massa id neque aliquam vestibulum morbi blandit. At quis risus sed vulputate odio. Nisi vitae suscipit tellus mauris a diam maecenas sed enim.
Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Blandit massa enim nec dui nunc. Ultrices vitae auctor eu augue ut. Sagittis purus sit amet volutpat consequat mauris nunc congue. Viverra suspendisse potenti nullam ac tortor vitae purus. Aliquet enim tortor at auctor urna nunc id. Orci sagittis eu volutpat odio facilisis mauris sit amet. Sem integer vitae justo eget magna fermentum iaculis eu. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Nec ullamcorper sit amet risus nullam. Malesuada bibendum arcu vitae elementum. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Pretium quam vulputate dignissim suspendisse. Gravida quis blandit turpis cursus in hac habitasse. Odio tempor orci dapibus ultrices in iaculis nunc sed. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Leo urna molestie at elementum eu facilisis sed odio.
Commodo elit at imperdiet dui accumsan. Bibendum ut tristique et egestas. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Diam vulputate ut pharetra sit amet aliquam id diam. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Facilisi morbi tempus iaculis urna id. Imperdiet sed euismod nisi porta lorem. Diam maecenas sed enim ut sem viverra aliquet eget. Varius duis at consectetur lorem donec massa. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Massa ultricies mi quis hendrerit. Semper auctor neque vitae tempus quam pellentesque nec nam. Feugiat in ante metus dictum. Gravida neque convallis a cras semper auctor neque.
Eget sit amet tellus cras adipiscing enim eu turpis. Amet facilisis magna etiam tempor. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Purus viverra accumsan in nisl nisi. Vitae elementum curabitur vitae nunc sed velit. Sed lectus vestibulum mattis ullamcorper velit. Consequat interdum varius sit amet mattis. Amet justo donec enim diam. Sed vulputate odio ut enim blandit volutpat maecenas. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Habitant morbi tristique senectus et netus et malesuada. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales. Congue mauris rhoncus aenean vel elit scelerisque. Id neque aliquam vestibulum morbi blandit cursus. Nunc sed augue lacus viverra vitae congue eu consequat ac. Leo vel orci porta non pulvinar neque. Consequat interdum varius sit amet mattis.
',
    NULL,
    '2021-01-23 09:35:01.098'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Don''t Break It',
    'What''s so fragile that even when you say its name, you break it?




Silence',
    NULL,
    '2023-02-27 11:38:07.278'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Mount Vernon,George Washington''s home for over forty years,overlooks what U.S. river?




Potomac',
    NULL,
    '2023-07-16 03:26:38.549'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'graveler',
    'Pokemon  rock ground',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png',
    '2023-08-20 20:36:12.126'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Mauris commodo quis imperdiet massa tincidunt nunc',
    'Purus semper eget duis at tellus at urna condimentum. Amet justo donec enim diam vulputate ut pharetra sit. Pretium lectus quam id leo in vitae turpis massa sed. Feugiat nibh sed pulvinar proin gravida. Eget velit aliquet sagittis id. Nisl pretium fusce id velit. Imperdiet proin fermentum leo vel orci porta non pulvinar. Proin gravida hendrerit lectus a. Nibh tortor id aliquet lectus. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Amet est placerat in egestas erat imperdiet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Eu tincidunt tortor aliquam nulla facilisi cras. Tellus at urna condimentum mattis pellentesque. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Eu sem integer vitae justo. Tempor orci eu lobortis elementum nibh tellus molestie nunc non.
Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Lacinia at quis risus sed. Velit egestas dui id ornare arcu odio ut sem nulla. Lacus vestibulum sed arcu non odio euismod lacinia. Imperdiet nulla malesuada pellentesque elit. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt. Adipiscing bibendum est ultricies integer quis auctor elit.
Sollicitudin nibh sit amet commodo. Purus sit amet luctus venenatis lectus. Dolor sit amet consectetur adipiscing elit ut aliquam purus. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Aliquet lectus proin nibh nisl condimentum. Laoreet non curabitur gravida arcu. Consectetur libero id faucibus nisl tincidunt eget nullam. Pretium viverra suspendisse potenti nullam ac tortor vitae. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Sed enim ut sem viverra aliquet. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Odio euismod lacinia at quis risus sed. Amet justo donec enim diam vulputate. Montes nascetur ridiculus mus mauris vitae ultricies leo integer.
Praesent semper feugiat nibh sed pulvinar proin. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Urna molestie at elementum eu facilisis sed odio morbi quis. Adipiscing commodo elit at imperdiet dui accumsan. Ac felis donec et odio pellentesque diam. Sapien pellentesque habitant morbi tristique senectus et netus et. Interdum velit euismod in pellentesque massa placerat. Id diam maecenas ultricies mi eget mauris pharetra et. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Ultricies tristique nulla aliquet enim tortor. Non curabitur gravida arcu ac. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus.
',
    'https://picsum.photos/263/275',
    '2020-09-07 13:30:06.490'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Consectetur a erat nam at lectus. Amet justo donec',
    'Leo vel orci porta non pulvinar neque. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Consectetur libero id faucibus nisl tincidunt eget. Morbi tristique senectus et netus. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Sit amet nulla facilisi morbi tempus iaculis urna. Suscipit tellus mauris a diam maecenas. In aliquam sem fringilla ut. Tortor at risus viverra adipiscing. Scelerisque eleifend donec pretium vulputate sapien nec. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Mi tempus imperdiet nulla malesuada pellentesque elit. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Nam at lectus urna duis convallis.
Nibh nisl condimentum id venenatis a condimentum vitae sapien. Laoreet sit amet cursus sit. Commodo ullamcorper a lacus vestibulum sed arcu. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Pharetra convallis posuere morbi leo urna. Id volutpat lacus laoreet non curabitur gravida arcu ac. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Lorem mollis aliquam ut porttitor. A arcu cursus vitae congue. Nisl purus in mollis nunc sed id semper. Convallis a cras semper auctor neque. Lectus arcu bibendum at varius. Facilisis sed odio morbi quis commodo odio aenean sed. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Vel orci porta non pulvinar neque laoreet suspendisse. Feugiat nisl pretium fusce id. Adipiscing bibendum est ultricies integer quis auctor.
',
    NULL,
    '2020-07-18 02:00:13.382'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What’s the difference between a wizard who raises the undead and a sexy vampire? One is a necromancer and the other is a neck romancer.',
    NULL,
    '2021-12-06 15:47:19.769'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The average American eats 35,000 cookies in his/her lifetime',
    NULL,
    '2021-11-02 22:33:01.807'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Gro Harlem Brundtland',
    'You cannot achieve environmental security and human development without addressing the basic issues of health and nutrition.',
    'https://picsum.photos/336/318',
    '2022-08-09 17:33:12.174'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Go horseback riding',
    'https://picsum.photos/183/186',
    '2022-03-09 02:53:40.823'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Mummy powder was once thought to be a cure for all remedies. English men used to carry the powder with them in a tiny bag wherever they went',
    NULL,
    '2022-06-25 11:36:44.333'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Venus is the only planet that rotates clockwise',
    NULL,
    '2021-02-09 02:49:00.636'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'How does cereal pay its bills? With Chex.',
    NULL,
    '2020-05-12 01:40:33.293'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris was close to death. She nerver recovered.',
    'https://picsum.photos/602/241',
    '2021-04-15 09:15:10.830'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Roughly 44% of junk mail is thrown away unopened',
    NULL,
    '2021-07-07 21:16:53.641'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'beedrill',
    'Pokemon  bug poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
    '2022-06-15 03:50:03.019'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What do you call a fish with no eyes? Fsh.',
    'https://picsum.photos/175/130',
    '2020-05-01 02:25:41.886'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Vel turpis nunc eget lorem dolor sed viverra ipsum',
    'Vitae auctor eu augue ut lectus arcu bibendum at varius. Massa tincidunt dui ut ornare lectus sit amet est. Donec ac odio tempor orci dapibus ultrices in. Semper quis lectus nulla at volutpat. Est sit amet facilisis magna etiam tempor. Lacus sed viverra tellus in hac habitasse platea. Ultrices neque ornare aenean euismod elementum nisi. Elit scelerisque mauris pellentesque pulvinar pellentesque. Elit sed vulputate mi sit. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Feugiat in ante metus dictum at tempor commodo ullamcorper. Condimentum lacinia quis vel eros donec ac odio tempor.
Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Massa enim nec dui nunc. Netus et malesuada fames ac turpis egestas. Gravida rutrum quisque non tellus orci. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Amet aliquam id diam maecenas ultricies mi eget mauris. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Ultricies tristique nulla aliquet enim. Urna et pharetra pharetra massa. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit.
Sem viverra aliquet eget sit amet tellus cras. Proin nibh nisl condimentum id venenatis a. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Viverra vitae congue eu consequat ac felis donec et odio. Ultrices vitae auctor eu augue ut. Leo integer malesuada nunc vel risus. Sollicitudin tempor id eu nisl nunc mi. Habitant morbi tristique senectus et netus et malesuada fames ac. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Diam vel quam elementum pulvinar. Faucibus nisl tincidunt eget nullam. Lacus viverra vitae congue eu consequat. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Diam sit amet nisl suscipit. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.
Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Quis vel eros donec ac odio tempor orci. Augue eget arcu dictum varius duis at consectetur lorem donec. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Duis at tellus at urna condimentum mattis pellentesque id nibh. Sed nisi lacus sed viverra tellus. Tortor aliquam nulla facilisi cras fermentum odio eu. Vulputate mi sit amet mauris commodo quis imperdiet massa. Vulputate enim nulla aliquet porttitor lacus luctus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Venenatis tellus in metus vulputate eu. Neque sodales ut etiam sit amet. Id interdum velit laoreet id donec ultrices tincidunt arcu. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Viverra vitae congue eu consequat ac. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Volutpat diam ut venenatis tellus in metus vulputate eu. Nibh tellus molestie nunc non.
',
    NULL,
    '2020-01-27 05:52:37.545'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Water',
    'What can you feed all day long? but if you give it water ill die?




a fire',
    'https://picsum.photos/201/688',
    '2020-08-16 23:39:47.772'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Optimis Prime transforms back into Chuck Norris.',
    NULL,
    '2023-10-28 02:49:29.455'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Hitchcock appears in a newspaper in Lifeboat who wrote book




John Steinbeck',
    NULL,
    '2023-09-24 20:57:28.902'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'The Ming Ity',
    'There are a three words ending in ity that you use often. Two are City and electricity. There are three words in the english language. The third word is a word you use every day. If you heard closely, i already told you the answer. what is the third word?




Language. The electricity, ity, and city don''t mean anything. I said there are three words in the english language. and there are, count 1. the 2. English 3. Language so language is the third word.',
    NULL,
    '2020-10-13 13:54:44.588'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'chansey',
    'Pokemon  normal',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png',
    '2022-05-22 14:17:33.496'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'nidoking',
    'Pokemon  poison ground',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png',
    '2020-07-18 19:29:11.727'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'See the Nazca Lines from above',
    NULL,
    '2021-02-27 20:19:55.845'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The world record for rocking non-stop in a rocking chair is 480 hours held by Dennis Easterling, of Atlanta, Georgia',
    NULL,
    '2019-12-25 17:28:40.427'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'As opposed to a ring bearer,the traditional job of a wedding page boy is to do what?




Carry The Bride''s Train',
    NULL,
    '2020-12-03 03:22:19.509'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Eget sit amet tellus cras adipiscing enim eu. Dui ',
    'Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Tristique senectus et netus et malesuada fames ac. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Integer enim neque volutpat ac. Euismod nisi porta lorem mollis aliquam ut. Eros in cursus turpis massa tincidunt. Purus viverra accumsan in nisl nisi scelerisque eu. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Nam aliquam sem et tortor. Sit amet purus gravida quis blandit turpis. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Amet massa vitae tortor condimentum.
Nisl pretium fusce id velit ut tortor pretium viverra. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Volutpat diam ut venenatis tellus in metus. Commodo viverra maecenas accumsan lacus. Elit at imperdiet dui accumsan sit amet nulla facilisi. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Eu scelerisque felis imperdiet proin. Arcu bibendum at varius vel pharetra vel turpis nunc. Orci a scelerisque purus semper eget. Elementum sagittis vitae et leo duis ut diam.
Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Quis hendrerit dolor magna eget est lorem ipsum dolor. In aliquam sem fringilla ut. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Facilisis leo vel fringilla est. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Volutpat lacus laoreet non curabitur. Cum sociis natoque penatibus et magnis dis. Augue mauris augue neque gravida in fermentum et sollicitudin ac. Nunc lobortis mattis aliquam faucibus. Arcu felis bibendum ut tristique et. Amet purus gravida quis blandit turpis cursus in hac habitasse. In fermentum et sollicitudin ac orci phasellus. Malesuada fames ac turpis egestas integer eget.
Et pharetra pharetra massa massa ultricies mi quis hendrerit. Non odio euismod lacinia at quis risus sed vulputate. Vulputate sapien nec sagittis aliquam. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Tristique et egestas quis ipsum. Dui ut ornare lectus sit amet. Ac feugiat sed lectus vestibulum mattis. Enim tortor at auctor urna nunc. Feugiat sed lectus vestibulum mattis ullamcorper. Eget mauris pharetra et ultrices neque. Euismod elementum nisi quis eleifend quam. Volutpat odio facilisis mauris sit amet massa. Ultricies lacus sed turpis tincidunt id aliquet risus. Egestas diam in arcu cursus euismod quis.
',
    'https://picsum.photos/605/168',
    '2023-06-10 12:11:54.839'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Police detectives have used snapping turtles to help them locate dead bodies',
    NULL,
    '2023-01-13 14:19:59.395'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Vel turpis nunc eget lorem dolor sed viverra ipsum',
    'Tincidunt vitae semper quis lectus. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Convallis aenean et tortor at risus viverra adipiscing at in. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Massa eget egestas purus viverra accumsan in nisl nisi. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Posuere sollicitudin aliquam ultrices sagittis. Dolor purus non enim praesent elementum. Diam in arcu cursus euismod quis viverra nibh. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Dolor sed viverra ipsum nunc aliquet bibendum. Integer quis auctor elit sed vulputate mi. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Dui sapien eget mi proin sed libero enim sed. Neque sodales ut etiam sit amet nisl purus in.
Leo vel orci porta non pulvinar neque. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Consectetur libero id faucibus nisl tincidunt eget. Morbi tristique senectus et netus. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Sit amet nulla facilisi morbi tempus iaculis urna. Suscipit tellus mauris a diam maecenas. In aliquam sem fringilla ut. Tortor at risus viverra adipiscing. Scelerisque eleifend donec pretium vulputate sapien nec. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Mi tempus imperdiet nulla malesuada pellentesque elit. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Nam at lectus urna duis convallis.
Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Lacinia at quis risus sed. Velit egestas dui id ornare arcu odio ut sem nulla. Lacus vestibulum sed arcu non odio euismod lacinia. Imperdiet nulla malesuada pellentesque elit. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt. Adipiscing bibendum est ultricies integer quis auctor elit.
Cras semper auctor neque vitae tempus quam pellentesque nec. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Eu augue ut lectus arcu. Purus sit amet volutpat consequat mauris. Amet facilisis magna etiam tempor orci eu lobortis. Diam donec adipiscing tristique risus nec feugiat in fermentum. Consequat nisl vel pretium lectus quam id. Vivamus at augue eget arcu dictum varius duis at. Rutrum quisque non tellus orci. Felis eget velit aliquet sagittis id consectetur. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Massa sed elementum tempus egestas sed sed risus pretium. Tristique senectus et netus et malesuada fames. Leo vel fringilla est ullamcorper eget nulla facilisi. Mauris in aliquam sem fringilla ut morbi. Nibh tellus molestie nunc non blandit. Egestas sed tempus urna et pharetra pharetra massa massa. Malesuada nunc vel risus commodo viverra maecenas. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis.
',
    NULL,
    '2022-12-27 22:28:04.813'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris went on deal or no deal... the banker offered him 100 billion when he got all the top numbers on his fisrt round. he then raised it by 10 times when Chuck Norris said no.... the banker was then killed by picking up the rong phone',
    NULL,
    '2022-06-08 15:38:04.889'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris makes Saudia Arabia sell him gasoline for 3 cents per gallon. Then at the end of each month they rebate him at the rate of $100 per gallon purchased.',
    NULL,
    '2020-11-07 21:55:04.629'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'OLD',
    'What goes up but never comes down?




AGE.',
    NULL,
    '2023-03-19 06:19:40.719'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Pebbles cereal was actually named after the shape of the cereal and not the Pebbles Flintstone character',
    NULL,
    '2020-10-12 04:22:38.864'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'The most popular chocolate bar in the United Kingdom for the last 15 years has been Kit Kat',
    NULL,
    '2022-09-17 02:40:50.651'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Eget sit amet tellus cras adipiscing enim eu. Dui ',
    'Leo vel orci porta non pulvinar neque. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Consectetur libero id faucibus nisl tincidunt eget. Morbi tristique senectus et netus. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Sit amet nulla facilisi morbi tempus iaculis urna. Suscipit tellus mauris a diam maecenas. In aliquam sem fringilla ut. Tortor at risus viverra adipiscing. Scelerisque eleifend donec pretium vulputate sapien nec. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Mi tempus imperdiet nulla malesuada pellentesque elit. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Nam at lectus urna duis convallis.
Ut ornare lectus sit amet est placerat. Eget nulla facilisi etiam dignissim diam quis enim. Penatibus et magnis dis parturient montes. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Odio pellentesque diam volutpat commodo. Duis ut diam quam nulla porttitor massa id. Diam donec adipiscing tristique risus. Sed blandit libero volutpat sed cras ornare. Tincidunt lobortis feugiat vivamus at augue eget arcu. Arcu dui vivamus arcu felis bibendum ut tristique. Dapibus ultrices in iaculis nunc sed augue lacus. Risus nullam eget felis eget nunc lobortis.
',
    NULL,
    '2020-01-15 12:09:20.875'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'Name the band - songs include "Heart of Glass, The Tide is High"?




Blondie',
    NULL,
    '2021-12-23 22:33:25.038'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Lectus magna fringilla urna porttitor rhoncus dolo',
    'Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Consequat semper viverra nam libero justo laoreet sit amet cursus. Morbi quis commodo odio aenean. Ut sem nulla pharetra diam. Gravida cum sociis natoque penatibus et magnis. Eu sem integer vitae justo. Amet dictum sit amet justo donec enim diam vulputate ut. Eu consequat ac felis donec et. Sed vulputate odio ut enim. Vitae aliquet nec ullamcorper sit amet risus nullam.
Cras semper auctor neque vitae tempus quam pellentesque nec. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Eu augue ut lectus arcu. Purus sit amet volutpat consequat mauris. Amet facilisis magna etiam tempor orci eu lobortis. Diam donec adipiscing tristique risus nec feugiat in fermentum. Consequat nisl vel pretium lectus quam id. Vivamus at augue eget arcu dictum varius duis at. Rutrum quisque non tellus orci. Felis eget velit aliquet sagittis id consectetur. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Massa sed elementum tempus egestas sed sed risus pretium. Tristique senectus et netus et malesuada fames. Leo vel fringilla est ullamcorper eget nulla facilisi. Mauris in aliquam sem fringilla ut morbi. Nibh tellus molestie nunc non blandit. Egestas sed tempus urna et pharetra pharetra massa massa. Malesuada nunc vel risus commodo viverra maecenas. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis.
',
    'https://picsum.photos/243/438',
    '2021-10-19 00:08:44.880'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Swim in a lake',
    NULL,
    '2020-09-25 12:17:06.117'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Climb the Stairway to Heaven',
    NULL,
    '2022-04-14 01:09:28.057'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What kind of jewelry do rabbits wear? 14 carrot gold.',
    'https://picsum.photos/336/598',
    '2023-02-16 13:50:29.826'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Did you hear about the kidnapping at school. It''s ok he woke up.',
    NULL,
    '2023-01-10 06:28:48.142'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'What Is Measured In Farads




Cpacitance',
    NULL,
    '2023-03-12 18:00:14.800'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'Why didn’t the astronaut come home to his wife? He needed his space.',
    NULL,
    '2023-06-28 15:51:01.888'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'vaporeon',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png',
    '2022-02-27 08:37:34.332'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'venomoth',
    'Pokemon  bug poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png',
    '2019-12-15 11:04:53.991'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    '38% of Americans eat breakfast everyday',
    NULL,
    '2023-05-16 16:11:22.247'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'In the United States, approximately seven billion pounds of chocolate and candy are manufactured each year',
    NULL,
    '2022-11-21 16:38:55.779'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'seadra',
    'Pokemon  water',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png',
    '2022-06-26 11:26:27.197'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Nibh sit amet commodo nulla. Placerat vestibulum l',
    'Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Arcu felis bibendum ut tristique et egestas. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Quisque sagittis purus sit amet volutpat consequat mauris. Mattis vulputate enim nulla aliquet porttitor. Sit amet facilisis magna etiam tempor orci eu lobortis. Erat nam at lectus urna duis convallis convallis. Sit amet est placerat in. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Amet justo donec enim diam vulputate ut. Adipiscing vitae proin sagittis nisl rhoncus mattis. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Felis imperdiet proin fermentum leo vel orci porta. Consequat ac felis donec et odio pellentesque.
Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Elit eget gravida cum sociis natoque penatibus et. Aliquet nibh praesent tristique magna sit amet purus gravida. Sodales ut eu sem integer vitae. Lectus arcu bibendum at varius vel. Eget mi proin sed libero. Turpis egestas sed tempus urna et pharetra. Ut tellus elementum sagittis vitae et leo. Odio ut enim blandit volutpat. Massa tincidunt dui ut ornare lectus sit amet est placerat. Cursus mattis molestie a iaculis. Arcu dictum varius duis at consectetur lorem donec. In massa tempor nec feugiat nisl pretium.
Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Sagittis id consectetur purus ut faucibus pulvinar elementum. Accumsan tortor posuere ac ut. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Purus in massa tempor nec feugiat nisl. Felis eget nunc lobortis mattis. Amet massa vitae tortor condimentum lacinia quis vel. Sed cras ornare arcu dui vivamus arcu. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Integer vitae justo eget magna fermentum iaculis eu. Lorem mollis aliquam ut porttitor. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Vulputate dignissim suspendisse in est ante. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Nulla facilisi nullam vehicula ipsum a arcu cursus. Metus dictum at tempor commodo ullamcorper a lacus vestibulum.
',
    NULL,
    '2023-04-21 07:13:32.800'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Drink soju in South Korea',
    NULL,
    '2020-05-08 07:00:25.619'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Quote from Donella Meadows',
    'A knowledgeable and courageous U.S. president could help enormously in leading the world''s nations toward saving the climate.',
    'https://picsum.photos/660/190',
    '2019-12-18 06:40:56.829'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Participate in a Zombie Experience',
    NULL,
    '2023-06-30 22:37:26.345'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Chuck Norris is so strong ...',
    'Chuck Norris has eyes in the back of his head. Yeah,literally - in the back of his head.',
    NULL,
    '2020-03-07 06:52:09.352'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'See the tulips in bloom in Holland',
    'https://picsum.photos/122/590',
    '2021-10-08 18:09:21.936'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'starmie',
    'Pokemon  water psychic',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png',
    '2020-01-01 01:41:45.698'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What''s the difference between a well-dressed man on a unicycle and a poorly-dressed man on a bicycle? Attire.',
    NULL,
    '2020-10-05 23:57:59.365'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'Tomatoes and cucumbers are fruits',
    NULL,
    '2021-07-07 15:57:26.646'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'tentacruel',
    'Pokemon  water poison',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png',
    '2023-05-19 23:01:34.075'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Do you know?',
    'In September of 1994, 852 people died when the ferry Estonia sank in what sea




Baltic Sea',
    NULL,
    '2020-12-24 19:29:54.566'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Dad joke',
    'What''s brown and sticky? A stick.',
    'https://picsum.photos/135/326',
    '2021-04-13 05:06:55.280'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'ToDo',
    'Receive a love letter',
    'https://picsum.photos/191/361',
    '2022-12-03 08:21:04.265'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'A superstition in baseball is to never lend your bat to anyone or you will be jinxed',
    NULL,
    '2019-12-20 08:57:30.640'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Egg Or Hen',
    'Which came first, the chicken or the egg?




The egg, since Dinosaurs laid eggs long before there were chickens.',
    NULL,
    '2021-08-03 21:09:51.452'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Did you know?',
    'There is a restaurant in Stockholm that only offers all-garlic products. They even have a garlic cheesecake',
    'https://picsum.photos/661/558',
    '2022-08-13 05:41:01.246'::timestamp,
    (SELECT user_id FROM users.users OFFSET floor(random() * 100) LIMIT 1)
),
(
    'Two Colored Water',
    'in a pot there is two colored water.  what is it?




an egg',
    NULL,
    '2022-07-03 13:02:12.681'::timestamp,
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
