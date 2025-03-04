import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import links from "@site/src/links/links";

function Home() {
  return (
    <main className={styles.main}>
      <br />
      <section className={styles.features}>
        <div className="container">
          <div className={styles.vitepressHero}>
            <h1 className={styles.heroTitle}>
              Hyperlane 中文社区
            </h1>
            <p className={styles.heroDescription}>
              汇聚 Hyperlane BUIDLer

            </p>
            <p className={styles.heroDescription}>
              与我们一起了解、加入、热爱、建设 Hyperlane!
            </p>

            <div className={styles.heroButtons}>
              <Link
                to={links.intro}
                className={`${styles.button} ${styles.primaryButton}`}
              >
                ⏩ 快速开始
              </Link>
              <Link
                to={links.protocolOverview}
                className={`${styles.button} ${styles.secondaryButton}`}
              >
                📖 学习
              </Link>
              <Link
                to={links.agents}
                className={`${styles.button} ${styles.tertiaryButton}`}
              >
                ⚙️ 代理操作
              </Link>
            </div>
          </div>
          {/* TODO: 主页的填充内容,需要修改 */}


          <div className={`${styles.viteCardContainer} ${styles.viteFeatures}`}>
            <Link to={links.intro} className={`${styles.viteCard} ${styles.viteFeatureItem}`}>
              <article className={styles.viteBox}>
                <div
                  className={`${styles.viteIcon} ${styles.viteFeatureIcon}`}
                  style={{ backgroundImage: 'url("icons/icon-5.svg")' }}
                />
                <h3 className={styles.viteFeatureTitle}>Hyperlane 简介</h3>
                <p className={styles.viteFeatureDetails}>
                  Hyperlane 协议概述、无需许可的互操作性及其用例
                </p>
              </article>
            </Link>
            <Link to={links.deployHyperlane} className={`${styles.viteCard} ${styles.viteFeatureItem}`}>
              <article className={styles.viteBox}>
                <div
                  className={`${styles.viteIcon} ${styles.viteFeatureIcon}`}
                  style={{ backgroundImage: 'url("icons/icon-1.svg")' }}
                />
                <h3 className={styles.viteFeatureTitle}>部署到新链</h3>
                <p className={styles.viteFeatureDetails}>快速在新链上部署 Hyperlane</p>
              </article>
            </Link>
            <Link to={links.deployWarpRoute} className={`${styles.viteCard} ${styles.viteFeatureItem}`}>
              <article className={styles.viteBox}>
                <div
                  className={`${styles.viteIcon} ${styles.viteFeatureIcon}`}
                  style={{ backgroundImage: 'url("icons/icon-2.svg")' }}
                />
                <h3 className={styles.viteFeatureTitle}>使用 Warp Routes 桥接代币</h3>
                <p className={styles.viteFeatureDetails}>学习如何使用 Warp Routes 桥接资产</p>
              </article>
            </Link>
            <Link to={links.runValidators} className={`${styles.viteCard} ${styles.viteFeatureItem}`}>
              <article className={styles.viteBox}>
                <div
                  className={`${styles.viteIcon} ${styles.viteFeatureIcon}`}
                  style={{ backgroundImage: 'url("icons/icon-3.svg")' }}
                />
                <h3 className={styles.viteFeatureTitle}>运行验证者</h3>
                <p className={styles.viteFeatureDetails}>逐步指导如何运行 Hyperlane 验证者</p>
              </article>
            </Link>
            <Link to={links.protocolOverview} className={`${styles.viteCard} ${styles.viteFeatureItem}`}>
              <article className={styles.viteBox}>
                <div
                  className={`${styles.viteIcon} ${styles.viteFeatureIcon}`}
                  style={{ backgroundImage: 'url("icons/icon-4.svg")' }}
                />
                <h3 className={styles.viteFeatureTitle}>核心概念</h3>
                <p className={styles.viteFeatureDetails}>了解 Hyperlane 协议及其核心组件</p>
              </article>
            </Link>
            <Link to={links.contractAddresses} className={`${styles.viteCard} ${styles.viteFeatureItem}`}>
              <article className={styles.viteBox}>
                <div
                  className={`${styles.viteIcon} ${styles.viteFeatureIcon}`}
                  style={{ backgroundImage: 'url("icons/icon-6.svg")' }}
                />
                <h3 className={styles.viteFeatureTitle}>Hyperlane 在哪里？</h3>
                <p className={styles.viteFeatureDetails}>了解当前的部署情况</p>
              </article>
            </Link>
          </div>

          {/* 添加 Hyperlane 特点介绍 */}
          <div className={styles.featuresSection}>
            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <h3>
                  <span role="img" aria-label="interoperability">🌐</span>
                  无需许可的互操作性
                </h3>
                <p>任何链都可以加入 Hyperlane 网络，无需获得其他链的许可。真正实现去中心化的跨链通信。</p>
              </div>
              <div className={styles.featureItem}>
                <h3>
                  <span role="img" aria-label="security">🔒</span>
                  灵活的安全模型
                </h3>
                <p>每条链都可以自定义其安全设置，通过模块化的验证器系统实现可定制的跨链消息验证。</p>
              </div>
              <div className={styles.featureItem}>
                <h3>
                  <span role="img" aria-label="developer-friendly">👨‍💻</span>
                  开发者友好
                </h3>
                <p>提供完整的开发工具链和清晰的文档，让跨链应用开发变得简单直观。支持多种编程语言。</p>
              </div>
              <div className={styles.featureItem}>
                <h3>
                  <span role="img" aria-label="performance">⚡</span>
                  高性能架构
                </h3>
                <p>优化的消息传递协议和验证机制，确保跨链通信的高效性和可靠性。</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Home;
