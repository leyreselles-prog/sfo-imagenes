window.db2025 = { records: [] };
    window.db2026 = { records: [] };
    window.dbStock = {}; 
    window.dbStockSizes = {}; 
    window.productMaster = {}; 
    window.articlesMaster = {};
    window.customPromoList = []; 
    window.s26NewRefsList = [
        { art: '126020310947', desc: 'CAMISA FOREST TENCEL LINEN AZUL DENIM' },
        { art: '126020310281', desc: 'CAMISA ESTRUCTURA PINPOINT VERDE GRISACEO' },
        { art: '126020310451', desc: 'CAMISA LISSOME LI-CO VERDE BOTELLA' },
        { art: '126092480128', desc: 'BAÑADOR LOGO CORAL' },
        { art: '126020310266', desc: 'CAMISA ESTRUCTURA PINPOINT ROSA PALO' },
        { art: '126061840926', desc: 'POLO LICO TEJA' },
        { art: '126020490788', desc: 'CAMISA LI-CO POCKET GRIS HIELO' },
        { art: '126020490743', desc: 'CAMISA LI-CO POCKET VERDE GRISACEO' },
        { art: '126092490541', desc: 'BAÑADOR PAISLEY MARINO' },
        { art: '126092510859', desc: 'BAÑADOR LISO VERDE OSCURO' },
        { art: '126092510981', desc: 'BAÑADOR STRIPES VERDE GRISACEO' },
        { art: '126092510996', desc: 'BAÑADOR STRIPES DENIM' },
        { art: '126194010341', desc: 'ALPARGATA SC85 MARINO' },
        { art: '126020462916', desc: 'CAMISA POLERA DOPO BLANCO' },
        { art: '126020310355', desc: 'CAMISA SARGA KHAKI' },
        { art: '225061800116', desc: 'POLO CLASSIC BLANCO' },
        { art: '225061800141', desc: 'POLO CLASSIC MARINO' },
        { art: '225061800151', desc: 'POLO CLASSIC VERDE BOTELLA' },
        { art: '225061800183', desc: 'POLO CLASSIC GRIS' },
        { art: '225070830196', desc: 'SOBRECAMISA DENIM DENIM' },
        { art: '126020310956', desc: 'CAMISA FOREST TENCEL LINEN OCEANO' },
        { art: '126020313841', desc: 'CAMISA OXFORD RAYAS MARINO' },
        { art: '126020350191', desc: 'CAMISA OXFORD RAYAS MALVA' },
        { art: '126020492096', desc: 'CAMISA POLERA POCKET DENIM' },
        { art: '126020323768', desc: 'CAMISA CONFORT TENCEL ROSA' },
        { art: '126092500420', desc: 'BAÑADOR IKAT NARANJA' },
        { art: '126092501828', desc: 'BAÑADOR LISBOA CORAL' },
        { art: '126092511028', desc: 'BAÑADOR CASUAL LISO CORAL' },
        { art: 'S25040443', desc: 'CAMISA POLERA LISSOME LI-CO CELESTE' },
        { art: '126020310416', desc: 'CAMISA LISSOME LI-CO BLANCO' },
        { art: '126020310443', desc: 'CAMISA LISSOME LI-CO CELESTE' }
    ];
    
        window.noRefsList = [
            '225031411541', '225061800916', '225061800941', 'ES21110152', 'ES21110161', 'ES21110443', 'ES21110447', 'ES21110541', 'ES21110740', 'ES22110441',
            'ES22110596', 'ES23110128', 'ES23110199', 'ES23110328', 'ES23110449', 'ES23110541', 'ES23110799', 'ES24110161', 'ES24110196', 'ES24110241',
            'ES24110252', 'ES24110340', 'ES24110357', 'ES24110428', 'ES24110541', 'ES25110128', 'ES25110240', 'ES25110343', 'ES25110396', 'ES25110441',
            'ES25110443', 'ES25110541', 'ES25110555', 'ES25110628', 'ES25110757', 'OI22040141', 'OI22040265', 'OI22040465', 'OI22050126', 'OI22050141',
            'OI22050175', 'OI22050183', 'OI22050198', 'OI23040541', 'OI23040551', 'OI23040556', 'OI23140155', 'OI23140156', 'OI23870283', 'OI24030259',
            'OI24050156', 'PV23040128', 'PV23040343', 'PV23040356', 'PV23040555', 'PV23120171', 'PV24040316', 'PV24040325', 'PV24040465', 'S15540002',
            'S16010716', 'S16721202', 'S16741801', 'S16741804', 'S17010516', 'S17020229', 'S17050304', 'S17120308', 'S17160129', 'S18010229',
            'S18010410', 'S18042614', 'S18043002', 'S18060116', 'S18120306', 'S18160210', 'S18820132', 'S18830288', 'S19020241', 'S19040416',
            'S19040716', 'S19050256', 'S19120161', 'S19120261', 'S19120397', 'S19120398', 'S19120399', 'S19610741', 'S20010716', 'S20010816',
            'S20020216', 'S20020385', 'S20040147', 'S20043096', 'S20043416', 'S20043440', 'S20043443', 'S20043468', 'S20043500', 'S20043540',
            'S20043543', 'S20043565', 'S20043568', 'S20111149', 'S20111357', 'S20120855', 'S20120955', 'S20160141', 'S20160155', 'S20160172',
            'S20160241', 'S20200541', 'S20200555', 'S20520347', 'S20520361', 'S20610129', 'S20610152', 'S20610168', 'S20610349', 'S20610564',
            'S20610657', 'S20610856', 'S20710355', 'S20710447', 'S20710471', 'S20730355', 'S20730541', 'S20800450', 'S21010516', 'S21011130',
            'S21020537', 'S21020696', 'S21020768', 'S21040156', 'S21040257', 'S21040597', 'S21042696', 'S21110528', 'S21110830', 'S21110957',
            'S21111255', 'S21120272', 'S21120355', 'S21160171', 'S21160247', 'S21160259', 'S21160341', 'S21520456', 'S21540116', 'S21550256',
            'S21610130', 'S21610141', 'S21610168', 'S21610356', 'S21611096', 'S21710141', 'S21710155', 'S21710416', 'S21721251', 'S22010118',
            'S22010196', 'S22010456', 'S22010716', 'S22010741', 'S22011038', 'S22011066', 'S22011116', 'S22030116', 'S22030141', 'S22030156',
            'S22030241', 'S22030256', 'S22030268', 'S22030316', 'S22030509', 'S22030630', 'S22030659', 'S22040116', 'S22040265', 'S22040516',
            'S22040541', 'S22040588', 'S22040665', 'S22041143', 'S22041443', 'S22041844', 'S22042440', 'S22042640', 'S22042888', 'S22043096',
            'S22043455', 'S22050128', 'S22050340', 'S22050441', 'S22060128', 'S22060141', 'S22060216', 'S22060261', 'S22060496', 'S22110141',
            'S22110152', 'S22110268', 'S22110356', 'S22110543', 'S22110661', 'S22110725', 'S22110951', 'S22111052', 'S22111141', 'S22111238',
            'S22111261', 'S22111496', 'S22111528', 'S22111540', 'S22111541', 'S22120155', 'S22120316', 'S22120341', 'S22120355', 'S22120385',
            'S22120485', 'S22120541', 'S22120571', 'S22120841', 'S22120855', 'S22160355', 'S22160382', 'S22180141', 'S22180155', 'S22190140',
            'S22190171', 'S22200160', 'S22200241', 'S22520456', 'S22520480', 'S22540240', 'S22610128', 'S22610196', 'S22610238', 'S22610256',
            'S22610338', 'S22610561', 'S22610651', 'S22610868', 'S22610896', 'S22610941', 'S22610957', 'S22710265', 'S22710341', 'S22749841',
            'S22800141', 'S22800240', 'S22800441', 'S22800450', 'S22990156', 'S22990228', 'S23010125', 'S23010416', 'S23010596', 'S23010796',
            'S23030116', 'S23030159', 'S23030183', 'S23030216', 'S23030241', 'S23030525', 'S23030535', 'S23030556', 'S23030641', 'S23030692',
            'S23030755', 'S23030768', 'S23030782', 'S23030852', 'S23040216', 'S23040356', 'S23040365', 'S23040596', 'S23040648', 'S23040656',
            'S23040716', 'S23040941', 'S23040981', 'S23041061', 'S23041143', 'S23041255', 'S23041343', 'S23041443', 'S23041741', 'S23041843',
            'S23041943', 'S23042168', 'S23042243', 'S23042468', 'S23042568', 'S23042643', 'S23042868', 'S23043066', 'S23043075', 'S23043082',
            'S23043396', 'S23050141', 'S23050161', 'S23050416', 'S23050656', 'S23060109', 'S23060141', 'S23060216', 'S23060241', 'S23060455',
            'S23060468', 'S23110138', 'S23110141', 'S23110152', 'S23110155', 'S23110161', 'S23110356', 'S23110461', 'S23110496', 'S23110528',
            'S23110557', 'S23110643', 'S23110957', 'S23111251', 'S23111296', 'S23111356', 'S23111628', 'S23111641', 'S23120155', 'S23120189',
            'S23120241', 'S23120271', 'S23120272', 'S23120285', 'S23120355', 'S23120371', 'S23120372', 'S23120396', 'S23120471', 'S23120489',
            'S23120541', 'S23120571', 'S23120641', 'S23120655', 'S23160241', 'S23160355', 'S23160389', 'S23170141', 'S23170155', 'S23180126',
            'S23180155', 'S23200271', 'S23200341', 'S23200541', 'S23200580', 'S23200581', 'S23200751', 'S23200789', 'S23200871', 'S23510125',
            'S23510149', 'S23510396', 'S23510441', 'S23510638', 'S23520156', 'S23520241', 'S23520308', 'S23540125', 'S23540296', 'S23540468',
            'S23541161', 'S23550196', 'S23550356', 'S23560109', 'S23560141', 'S23610138', 'S23610141', 'S23610152', 'S23610260', 'S23610496',
            'S23610557', 'S23610836', 'S23611251', 'S23611296', 'S23620241', 'S23620285', 'S23710181', 'S23760296', 'S23900175', 'S23900350',
            'S24010116', 'S24010128', 'S24010130', 'S24010196', 'S24010216', 'S24010396', 'S24010416', 'S24010618', 'S24010696', 'S24010716',
            'S24010741', 'S24010816', 'S24011016', 'S24011041', 'S24011116', 'S24011141', 'S24011216', 'S24030109', 'S24030216', 'S24030241',
            'S24030355', 'S24030396', 'S24030504', 'S24030526', 'S24030555', 'S24030556', 'S24030568', 'S24030580', 'S24030599', 'S24030696',
            'S24030728', 'S24030982', 'S24040216', 'S24040282', 'S24040316', 'S24040341', 'S24040343', 'S24040352', 'S24040356', 'S24040359',
            'S24040361', 'S24040365', 'S24040409', 'S24040448', 'S24040471', 'S24040516', 'S24040534', 'S24040555', 'S24040556', 'S24040559',
            'S24040640', 'S24040655', 'S24040671', 'S24040685', 'S24040718', 'S24040759', 'S24040816', 'S24040864', 'S24040882', 'S24040950',
            'S24040965', 'S24041143', 'S24041465', 'S24041542', 'S24041768', 'S24042343', 'S24042352', 'S24042540', 'S24042796', 'S24043018',
            'S24043143', 'S24043340', 'S24043450', 'S24043671', 'S24043743', 'S24043816', 'S24043943', 'S24050141', 'S24050161', 'S24050383',
            'S24050528', 'S24060141', 'S24060152', 'S24060283', 'S24060296', 'S24060368', 'S24060441', 'S24060518', 'S24110128', 'S24110150',
            'S24110152', 'S24110156', 'S24110428', 'S24110441', 'S24110556', 'S24110568', 'S24110649', 'S24110742', 'S24110838', 'S24111257',
            'S24111456', 'S24111540', 'S24111627', 'S24111728', 'S24111841', 'S24111855', 'S24120255', 'S24120272', 'S24120356', 'S24120384',
            'S24120396', 'S24120441', 'S24120482', 'S24120571', 'S24120587', 'S24120771', 'S24120871', 'S24120982', 'S24160271', 'S24170141',
            'S24170184', 'S24180141', 'S24180155', 'S24200141', 'S24200465', 'S24200484', 'S24510128', 'S24510196', 'S24510316', 'S24510416',
            'S24510441', 'S24510516', 'S24510541', 'S24510716', 'S24510816', 'S24510896', 'S24520109', 'S24520159', 'S24520255', 'S24520316',
            'S24520341', 'S24520426', 'S24520456', 'S24520468', 'S24540116', 'S24540156', 'S24540209', 'S24540248', 'S24540352', 'S24540361',
            'S24540443', 'S24540452', 'S24540565', 'S24540643', 'S24540968', 'S24560141', 'S24560152', 'S24560268', 'S24560383', 'S24560396',
            'S24610128', 'S24610152', 'S24610156', 'S24610230', 'S24610428', 'S24610441', 'S24610556', 'S24610568', 'S24610828', 'S24610956',
            'S24620150', 'S24620172', 'S24710156', 'S24710218', 'S24710241', 'S24770155', 'S24790156', 'S24900331', 'S25010125', 'S25010156',
            'S25010196', 'S25010218', 'S25010256', 'S25010341', 'S25010716', 'S25010783', 'S25011116', 'S25011165', 'S25011241', 'S25030143',
            'S25030159', 'S25030241', 'S25030265', 'S25030280', 'S25030455', 'S25030461', 'S25030541', 'S25040181', 'S25040221', 'S25040265',
            'S25040540', 'S25040551', 'S25040756', 'S25041043', 'S25041140', 'S25041342', 'S25041361', 'S25042116', 'S25042340', 'S25042841',
            'S25050141', 'S25050172', 'S25050183', 'S25050281', 'S25050296', 'S25060181', 'S25110228', 'S25110252', 'S25110756', 'S25111141',
            'S25111152', 'S25120541', 'S25120571', 'S25120771', 'S25190155', 'S25200774', 'S25510716', 'W14060141', 'W14720010', 'W15200110',
            'W16050929', 'W16341004', 'W16701010', 'W16750113', 'W16750260', 'W16750261', 'W17202031', 'W18010102', 'W18010427', 'W18030600',
            'W18060102', 'W18060227', 'W18520210', 'W18520229', 'W18541000', 'W18700130', 'W18750416', 'W18750443', 'W18800141', 'W19042616',
            'W19042643', 'W19051441', 'W19060141', 'W19120141', 'W19120155', 'W19120171', 'W19120518', 'W19120741', 'W19120755', 'W19120771',
            'W19120783', 'W19160341', 'W19550165', 'W19730241', 'W19750141', 'W19750165', 'W20040240', 'W20042341', 'W20051689', 'W20060283',
            'W20120155', 'W20120455', 'W20150130', 'W20150230', 'W20150355', 'W20200141', 'W20200241', 'W20200255', 'W20200531', 'W20510441',
            'W20550155', 'W20550183', 'W21011116', 'W21040140', 'W21040143', 'W21040165', 'W21040168', 'W21040365', 'W21040441', 'W21040818',
            'W21040918', 'W21041265', 'W21041940', 'W21042550', 'W21042655', 'W21050365', 'W21050841', 'W21051085', 'W21051280', 'W21060241',
            'W21060318', 'W21120151', 'W21120182', 'W21120255', 'W21120399', 'W21160341', 'W21160359', 'W21160452', 'W21160883', 'W21180141',
            'W21200259', 'W21200280', 'W21200370', 'W21540440', 'W21710159', 'W21710189', 'W21730180', 'W21730274', 'W21730440', 'W21730455',
            'W22010135', 'W22010256', 'W22030241', 'W22030256', 'W22030265', 'W22030280', 'W22030318', 'W22030450', 'W22030551', 'W22040296',
            'W22040550', 'W22040726', 'W22040850', 'W22041065', 'W22041818', 'W22042043', 'W22042341', 'W22042351', 'W22042455', 'W22042468',
            'W22042616', 'W22042843', 'W22043297', 'W22043565', 'W22043635', 'W22043755', 'W22050141', 'W22050155', 'W22050171', 'W22050189',
            'W22050196', 'W22050218', 'W22050366', 'W22050618', 'W22050656', 'W22050785', 'W22050841', 'W22050941', 'W22050971', 'W22051271',
            'W22051283', 'W22051426', 'W22051461', 'W22051550', 'W22051659', 'W22051665', 'W22051784', 'W22051789', 'W22051841', 'W22051855',
            'W22051883', 'W22051951', 'W22052071', 'W22060135', 'W22060141', 'W22060441', 'W22060483', 'W22120141', 'W22120171', 'W22120180',
            'W22120183', 'W22120241', 'W22120255', 'W22120270', 'W22120383', 'W22120689', 'W22120755', 'W22120796', 'W22130141', 'W22130150',
            'W22140141', 'W22150155', 'W22150165', 'W22150189', 'W22150241', 'W22150255', 'W22150365', 'W22160441', 'W22170151', 'W22170175',
            'W22180141', 'W22180171', 'W22190155', 'W22200141', 'W22200565', 'W22200679', 'W22200770', 'W22510316', 'W22510341', 'W22510416',
            'W22520250', 'W22520383', 'W22540218', 'W22540318', 'W22540416', 'W22540643', 'W22540743', 'W22541196', 'W22541343', 'W22541765',
            'W22550150', 'W22550161', 'W22550196', 'W22550655', 'W22550683', 'W22560141', 'W22560241', 'W22560283', 'W22560341', 'W22560383',
            'W22560468', 'W22560496', 'W22620165', 'W22630155', 'W22630171', 'W22710183', 'W22720141', 'W22720151', 'W22730150', 'W22740141',
            'W22770141', 'W22780641', 'W23010155', 'W23010165', 'W23010241', 'W23010268', 'W23010355', 'W23010456', 'W23010516', 'W23010596',
            'W23010616', 'W23010896', 'W23010983', 'W23030159', 'W23030183', 'W23030226', 'W23030235', 'W23030241', 'W23030255', 'W23030341',
            'W23030355', 'W23030365', 'W23030372', 'W23030382', 'W23030483', 'W23030541', 'W23030672', 'W23030750', 'W23030855', 'W23040150',
            'W23040265', 'W23040360', 'W23040616', 'W23040865', 'W23041018', 'W23041243', 'W23041340', 'W23041450', 'W23041568', 'W23041743',
            'W23041855', 'W23041982', 'W23041987', 'W23042026', 'W23042041', 'W23042118', 'W23042168', 'W23042228', 'W23042270', 'W23042271',
            'W23042368', 'W23042465', 'W23042668', 'W23042740', 'W23042998', 'W23043041', 'W23043141', 'W23043218', 'W23043283', 'W23043441',
            'W23050141', 'W23050150', 'W23050160', 'W23050171', 'W23050181', 'W23050189', 'W23050196', 'W23050252', 'W23050271', 'W23050280',
            'W23050284', 'W23050318', 'W23050541', 'W23050656', 'W23050682', 'W23050785', 'W23050955', 'W23050956', 'W23050965', 'W23051041',
            'W23051071', 'W23051251', 'W23051271', 'W23051383', 'W23051541', 'W23052041', 'W23052055', 'W23060155', 'W23060196', 'W23060241',
            'W23060283', 'W23060318', 'W23060468', 'W23060482', 'W23060550', 'W23060565', 'W23120170', 'W23120184', 'W23120241', 'W23120255',
            'W23120271', 'W23120389', 'W23120418', 'W23120498', 'W23120655', 'W23120671', 'W23130155', 'W23130175', 'W23130240', 'W23130241',
            'W23130255', 'W23130341', 'W23130350', 'W23130441', 'W23130471', 'W23130555', 'W23140141', 'W23140165', 'W23140255', 'W23140270',
            'W23140350', 'W23140382', 'W23160155', 'W23160187', 'W23160250', 'W23160270', 'W23160341', 'W23160384', 'W23200083', 'W23200216',
            'W23200416', 'W23200441', 'W23200670', 'W23200870', 'W23200979', 'W23510116', 'W23510316', 'W23510396', 'W23510483', 'W23520183',
            'W23520241', 'W23520450', 'W23520555', 'W23540318', 'W23540450', 'W23540543', 'W23540643', 'W23540760', 'W23540850', 'W23541016',
            'W23541198', 'W23541441', 'W23550241', 'W23550255', 'W23550351', 'W23550371', 'W23560155', 'W23560196', 'W23560218', 'W23560368',
            'W23560382', 'W23620135', 'W23620141', 'W23620150', 'W23620241', 'W23620255', 'W23620270', 'W23690183', 'W23690270', 'W23710141',
            'W23720526', 'W23720656', 'W23800441', 'W24010141', 'W24010216', 'W24010516', 'W24010581', 'W24010716', 'W24010816', 'W24011018',
            'W24011083', 'W24030165', 'W24030181', 'W24030196', 'W24030255', 'W24030265', 'W24030281', 'W24030296', 'W24030483', 'W24030541',
            'W24030641', 'W24030738', 'W24030856', 'W24030941', 'W24030971', 'W24040265', 'W24040361', 'W24040455', 'W24040456', 'W24040526',
            'W24040541', 'W24040581', 'W24040584', 'W24040798', 'W24040955', 'W24041255', 'W24041343', 'W24041550', 'W24041665', 'W24041741',
            'W24041843', 'W24041943', 'W24042151', 'W24042743', 'W24042875', 'W24042940', 'W24043065', 'W24043526', 'W24050141', 'W24050165',
            'W24050181', 'W24050241', 'W24050255', 'W24050341', 'W24050359', 'W24050450', 'W24050456', 'W24050465', 'W24050484', 'W24050541',
            'W24050571', 'W24050626', 'W24050641', 'W24050650', 'W24050783', 'W24050784', 'W24050986', 'W24051071', 'W24051118', 'W24051551',
            'W24051656', 'W24060151', 'W24060241', 'W24060283', 'W24060696', 'W24120471', 'W24120541', 'W24120571', 'W24120584', 'W24120684',
            'W24120696', 'W24120718', 'W24120741', 'W24130141', 'W24130159', 'W24130289', 'W24140296', 'W24170141', 'W24170241', 'W24510316',
            'W24520165', 'W24520183', 'W24520438', 'W24520556', 'W24550118', 'W24560418', 'W24620296'
        ];
    
    let file2025Obj = null, file2026Obj = null, fileStockObj = null, fileArticulosObj = null;
    let currentSection = 'HOMBRE', currentView = 'CHART', currentMonth = '1', currentCategory = 'TODAS', currentFamily = 'TODAS';
    let currentKpiStartMonth = '6';
    const KPI_GAP_REDUCTION_TARGET = 0.20;
    let myChart = null, mySizeChart = null;

    const monthNames = {"1":"Enero","2":"Febrero","3":"Marzo","4":"Abril","5":"Mayo","6":"Junio","7":"Julio","8":"Agosto","9":"Septiembre","10":"Octubre","11":"Noviembre","12":"Diciembre"};
    let currentMasterList = [];
    document.getElementById('csvFile2025').addEventListener('change', e => { file2025Obj = e.target.files[0]; checkUploadStatus(); });
    document.getElementById('csvFile2026').addEventListener('change', e => { file2026Obj = e.target.files[0]; checkUploadStatus(); });
    document.getElementById('csvFileStock').addEventListener('change', e => { fileStockObj = e.target.files[0]; checkUploadStatus(); });
    document.getElementById('csvFileArticulos').addEventListener('change', e => { fileArticulosObj = e.target.files[0]; checkUploadStatus(); });

    document.getElementById('sj-start').addEventListener('change', refreshView);
    document.getElementById('sj-end').addEventListener('change', refreshView);


    window.openPromoModal = function() {
        document.getElementById('promo-modal').classList.remove('hidden');
        document.getElementById('promo-textarea').focus();
    }

    window.closePromoModal = function() {
        document.getElementById('promo-modal').classList.add('hidden');
    }

    window.applyPastedPromos = function() {
        let text = document.getElementById('promo-textarea').value;
        window.customPromoList = text.split(/\r?\n/).map(line => line.trim().toUpperCase()).filter(line => line.length > 0);
        
        if (window.customPromoList.length === 0) {
            closePromoModal();
            return;
        }

        let famSelect = document.getElementById('fam-select');
        famSelect.value = "TODAS";
        currentFamily = "TODAS";
        famSelect.disabled = true;
        famSelect.classList.add('bg-gray-100', 'cursor-not-allowed', 'opacity-70');

        document.getElementById('btn-promo-upload').innerHTML = `${window.customPromoList.length} Refs Activas`;
        document.getElementById('btn-promo-upload').classList.replace('bg-purple-100', 'bg-emerald-100');
        document.getElementById('btn-promo-upload').classList.replace('text-purple-800', 'text-emerald-800');
        document.getElementById('btn-promo-upload').classList.replace('border-purple-300', 'border-emerald-300');
        document.getElementById('btn-promo-clear').classList.remove('hidden');
        let exp = document.getElementById('super-explanation-text');
        exp.classList.replace('bg-purple-50', 'bg-emerald-50');
        exp.classList.replace('border-purple-600', 'border-emerald-600');
        exp.innerHTML = `<span class="font-extrabold block text-sm mb-0.5 text-emerald-800">🎯 Auditoría de Referencias Manuales</span>
            Estás visualizando exclusivamente el rendimiento del listado de <b>${window.customPromoList.length} artículos</b> que has pegado en el sistema, evaluando sus conversions en las fechas marcadas.`;
        closePromoModal();
        refreshView();
    }

    window.clearPromos = function() {
        window.customPromoList = [];
        document.getElementById('promo-textarea').value = '';
        
        let famSelect = document.getElementById('fam-select');
        famSelect.disabled = false;
        famSelect.classList.remove('bg-gray-100', 'cursor-not-allowed', 'opacity-70');

        document.getElementById('btn-promo-upload').innerHTML = `Evaluar Referencias`;
        document.getElementById('btn-promo-upload').classList.replace('bg-emerald-100', 'bg-purple-100');
        document.getElementById('btn-promo-upload').classList.replace('text-emerald-800', 'text-purple-800');
        document.getElementById('btn-promo-upload').classList.replace('border-emerald-300', 'border-purple-300');
        document.getElementById('btn-promo-clear').classList.add('hidden');
        
        let exp = document.getElementById('super-explanation-text');
        exp.classList.replace('bg-emerald-50', 'bg-purple-50');
        exp.classList.replace('border-emerald-600', 'border-purple-600');
        exp.innerHTML = `<span class="font-extrabold block text-sm mb-0.5 text-purple-800">⚡ Análisis de Picos Promocionales (Ej. Superjueves vs Periodo Anterior)</span>
            Compara el rendimiento del Top 20 de artículos <b>exclusivamente en 2026</b> durante el rango de días seleccionados (izquierda) frente a su periodo equivalente anterior con la misma duración y comenzando el mismo día de la semana (derecha).`;
        refreshView();
    }

    function checkUploadStatus() {
        const s2025 = document.getElementById('status-2025');
        const s2026 = document.getElementById('status-2026');
        const sStock = document.getElementById('status-stock');
        const sArt = document.getElementById('status-articulos');
        const btn = document.getElementById('btnProcesar');

        s2025.innerHTML = file2025Obj ?
            `Cargado: ${file2025Obj.name}` : "Ventas 2025 ausente";
        s2026.innerHTML = file2026Obj ? `Cargado: ${file2026Obj.name}` : "Ventas 2026 ausente";
        sStock.innerHTML = fileStockObj ?
            `Cargado: ${fileStockObj.name}` : "Stock ausente (válido: propio o comercial)";
        sArt.innerHTML = fileArticulosObj ? `Cargado: ${fileArticulosObj.name}` : "Maestro ausente";
        if (file2025Obj && file2026Obj && fileStockObj && fileArticulosObj) {
            btn.removeAttribute('disabled');
            btn.className = "mt-8 w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-md shadow cursor-pointer transition uppercase tracking-widest text-sm";
        } else {
            btn.setAttribute('disabled', 'true');
            btn.className = "mt-8 w-full bg-gray-400 text-white font-bold py-3 px-4 rounded-md shadow cursor-not-allowed transition uppercase tracking-widest text-sm";
        }
    }

    function processAndBuild(texts) {
        Papa.parse(texts.articulos, {
            header: true, dynamicTyping: true, skipEmptyLines: true, delimiter: ";",
            complete: function(resArt) {
                window.articlesMaster = {};

                resArt.data.forEach(row => {
                    let cleanRow = {};
                    Object.keys(row).forEach(k => {
                        if (k) cleanRow[k.trim().toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")] = row[k];

                    });
                    let codigo = String(cleanRow['CODIGO'] || '').trim();
                    if (codigo) {
                        window.articlesMaster[codigo] = {

                            desc: String(cleanRow['DESCRIPCION'] || '').trim(),
                            fam: String(cleanRow['FAMILIA'] || '').trim().toUpperCase(),
                            seccion: String(cleanRow['SECCION'] || '').trim().toUpperCase(),
                            cat: String(cleanRow['CATEGORIA'] || '').trim().toUpperCase()
                        };
                    }
                });

                window.familyOverrides = {
                    'S18111204': { desc: 'TRAJE DE BAÑO SURF AZULON', seccion: 'HOMBRE' },
                    'S19110220': { desc: 'TRAJE DE BAÑO CACTUS NARANJA', seccion: 'HOMBRE' },
                    'S19610228': { desc: 'TRAJE DE BAÑO NIÑO CACHEMIR CORAL', seccion: 'NIÑO' },
                    'S19610736': { desc: 'TRAJE DE BAÑO NIÑO LOGO AMARILLO', seccion: 'NIÑO' },
                    'S19610741': { desc: 'TRAJE DE BAÑO NIÑO LOGO MARINO', seccion: 'NIÑO' },
                    'S19610752': { desc: 'TRAJE DE BAÑO NIÑO LOGO VERDE AGUA', seccion: 'NIÑO' },
                    'S20110857': { desc: 'TRAJE DE BAÑO TRIP MENTA', seccion: 'HOMBRE' },
                    'S20111149': { desc: 'TRAJE DE BAÑO ALGAS AZULON', seccion: 'HOMBRE' },
                    'S20111228': { desc: 'TRAJE DE BAÑO STARFISH CORAL', seccion: 'HOMBRE' },
                    'S20111347': { desc: 'TRAJE DE BAÑO LISO DENIM', seccion: 'HOMBRE' },
                    'S20111357': { desc: 'TRAJE DE BAÑO LISO MENTA', seccion: 'HOMBRE' },
                    'S20111361': { desc: 'TRAJE DE BAÑO LISO FRAMBUESA', seccion: 'HOMBRE' },
                    'S20610129': { desc: 'TRAJE DE BAÑO NIÑO LOGO BICO NARANJA', seccion: 'NIÑO' },
                    'S20610141': { desc: 'TRAJE DE BAÑO NIÑO LOGO MARINO', seccion: 'NIÑO' },
                    'S20610152': { desc: 'TRAJE DE BAÑO NIÑO LOGO VERDE AGUA', seccion: 'NIÑO' },
                    'S20610164': { desc: 'TRAJE DE BAÑO NIÑO LOGO BURDEOS', seccion: 'NIÑO' },
                    'S20610168': { desc: 'TRAJE DE BAÑO NIÑO LOGO ROSA', seccion: 'NIÑO' },
                    'S20610249': { desc: 'TRAJE DE BAÑO NIÑO PAISLEY AZUL', seccion: 'NIÑO' },
                    'S20610349': { desc: 'TRAJE DE BAÑO NIÑO AVOCADO AZUL', seccion: 'NIÑO' },
                    'S20610368': { desc: 'TRAJE DE BAÑO NIÑO AVOCADO ROSA', seccion: 'NIÑO' },
                    'S20610420': { desc: 'TRAJE DE BAÑO NIÑO SEAHORSES NARANJA', seccion: 'NIÑO' },
                    'S20610556': { desc: 'TRAJE DE BAÑO NIÑO FLOWERS PETROLEO', seccion: 'NIÑO' },
                    'S20610564': { desc: 'TRAJE DE BAÑO NIÑO FLOWERS BURDEOS', seccion: 'NIÑO' },
                    'S20610657': { desc: 'TRAJE DE BAÑO NIÑO TRIP MENTA', seccion: 'NIÑO' },
                    'S20610743': { desc: 'TRAJE DE BAÑO NIÑO BALLOONS CELESTE', seccion: 'NIÑO' },
                    'S20610836': { desc: 'TRAJE DE BAÑO NIÑO BOAT AMARILLO', seccion: 'NIÑO' },
                    'S20610856': { desc: 'TRAJE DE BAÑO NIÑO BOAT VERDE', seccion: 'NIÑO' },
                    'S20610928': { desc: 'TRAJE DE BAÑO NIÑO STARFISH CORAL', seccion: 'NIÑO' },
                    'S21110128': { desc: 'TRAJE DE BAÑO LOGO CORAL', seccion: 'HOMBRE' },
                    'S21110130': { desc: 'TRAJE DE BAÑO LOGO AMARILLO', seccion: 'HOMBRE' },
                    'S21110141': { desc: 'TRAJE DE BAÑO LOGO MARINO', seccion: 'HOMBRE' },
                    'S21110168': { desc: 'TRAJE DE BAÑO LOGO ROSA', seccion: 'HOMBRE' },
                    'S21110328': { desc: 'TRAJE DE BAÑO FLOWERS CORAL', seccion: 'HOMBRE' },
                    'S21110356': { desc: 'TRAJE DE BAÑO FLOWERS PETROLEO', seccion: 'HOMBRE' },
                    'S21110528': { desc: 'TRAJE DE BAÑO LEAVES CORAL', seccion: 'HOMBRE' },
                    'S21110830': { desc: 'TRAJE DE BAÑO SHELLS ECO AMARILLO', seccion: 'HOMBRE' },
                    'S21110957': { desc: 'TRAJE DE BAÑO SURFING MENTA', seccion: 'HOMBRE' },
                    'S21111141': { desc: 'TRAJE DE BAÑO FLOAT ECO MARINO', seccion: 'HOMBRE' },
                    'S21111255': { desc: 'TRAJE DE BAÑO LISO KHAKI', seccion: 'HOMBRE' },
                    'S21610128': { desc: 'TRAJE DE BAÑO NIÑO LOGO CORAL', seccion: 'NIÑO' },
                    'S21610130': { desc: 'TRAJE DE BAÑO NIÑO LOGO AMARILLO', seccion: 'NIÑO' },
                    'S21610141': { desc: 'TRAJE DE BAÑO NIÑO LOGO MARINO', seccion: 'NIÑO' },
                    'S21610157': { desc: 'TRAJE DE BAÑO NIÑO LOGO MENTA', seccion: 'NIÑO' },
                    'S21610168': { desc: 'TRAJE DE BAÑO NIÑO LOGO ROSA', seccion: 'NIÑO' },
                    'S21610243': { desc: 'TRAJE DE BAÑO NIÑO PAISLEY CELESTE', seccion: 'NIÑO' },
                    'S21610328': { desc: 'TRAJE DE BAÑO NIÑO FLOWERS CORAL', seccion: 'NIÑO' },
                    'S21610356': { desc: 'TRAJE DE BAÑO NIÑO FLOWERS PETROLEO', seccion: 'NIÑO' },
                    'S21610556': { desc: 'TRAJE DE BAÑO NIÑO SUBMARINE PETROLEO', seccion: 'NIÑO' },
                    'S21610730': { desc: 'TRAJE DE BAÑO NIÑO SHELLS AMARILLO', seccion: 'NIÑO' },
                    'S21611061': { desc: 'TRAJE DE BAÑO NIÑO DUCK FRAMBUESA', seccion: 'NIÑO' },
                    'S21611096': { desc: 'TRAJE DE BAÑO NIÑO DUCK DENIM', seccion: 'NIÑO' },
                    'ES21110152': { desc: 'TRAJE DE BAÑO LOGO BICOLOR VERDE AGUA', seccion: 'HOMBRE' },
                    'ES21110161': { desc: 'TRAJE DE BAÑO LOGO BICOLOR FRAMBUESA', seccion: 'HOMBRE' },
                    'ES21110443': { desc: 'TRAJE DE BAÑO BALLOONS CELESTE', seccion: 'HOMBRE' },
                    'ES21110447': { desc: 'TRAJE DE BAÑO BALLOONS MARINO', seccion: 'HOMBRE' },
                    'ES21110541': { desc: 'TRAJE DE BAÑO FISHES MARINO', seccion: 'HOMBRE' },
                    'ES21110740': { desc: 'TRAJE DE BAÑO PAISLEY AZUL', seccion: 'HOMBRE' }
                };

                // Parchea el maestro: si el codigo no existe, o existe pero sin
                // familia/descripcion/seccion, se completa con los datos de arriba.
                // Se ejecuta ANTES de construir productMaster y de parsear las ventas,
                // por lo que el arreglo se propaga a TODAS las pestañas (Peso Familias,
                // TOP 20, Peso Tallas, Slow Movers, Promociones, S26, Inv. Obsoleto).
                Object.keys(window.familyOverrides).forEach(art => {
                    const ov = window.familyOverrides[art];
                    if (!window.articlesMaster[art]) {
                        window.articlesMaster[art] = { desc: '', fam: '', seccion: '', cat: '' };
                    }
                    const m = window.articlesMaster[art];
                    if (!m.fam) m.fam = 'BAÑADOR';
                    if (!m.desc) m.desc = ov.desc;
                    if (!m.seccion) m.seccion = ov.seccion;
                    if (!m.cat) m.cat = 'TEXTIL';
                });

                window.productMaster = {};
                Object.keys(window.articlesMaster).forEach(art => {
                    window.productMaster[art] = window.articlesMaster[art];
                });
                window.db2025 = { records: [] };
                window.db2026 = { records: [] };
                Papa.parse(texts.ventas2025, {
                    header: true, dynamicTyping: true, skipEmptyLines: true, delimiter: ";",
                    complete: function(res25) {
                        parseYearData(res25.data, window.db2025);


                        Papa.parse(texts.ventas2026, {
                            header: true, dynamicTyping: true, skipEmptyLines: true, delimiter: ";",
                            complete: function(res26) {

                                parseYearData(res26.data, window.db2026);

                                Papa.parse(texts.stock, {

                                    header: false, skipEmptyLines: true, delimiter: ";",
                                    complete: function(resStock) {

                                        parseStockData(resStock.data);
                                        buildInterface();
                                    }

                                });
                            }
                        });
                    }
                });
            }
        });
    }

    function readFileAsText(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error);
            reader.readAsText(file, 'UTF-8');
        });
    }

    document.getElementById('btnProcesar').addEventListener('click', async () => {
        if (!file2025Obj || !file2026Obj || !fileStockObj || !fileArticulosObj) return;
        const [articulosTxt, ventas2025Txt, ventas2026Txt, stockTxt] = await Promise.all([
            readFileAsText(fileArticulosObj), readFileAsText(file2025Obj),
            readFileAsText(file2026Obj), readFileAsText(fileStockObj)
        ]);
        processAndBuild({ articulos: articulosTxt, ventas2025: ventas2025Txt, ventas2026: ventas2026Txt, stock: stockTxt });
    });

    (function bootstrapFromServer() {
        const ts = document.getElementById('data-timestamp');
        if (ts && window.DATA_GENERATED_AT) {
            ts.textContent = 'Datos actualizados: ' + window.DATA_GENERATED_AT;
        }
        const d = window.SERVER_DATA || {};
        if (d.articulos && d.ventas2025 && d.ventas2026 && d.stock) {
            processAndBuild(d);
        }
    })();

    function parseYearData(rows, targetDatabase) {
        if (!rows) return;
        rows.forEach(originalRow => {
            let row = {};
            Object.keys(originalRow).forEach(k => {
                if (k) row[k.trim().toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")] = originalRow[k];
            });

            let isNewFormat = !row['MES'] && !row['ARTICULO'] && !row['REFERENCIA'] && !!row['FECHA REGISTRO'];

            let artRaw 
                = row['ARTICULO'] || row['REFERENCIA'] || row['Nº PRODUCTO'] ||
                         Object.entries(row).find(([k]) => k.includes('PRODUCTO') && !k.includes('PEDIDO'))?.[1] || '';
            let art = String(artRaw || '').trim();
            if (!art) return;

            let mes = parseInt(row['MES'] || 0);
            if (!mes) 
            {
                let fechaReg = String(row['FECHA REGISTRO'] || '').trim();
                if (fechaReg.includes('/')) {
                    let parts = fechaReg.split('/');
                    mes = parseInt(parts[1]) || 0; 
            
                }
            }

            let master = window.articlesMaster[art];
            let seccion = ""; let cat = ""; let fam = ""; let desc = "";
            if (master) {
                seccion = master.seccion;
                cat = master.cat;
                fam = master.fam;
                desc = master.desc;
            } else {
                seccion = String(row['SECCIÓN'] || row['SECCION'] || 'HOMBRE').trim().toUpperCase();
                cat = String(row['TEXT/CAL/COM'] || row['CATEGORIA'] || 'TEXTIL').trim().toUpperCase();
                fam = String(row['FAMILIA MAYUSC'] || row['FAM MAYUSCULAS'] || row['FAMILIA'] || '').trim().toUpperCase();
                desc = String(row['ART. DESC.'] || row['DESCRIPCION'] || '').trim();
            }

            if (!desc && isNewFormat) desc = String(row['DESCRIPCION'] || '').trim();
            if (seccion.includes('NIN') || seccion.includes('NIÑO')) seccion = 'NIÑO';
            else seccion = 'HOMBRE';

            let rawUnid = row['UNID.SALI.'] || row['CANTIDAD'] || row['UNIDADES'] || 0;
            let unid = 0;
            if (typeof rawUnid === 'number') {
                unid = rawUnid;
            } else if (rawUnid) {
                unid = parseFloat(String(rawUnid).replace(',', '.').replace(/\.$/, '').trim()) || 0;
            }
            if (isNewFormat) unid = unid * -1;
            let tallaRaw = row['TALLA'] || row['COD. VARIANTE'] || row['VARIANTE'] ||
                           Object.entries(row).find(([k]) => k.includes('TALLA') || k.includes('VARIANTE'))?.[1] || 'UNICA';
            let talla = String(tallaRaw).trim().toUpperCase();
            if (talla === 'NAN' || talla === '') talla = 'UNICA';
            let fechaStr = String(row['FECHA'] || row['FECHA REGISTRO'] || '').trim();
            let day = 31;
            if (fechaStr.includes('/')) {
                let parts = fechaStr.split('/');
                let d = parseInt(parts[0]);
                if (!isNaN(d)) day = d;
            }

            if (!mes || isNaN(unid) || !fam) return;
            targetDatabase.records.push({
                mes: mes, day: day, seccion: seccion, cat: cat, fam: fam, art: art, desc: desc, unid: unid, talla: talla
            });
        });
    }

    function parseStockData(plainRows) {
        window.dbStock = {};
        window.dbStockSizes = {};
        if (!plainRows || plainRows.length < 2) return;
        let firstRow = (plainRows[0] || []).map(c =>
            String(c || '').trim().toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
        let dataStart, colStock, formatName;

        if (firstRow[0] && firstRow[0].includes('ALMACEN')) {
            dataStart = 2;
            colStock = 6; formatName = 'Propio (Almacén)';
        } else if (firstRow.some(c => c.includes('INVENTARIO'))) {
            dataStart = 1;
            colStock = 5; formatName = 'Comercial (Inventario)';
        } else {
            dataStart = 2;
            colStock = 6; formatName = 'Fallback (Formato A)';
        }

        for (let i = dataStart; i < plainRows.length; i++) {
            let row = plainRows[i];
            if (!row || row.length < colStock + 1) continue;

            let art = String(row[0] || '').trim();
            if (!art) continue;
            let artLow = art.toLowerCase();
            if (artLow === 'referencia' || artLow === 'almacen' ||
                artLow === 'n° producto' || artLow === 'nº producto') continue;
            let sz = String(row[1] || 'UNICA').trim().toUpperCase();
            if (sz === 'NAN' || sz === '' || sz === 'CODIGO' || sz === 'VARIANTE' || sz === 'COD. VARIANTE') sz = 'UNICA';
            let rawStock = row[colStock];
            let stockRowValue = 0;
            if (typeof rawStock === 'number') {
                stockRowValue = rawStock;
            } else if (rawStock !== undefined && rawStock !== null) {
                let sStr = String(rawStock).replace(/\s/g, '').replace(/\.$/, '').trim();
                if (sStr.includes(',') && sStr.includes('.')) {
                    sStr = sStr.replace(/\./g, '').replace(',', '.');
                } else if (sStr.includes(',')) {
                    sStr = sStr.replace(',', '.');
                }
                stockRowValue = parseFloat(sStr) || 0;
            }

            if (!window.dbStock[art]) window.dbStock[art] = 0;
            window.dbStock[art] += stockRowValue;

            if (!window.dbStockSizes[art]) window.dbStockSizes[art] = {};
            if (!window.dbStockSizes[art][sz]) window.dbStockSizes[art][sz] = 0;
            window.dbStockSizes[art][sz] += stockRowValue;
        }
    }

    function getFilteredData(year, mesInt) {
        let db = year === 2025 ?
            window.db2025 : window.db2026;
        let records = db.records || [];
        let secRecords = records.filter(r => r.seccion === currentSection && r.mes === mesInt);
        if (year === 2025) {
            let records26 = window.db2026.records || [];
            let secRecords26 = records26.filter(r => r.seccion === currentSection && r.mes === mesInt);
            if (secRecords26.length > 0) {
                let maxDay26 = Math.max(...secRecords26.map(r => r.day));
                secRecords = secRecords.filter(r => r.day <= maxDay26);
            }
        }
        
        let raw = {};
        let lookup = {}; let itemsGrouped = {};
        secRecords.forEach(r => {
            if (!raw[r.cat]) raw[r.cat] = {};
            if (!raw[r.cat][r.fam]) raw[r.cat][r.fam] = 0;
            raw[r.cat][r.fam] += r.unid;
            
            if (!lookup[r.art]) lookup[r.art] = 0;
            lookup[r.art] += r.unid;
  
           
            if (!itemsGrouped[r.fam]) itemsGrouped[r.fam] = {};
            if (!itemsGrouped[r.fam][r.art]) {
                itemsGrouped[r.fam][r.art] = { desc: r.desc, unid: 0 };
            }
            itemsGrouped[r.fam][r.art].unid += r.unid;
        });
        let items = {};
        for (let fam of Object.keys(itemsGrouped)) {
            let arr = Object.keys(itemsGrouped[fam]).map(art => ({
                art: art, desc: itemsGrouped[fam][art].desc, unid: itemsGrouped[fam][art].unid
            }));
            arr.sort((a, b) => b.unid - a.unid);
            items[fam] = arr.slice(0, 20);
        }
        
        return { raw: raw, lookup: lookup, items: items, records: secRecords };
    }

    function buildInterface() {
        let months = new Set();
        (window.db2025.records || []).forEach(r => { if(r.seccion === currentSection) months.add(r.mes); });
        (window.db2026.records || []).forEach(r => { if(r.seccion === currentSection) months.add(r.mes); });
        let sortedMonths = Array.from(months).sort((a,b) => a - b);

        const monthSelect = document.getElementById('month-select');
        monthSelect.innerHTML = '';
        sortedMonths.forEach(m => {
            let opt = document.createElement('option');
            opt.value = m; opt.innerText = monthNames[m] || `Mes ${m}`;
            monthSelect.appendChild(opt);
        });
        if (sortedMonths.length > 0) {
            currentMonth = sortedMonths.includes(5) ?
                "5" : String(sortedMonths[0]);
            monthSelect.value = currentMonth;
        }

        const kpiStartSelect = document.getElementById('kpi-start-select');
        kpiStartSelect.innerHTML = '';
        sortedMonths.forEach(m => {
            let opt = document.createElement('option');
            opt.value = m; opt.innerText = monthNames[m] || `Mes ${m}`;
            kpiStartSelect.appendChild(opt);
        });
        if (sortedMonths.length > 0) {
            currentKpiStartMonth = sortedMonths.includes(6) ? "6" : String(sortedMonths[0]);
            kpiStartSelect.value = currentKpiStartMonth;
        }

        updateFamiliesDropdown();
        
        document.getElementById('upload-screen').classList.add('hidden');
        document.getElementById('dashboard-screen').classList.remove('hidden');

        refreshView();
    }

    document.getElementById('month-select').addEventListener('change', e => { currentMonth = e.target.value; updateFamiliesDropdown(); refreshView(); });
    document.getElementById('cat-select').addEventListener('change', e => { currentCategory = e.target.value; refreshView(); });
    document.getElementById('fam-select').addEventListener('change', e => { currentFamily = e.target.value; refreshView(); });
    document.getElementById('kpi-start-select').addEventListener('change', e => { currentKpiStartMonth = e.target.value; refreshView(); });
    function setSection(sec) {
        currentSection = sec;
        document.querySelectorAll('.sec-btn').forEach(btn => btn.classList.remove('bg-teal-700', 'text-white'));
        document.querySelectorAll('.sec-btn').forEach(btn => btn.classList.add('text-gray-600', 'hover:bg-teal-100'));
        let active = sec === 'HOMBRE' ? document.getElementById('sec-hombre') : document.getElementById('sec-nino');
        active.classList.replace('text-gray-600', 'text-white'); active.classList.add('bg-teal-700');
        updateFamiliesDropdown(); refreshView();
    }

    function setView(view) {
        currentView = view;
        document.getElementById('view-chart-btn').className = "py-3 px-1 whitespace-nowrap border-b-4 border-transparent text-gray-500 hover:text-teal-700 transition";
        document.getElementById('view-table-btn').className = "py-3 px-1 whitespace-nowrap border-b-4 border-transparent text-gray-500 hover:text-teal-700 transition";
        document.getElementById('view-size-btn').className = "py-3 px-1 whitespace-nowrap border-b-4 border-transparent text-gray-500 hover:text-teal-700 transition";
        document.getElementById('view-slow-btn').className = "py-3 px-1 whitespace-nowrap border-b-4 border-transparent text-gray-500 hover:text-teal-700 transition";
        document.getElementById('view-super-btn').className = "py-3 px-1 whitespace-nowrap border-b-4 border-transparent text-gray-500 hover:text-purple-700 transition";
        document.getElementById('view-kpi-btn').className = "py-3 px-1 whitespace-nowrap border-b-4 border-transparent text-gray-500 hover:text-teal-700 transition";
        document.getElementById('view-s26new-btn').className = "py-3 px-1 whitespace-nowrap border-b-4 border-transparent text-gray-500 hover:text-emerald-700 transition";
        document.getElementById('view-norefs-btn').className = "py-3 px-1 whitespace-nowrap border-b-4 border-transparent text-gray-500 hover:text-rose-700 transition";

        document.getElementById('view-chart-container').classList.add('hidden');
        document.getElementById('view-table-container').classList.add('hidden');
        document.getElementById('view-size-container').classList.add('hidden');
        document.getElementById('view-slow-container').classList.add('hidden');
        document.getElementById('view-super-container').classList.add('hidden');
        document.getElementById('view-kpi-container').classList.add('hidden');
        document.getElementById('view-s26new-container').classList.add('hidden');
        document.getElementById('view-norefs-container').classList.add('hidden');
        document.getElementById('filter-super').classList.add('hidden');
        document.getElementById('filter-kpi').classList.add('hidden');
        if (view === 'CHART') {
            document.getElementById('view-chart-btn').className = "py-3 px-1 whitespace-nowrap border-b-4 border-teal-700 font-bold text-teal-800 transition";
            document.getElementById('filter-cat').classList.remove('hidden');
            document.getElementById('filter-fam').classList.add('hidden');
            document.getElementById('view-chart-container').classList.remove('hidden');
        } else if (view === 'TABLE') {
            document.getElementById('view-table-btn').className = "py-3 px-1 whitespace-nowrap border-b-4 border-teal-700 font-bold text-teal-800 transition";
            document.getElementById('filter-cat').classList.add('hidden');
            document.getElementById('filter-fam').classList.remove('hidden');
            document.getElementById('view-table-container').classList.remove('hidden');
        } else if (view === 'SIZE') {
            document.getElementById('view-size-btn').className = "py-3 px-1 whitespace-nowrap border-b-4 border-teal-700 font-bold text-teal-800 transition";
            document.getElementById('filter-cat').classList.remove('hidden');
            document.getElementById('filter-fam').classList.remove('hidden');
            document.getElementById('view-size-container').classList.remove('hidden');
        } else if (view === 'SLOW') {
            document.getElementById('view-slow-btn').className = "py-3 px-1 whitespace-nowrap border-b-4 border-teal-700 font-bold text-teal-800 transition";
            document.getElementById('filter-cat').classList.add('hidden');
            document.getElementById('filter-fam').classList.remove('hidden');
            document.getElementById('view-slow-container').classList.remove('hidden');
        } else if (view === 'SUPER') {
            document.getElementById('view-super-btn').className = "py-3 px-1 whitespace-nowrap border-b-4 border-purple-700 font-bold text-purple-800 transition";
            document.getElementById('filter-cat').classList.add('hidden');
            document.getElementById('filter-fam').classList.remove('hidden');
            document.getElementById('filter-super').classList.remove('hidden');
            document.getElementById('view-super-container').classList.remove('hidden');
        } else if (view === 'KPI') {
            document.getElementById('view-kpi-btn').className = "py-3 px-1 whitespace-nowrap border-b-4 border-teal-700 font-bold text-teal-800 transition";
            document.getElementById('filter-cat').classList.remove('hidden');
            document.getElementById('filter-fam').classList.remove('hidden');
            document.getElementById('filter-kpi').classList.remove('hidden');
            document.getElementById('view-kpi-container').classList.remove('hidden');
        } else if (view === 'S26NEW') {
            document.getElementById('view-s26new-btn').className = "py-3 px-1 whitespace-nowrap border-b-4 border-emerald-700 font-bold text-emerald-800 transition";
            document.getElementById('filter-cat').classList.add('hidden');
            document.getElementById('filter-fam').classList.add('hidden');
            document.getElementById('view-s26new-container').classList.remove('hidden');
        } else if (view === 'NOREFS') {
            document.getElementById('view-norefs-btn').className = "py-3 px-1 whitespace-nowrap border-b-4 border-rose-700 font-bold text-rose-800 transition";
            document.getElementById('filter-cat').classList.add('hidden');
            document.getElementById('filter-fam').classList.remove('hidden');
            document.getElementById('view-norefs-container').classList.remove('hidden');
        }
        refreshView();
    }

    function updateFamiliesDropdown() {
        const fontSelect = document.getElementById('fam-select');
        let prev = currentFamily;
        fontSelect.innerHTML = '<option value="TODAS">Todas las Familias</option>';

        let mInt = parseInt(currentMonth);
        let data25 = getFilteredData(2025, mInt);
        let data26 = getFilteredData(2026, mInt);

        let fams = new Set();
        if(data25 && data25.items) Object.keys(data25.items).forEach(f => fams.add(f));
        if(data26 && data26.items) Object.keys(data26.items).forEach(f => fams.add(f));

        let sortedArr = Array.from(fams).sort();
        let exists = false;
        sortedArr.forEach(f => {
            let opt = document.createElement('option'); opt.value = f; opt.innerText = f;
            fontSelect.appendChild(opt);
            if (f === prev) exists = true;
        });
        currentFamily = (prev === "TODAS" || exists) ? prev : "TODAS";
        fontSelect.value = currentFamily;
    }

    function getCleanArrayForTable(itemsSource) {
        let list = [];
        if (!itemsSource) return list;
        if (currentFamily === "TODAS") {
            Object.keys(itemsSource).forEach(f => {
                if (itemsSource[f]) {
                    itemsSource[f].forEach(item => list.push(item));
                }
            });
        } else if (itemsSource[currentFamily]) {
            itemsSource[currentFamily].forEach(item => list.push(item));
        }
        return list.sort((a,b) => b.unid - a.unid).slice(0, 20);
    }

    function sortSizesHelper(a, b) {
        const standardOrder = ['UNICA', 'XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4XL', '5XL'];
        let idxA = standardOrder.indexOf(a);
        let idxB = standardOrder.indexOf(b);
        if (idxA !== -1 && idxB !== -1) return idxA - idxB;
        if (idxA !== -1) return -1;
        if (idxB !== -1) return 1;
        let numA = parseFloat(a); let numB = parseFloat(b);
        if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
        return a.localeCompare(b);
    }

    function refreshView() {
        if (currentView === 'CHART') renderChart();
        else if (currentView === 'TABLE') renderTable();
        else if (currentView === 'SIZE') renderSizeView();
        else if (currentView === 'SLOW') renderSlowMoversView();
        else if (currentView === 'SUPER') renderSuperjuevesView();
        else if (currentView === 'KPI') renderKpiGapView();
        else if (currentView === 'S26NEW') renderS26NewRefsView();
        else if (currentView === 'NOREFS') renderNoRefsView();
    }

    function renderChart() {
        let mInt = parseInt(currentMonth);
        let res25 = getFilteredData(2025, mInt);
        let res26 = getFilteredData(2026, mInt);

        let catText = currentCategory === "TODAS" ?
            "" : ` - ${currentCategory}`;
        document.getElementById('chart-title').innerText = `Evolución Peso de Venta - ${currentSection} - ${monthNames[currentMonth]?.toUpperCase()}${catText}`;
        let fams25 = {}, tot25 = 0;
        for (let [c, fs] of Object.entries(res25.raw)) {
            if (currentCategory === "TODAS" || currentCategory === c) {
                for (let [f, u] of Object.entries(fs)) { if (!fams25[f]) fams25[f] = 0;
                fams25[f] += u; tot25 += u; }
            }
        }

        let fams26 = {}, tot26 = 0;
        for (let [c, fs] of Object.entries(res26.raw)) {
            if (currentCategory === "TODAS" || currentCategory === c) {
                for (let [f, u] of Object.entries(fs)) { if (!fams26[f]) fams26[f] = 0;
                fams26[f] += u; tot26 += u; }
            }
        }

        if (tot25 === 0 && tot26 === 0) {
            document.getElementById('no-data-chart').classList.remove('hidden');
            document.getElementById('canvas-wrapper').classList.add('hidden');
            if (myChart) myChart.destroy();
            return;
        }
        document.getElementById('no-data-chart').classList.add('hidden');
        document.getElementById('canvas-wrapper').classList.remove('hidden');
        let masterFamilies = new Set([...Object.keys(fams25), ...Object.keys(fams26)]);
        let masterList = Array.from(masterFamilies).map(f => {
            let u25 = fams25[f] || 0;
            let u26 = fams26[f] || 0;
            let p25 = tot25 > 0 ? (u25 / tot25) * 100 : 0;
            let p26 = tot26 > 0 ? (u26 / tot26) * 100 : 0;
     
            return { name: f, val25: p25, val26: p26, uds25: u25, uds26: u26 };
        });
        masterList.sort((a,b) => b.val25 - a.val25);
        currentMasterList = masterList;

        window.currentExportData = {
            filename: `Comparativa_Ventas_${currentSection}_${monthNames[currentMonth]}.csv`,
            headers: ['Familia', 'Uds 2025', 'Peso 2025 (%)', 'Uds 2026', 'Peso 2026 (%)'],
            rows: masterList.map(m => [m.name, m.uds25, m.val25.toFixed(2)+'%', m.uds26, m.val26.toFixed(2)+'%'])
        };
        const container = document.getElementById('canvas-wrapper');
        container.innerHTML = '<canvas id="ventasChart"></canvas>';
        const ctx = document.getElementById('ventasChart').getContext('2d');
        myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: masterList.map(m => m.name),
                datasets: [
                    {
              
                        label: 'Año 2025 (%)',
                        data: masterList.map(m => m.val25.toFixed(2)),
                        backgroundColor: 'rgba(0, 75, 80, 0.85)',
                        borderColor: 'rgba(0, 75, 80, 1)',
    
                        borderWidth: 1
                    },
                    {
                        label: 'Año 2026 (%)',
            
                        data: masterList.map(m => m.val26.toFixed(2)),
                        backgroundColor: 'rgba(211, 129, 59, 0.85)',
                        borderColor: 'rgba(211, 129, 59, 1)',
                        borderWidth: 1
    
                    }
                ]
            },
            options: {
                responsive: true, 
                maintainAspectRatio: false,
        
                plugins: {
                    tooltip: {
                        callbacks: {
                            afterLabel: function(context) {
               
                                let idx = context.dataIndex;
                                let item = currentMasterList[idx];
                                if (!item) return [];
                                
                                let diff = item.uds26 - item.uds25;
                                let sign = diff > 0 ? '+' : '';
                                let texto = diff > 0 ?
                                    'por encima' : (diff < 0 ? 'por debajo' : 'igual');
                                return [
                                    '',
                                    `Uds 2025: ${item.uds25.toFixed(0)}`,
                         
                                    `Uds 2026: ${item.uds26.toFixed(0)}`,
                                    `Desvío: ${sign}${diff.toFixed(0)} Uds (${texto})`
                                ];
                            }
                        }
                    }
                },
                scales: {
                    y: { beginAtZero: 
                        true, title: { display: true, text: 'Peso porcentual en el mes (%)' } }
                }
            }
        });
    }

    function renderTable() {
        let mInt = parseInt(currentMonth);
        let res25 = getFilteredData(2025, mInt);
        let res26 = getFilteredData(2026, mInt);

        let famText = currentFamily === "TODAS" ? "Global" : currentFamily;
        document.getElementById('table-title').innerText = `Clasificación Artículos - ${currentSection} - ${monthNames[currentMonth]?.toUpperCase()} (${famText})`;

        let monthTot25 = 0, monthTot26 = 0;
        for (let cat of Object.keys(res25.raw)) {
            for (let fam of Object.keys(res25.raw[cat])) {
                if (currentFamily === "TODAS" || fam === currentFamily) monthTot25 += res25.raw[cat][fam];
            }
        }
        for (let cat of Object.keys(res26.raw)) {
            for (let fam of Object.keys(res26.raw[cat])) {
                if (currentFamily === "TODAS" || fam === currentFamily) monthTot26 += res26.raw[cat][fam];
            }
        }

        let maxMonth26 = 0;
        let records26 = window.db2026.records || [];
        records26.forEach(r => {
            if (r.seccion === currentSection && r.unid > 0 && r.mes > maxMonth26) maxMonth26 = r.mes;
        });
        let currentMonthInt = parseInt(currentMonth);
        let ytdEndMonth = Math.min(currentMonthInt, maxMonth26);
        let ytdTot25 = 0, ytdTot26 = 0;
        let showYTD = maxMonth26 > 0;

        if (showYTD) {
            for (let m = 1; m <= ytdEndMonth; m++) {
                let r25_m = getFilteredData(2025, m);
                let r26_m = getFilteredData(2026, m);
                for (let cat of Object.keys(r25_m.raw)) {
                    for (let fam of Object.keys(r25_m.raw[cat])) {
                        if (currentFamily === "TODAS" || fam === currentFamily) ytdTot25 += r25_m.raw[cat][fam];
                    }
                }
                for (let cat of Object.keys(r26_m.raw)) {
                    for (let fam of Object.keys(r26_m.raw[cat])) {
                        if (currentFamily === "TODAS" || fam === currentFamily) ytdTot26 += r26_m.raw[cat][fam];
                    }
                }
            }
        }

        let currentMonthRecords26 = records26.filter(r => r.seccion === currentSection && r.mes === mInt);
        let lastDayAvailable26 = currentMonthRecords26.length > 0 ? Math.max(...currentMonthRecords26.map(r => r.day)) : 31;
        let lastMonthYTDRecords26 = records26.filter(r => r.seccion === currentSection && r.mes === ytdEndMonth);
        let lastDayYTD26 = lastMonthYTDRecords26.length > 0 ?
            Math.max(...lastMonthYTDRecords26.map(r => r.day)) : 31;

        let summaryHTML = '';
        let monthDiff = monthTot26 - monthTot25;
        let monthIndicator = '';
        if (monthDiff > 0) {
            monthIndicator = `<span class="text-emerald-600 font-extrabold text-sm flex items-center gap-1">▲ +${monthDiff.toFixed(0)} uds <span class="text-xs font-normal text-gray-400">(Superior)</span></span>`;
        } else if (monthDiff < 0) {
            monthIndicator = `<span class="text-rose-600 font-extrabold text-sm flex items-center gap-1">▼ ${monthDiff.toFixed(0)} uds <span class="text-xs font-normal text-gray-400">(Inferior)</span></span>`;
        } else {
            monthIndicator = `<span class="text-gray-500 font-extrabold text-sm">= Igualdad</span>`;
        }

        summaryHTML += `
            <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200 shadow-sm">
                <h4 class="text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-0.5">Evolución MES LFL</h4>
                <p class="text-[10px] text-gray-400 font-medium mb-2">Del 1 al ${lastDayAvailable26} de ${monthNames[currentMonth]} (Días homólogos)</p>
                <div class="grid grid-cols-3 
                    gap-2 text-center items-center">
                    <div class="border-r border-blue-100 py-1">
                        <span class="block text-[10px] font-bold text-blue-400 uppercase">Uds 2025</span>
                        <span class="text-xl font-black text-teal-800">${monthTot25.toFixed(0)}</span>
                  
                    </div>
                    <div class="border-r border-blue-100 py-1">
                        <span class="block text-[10px] font-bold text-blue-400 uppercase">Uds 2026</span>
                        <span class="text-xl font-black text-orange-700">${monthTot26.toFixed(0)}</span>
                  
                    </div>
                    <div class="py-1">
                        <span class="block text-[10px] font-bold text-blue-400 uppercase mb-0.5">Desvío Neto</span>
                        <div class="flex items-center justify-center">${monthIndicator}</div>
                   
                    </div>
                </div>
            </div>
        `;
        if (showYTD) {
            let ytdDiff = ytdTot26 - ytdTot25;
            let ytdPct = ytdTot25 > 0 ? (ytdDiff / ytdTot25) * 100 : 0;
            let ytdIndicator = '';
            if (ytdDiff > 0) {
                ytdIndicator = `<span class="text-emerald-600 font-extrabold text-sm flex items-center gap-1">▲ +${ytdDiff.toFixed(0)} uds <span class="text-xs font-bold text-emerald-600">(+${ytdPct.toFixed(1)}%)</span></span>`;
            } else if (ytdDiff < 0) {
                ytdIndicator = `<span class="text-rose-600 font-extrabold text-sm flex items-center gap-1">▼ ${ytdDiff.toFixed(0)} uds <span class="text-xs font-bold text-rose-600">(${ytdPct.toFixed(1)}%)</span></span>`;
            } else {
                ytdIndicator = `<span class="text-gray-500 font-extrabold text-sm">= Igualdad</span>`;
            }

            let periodText = currentMonthInt > maxMonth26 
                ?
                `1 Ene al ${lastDayYTD26} de ${monthNames[maxMonth26]} <span class="text-[9px] lowercase text-blue-500 font-bold bg-blue-50 border border-blue-200 px-1 rounded">(Máx disp.)</span>` 
                : `1 Ene al ${lastDayAvailable26} de ${monthNames[currentMonth]}`;
            summaryHTML += `
                <div class="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200 shadow-inner">
                    <h4 class="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Acumulado Año LFL</h4>
                    <p class="text-[10px] text-gray-400 font-medium mb-2">${periodText}</p>
                    <div class="grid 
                        grid-cols-3 gap-2 text-center items-center">
                        <div class="border-r border-gray-200 py-1">
                            <span class="block text-[10px] font-bold text-gray-400 uppercase">Acum. 2025</span>
                            <span class="text-xl font-black text-teal-800">${ytdTot25.toFixed(0)}</span>
                        </div>
                        <div class="border-r border-gray-200 py-1">
                  
                            <span class="block text-[10px] font-bold text-gray-400 uppercase">Acum. 2026</span>
                            <span class="text-xl font-black text-orange-700">${ytdTot26.toFixed(0)}</span>
                        </div>
                        <div class="py-1">
                    
                            <span class="block text-[10px] font-bold text-gray-400 uppercase mb-0.5">Evolución</span>
                            <div class="flex items-center justify-center">${ytdIndicator}</div>
                        </div>
                    </div>
           
                </div>
            `;
        }

        document.getElementById('table-summary-container').innerHTML = summaryHTML;

        let t25 = getCleanArrayForTable(res25.items);
        let t26 = getCleanArrayForTable(res26.items);
        const tbody = document.getElementById('body-comparativo');
        const noData = document.getElementById('no-data-table-combined');
        const wrapper = document.getElementById('wrapper-combined');
        tbody.innerHTML = '';
        if (t25.length === 0 && t26.length === 0) {
            noData.classList.remove('hidden');
            wrapper.classList.add('hidden');
            return;
        }
        noData.classList.add('hidden'); wrapper.classList.remove('hidden');

        let maxRows = Math.max(t25.length, t26.length);
        if (maxRows > 20) maxRows = 20;

        let defaultBlank = `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`;
        for (let i = 0; i < maxRows; i++) {
            let item25 = t25[i];
            let item26 = t26[i];

            let tr = document.createElement('tr');
            tr.className = "hover:bg-gray-50 transition-colors";

            let html25 = '';
            if (item25) {
                html25 = `
                    <td class="py-3 px-3 border-r border-gray-200 text-center">
                        <img src="https://cdn.jsdelivr.net/gh/leyreselles-prog/sfo-imagenes@main/${item25.art}.jpg" onerror="if(!this.dataset.fallback){this.dataset.fallback=1; this.src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAAoACgDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQCB//EACEQAAIDAAEDBQAAAAAAAAAAAAACAQMRBBIxYSEyQXGR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOnAAACfi83j8uXjj2Q8pnVkdtjYKAAAAE9tFzWyychlWY9udvJQAJEotndvsWdjNj0+fP1+FNSslaq79bRGS2ZpoAAAAAAAAAAAB//Z';}else{this.src='${defaultBlank}';}" class="w-12 h-12 object-cover rounded shadow-sm border bg-gray-100 mx-auto">
                    
                    </td>
                    <td class="py-3 px-3 border-r border-gray-200">
                        <div class="font-bold text-gray-800 tracking-wide">${item25.art}</div>
                        <div class="text-xs text-gray-500 font-medium max-w-xs truncate">${item25.desc ||
                        'Sin descripción técnica'}</div>
                    </td>
                    <td class="py-3 px-3 border-r-2 border-gray-300 text-center font-bold text-lg text-gray-600 bg-gray-50/30">${item25.unid.toFixed(0)}</td>
                `;
            } else {
                html25 = `
                    <td class="py-3 px-3 border-r border-gray-200"></td>
                    <td class="py-3 px-3 border-r border-gray-200 text-gray-300 text-xs italic font-medium">Vacante en ranking</td>
                    <td class="py-3 px-3 border-r-2 border-gray-300 text-center 
                        text-gray-300 font-bold bg-gray-50/10">-</td>
                `;
            }

            let html26 = '';
            if (item26) {
                let uds25 = res25.lookup[item26.art] ||
                    0;
                let crossBadgeHTML = "";
                if (uds25 > 0) {
                    let diff = item26.unid - uds25;
                    let badgeColor = diff > 0 ? 'text-emerald-600 bg-emerald-50 border-emerald-200' : diff < 0 ?
                        'text-rose-600 bg-rose-50 border-rose-200' : 'text-gray-500 bg-gray-50 border-gray-200';
                    let sign = diff > 0 ? '+' : '';
                    crossBadgeHTML = `<div class="inline-block text-[10px] font-bold px-1.5 py-0.5 rounded border ${badgeColor} mt-1">${sign}${diff.toFixed(0)} Uds vs 2025</div>`;
                } else {
                    crossBadgeHTML = `<div class="inline-block text-[10px] font-extrabold px-1.5 py-0.5 rounded border text-blue-700 bg-blue-50 border-blue-200 uppercase tracking-wider font-mono mt-1">NEW S26</div>`;
                }

                let stockBadgeHTML = "";
                if (currentMonthInt === maxMonth26) { 
                    let currentStock = window.dbStock[item26.art] !== undefined ?
                        window.dbStock[item26.art] : 0;
                    if (item26.unid >= 5 && currentStock <= 3) {
                        stockBadgeHTML = `<span class="inline-block text-[10px] font-extrabold px-1.5 py-0.5 rounded border bg-rose-100 border-rose-300 text-rose-700 ml-1">Reposición Urgente (Stock: ${currentStock})</span>`;
                    } else if (item26.unid <= 1 && currentStock >= 20) {
                        stockBadgeHTML = `<span class="inline-block text-[10px] font-extrabold px-1.5 py-0.5 rounded border bg-amber-100 border-amber-300 text-amber-700 ml-1">Revisar Mix / Sobre-Stock (Stock: ${currentStock})</span>`;
                    } else {
                        stockBadgeHTML = `<span class="inline-block text-[10px] font-medium px-1.5 py-0.5 rounded border bg-gray-50 border-gray-200 text-gray-500 ml-1">Stock Equilibrado (${currentStock})</span>`;
                    }
                }

                html26 = `
                    <td class="py-3 px-3 border-r border-gray-200 text-center">
                        <img src="https://cdn.jsdelivr.net/gh/leyreselles-prog/sfo-imagenes@main/${item26.art}.jpg" onerror="if(!this.dataset.fallback){this.dataset.fallback=1; this.src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAAoACgDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQCB//EACEQAAIDAAEDBQAAAAAAAAAAAAACAQMRBBIxYSEyQXGR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOnAAACfi83j8uXjj2Q8pnVkdtjYKAAAAE9tFzWyychlWY9udvJQAJEotndvsWdjNj0+fP1+FNSslaq79bRGS2ZpoAAAAAAAAAAAB//Z';}else{this.src='${defaultBlank}';}" class="w-12 h-12 object-cover rounded shadow-sm border bg-gray-100 mx-auto">
      
                    </td>
                    <td class="py-3 px-3 border-r border-gray-200">
                        <div class="font-bold text-gray-800 tracking-wide">${item26.art}</div>
                        <div class="text-xs text-gray-500 font-medium max-w-xs truncate">${item26.desc ||
                        'Sin descripción técnica'}</div>
                        <div class="flex flex-wrap gap-1 mt-1 items-center">
                            ${crossBadgeHTML}
                            ${stockBadgeHTML}
             
                        </div>
                    </td>
                    <td class="py-3 px-3 text-center font-bold text-lg text-gray-700 bg-orange-50/10">${item26.unid.toFixed(0)}</td>
                `;
            } else {
                html26 = `
                    <td class="py-3 px-4 border-r border-gray-200"></td>
                    <td class="py-3 px-4 border-r border-gray-200 text-gray-300 text-xs italic font-medium">Vacante en ranking</td>
                    <td class="py-3 px-4 text-center text-gray-300 font-bold 
                        bg-orange-50/5">-</td>
                `;
            }

            tr.innerHTML = html25 + html26;
            tbody.appendChild(tr);
        }
    }

    function formatKpiNumber(value) {
        if (value === null || value === undefined || isNaN(value)) return '-';
        return Math.round(value).toLocaleString('es-ES');
    }

    function formatKpiPct(value, decimals = 1) {
        if (value === null || value === undefined || isNaN(value)) return '-';
        return `${(value * 100).toFixed(decimals).replace('.', ',')}%`;
    }

    function getMaxMonthWith2026Sales() {
        let maxMonth26 = 0;
        (window.db2026.records || []).forEach(r => {
            if (r.seccion === currentSection && r.unid > 0 && r.mes > maxMonth26) maxMonth26 = r.mes;
        });
        return maxMonth26;
    }

    function getLastDay26ForMonth(monthInt) {
        let records = (window.db2026.records || []).filter(r => r.seccion === currentSection && r.mes === monthInt);
        return records.length > 0 ? Math.max(...records.map(r => r.day)) : 31;
    }

    function aggregateFamilyTotals(startMonth, endMonth) {
        let totals = {};
        for (let m = startMonth; m <= endMonth; m++) {
            let r25 = getFilteredData(2025, m);
            let r26 = getFilteredData(2026, m);

            for (let [cat, fams] of Object.entries(r25.raw)) {
                if (currentCategory !== 'TODAS' && currentCategory !== cat) continue;
                for (let [fam, uds] of Object.entries(fams)) {
                    if (currentFamily !== 'TODAS' && currentFamily !== fam) continue;
                    if (!totals[fam]) totals[fam] = { fam: fam, u25: 0, u26: 0 };
                    totals[fam].u25 += uds;
                }
            }
            for (let [cat, fams] of Object.entries(r26.raw)) {
                if (currentCategory !== 'TODAS' && currentCategory !== cat) continue;
                for (let [fam, uds] of Object.entries(fams)) {
                    if (currentFamily !== 'TODAS' && currentFamily !== fam) continue;
                    if (!totals[fam]) totals[fam] = { fam: fam, u25: 0, u26: 0 };
                    totals[fam].u26 += uds;
                }
            }
        }
        return Object.values(totals);
    }

    function computeKpiMetrics(rows) {
        let total25 = rows.reduce((acc, r) => acc + (r.u25 || 0), 0);
        let total26 = rows.reduce((acc, r) => acc + (r.u26 || 0), 0);
        let gapUds = total26 - total25;
        let gapPct = total25 > 0 ? gapUds / total25 : 0;
        let targetGapPct = gapPct < 0 ? gapPct * (1 - KPI_GAP_REDUCTION_TARGET) : gapPct;
        let targetUds = total25 > 0 ? total25 * (1 + targetGapPct) : total26;
        let neededUds = Math.max(0, Math.ceil(targetUds - total26));

        let detail = rows.map(r => {
            let gap = (r.u26 || 0) - (r.u25 || 0);
            let gapPctFam = r.u25 > 0 ? gap / r.u25 : null;
            let weight25 = total25 > 0 ? r.u25 / total25 : 0;
            let weightedContribution = total25 > 0 ? gap / total25 : 0;
            let targetGapFam = gapPctFam !== null && gapPctFam < 0 ? gapPctFam * (1 - KPI_GAP_REDUCTION_TARGET) : gapPctFam;
            let targetUdsFam = gapPctFam === null ? null : r.u25 * (1 + targetGapFam);
            let neededFam = targetUdsFam === null ? 0 : Math.max(0, Math.ceil(targetUdsFam - r.u26));
            return {
                fam: r.fam,
                u25: r.u25 || 0,
                u26: r.u26 || 0,
                gap: gap,
                gapPct: gapPctFam,
                weight25: weight25,
                weightedContribution: weightedContribution,
                targetGap: targetGapFam,
                targetUds: targetUdsFam,
                needed: neededFam
            };
        }).sort((a, b) => Math.abs(b.weightedContribution) - Math.abs(a.weightedContribution));

        return { total25, total26, gapUds, gapPct, targetGapPct, targetUds, neededUds, detail };
    }

    function periodLabel(startMonth, endMonth) {
        const lastDay = getLastDay26ForMonth(endMonth);
        if (startMonth === endMonth) return `1 al ${lastDay} de ${monthNames[endMonth]}`;
        return `${monthNames[startMonth]} - ${monthNames[endMonth]} · último mes hasta día ${lastDay}`;
    }

    function renderKpiCard(title, main, subtitle, tone = 'gray') {
        const tones = {
            teal: 'from-teal-50 to-teal-100 border-teal-200 text-teal-800',
            orange: 'from-orange-50 to-orange-100 border-orange-200 text-orange-800',
            rose: 'from-rose-50 to-rose-100 border-rose-200 text-rose-700',
            emerald: 'from-emerald-50 to-emerald-100 border-emerald-200 text-emerald-700',
            purple: 'from-purple-50 to-purple-100 border-purple-200 text-purple-800',
            gray: 'from-gray-50 to-gray-100 border-gray-200 text-gray-700'
        };
        return `
            <div class="bg-gradient-to-br ${tones[tone] || tones.gray} p-4 rounded-xl border shadow-sm">
                <h4 class="text-[10px] uppercase tracking-widest font-extrabold opacity-70 mb-1">${title}</h4>
                <div class="text-2xl font-black leading-tight">${main}</div>
                <div class="text-[11px] font-semibold opacity-70 mt-1 leading-snug">${subtitle}</div>
            </div>
        `;
    }

    function renderKpiGapView() {
        let currentMonthInt = parseInt(currentMonth);
        let maxMonth26 = getMaxMonthWith2026Sales();
        let endMonth = maxMonth26 > 0 ? Math.min(currentMonthInt, maxMonth26) : currentMonthInt;
        let startMonth = parseInt(currentKpiStartMonth || currentMonth);
        if (startMonth > endMonth) startMonth = endMonth;

        let catText = currentCategory === 'TODAS' ? 'Todas las categorías' : currentCategory;
        let famText = currentFamily === 'TODAS' ? 'Todas las familias' : currentFamily;
        document.getElementById('kpi-title').innerText = `KPI Gap Medio Ponderado - ${currentSection} - ${catText} - ${famText}`;

        let actionRows = aggregateFamilyTotals(startMonth, endMonth);
        let ytdRows = aggregateFamilyTotals(1, endMonth);
        let action = computeKpiMetrics(actionRows);
        let ytd = computeKpiMetrics(ytdRows);

        const noData = document.getElementById('no-data-kpi');
        const wrapper = document.getElementById('kpi-content-wrapper');
        if (action.total25 === 0 && action.total26 === 0) {
            noData.classList.remove('hidden');
            wrapper.classList.add('hidden');
            document.getElementById('kpi-summary-container').innerHTML = '';
            document.getElementById('kpi-reading-container').innerHTML = '';
            document.getElementById('body-kpi').innerHTML = '';
            return;
        }
        noData.classList.add('hidden');
        wrapper.classList.remove('hidden');

        let actionTone = action.gapPct < 0 ? 'rose' : 'emerald';
        let neededTone = action.neededUds > 0 ? 'orange' : 'emerald';
        document.getElementById('kpi-summary-container').innerHTML =
            renderKpiCard('Gap heredado YTD', `${formatKpiPct(ytd.gapPct)} / ${formatKpiNumber(ytd.gapUds)} uds`, `1 Enero - ${periodLabel(endMonth, endMonth)}`, ytd.gapPct < 0 ? 'rose' : 'emerald') +
            renderKpiCard('Gap periodo accionable', `${formatKpiPct(action.gapPct)} / ${formatKpiNumber(action.gapUds)} uds`, periodLabel(startMonth, endMonth), actionTone) +
            renderKpiCard('Objetivo 20%', `${formatKpiPct(action.targetGapPct)}`, `Objetivo de uds: ${formatKpiNumber(action.targetUds)}`, 'purple') +
            renderKpiCard('Uds necesarias', `${formatKpiNumber(action.neededUds)}`, action.neededUds > 0 ? 'Para reducir el gap actual un 20%' : 'Objetivo cumplido o gap no negativo', neededTone);

        const ppImprove = action.gapPct < 0 ? Math.abs((action.targetGapPct - action.gapPct) * 100) : 0;
        const statusText = action.neededUds > 0
            ? `Para cumplir el KPI, el periodo accionable debería sumar <b>${formatKpiNumber(action.neededUds)} uds adicionales</b>, pasando de un gap de <b>${formatKpiPct(action.gapPct)}</b> a un gap objetivo de <b>${formatKpiPct(action.targetGapPct)}</b>.`
            : `El periodo accionable ya cumple el criterio del KPI: el gap es positivo o no necesita recuperación adicional bajo el objetivo del 20%.`;

        document.getElementById('kpi-reading-container').innerHTML = `
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="bg-white border border-gray-200 rounded-xl p-4 shadow-sm text-sm text-gray-700 leading-relaxed">
                    <h4 class="font-black text-gray-800 uppercase tracking-wider text-xs mb-2">Lectura ejecutiva</h4>
                    ${statusText}
                    <br><span class="text-xs text-gray-500">Mejora exigida sobre el gap actual: <b>${ppImprove.toFixed(1).replace('.', ',')} p.p.</b></span>
                </div>
                <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-sm text-xs text-blue-900 leading-relaxed">
                    <h4 class="font-black text-blue-800 uppercase tracking-wider text-xs mb-2">Fórmula usada</h4>
                    <b>Gap ponderado</b> = SUMA(Uds 2026 LFL) / SUMA(Uds 2025 LFL) - 1.<br>
                    <b>Gap objetivo</b> = Gap actual × 0,80.<br>
                    <b>Uds objetivo</b> = Uds 2025 × (1 + Gap objetivo).<br>
                    <b>Uds necesarias</b> = MAX(0; Uds objetivo - Uds 2026).
                </div>
            </div>`;

        const tbody = document.getElementById('body-kpi');
        tbody.innerHTML = '';
        action.detail.forEach(r => {
            const tr = document.createElement('tr');
            tr.className = 'hover:bg-gray-50 transition-colors';
            const gapClass = r.gap < 0 ? 'text-rose-600' : (r.gap > 0 ? 'text-emerald-600' : 'text-gray-500');
            const neededClass = r.needed > 0 ? 'text-orange-700 bg-orange-50' : 'text-emerald-700 bg-emerald-50';
            tr.innerHTML = `
                <td class="py-3 px-3 text-left font-black text-gray-800">${r.fam}</td>
                <td class="py-3 px-3 text-teal-800 font-black">${formatKpiNumber(r.u25)}</td>
                <td class="py-3 px-3 text-orange-700 font-black">${formatKpiNumber(r.u26)}</td>
                <td class="py-3 px-3 font-black ${gapClass}">${r.gap > 0 ? '+' : ''}${formatKpiNumber(r.gap)}</td>
                <td class="py-3 px-3 font-black ${gapClass}">${formatKpiPct(r.gapPct)}</td>
                <td class="py-3 px-3">${formatKpiPct(r.weight25)}</td>
                <td class="py-3 px-3 font-black ${gapClass}">${formatKpiPct(r.weightedContribution)}</td>
                <td class="py-3 px-3 font-black text-purple-800">${r.targetGap === null ? 'Nuevo 2026' : formatKpiPct(r.targetGap)}</td>
                <td class="py-3 px-3 font-black text-purple-900">${r.targetUds === null ? '-' : formatKpiNumber(r.targetUds)}</td>
                <td class="py-3 px-3 font-black ${neededClass}">${formatKpiNumber(r.needed)}</td>
            `;
            tbody.appendChild(tr);
        });

        window.currentExportKpiData = {
            filename: `KPI_Gap_20_${currentSection}_${monthNames[startMonth]}_${monthNames[endMonth]}.csv`,
            headers: ['Familia', 'Uds 2025 LFL', 'Uds 2026 LFL', 'Gap uds', 'Gap %', 'Peso venta 2025', 'Aportacion gap ponderado', 'Gap objetivo 20%', 'Uds objetivo', 'Uds necesarias'],
            rows: action.detail.map(r => [
                r.fam,
                Math.round(r.u25),
                Math.round(r.u26),
                Math.round(r.gap),
                r.gapPct === null ? 'Nuevo 2026' : (r.gapPct * 100).toFixed(1).replace('.', ',') + '%',
                (r.weight25 * 100).toFixed(1).replace('.', ',') + '%',
                (r.weightedContribution * 100).toFixed(1).replace('.', ',') + '%',
                r.targetGap === null ? 'Nuevo 2026' : (r.targetGap * 100).toFixed(1).replace('.', ',') + '%',
                r.targetUds === null ? '' : Math.round(r.targetUds),
                Math.round(r.needed)
            ])
        };
    }

    function renderSizeView() {
        let mInt = parseInt(currentMonth);
        let res25 = getFilteredData(2025, mInt);
        let res26 = getFilteredData(2026, mInt);

        let famText = currentFamily === "TODAS" ? "Global" : currentFamily;
        document.getElementById('size-title').innerText = `Curva de Peso por Talla - ${currentSection} - ${monthNames[currentMonth]?.toUpperCase()} (${famText})`;

        let sizes25 = {}, tot25 = 0;
        res25.records.forEach(r => {
            if (currentCategory === "TODAS" || r.cat === currentCategory) {
                if (currentFamily === "TODAS" || r.fam === currentFamily) {
                    if (!sizes25[r.talla]) sizes25[r.talla] = 0;
                    sizes25[r.talla] += r.unid;
        
                    tot25 += r.unid;
                }
            }
        });
        let sizes26 = {}, tot26 = 0;
        res26.records.forEach(r => {
            if (currentCategory === "TODAS" || r.cat === currentCategory) {
                if (currentFamily === "TODAS" || r.fam === currentFamily) {
                    if (!sizes26[r.talla]) sizes26[r.talla] = 0;
                    sizes26[r.talla] += r.unid;
 
                    tot26 += r.unid;
                }
            }
        });
        if (tot25 === 0 && tot26 === 0) {
            document.getElementById('no-data-size').classList.remove('hidden');
            document.getElementById('size-content-wrapper').classList.add('hidden');
            if (mySizeChart) mySizeChart.destroy();
            return;
        }
        
        document.getElementById('no-data-size').classList.add('hidden');
        document.getElementById('size-content-wrapper').classList.remove('hidden');

        let WynSizes = new Set([...Object.keys(sizes25), ...Object.keys(sizes26)]);
        let masterSizes = Array.from(WynSizes).sort(sortSizesHelper);

        let maxP25 = 0, maxP26 = 0;
        masterSizes.forEach(sz => {
            let p25 = tot25 > 0 ? ((sizes25[sz] || 0) / tot25) * 100 : 0;
            let p26 = tot26 > 0 ? ((sizes26[sz] || 0) / tot26) * 100 : 0;
            if (p25 > maxP25) maxP25 = p25;
            if (p26 > maxP26) maxP26 = p26;
        
        });

        const tbody = document.getElementById('body-tallas');
        tbody.innerHTML = '';
        
        masterSizes.forEach(sz => {
            let u25 = sizes25[sz] || 0;
            let u26 = sizes26[sz] || 0;
            let p25 = tot25 > 0 ? (u25 / tot25) * 100 : 0;
            let p26 = tot26 > 0 ? (u26 / tot26) * 100 : 0;

      
            let alpha25 = maxP25 > 0 ? (p25 / maxP25) * 0.40 : 0;
            let alpha26 = maxP26 > 0 ? (p26 / maxP26) * 0.40 : 0;

            let tr = document.createElement('tr');
            tr.className = "hover:bg-gray-100 transition-colors border-b border-gray-200";
            tr.innerHTML = `
          
                <td class="py-3 px-4 font-bold border-r border-gray-200 bg-gray-50/80 text-gray-800 tracking-wide">${sz}</td>
                <td class="py-3 px-4 text-gray-600 font-medium">${u25.toFixed(0)}</td>
                <td class="py-3 px-4 text-teal-950 font-black border-r border-gray-200" style="background-color: rgba(0, 75, 80, ${alpha25});">${p25.toFixed(1)}%</td>
                <td class="py-3 px-4 text-gray-600 font-medium">${u26.toFixed(0)}</td>
                <td class="py-3 px-4 
                    text-orange-950 font-black" style="background-color: rgba(211, 129, 59, ${alpha26});">${p26.toFixed(1)}%</td>
            `;
            tbody.appendChild(tr);
        });

        const container = document.getElementById('size-canvas-wrapper');
        container.innerHTML = '<canvas id="sizeChart"></canvas>';
        const ctx = document.getElementById('sizeChart').getContext('2d');
        mySizeChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: masterSizes,
                datasets: [
                    {
                
                        label: 'Mix 2025 (%)',
                        data: masterSizes.map(sz => tot25 > 0 ? ((sizes25[sz] || 0) / tot25 * 100).toFixed(1) : 0),
                        backgroundColor: 'rgba(0, 75, 80, 0.85)',
                      
                        borderColor: 'rgba(0, 75, 80, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Mix 2026 (%)',
  
                        data: masterSizes.map(sz => tot26 > 0 ? ((sizes26[sz] || 0) / tot26 * 100).toFixed(1) : 0),
                        backgroundColor: 'rgba(211, 129, 59, 0.85)',
                        borderColor: 'rgba(211, 129, 59, 1)',
       
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
  
                scales: {
                    y: { beginAtZero: true, title: { display: true, text: 'Mix de Venta (%)' } }
                }
            }
        });
        window.currentExportSizesData = {
            filename: `Curva_Tallas_${currentSection}_${famText}_${monthNames[currentMonth]}.csv`,
            headers: ['Talla', 'Uds 2025', 'Mix 2025 (%)', 'Uds 2026', 'Mix 2026 (%)'],
            rows: masterSizes.map(sz => {
                let u25 = sizes25[sz] || 0;
                let u26 = sizes26[sz] || 0;
     
                let p25 = tot25 > 0 ? (u25 / tot25) * 100 : 0;
                let p26 = tot26 > 0 ? (u26 / tot26) * 100 : 0;
                return [sz, u25, p25.toFixed(1)+'%', u26, p26.toFixed(1)+'%'];
            })
        };
    }

    function renderSlowMoversView() {
        let mInt = parseInt(currentMonth);
        let famText = currentFamily === "TODAS" ? "Global" : currentFamily;
        document.getElementById('slow-title').innerText = `Auditoría de Inmovilizado (Slow Movers) - ${currentSection} - ${monthNames[currentMonth]?.toUpperCase()} (${famText})`;

        let maxMonth26 = 0;
        let records26 = window.db2026.records || [];
        records26.forEach(r => {
            if (r.seccion === currentSection && r.unid > 0 && r.mes > maxMonth26) maxMonth26 = r.mes;
        });
        let currentSectionThreshold = currentSection === 'NIÑO' ? 7 : 20;
        document.getElementById('slow-threshold-text').innerHTML = `&ge; ${currentSectionThreshold} unidades`;

        const tbody = document.getElementById('body-slow');
        const noData = document.getElementById('no-data-slow');
        const wrapper = document.getElementById('slow-content-wrapper');
        
        tbody.innerHTML = '';
        if (mInt !== maxMonth26) {
            noData.innerHTML = `El análisis de Slow Movers requiere la foto de stock actual vivo.
                Por favor, selecciona el mes de <b>${monthNames[maxMonth26]}</b> en el desplegable superior para auditar el inmovilizado de la tienda.`;
            noData.className = "text-center text-gray-500 text-sm font-medium my-10 border border-dashed border-gray-300 rounded-lg py-10 bg-gray-50 p-4";
            noData.classList.remove('hidden'); 
            wrapper.classList.add('hidden');
            return;
        }

        let res26 = getFilteredData(2026, mInt);
        let salesLookup = res26.lookup || {};
        let familySizeSales = {};
        let familyTotalSales = {};

        records26.forEach(r => {
            if (r.seccion === currentSection && r.mes === maxMonth26) {
                if (!familySizeSales[r.fam]) familySizeSales[r.fam] = {};
                if (!familySizeSales[r.fam][r.talla]) familySizeSales[r.fam][r.talla] = 0;
                familySizeSales[r.fam][r.talla] += r.unid;

            
                if (!familyTotalSales[r.fam]) familyTotalSales[r.fam] = 0;
                familyTotalSales[r.fam] += r.unid;
            }
        });
        function getCoreSizesForFamily(fam) {
            let sizeSales = familySizeSales[fam] || {};
            let total = familyTotalSales[fam] || 0;
            if (total === 0) return [];
            let sortedSizes = Object.keys(sizeSales).map(sz => ({
                size: sz,
                unid: sizeSales[sz]
            })).sort((a, b) => b.unid - a.unid);
            let core = [];
            let accumulated = 0;
            for (let entry of sortedSizes) {
                core.push(entry.size);
                accumulated += entry.unid;
                if (accumulated >= total * 0.5) break;
            }
            return core;
        }

        let ytdSales25 = {};
        let ytdSales26 = {};
        let currentMonthRecords26 = records26.filter(r => r.seccion === currentSection && r.mes === maxMonth26);
        let lastDayYTDLimit = currentMonthRecords26.length > 0 ?
            Math.max(...currentMonthRecords26.map(r => r.day)) : 31;

        records26.forEach(r => {
            if (r.seccion === currentSection && r.mes <= maxMonth26) {
                if (!ytdSales26[r.art]) ytdSales26[r.art] = 0;
                ytdSales26[r.art] += r.unid;
            }
        });
        window.db2025.records.forEach(r => {
            if (r.seccion === currentSection && r.mes <= maxMonth26) {
                if (r.mes < maxMonth26 || (r.mes === maxMonth26 && r.day <= lastDayYTDLimit)) {
                    if (!ytdSales25[r.art]) ytdSales25[r.art] = 0;
                    ytdSales25[r.art] += r.unid;
    
                }
            }
        });
        let slowMoversList = [];

        for (let art of Object.keys(window.dbStock)) {
            let stockVal = window.dbStock[art] ||
                0;
            let prodInfo = window.productMaster[art] || null;

            if (prodInfo) {
                if (prodInfo.seccion !== currentSection) continue;
                if (currentFamily !== "TODAS" && prodInfo.fam !== currentFamily) continue;
            } else {
                if (currentFamily !== "TODAS") continue;
            }

            let salesVal = salesLookup[art] || 0;
            if (salesVal <= 1 && stockVal >= currentSectionThreshold) {
                let artYtd25 = ytdSales25[art] ||
                    0;
                let artYtd26 = ytdSales26[art] || 0;

                slowMoversList.push({
                    art: art,
                    desc: prodInfo ? prodInfo.desc : 'Prenda en Stock (Sin ventas registradas en el histórico)',
                    sales: salesVal,
                  
                    stock: stockVal,
                    ytd25: artYtd25,
                    ytd26: artYtd26,
                    family: prodInfo ? prodInfo.fam : 'DESCONOCIDA'
                });
            }
        }

        slowMoversList.sort((a, b) => b.stock - a.stock);
        if (slowMoversList.length === 0) {
            noData.innerHTML = `¡Excelente!
                No se detectan prendas de la familia <b>${famText}</b> con sobre-stock acumulado (&ge; ${currentSectionThreshold} uds) y baja rotación (&le; 1 ud).`;
            noData.className = "text-center text-emerald-700 text-sm font-bold my-10 border border-dashed border-emerald-300 rounded-lg py-10 bg-emerald-50 p-4";
            noData.classList.remove('hidden'); 
            wrapper.classList.add('hidden');
            return;
        }

        noData.classList.add('hidden'); 
        wrapper.classList.remove('hidden');
        
        let defaultBlank = `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`;
        slowMoversList.forEach(item => {
            let ytdDiff = item.ytd26 - item.ytd25;
            let ytdBadgeColor = ytdDiff > 0 ? 'text-emerald-600 bg-emerald-50 border-emerald-200' : ytdDiff < 0 ? 'text-rose-600 bg-rose-50 border-rose-200' : 'text-gray-500 bg-gray-50 border-gray-200';
            let ytdSign = ytdDiff > 0 ? '+' : '';

            let coreSizes = getCoreSizesForFamily(item.family);
            
            let coreStock = 0;
            let sizesBadges = [];
            let hasRedSize = false;

            coreSizes.forEach(sz => {
                let stk = 0;
                if (window.dbStockSizes[item.art] && window.dbStockSizes[item.art][sz] !== undefined) {
            
                    stk = window.dbStockSizes[item.art][sz];
                }
                coreStock += stk;
                
                if (stk <= 0) {
                    
                    hasRedSize = true;
                    sizesBadges.push(`<span class="text-red-600 font-black bg-red-100 px-1.5 py-0.5 rounded border border-red-200" title="¡Alerta! Talla core comercial rota en la tienda (0 uds)">${sz}</span>`);
                } else {
                    sizesBadges.push(`<span class="text-teal-800 font-bold bg-teal-50 px-1.5 py-0.5 rounded border border-teal-200">${sz}</span>`);
                }
            });

            let coreInfoHTML = "";
   
            if (coreSizes.length > 0) {
                coreInfoHTML = `<div class="text-[10px] text-teal-700 font-extrabold px-1.5 py-0.5 rounded border bg-teal-50 border-teal-200 mt-1.5 block max-w-max">Tallas Core (${sizesBadges.join(' / ')}): <span class="text-teal-900 font-black text-xs ml-1">${coreStock.toFixed(0)} uds</span></div>`;
            } else {
                coreInfoHTML = `<div class="text-[10px] text-gray-400 font-medium italic mt-1">Sin patrón de curva disponible</div>`;
      
            }

            let tr = document.createElement('tr');
            tr.className = "hover:bg-amber-50/40 transition-colors border-b";
            tr.innerHTML = `
                <td class="py-3 px-4 text-center">
                    <img src="https://cdn.jsdelivr.net/gh/leyreselles-prog/sfo-imagenes@main/${item.art}.jpg" onerror="if(!this.dataset.fallback){this.dataset.fallback=1; this.src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAAoACgDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQCB//EACEQAAIDAAEDBQAAAAAAAAAAAAACAQMRBBIxYSEyQXGR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOnAAACfi83j8uXjj2Q8pnVkdtjYKAAAAE9tFzWyychlWY9udvJQAJEotndvsWdjNj0+fP1+FNSslaq79bRGS2ZpoAAAAAAAAAAAB//Z';}else{this.src='${defaultBlank}';}" class="w-12 h-12 object-cover rounded shadow-sm border bg-gray-100 mx-auto">
                </td>
                <td class="py-3 px-4">
                    <div class="font-bold text-gray-800 tracking-wide">${item.art}</div>
                    <div class="text-xs text-gray-500 font-medium max-w-xl truncate">${item.desc}</div>
          
                </td>
                <td class="py-3 px-4 text-center font-bold text-gray-600 bg-gray-50/30">${item.sales} uds</td>
                <td class="py-3 px-4 text-center leading-snug">
                    <div class="text-xs text-gray-400 font-bold">2025: <span class="text-gray-600">${item.ytd25.toFixed(0)}</span></div>
                    <div class="text-xs text-gray-400 font-bold">2026: <span class="text-gray-800">${item.ytd26.toFixed(0)}</span></div>
 
                    <div class="inline-block text-[9px] font-black px-1.5 py-0.5 rounded border mt-1 ${ytdBadgeColor}">${ytdSign}${ytdDiff.toFixed(0)} YTD</div>
                </td>
                <td class="py-3 px-4 text-left leading-normal pl-6 bg-amber-50/10">
                    <div class="font-black text-lg text-rose-700">${item.stock.toFixed(0)} <span class="text-xs text-gray-400 font-bold">uds totales</span></div>
     
                    ${coreInfoHTML}
                </td>
                <td class="py-3 px-4 text-center">
                    ${coreSizes.length === 0
                        ?
                        `<span class="inline-block text-[11px] font-extrabold px-2.5 py-1 rounded border bg-blue-100 border-blue-300 text-blue-800 uppercase tracking-wider font-mono shadow-sm" style="min-width:130px;text-align:center;">COMERCIAL / VISUAL</span>`
                        : hasRedSize
                            ?
                            `<span class="inline-block text-[11px] font-extrabold px-2.5 py-1 rounded border uppercase tracking-wider font-mono shadow-sm" style="background-color:#ffe4e1;border-color:#f4a0a0;color:#c0392b;min-width:130px;text-align:center;">APROV</span>`
                            : `<span class="inline-block text-[11px] font-extrabold px-2.5 py-1 rounded border bg-blue-100 border-blue-300 text-blue-800 uppercase tracking-wider font-mono shadow-sm" style="min-width:130px;text-align:center;">COMERCIAL / VISUAL</span>`
                    }
                </td>
      
            `;
            tbody.appendChild(tr);
        });

        window.currentExportSlowData = {
            filename: `SlowMovers_CoreSizes_${currentSection}_${famText}_${monthNames[currentMonth]}.csv`,
            headers: ['Articulo', 'Descripcion', 'Ventas Mes 2026', 'Acumulado YTD 2025', 'Acumulado YTD 2026', 'Stock Actual', 'Accion Recomendada'],
            rows: slowMoversList.map(item => {
                let coreSizes = getCoreSizesForFamily(item.family);
               
                let anyRed = coreSizes.some(sz => {
                    let stk = (window.dbStockSizes[item.art] && window.dbStockSizes[item.art][sz] !== undefined) ? window.dbStockSizes[item.art][sz] : 0;
                    return stk <= 0;
                });
                let accion = (coreSizes.length > 0 && anyRed) 
                    ? 'APROV' : 'COMERCIAL / VISUAL';
                return [item.art, item.desc.replace(/;/g,","), item.sales, item.ytd25.toFixed(0), item.ytd26.toFixed(0), item.stock.toFixed(0), accion];
            })
        };
    }

    function renderSuperjuevesView() {
        let mInt = parseInt(currentMonth);
        let sDay = parseInt(document.getElementById('sj-start').value) || 22;
        let eDay = parseInt(document.getElementById('sj-end').value) || 24;
        let isCustomPromo = window.customPromoList && window.customPromoList.length > 0;
        let endMonthOffset = 0;
        if (sDay > eDay) {
            endMonthOffset = 1;
        }

        let famText = currentFamily === "TODAS" ? "Global" : currentFamily;
        let endMonthName = endMonthOffset > 0 ? monthNames[mInt === 12 ? 1 : mInt + 1] : monthNames[mInt];
        let dateTitle = endMonthOffset > 0 
            ? `${sDay} de ${monthNames[mInt]} al ${eDay} de ${endMonthName}` 
            : `${sDay} al ${eDay} de ${monthNames[mInt]}`;
        let titleSuffix = isCustomPromo ? 'AUDITORÍA MANUAL' : famText;
        document.getElementById('super-title').innerText = `Rendimiento Superjueves - ${currentSection} - ${dateTitle} (${titleSuffix})`;
        let records26 = window.db2026.records || [];
        
        let startDate = new Date(2026, mInt - 1, sDay);
        let endDate = new Date(2026, mInt - 1 + endMonthOffset, eDay);
        
        let durationDays = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
        let weeksToShift = Math.ceil(durationDays / 7);
        let daysToShift = weeksToShift * 7;

        let prevStartDate = new Date(2026, mInt - 1, sDay - daysToShift);
        let prevEndDate = new Date(2026, mInt - 1 + endMonthOffset, eDay - daysToShift);

        let period1 = {};
        let period2 = {}; 
        let totalPeriod1 = 0;
        let totalPeriod2 = 0;
        let totalMonth = 0;
        if (isCustomPromo) {
            window.customPromoList.forEach(ref => {
                let pMaster = window.productMaster[ref];
                if (pMaster) {
                    if (pMaster.seccion !== currentSection) return;
                    if (currentFamily !== 
                        "TODAS" && pMaster.fam !== currentFamily) return;
                } else if (currentFamily !== "TODAS") {
                    return; 
                }
                
                let desc = pMaster 
                    ? pMaster.desc : 'Ref. Manual (Sin descripción)';
                period1[ref] = { desc: desc, unid: 0 };
                period2[ref] = { desc: desc, unid: 0 };
            });
        }

        records26.forEach(r => {
            if (r.seccion !== currentSection) return;
            if (currentFamily !== "TODAS" && r.fam !== currentFamily) return;

            if (isCustomPromo && !window.customPromoList.includes(r.art)) {
                return;
            }

          
            if (r.mes === mInt) {
                totalMonth += r.unid;
            }

            let rDate = new Date(2026, r.mes - 1, r.day);
            
            if (rDate >= startDate && rDate <= endDate) {
            
                if (!period1[r.art]) period1[r.art] = { desc: r.desc, unid: 0 };
                period1[r.art].unid += r.unid;
                totalPeriod1 += r.unid;
            }
            
            if (rDate >= prevStartDate && rDate <= prevEndDate) {
       
                if (!period2[r.art]) period2[r.art] = { desc: r.desc, unid: 0 };
                period2[r.art].unid += r.unid;
                totalPeriod2 += r.unid;
            }
        });
        let pesoMes = totalMonth > 0 ? ((totalPeriod1 / totalMonth) * 100).toFixed(1) : 0;
        let filterString = isCustomPromo ?
            'Referencias Manuales' : famText;

        let diffTotales = totalPeriod1 - totalPeriod2;
        let summaryHTML = `
            <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200 shadow-sm col-span-1 md:col-span-2">
                <h4 class="text-[11px] font-bold text-purple-600 uppercase tracking-widest mb-0.5">Rendimiento Global del Periodo</h4>
                <p class="text-[10px] text-gray-400 font-medium mb-2">Total de unidades vendidas (filtrado por: ${filterString})</p>
                <div class="grid ${isCustomPromo ? 'grid-cols-3' : 'grid-cols-4'} gap-2 text-center items-center">
   
                  <div class="border-r border-purple-100 py-1">
                        <span class="block text-[10px] font-bold text-purple-400 uppercase">Periodo Actual</span>
                        <span class="text-2xl font-black text-purple-800">${totalPeriod1.toFixed(0)}</span>
                    </div>
   
                  <div class="border-r border-purple-100 py-1">
                        <span class="block text-[10px] font-bold text-gray-400 uppercase">Periodo Anterior</span>
                        <span class="text-2xl font-black text-gray-600">${totalPeriod2.toFixed(0)}</span>
                    </div>
   
                  <div class="${isCustomPromo ? '' : 'border-r border-purple-100'} py-1">
                        <span class="block text-[10px] font-bold text-purple-400 uppercase mb-0.5">Crecimiento Promocional</span>
                        <div class="flex items-center justify-center">
                      
                            ${diffTotales > 0 
                                ?
                                `<span class="text-emerald-600 font-extrabold text-lg flex items-center gap-1">▲ +${diffTotales.toFixed(0)}</span>` 
                                : diffTotales < 0 
                                    ?
                                    `<span class="text-rose-600 font-extrabold text-lg flex items-center gap-1">▼ ${diffTotales.toFixed(0)}</span>`
                                    : `<span class="text-gray-500 font-extrabold text-lg">= 0</span>`}
                        </div>
                    </div>
        
                    ${isCustomPromo ? '' : `
                    <div class="py-1">
                        <span class="block text-[10px] font-bold text-purple-400 uppercase">Peso Mes (${monthNames[mInt]})</span>
                        <span class="text-2xl font-black text-purple-800">${pesoMes}% <span class="text-xs text-gray-400">/ ${totalMonth.toFixed(0)} uds</span></span>
                    </div>
                    `}
    
                </div>
            </div>
        `;
        document.getElementById('super-summary-container').innerHTML = summaryHTML;

        let sortedItems = Object.keys(period1).map(art => ({
            art: art, desc: period1[art].desc, unid: period1[art].unid
        })).sort((a, b) => b.unid - a.unid);
        let topPeriod1 = isCustomPromo ? sortedItems : sortedItems.slice(0, 20);

        const tbody = document.getElementById('body-super');
        const noData = document.getElementById('no-data-super');
        const wrapper = document.getElementById('wrapper-super');
        tbody.innerHTML = '';

        if (topPeriod1.length === 0) {
            noData.classList.remove('hidden');
            wrapper.classList.add('hidden');
            return;
        }
        noData.classList.add('hidden'); wrapper.classList.remove('hidden');

        let defaultBlank = `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`;

        let exportRows = [];
        topPeriod1.forEach(p1 => {
            let p2Unid = period2[p1.art] ? period2[p1.art].unid : 0;
            let diff = p1.unid - p2Unid;
            let badgeColor = diff > 0 ? 'text-emerald-600 bg-emerald-50 border-emerald-200' : diff < 0 ? 'text-rose-600 bg-rose-50 border-rose-200' : 'text-gray-500 bg-gray-50 border-gray-200';
            let sign = diff > 0 ? '+' : '';
        
            
            let crossBadgeHTML = `<div class="inline-block text-[10px] font-bold px-1.5 py-0.5 rounded border ${badgeColor} mt-1">${sign}${diff.toFixed(0)} vs periodo anterior</div>`;

            let tr = document.createElement('tr');
            tr.className = "hover:bg-purple-50/20 transition-colors";

            tr.innerHTML = `
                <td class="py-3 px-3 border-r border-gray-200 text-center">
    
                    <img src="https://cdn.jsdelivr.net/gh/leyreselles-prog/sfo-imagenes@main/${p1.art}.jpg" onerror="if(!this.dataset.fallback){this.dataset.fallback=1; this.src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAAoACgDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQCB//EACEQAAIDAAEDBQAAAAAAAAAAAAACAQMRBBIxYSEyQXGR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOnAAACfi83j8uXjj2Q8pnVkdtjYKAAAAE9tFzWyychlWY9udvJQAJEotndvsWdjNj0+fP1+FNSslaq79bRGS2ZpoAAAAAAAAAAAB//Z';}else{this.src='${defaultBlank}';}" class="w-12 h-12 object-cover rounded shadow-sm border bg-gray-100 mx-auto">
                </td>
                <td class="py-3 px-3 border-r border-gray-200">
                    <div class="font-bold text-gray-800 tracking-wide">${p1.art}</div>
              
                    <div class="text-xs text-gray-500 font-medium max-w-xs truncate">${p1.desc ||
                    'Sin descripción técnica'}</div>
                </td>
                <td class="py-3 px-3 border-r-2 border-gray-300 text-center font-bold text-lg text-purple-700 bg-purple-50/10">${p1.unid.toFixed(0)}</td>
                
                <td class="py-3 px-3 border-r border-gray-200 text-center">
                    
                    <img src="https://cdn.jsdelivr.net/gh/leyreselles-prog/sfo-imagenes@main/${p1.art}.jpg" onerror="if(!this.dataset.fallback){this.dataset.fallback=1; this.src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAAoACgDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQCB//EACEQAAIDAAEDBQAAAAAAAAAAAAACAQMRBBIxYSEyQXGR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOnAAACfi83j8uXjj2Q8pnVkdtjYKAAAAE9tFzWyychlWY9udvJQAJEotndvsWdjNj0+fP1+FNSslaq79bRGS2ZpoAAAAAAAAAAAB//Z';}else{this.src='${defaultBlank}';}" class="w-12 h-12 object-cover rounded shadow-sm border bg-gray-100 mx-auto opacity-70">
                </td>
                <td class="py-3 px-3 border-r border-gray-200">
                    <div class="font-bold text-gray-600 tracking-wide">${p1.art}</div>
                    <div class="flex flex-wrap gap-1 mt-1 items-center">
    
                        ${crossBadgeHTML}
                    </div>
                </td>
                <td class="py-3 px-3 text-center font-bold text-lg text-gray-600 bg-gray-50/50">${p2Unid.toFixed(0)}</td>
            `;
            tbody.appendChild(tr);

            exportRows.push([p1.art, p1.desc.replace(/;/g,","), p1.unid, p2Unid, diff]);
        });

        window.currentExportSuperData = {
            filename: `Superjueves_${currentSection}_${sDay}-${eDay}_${monthNames[currentMonth]}.csv`,
            headers: ['Articulo', 'Descripcion', 'Uds Periodo Actual', 'Uds Semana Anterior', 'Crecimiento'],
            rows: exportRows
        };
    }

    function renderS26MetricCard(title, main, subtitle, tone = 'emerald') {
        const tones = {
            emerald: 'bg-emerald-50 border-emerald-200 text-emerald-800',
            blue: 'bg-blue-50 border-blue-200 text-blue-800',
            rose: 'bg-rose-50 border-rose-200 text-rose-800',
            gray: 'bg-gray-50 border-gray-200 text-gray-700',
            amber: 'bg-amber-50 border-amber-200 text-amber-800'
        };
        return `<div class="${tones[tone] || tones.emerald} border rounded-xl p-4 shadow-sm text-center">
            <div class="text-[10px] font-black uppercase tracking-widest opacity-70 mb-1">${title}</div>
            <div class="text-2xl font-black leading-none">${main}</div>
            <div class="text-[10px] font-bold opacity-60 mt-1">${subtitle}</div>
        </div>`;
    }

    function getStockSizeSummary(art) {
        let sizes = window.dbStockSizes[art] || {};
        let parts = Object.keys(sizes)
            .filter(sz => (sizes[sz] || 0) > 0)
            .sort(sortSizesHelper)
            .map(sz => `${sz}: ${Number(sizes[sz] || 0).toFixed(0)}`);
        return parts.length > 0 ? parts.join(' · ') : 'Sin stock por talla';
    }

    function renderS26NewRefsView() {
        let mInt = parseInt(currentMonth);
        let refs = window.s26NewRefsList || [];
        let records26 = window.db2026.records || [];
        let rows = refs.map(ref => {
            let master = window.productMaster[ref.art] || window.articlesMaster[ref.art] || {};
            let desc = master.desc || ref.desc || 'Sin descripción técnica';
            let fam = master.fam || desc.split(' ')[0] || 'SIN FAMILIA';
            let seccion = master.seccion || 'HOMBRE';
            let cat = master.cat || '';
            let monthSales = 0;
            let ytdSales = 0;

            records26.forEach(r => {
                if (r.art !== ref.art) return;
                if (r.seccion !== currentSection) return;
                if (r.mes === mInt) monthSales += r.unid;
                if (r.mes <= mInt) ytdSales += r.unid;
            });

            let stock = Number(window.dbStock[ref.art] || 0);
            let totalHandled = ytdSales + stock;
            let st = totalHandled > 0 ? (ytdSales / totalHandled) * 100 : null;
            let status = '';
            let tone = '';
            if (ytdSales > 0 && stock <= 0) {
                status = 'Vendido / revisar reposición';
                tone = 'text-emerald-700 bg-emerald-50 border-emerald-200';
            } else if (st !== null && st >= 35) {
                status = 'Buen ritmo';
                tone = 'text-emerald-700 bg-emerald-50 border-emerald-200';
            } else if (ytdSales > 0) {
                status = 'Activada, seguir lectura';
                tone = 'text-blue-700 bg-blue-50 border-blue-200';
            } else if (stock > 0) {
                status = 'Stock sin venta';
                tone = 'text-rose-700 bg-rose-50 border-rose-200';
            } else {
                status = 'Sin stock / sin venta en archivos';
                tone = 'text-gray-600 bg-gray-50 border-gray-200';
            }

            return { art: ref.art, desc, fam, seccion, cat, monthSales, ytdSales, stock, st, status, tone, sizeSummary: getStockSizeSummary(ref.art) };
        }).filter(item => item.seccion === currentSection || currentSection === 'HOMBRE');

        rows.sort((a, b) => (b.monthSales - a.monthSales) || (b.ytdSales - a.ytdSales) || (b.stock - a.stock) || a.fam.localeCompare(b.fam));

        let totalMonthSales = rows.reduce((sum, r) => sum + r.monthSales, 0);
        let totalYtdSales = rows.reduce((sum, r) => sum + r.ytdSales, 0);
        let totalStock = rows.reduce((sum, r) => sum + r.stock, 0);
        let activated = rows.filter(r => r.ytdSales > 0).length;
        let noSalesWithStock = rows.filter(r => r.ytdSales === 0 && r.stock > 0).length;
        let totalST = (totalYtdSales + totalStock) > 0 ? (totalYtdSales / (totalYtdSales + totalStock)) * 100 : null;

        document.getElementById('s26new-title').innerText = `Seguimiento referencias S26 nuevas - ${currentSection} - ${monthNames[currentMonth]?.toUpperCase()}`;
        document.getElementById('s26new-summary-container').innerHTML = [
            renderS26MetricCard('Refs evaluadas', rows.length, 'listado fijo S26', 'emerald'),
            renderS26MetricCard('Refs activadas', activated, 'con venta acumulada', activated > 0 ? 'emerald' : 'gray'),
            renderS26MetricCard('Uds mes', totalMonthSales.toFixed(0), monthNames[currentMonth], totalMonthSales > 0 ? 'blue' : 'gray'),
            renderS26MetricCard('Stock actual', totalStock.toFixed(0), 'según archivo stock', totalStock > 0 ? 'blue' : 'gray'),
            renderS26MetricCard('ST estimado', totalST === null ? '-' : `${totalST.toFixed(1)}%`, `${noSalesWithStock} refs con stock sin venta`, noSalesWithStock > 0 ? 'amber' : 'emerald')
        ].join('');

        const tbody = document.getElementById('body-s26new');
        tbody.innerHTML = '';
        let defaultBlank = `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`;
        let exportRows = [];

        rows.forEach(item => {
            let stText = item.st === null ? '-' : `${item.st.toFixed(1)}%`;
            let stTone = item.st === null ? 'text-gray-400' : item.st >= 35 ? 'text-emerald-700' : item.st > 0 ? 'text-blue-700' : 'text-rose-700';
            let stockTone = item.stock > 0 ? 'text-blue-800 bg-blue-50' : 'text-gray-400 bg-gray-50';
            let saleTone = item.monthSales > 0 ? 'text-emerald-700 bg-emerald-50' : 'text-gray-400 bg-gray-50';
            let tr = document.createElement('tr');
            tr.className = 'hover:bg-emerald-50/30 transition-colors';
            tr.innerHTML = `
                <td class="py-3 px-3 text-center border-r border-gray-200">
                    <img src="https://cdn.jsdelivr.net/gh/leyreselles-prog/sfo-imagenes@main/${item.art}.jpg" onerror="if(!this.dataset.fallback){this.dataset.fallback=1; this.src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAAoACgDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQCB//EACEQAAIDAAEDBQAAAAAAAAAAAAACAQMRBBIxYSEyQXGR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOnAAACfi83j8uXjj2Q8pnVkdtjYKAAAAE9tFzWyychlWY9udvJQAJEotndvsWdjNj0+fP1+FNSslaq79bRGS2ZpoAAAAAAAAAAAB//Z';}else{this.src='${defaultBlank}';}" class="w-11 h-11 object-cover rounded shadow-sm border bg-gray-100 mx-auto">
                </td>
                <td class="py-3 px-3 border-r border-gray-200">
                    <div class="font-black text-gray-800 tracking-wide">${item.art}</div>
                    <div class="text-[11px] text-gray-500 font-semibold truncate">${item.desc}</div>
                    <div class="mt-1 flex flex-wrap gap-1">
                        <span class="inline-block text-[9px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 border border-gray-200 font-black uppercase">${item.fam}</span>
                        ${item.cat ? `<span class="inline-block text-[9px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100 font-black uppercase">${item.cat}</span>` : ''}
                    </div>
                </td>
                <td class="py-3 px-3 text-center border-r border-gray-200 font-black text-lg ${saleTone}">${item.monthSales.toFixed(0)}</td>
                <td class="py-3 px-3 text-center border-r border-gray-200 font-black text-lg text-emerald-800 bg-emerald-50/40">${item.ytdSales.toFixed(0)}</td>
                <td class="py-3 px-3 text-center border-r border-gray-200 font-black text-lg ${stockTone}">${item.stock.toFixed(0)}</td>
                <td class="py-3 px-3 text-center border-r border-gray-200 font-black text-lg ${stTone}">${stText}</td>
                <td class="py-3 px-3 text-center">
                    <span class="inline-block text-[10px] px-2 py-1 rounded border font-black uppercase ${item.tone}">${item.status}</span>
                    <div class="text-[9px] text-gray-400 font-semibold mt-1 leading-tight">${item.sizeSummary}</div>
                </td>
            `;
            tbody.appendChild(tr);
            exportRows.push([
                item.art,
                String(item.desc).replace(/;/g, ','),
                item.fam,
                item.cat,
                item.monthSales.toFixed(0),
                item.ytdSales.toFixed(0),
                item.stock.toFixed(0),
                stText,
                item.status,
                item.sizeSummary.replace(/;/g, ',')
            ]);
        });

        window.currentExportS26NewData = {
            filename: `Refs_S26_Nuevas_${currentSection}_${monthNames[currentMonth]}.csv`,
            headers: ['Articulo', 'Descripcion', 'Familia', 'Categoria', 'Uds mes 2026', 'Uds acumuladas 2026', 'Stock actual', 'ST estimado', 'Lectura', 'Stock por talla'],
            rows: exportRows
        };
    }

    // Mes desde el que se empieza a acumular venta/stock en la pestaña
    // "Inv. Obsoleto" (NOREFS). 4 = Abril. Cambia solo este número si en el
    // futuro quieres mover el inicio del acumulado a otro mes.
    const NOREFS_YTD_START_MONTH = 4;

    function renderNoRefsView() {
        let mInt = parseInt(currentMonth);
        let refCodes = window.noRefsList || [];
        let records26 = window.db2026.records || [];

        let rows = refCodes.map(art => {
            let master = window.productMaster[art] || window.articlesMaster[art] || null;
            let desc = master ? master.desc : '';
            let fam = master ? master.fam : '';
            let seccion = master ? master.seccion : '';
            let cat = master ? master.cat : '';

            let monthSales = 0;
            let ytdSales = 0;
            let foundInSales = false;
            records26.forEach(r => {
                if (r.art !== art) return;
                foundInSales = true;
                if (!seccion) seccion = r.seccion;
                if (!desc) desc = r.desc;
                if (!fam) fam = r.fam;
                if (!cat) cat = r.cat;
                if (r.mes === mInt) monthSales += r.unid;
                if (r.mes >= NOREFS_YTD_START_MONTH && r.mes <= mInt) ytdSales += r.unid;
            });

            if (!seccion) seccion = 'HOMBRE';
            if (!desc) desc = 'Sin descripción técnica';
            if (!fam) fam = 'SIN FAMILIA';

            let stock = Number(window.dbStock[art] || 0);
            let totalHandled = ytdSales + stock;
            let st = totalHandled > 0 ? (ytdSales / totalHandled) * 100 : null;
            let status = '';
            let tone = '';
            if (ytdSales > 0 && stock <= 0) {
                status = 'Vendido / revisar reposición';
                tone = 'text-emerald-700 bg-emerald-50 border-emerald-200';
            } else if (st !== null && st >= 35) {
                status = 'Buen ritmo';
                tone = 'text-emerald-700 bg-emerald-50 border-emerald-200';
            } else if (ytdSales > 0) {
                status = 'Activada, seguir lectura';
                tone = 'text-blue-700 bg-blue-50 border-blue-200';
            } else if (stock > 0) {
                status = 'Stock sin venta';
                tone = 'text-rose-700 bg-rose-50 border-rose-200';
            } else if (foundInSales || master) {
                status = 'Sin stock / sin venta en archivos';
                tone = 'text-gray-600 bg-gray-50 border-gray-200';
            } else {
                status = 'Referencia no encontrada en archivos';
                tone = 'text-gray-400 bg-gray-50 border-gray-200';
            }

            return { art, desc, fam, seccion, cat, monthSales, ytdSales, stock, st, status, tone, sizeSummary: getStockSizeSummary(art) };
        }).filter(item => item.seccion === currentSection)
          .filter(item => currentFamily === 'TODAS' || item.fam === currentFamily)
          .filter(item => item.ytdSales > 0 || item.stock > 0);

        rows.sort((a, b) => (b.monthSales - a.monthSales) || (b.ytdSales - a.ytdSales) || (b.stock - a.stock) || a.fam.localeCompare(b.fam));

        let totalMonthSales = rows.reduce((sum, r) => sum + r.monthSales, 0);
        let totalYtdSales = rows.reduce((sum, r) => sum + r.ytdSales, 0);
        let totalStock = rows.reduce((sum, r) => sum + r.stock, 0);
        let activated = rows.filter(r => r.ytdSales > 0).length;
        let noSalesWithStock = rows.filter(r => r.ytdSales === 0 && r.stock > 0).length;
        let totalST = (totalYtdSales + totalStock) > 0 ? (totalYtdSales / (totalYtdSales + totalStock)) * 100 : null;

        let famText = currentFamily === 'TODAS' ? '' : ` - ${currentFamily}`;
        document.getElementById('norefs-title').innerText = `Referencias categorizadas "NO" - ${currentSection}${famText} - ${monthNames[currentMonth]?.toUpperCase()}`;
        document.getElementById('norefs-count-inline').innerText = refCodes.length;
        document.getElementById('norefs-section-inline').innerText = currentSection;
        document.getElementById('norefs-summary-container').innerHTML = [
            renderS26MetricCard('Refs evaluadas', rows.length, `de ${refCodes.length} totales ("NO")`, 'gray'),
            renderS26MetricCard('Refs con venta', activated, 'con venta acumulada', activated > 0 ? 'rose' : 'gray'),
            renderS26MetricCard('Uds mes', totalMonthSales.toFixed(0), monthNames[currentMonth], totalMonthSales > 0 ? 'blue' : 'gray'),
            renderS26MetricCard('Stock actual', totalStock.toFixed(0), 'según archivo stock', totalStock > 0 ? 'blue' : 'gray'),
            renderS26MetricCard('ST estimado', totalST === null ? '-' : `${totalST.toFixed(1)}%`, `${noSalesWithStock} refs con stock sin venta`, noSalesWithStock > 0 ? 'amber' : 'emerald')
        ].join('');

        const tbody = document.getElementById('body-norefs');
        tbody.innerHTML = '';
        let defaultBlank = `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`;
        let exportRows = [];

        rows.forEach(item => {
            let stText = item.st === null ? '-' : `${item.st.toFixed(1)}%`;
            let stTone = item.st === null ? 'text-gray-400' : item.st >= 35 ? 'text-emerald-700' : item.st > 0 ? 'text-blue-700' : 'text-rose-700';
            let stockTone = item.stock > 0 ? 'text-blue-800 bg-blue-50' : 'text-gray-400 bg-gray-50';
            let saleTone = item.monthSales > 0 ? 'text-emerald-700 bg-emerald-50' : 'text-gray-400 bg-gray-50';
            let tr = document.createElement('tr');
            tr.className = 'hover:bg-rose-50/30 transition-colors';
            tr.innerHTML = `
                <td class="py-3 px-3 text-center border-r border-gray-200">
                    <img src="https://cdn.jsdelivr.net/gh/leyreselles-prog/sfo-imagenes@main/${item.art}.jpg" onerror="if(!this.dataset.fallback){this.dataset.fallback=1; this.src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAAoACgDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQCB//EACEQAAIDAAEDBQAAAAAAAAAAAAACAQMRBBIxYSEyQXGR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOnAAACfi83j8uXjj2Q8pnVkdtjYKAAAAE9tFzWyychlWY9udvJQAJEotndvsWdjNj0+fP1+FNSslaq79bRGS2ZpoAAAAAAAAAAAB//Z';}else{this.src='${defaultBlank}';}" class="w-11 h-11 object-cover rounded shadow-sm border bg-gray-100 mx-auto">
                </td>
                <td class="py-3 px-3 border-r border-gray-200">
                    <div class="font-black text-gray-800 tracking-wide">${item.art}</div>
                    <div class="text-[11px] text-gray-500 font-semibold truncate">${item.desc}</div>
                    <div class="mt-1 flex flex-wrap gap-1">
                        <span class="inline-block text-[9px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 border border-gray-200 font-black uppercase">${item.fam}</span>
                        ${item.cat ? `<span class="inline-block text-[9px] px-1.5 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-100 font-black uppercase">${item.cat}</span>` : ''}
                    </div>
                </td>
                <td class="py-3 px-3 text-center border-r border-gray-200 font-black text-lg ${saleTone}">${item.monthSales.toFixed(0)}</td>
                <td class="py-3 px-3 text-center border-r border-gray-200 font-black text-lg text-rose-800 bg-rose-50/40">${item.ytdSales.toFixed(0)}</td>
                <td class="py-3 px-3 text-center border-r border-gray-200 font-black text-lg ${stockTone}">${item.stock.toFixed(0)}</td>
                <td class="py-3 px-3 text-center border-r border-gray-200 font-black text-lg ${stTone}">${stText}</td>
                <td class="py-3 px-3 text-center">
                    <span class="inline-block text-[10px] px-2 py-1 rounded border font-black uppercase ${item.tone}">${item.status}</span>
                    <div class="text-[9px] text-gray-400 font-semibold mt-1 leading-tight">${item.sizeSummary}</div>
                </td>
            `;
            tbody.appendChild(tr);
            exportRows.push([
                item.art,
                String(item.desc).replace(/;/g, ','),
                item.fam,
                item.cat,
                item.monthSales.toFixed(0),
                item.ytdSales.toFixed(0),
                item.stock.toFixed(0),
                stText,
                item.status,
                item.sizeSummary.replace(/;/g, ',')
            ]);
        });

        window.currentExportNoRefsData = {
            filename: `Refs_Categoria_NO_${currentSection}_${monthNames[currentMonth]}.csv`,
            headers: ['Articulo', 'Descripcion', 'Familia', 'Categoria', 'Uds mes 2026', 'Uds acumuladas 2026', 'Stock actual', 'ST estimado', 'Lectura', 'Stock por talla'],
            rows: exportRows
        };
    }

    function exportToExcel() {
        let mInt = parseInt(currentMonth);
        if (currentView === 'CHART') {
            if (!window.currentExportData) return;
            const { filename, headers, rows } = window.currentExportData;
            let csvContent = "\uFEFF" + headers.join(";") + "\n";
            rows.forEach(r => csvContent += r.join(";") + "\n");
            triggerDownload(csvContent, filename);
        } else if (currentView === 'SIZE') {
            if (!window.currentExportSizesData) return;
            const { filename, headers, rows } = window.currentExportSizesData;
            let csvContent = "\uFEFF" + headers.join(";") + "\n";
            rows.forEach(r => csvContent += r.join(";") + "\n");
            triggerDownload(csvContent, filename);
        } else if (currentView === 'SLOW') {
            if (!window.currentExportSlowData) return;
            const { filename, headers, rows } = window.currentExportSlowData;
            let csvContent = "\uFEFF" + headers.join(";") + "\n";
            rows.forEach(r => csvContent += r.join(";") + "\n");
            triggerDownload(csvContent, filename);
        } else if (currentView === 'SUPER') {
            if (!window.currentExportSuperData) return;
            const { filename, headers, rows } = window.currentExportSuperData;
            let csvContent = "\uFEFF" + headers.join(";") + "\n";
            rows.forEach(r => csvContent += r.join(";") + "\n");
            triggerDownload(csvContent, filename);
        } else if (currentView === 'KPI') {
            if (!window.currentExportKpiData) return;
            const { filename, headers, rows } = window.currentExportKpiData;
            let csvContent = "\uFEFF" + headers.join(";") + "\n";
            rows.forEach(r => csvContent += r.join(";") + "\n");
            triggerDownload(csvContent, filename);
        } else if (currentView === 'S26NEW') {
            if (!window.currentExportS26NewData) return;
            const { filename, headers, rows } = window.currentExportS26NewData;
            let csvContent = "\uFEFF" + headers.join(";") + "\n";
            rows.forEach(r => csvContent += r.join(";") + "\n");
            triggerDownload(csvContent, filename);
        } else if (currentView === 'NOREFS') {
            if (!window.currentExportNoRefsData) return;
            const { filename, headers, rows } = window.currentExportNoRefsData;
            let csvContent = "\uFEFF" + headers.join(";") + "\n";
            rows.forEach(r => csvContent += r.join(";") + "\n");
            triggerDownload(csvContent, filename);
        } else {
            let csvContent = "\uFEFFRANKING Comparativa TOP 20 ARTÍCULOS (" + currentFamily + ")\n\n";
            csvContent += "Comparativa TOP 20 - AÑO 2025;;;Comparativa TOP 20 - AÑO 2026\n";
            csvContent += "Artículo;Descripción;Uds;;Artículo;Descripción;Uds\n";
            let res25 = getFilteredData(2025, mInt);
            let res26 = getFilteredData(2026, mInt);
            let t25 = getCleanArrayForTable(res25.items);
            let t26 = getCleanArrayForTable(res26.items);
            for (let i = 0; i < 20; i++) {
                let r25 = t25[i] ?
                    [t25[i].art, t25[i].desc.replace(/;/g,","), t25[i].unid] : ["", "", ""];
                let r26 = t26[i] ? [t26[i].art, t26[i].desc.replace(/;/g,","), t26[i].unid] : ["", "", ""];
                csvContent += r25.join(";") + ";;" + r26.join(";") + "\n";
            }
            triggerDownload(csvContent, `Top20_Comparado_${currentSection}_${monthNames[currentMonth]}.csv`);
        }
    }

    function triggerDownload(content, filename) {
        const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        if (link.download !== undefined) {
            link.setAttribute("href", URL.createObjectURL(blob));
            link.setAttribute("download", filename);
            link.style.visibility = 'hidden'; document.body.appendChild(link);
            link.click(); document.body.removeChild(link);
        }
    }