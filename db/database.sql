/*
 Navicat MySQL Data Transfer

 Source Server         : localhost_3308
 Source Server Type    : MySQL
 Source Server Version : 50728
 Source Host           : localhost:3308
 Source Schema         : database

 Target Server Type    : MySQL
 Target Server Version : 50728
 File Encoding         : 65001

 Date: 19/11/2020 19:33:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for  tf_annotation
-- ----------------------------
DROP TABLE IF EXISTS ` tf_annotation`;
CREATE TABLE ` tf_annotation`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Factor` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '',
  `ID_` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '',
  `Genotype` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '',
  `Strand` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '',
  `Start` int(255) NOT NULL,
  `End` int(255) NOT NULL DEFAULT 0,
  `Relative_Position` int(255) NOT NULL DEFAULT 0,
  `Binding_Affinity_Change` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '',
  `Allele_Orientation` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '',
  `Variant_Affinity_Effect` decimal(6, 3) NOT NULL DEFAULT 0.000,
  `Effect_P_value` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `Motif` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 2 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of  tf_annotation
-- ----------------------------
INSERT INTO ` tf_annotation` VALUES (1, 'TAF2', 'TAF2_HM07219', 'T/C', '+', 22052726, 22052735, 9, '-9.511429 -> -6.270105', 'Probably decrease binding', 25.570, '0.03335', '');

-- ----------------------------
-- Table structure for conservation_aggregation
-- ----------------------------
DROP TABLE IF EXISTS `conservation_aggregation`;
CREATE TABLE `conservation_aggregation`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `chr` int(255) NOT NULL DEFAULT 0,
  `pos` int(11) NOT NULL,
  `anc` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '',
  `GC` decimal(4, 3) NOT NULL DEFAULT 0.000,
  `CpG` decimal(4, 3) NOT NULL DEFAULT 0.000,
  `scoreSegDup` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '',
  `priPhCons` decimal(5, 4) NOT NULL DEFAULT 0.0000,
  `mamPhCons` decimal(5, 4) NOT NULL DEFAULT 0.0000,
  `verPhCons` decimal(5, 4) NOT NULL DEFAULT 0.0000,
  `priPhyloP` decimal(6, 4) NOT NULL DEFAULT 0.0000,
  `mamPhyloP` decimal(6, 4) NOT NULL DEFAULT 0.0000,
  `verPhyloP` decimal(6, 4) NOT NULL DEFAULT 0.0000,
  `GerpN` decimal(5, 3) NOT NULL DEFAULT 0.000,
  `GerpS` varchar(5) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '',
  `bStatistic` int(255) NOT NULL DEFAULT 0,
  `fitCons_all` decimal(7, 6) NOT NULL DEFAULT 0.000000,
  `SiPhy` decimal(8, 5) NOT NULL DEFAULT 0.00000,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 2 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of conservation_aggregation
-- ----------------------------
INSERT INTO `conservation_aggregation` VALUES (1, 9, 22052734, 'C', 0.380, 0.010, '.', 0.9730, 1.0000, 1.0000, 0.6510, 2.5830, 1.7710, 5.220, '4.31', 881, 0.235110, 27.62140);

-- ----------------------------
-- Table structure for hi_c
-- ----------------------------
DROP TABLE IF EXISTS `hi_c`;
CREATE TABLE `hi_c`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `chr_1` int(255) NOT NULL DEFAULT 0,
  `start_1` int(255) NOT NULL DEFAULT 0,
  `end_1` int(255) NOT NULL DEFAULT 0,
  `chr_2` int(255) NOT NULL DEFAULT 0,
  `start_2` int(255) NOT NULL DEFAULT 0,
  `end_2` int(255) NOT NULL DEFAULT 0,
  `score` decimal(16, 8) NOT NULL DEFAULT 0.00000000,
  `ID_` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 2 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of hi_c
-- ----------------------------
INSERT INTO `hi_c` VALUES (1, 9, 22050000, 22055000, 9, 22235000, 22240000, 1.67460000, 'rs6475604');

-- ----------------------------
-- Table structure for histone_modification
-- ----------------------------
DROP TABLE IF EXISTS `histone_modification`;
CREATE TABLE `histone_modification`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `chr` int(255) NOT NULL DEFAULT 0,
  `chromStart` int(255) NOT NULL DEFAULT 0,
  `chromEnd` int(255) NOT NULL DEFAULT 0,
  `Signal` decimal(8, 6) NOT NULL DEFAULT 0.000000,
  `_logP` decimal(9, 6) NOT NULL DEFAULT 0.000000,
  `ProfileSource` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '',
  `CellLine` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `CellType` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '',
  `MarkType` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 3 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of histone_modification
-- ----------------------------
INSERT INTO `histone_modification` VALUES (1, 9, 22052423, 22052759, 3.667400, 6.503920, 'GSM772800', 'Embryonic Stem Cell', 'HUES64', 'H3K4me1');
INSERT INTO `histone_modification` VALUES (2, 9, 22052439, 22052977, 4.998440, 14.247000, 'GSM1009626', 'Endothelial Cell', 'None', 'H3K27ac');

-- ----------------------------
-- Table structure for summary
-- ----------------------------
DROP TABLE IF EXISTS `summary`;
CREATE TABLE `summary`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `chr` int(255) NOT NULL DEFAULT 0,
  `pos` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '',
  `ID_` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '',
  `ref_alt` varchar(3) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '',
  `gene_locus` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '',
  `P_value` decimal(16, 15) NOT NULL DEFAULT 0.000000000000000,
  `tf_motif` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '',
  `top_lead_ID` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '0',
  `top_lead_p` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `top_lead_rsquare` decimal(5, 4) NOT NULL DEFAULT 0.0000,
  `mark` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 370 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of summary
-- ----------------------------
INSERT INTO `summary` VALUES (1, 9, '22052734', 'rs6475604', 'T/C', 'CDKN2B-AS1', 0.434996094754225, 'TAF2_HM07219', 'rs1412829', '2.19E-35', 0.9044, '3D,CON,CS');
INSERT INTO `summary` VALUES (2, 10, '91011458', 'rs1332328', 'C/T', 'LIPA', 0.410220722674264, 'BHLHE40_HM02850', 'rs1332328', '0.00000000000524', 1.0000, 'TOP,TD,3D');
INSERT INTO `summary` VALUES (3, 9, '21975319', 'rs36228834', 'T/A', 'AL359922.1,CDKN2A', 0.404763165895404, 'HSF2_HM00128', 'rs3731249', '0.0000000144', 1.0000, '3D');
INSERT INTO `summary` VALUES (4, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (5, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (6, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (7, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (8, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (9, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (10, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (11, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (12, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (13, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (14, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (15, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (16, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (17, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (18, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (19, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (20, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (21, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (22, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (23, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (24, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (25, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (26, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (27, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (28, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (29, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (30, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (31, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (32, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (33, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (34, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (35, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (36, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (37, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (38, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (39, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (40, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (41, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (42, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (43, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (44, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (45, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (46, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (47, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (48, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (49, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (50, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (51, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (52, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (53, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (54, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (55, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (56, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (57, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (58, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (59, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (60, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (61, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (62, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (63, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (64, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (65, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (66, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (67, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (68, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (69, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (70, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (71, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (72, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (73, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (74, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (75, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (76, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (77, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (78, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (79, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (80, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (81, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (82, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (83, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (84, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (85, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (86, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (87, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (88, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (89, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (90, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (91, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (92, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (93, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (94, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (95, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (96, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (97, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (98, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (99, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (100, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (101, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (102, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (103, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (104, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (105, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (106, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (107, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (108, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (109, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (110, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (111, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (112, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (113, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (114, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (115, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (116, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (117, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (118, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (119, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (120, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (121, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (122, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (123, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (124, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (125, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (126, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (127, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (128, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (129, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (130, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (131, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (132, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (133, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (134, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (135, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (136, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (137, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (138, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (139, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (140, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (141, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (142, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (143, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (144, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (145, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (146, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (147, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (148, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (149, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (150, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (151, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (152, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (153, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (154, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (155, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (156, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (157, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (158, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (159, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (160, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (161, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (162, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (163, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (164, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (165, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (166, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (167, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (168, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (169, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (170, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (171, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (172, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (173, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (174, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (175, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (176, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (177, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (178, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (179, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (180, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (181, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (182, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (183, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (184, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (185, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (186, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (187, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (188, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (189, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (190, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (191, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (192, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (193, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (194, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (195, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (196, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (197, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (198, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (199, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (200, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (201, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (202, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (203, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (204, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (205, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (206, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (207, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (208, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (209, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (210, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (211, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (212, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (213, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (214, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (215, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (216, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (217, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (218, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (219, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (220, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (221, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (222, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (223, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (224, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (225, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (226, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (227, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (228, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (229, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (230, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (231, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (232, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (233, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (234, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (235, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (236, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (237, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (238, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (239, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (240, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (241, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (242, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (243, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (244, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (245, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (246, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (247, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (248, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (249, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (250, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (251, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (252, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (253, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (254, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (255, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (256, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (257, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (258, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (259, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (260, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (261, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (262, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (263, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (264, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (265, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (266, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (267, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (268, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (269, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (270, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (271, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (272, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (273, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (274, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (275, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (276, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (277, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (278, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (279, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (280, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (281, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (282, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (283, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (284, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (285, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (286, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (287, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (288, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (289, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (290, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (291, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (292, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (293, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (294, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (295, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (296, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (297, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (298, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (299, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (300, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (301, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (302, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (303, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (304, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (305, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (306, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (307, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (308, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (309, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (310, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (311, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (312, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (313, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (314, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (315, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (316, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (317, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (318, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (319, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (320, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (321, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (322, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (323, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (324, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (325, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (326, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (327, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (328, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (329, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (330, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (331, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (332, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (333, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (334, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (335, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (336, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (337, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (338, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (339, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (340, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (341, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (342, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (343, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (344, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (345, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (346, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (347, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (348, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (349, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (350, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (351, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (352, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (353, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (354, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (355, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (356, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (357, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (358, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (359, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (360, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (361, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (362, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (363, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (364, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (365, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (366, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (367, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (368, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');
INSERT INTO `summary` VALUES (369, 0, '', '', '', '', 0.000000000000000, '', '', '', 0.0000, '');

SET FOREIGN_KEY_CHECKS = 1;
